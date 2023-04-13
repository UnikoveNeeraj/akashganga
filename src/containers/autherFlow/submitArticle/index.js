import { Link, useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";
import Textarea from "../../../components/common/Textarea";
import Footer from "../../../layout/footer";
import "./index.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { startSimilarityCheck, UploadArticleContent } from '../../../store/apiCalls/profileDetails';

import { SelectSpecialization } from "../personalDetails/queries";
import AutherAfflication from "../../../components/article/submitArticle/AutherAfflications";
import Ckeditor from "../../../components/Ckeditor/Ckeditor";
import { FileUploader } from "react-drag-drop-files";
import { EditCurrentArticle, FetchArticleById, SaveToDraft } from "./queries";
import { toast } from "react-toastify";
import swap from "../../../svg/swaping.svg";
import softPrimaryInfo from "../../../svg/active-info.svg";
import versionHistory from "../../../svg/version-history.svg";
import articleSubmissionInfo from "../../../svg/articleSubmissionInfo.svg";
import { genericError } from "../../../utils";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BASE_URL } from "../../../config";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import SunRichText from "../../../components/common/SunEditor";
import { useDispatch } from "react-redux";

const profileIMG = (url = "") => {

    const imageName = url ? url.split("/").pop() : "";
    const imgURL = url && imageName ? `${BASE_URL}static/${imageName}` : "";
    return imgURL;
};

const SubmitArticle = ({ mode }) => {
    const appHeaders = { Authorization: `Bearer ${localStorage.usertoken || ""}` };
    const dispatch = useDispatch();
    const tokenVal = jwtDecode(localStorage.usertoken);
    const [unicheckData, setUnicheckData] = useState({
        similaritycheckId: localStorage.similaritycheckId || null,
        url: null
    });
    const [showResult, setShowResult] = useState(false);
    const [title, setTitle] = useState("");
    const [stream, setStream] = useState("");
    const navigate = useNavigate();
    const [showKeywordField, setShowkeywordField] = useState(true);
    const [showKeyFormulaField, setShowFormulaField] = useState(true);
    const [specialization, setSpecialization] = useState("");
    const [articleType, setArticleType] = useState("");
    const [specializationsData, setSpecializationsData] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [formula, setFormula] = useState("");
    const [isHeadingEditing, setIsHeadingEditing] = useState({
        state: false,
        id: 0,
        value: "",
    });
    const [keyWordsCollection, setKeywordsCollection] = useState([]);
    const [formulasCollection, setFormulasCollection] = useState([]);
    const [showAbbrivationField, setShowAbbrivationField] = useState(true);
    const [abbreviations, setAbbrivations] = useState({
        apprv: "",
        fullForm: "",
    });
    const [abbreviationsCollection, setAbbrivationsCollection] = useState([]);
    const [autherAfflications, setAutherAfflications] = useState([
        {
            authorDesignation: "",
            authorName: "",
            affiliatedDepartment: "",
            affiliatedInstitude: "",
        },
    ]);

    const [articleData, setArticleData] = useState([
        {
            id: 1,
            heading: "Introduction",
            data: localStorage.Introduction || ""
        },
        {
            id: 2,
            heading: "Background",
            data: localStorage.Background || ""
        },
        {
            id: 3,
            heading: "Methodology",
            data: localStorage.Methodology || ""
        },
        {
            id: 4,
            heading: "Results",
            data: localStorage.Results  || "",
        },
        {
            id: 5,
            heading: "Discussion",
            data: localStorage.Discussion  || "",
        },
        {
            id: 6,
            heading: "Conclusion",
            data: localStorage.Conclusion || "",
        },
        {
            id: 7,
            heading: "References",
            data: localStorage.References || "",
        },
    ]);

    const [images, setImages] = useState([]);
    const [fetcheditapi, setFetchEditApi] = useState(false);
    const [abstractData, setAbstractData] = useState("");
    const { id } = useParams();
    const masterData = useSelector((state) => state?.MasterDataReducer);
    const userId = useSelector((state) => state?.LoginReducer?.user?._id);
    const specializationData = (data) => {
        setSpecializationsData(data?.data?.data);
    };

    const draftSucess = (data) => {
        // toast.success(data?.data?.message);
        navigate(`/editarticle/${data?.data?.data?._id}`);
    };
    const EditSucess = (data) => {
        // toast.success(data?.data?.message);
    };

    const { mutate: getSpecializationData } =
        SelectSpecialization(specializationData);
    const { mutate: saveAsDraft } = SaveToDraft(draftSucess);
    const { mutate: EditArticle } = EditCurrentArticle(EditSucess);
    useEffect(() => {
        if (id) {
            setFetchEditApi(true);
        }
        // eslint-disable-next-line
    }, []);
    const sucessHandler = (fetchedData) => {
        const data = fetchedData?.data?.data;
        setAbbrivationsCollection(data?.abbreviations || []);
        setAbstractData(data?.abstract || "");
        setArticleData(
            data?.articleData?.articleSection?.map((val) => {
                return {
                    heading: val?.title,
                    data: val?.content,
                    id: val?.order,
                };
            })
        );
        setFormulasCollection(fetchedData?.data?.data?.formulae || []);
        setAutherAfflications(
            fetchedData?.data?.data?.author?.map((val) => {
                return {
                    authorDesignation: val?.authorDesignation,
                    authorName: val?.authorName,
                    affiliatedDepartment: val?.affiliatedDepartment?.affiliated,
                    affiliatedInstitude: val?.affiliatedInstitude,
                };
            }) || [
                {
                    authorDesignation: "",
                    authorName: "",
                    affiliatedDepartment: "",
                    affiliatedInstitude: "",
                },
            ]
        );
        setArticleType(fetchedData?.data?.data?.typeOfArticle?.articleName || "");
        setTitle(fetchedData?.data?.data?.title);
        setKeywordsCollection(fetchedData?.data?.data?.keywords || []);
        if (fetchedData?.data?.data?.specialization) {
            getSpecializationData(fetchedData?.data?.data?.specialization?.subjectId);
        }
        setStream(
            masterData?.MasterData?.subjectdata?.find(
                (val) => val?._id === fetchedData?.data?.data?.specialization?.subjectId
            )?.subjectName || ""
        );
        setSpecialization(
            fetchedData?.data?.data?.specialization?.specialization || ""
        );
        setFetchEditApi(false);
        setImages(fetchedData?.data?.data?.images?.map(val => profileIMG(val)) || [])
    };
    const token = useSelector(
        (state) => state?.LoginReducer?.userLoginDetails?.token
    );

    const { mutate: editMode } = FetchArticleById(sucessHandler);
    if (mode === "edit" && id && fetcheditapi) {
        const params = { articleId: id };
        const headers = { Authorization: `Bearer ${token}` };

        editMode({ headers: headers, params: params });
    }
    const addNewKeyword = () => {
        setShowkeywordField(true);
    };
    const addNewformula = () => {
        setShowFormulaField(true);
    };
    const addNewAbbr = () => {
        setShowAbbrivationField(true);
    };
    const onKeyDown = (e) => {
        if (e.key === "Enter" && keyword) {
            setKeywordsCollection([...keyWordsCollection, keyword]);
            setKeyword("");
            setShowkeywordField(false);
        }
    };
    const onKeyDownFormula = (e) => {
        if (e.key === "Enter" && formula) {
            setFormulasCollection([...formulasCollection, formula]);
            setFormula("");
            setShowFormulaField(false);
        }
    };
    const handleSetFormula = (e) => {
        const { value } = e.target;
        setFormula(value);
    };
    const handleSetKeywords = (e) => {
        const { value } = e.target;
        setKeyword(value);
    };
    const handleSetAbbr = (e) => {
        const { name, value } = e.target;
        setAbbrivations({ ...abbreviations, [name]: value });
    };
    const onAbbrKeyDown = (e) => {
        if (
            e.key === "Enter" &&
            e.target.name === "fullForm" &&
            abbreviations.apprv
        ) {
            setAbbrivationsCollection([...abbreviationsCollection, abbreviations]);
            setAbbrivations({});
            setShowAbbrivationField(false);
        }
    };
    
    const handleChangeAfflications = (e, Index) => {
        const { name, value } = e.target;
        let dummyutherAfflications = [...autherAfflications];
        dummyutherAfflications[Index][name] = value;
        setAutherAfflications(dummyutherAfflications);
    };
    const handleRemoveKeyword = (_value, index) => {
        const keyWordsClone = [...keyWordsCollection];
        const updatedArray = keyWordsClone.filter((_val, ind) => ind !== index);
        setKeywordsCollection(updatedArray);
    };
    const handleRemoveFormula = (_value, Index) => {
        const formulaClone = [...formulasCollection];
        const updatedArray = formulaClone.filter((_val, ind) => ind !== Index);
        setFormulasCollection(updatedArray);
    };
    const handleRemoveAbbvr = (_val, index) => {
        const AbbrivationClone = [...abbreviationsCollection];
        const updatedArray = AbbrivationClone.filter((_val, ind) => ind !== index);
        setAbbrivationsCollection(updatedArray);
    };
    const removeImage = (_e, Index) => {
        const imagesClone = [...images];
        const updatedArray = imagesClone.filter((_val, ind) => ind !== Index);
        setImages(updatedArray);
    };

    const handleChangeSubject = (e) => {
        const { value } = e.target;
        setStream(value);
        const getsubject = masterData?.MasterData?.subjectdata.find(
            (item) => item.subjectName === value
        );
        getSpecializationData(getsubject?._id);
    };
    const AddAnotherAuther = () => {
        setAutherAfflications([
            ...autherAfflications,
            {
                authorDesignation: "",
                authorName: "",
                affiliatedDepartment: "",
                affiliatedInstitude: "",
            },
        ]);
    };
    // ckeditor functionality

    const handleArticleChange = (data, dataId) => {
        let ind = articleData.findIndex((val) => val.id === dataId);
        let cloneArticleData = [...articleData];
        localStorage.setItem(cloneArticleData[ind].heading, data)
        cloneArticleData[ind].data = data;
        setArticleData(cloneArticleData);
    };

    const handleAddSection = () => {
        let maxId = 0;
        articleData.forEach((val) => {
            if (val.id > maxId) maxId = val.id;
        });
        let cloneArticleData = [
            ...articleData,
            {
                id: maxId + 1,
                heading: "New Section",
                data: "",
            },
        ];
        setArticleData(cloneArticleData);
    };

    const handleUploadImg = (files) => {
        let reader = new FileReader();
        reader.readAsDataURL(files);
        if (files.size < 50000) {
            return (reader.onloadend = () => {
                setImages([...images, reader.result]);
            });
        }
        return toast.error("Image size should be less than 50kb.");
    };

    console.log("articleData", articleData)

    const handleSaveAsDraft = async (e) => {
        e.preventDefault();

        if (title !== "") {
            const headers = { Authorization: `Bearer ${token}` };
            const payload = {
                userId: userId,
                title: title,
                author: autherAfflications?.map((val) => {
                    return {
                        authorDesignation: val?.authorDesignation,
                        authorName: val?.authorName,
                        affiliatedDepartment: masterData?.MasterData?.affiliateddata?.find(
                            (value) => value?.affiliated === val?.affiliatedDepartment
                        )?._id,
                        affiliatedInstitude: val?.affiliatedInstitude,
                    };
                }),
                abstract: abstractData,
                keywords: keyWordsCollection,
                formulae: formulasCollection,
                abbreviations: abbreviationsCollection,
                status: "draft",
                images: images,
                typeOfArticle: masterData?.MasterData?.typeOfArticledata?.find(
                    (val) => val.articleName === articleType
                )?._id,
                specialization: specializationsData?.find(
                    (val) => val?.specialization === specialization
                )?._id,
                stream: masterData?.MasterData?.subjectdata?.find(
                    (val) => val.subjectName === stream
                )?._id,
                citations: "",
                articleSection: articleData.map((val) => {
                    return {
                        title: val.heading,
                        content: val.data,
                        order: val.id,
                    };
                }),
            };

            let content = ''        
            articleData.map((val) => {
                if(val.data){
                    let paragraph = `<div><h1>${val.heading}</h1>${val.data}</div>`
                    content += paragraph
                }
            })

            const blob = new Blob([content], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const txtFile = new File([blob], "down.html", {type: "text/html"})
            const formData = new FormData();
            formData.append("file", txtFile);
            try {
                dispatch({ type: 'SET_LOADER', payload: true});
                const resp = await UploadArticleContent({
                    data: formData,
                    headers: appHeaders,
                    userId: tokenVal?.id
                })
                dispatch({ type: 'SET_LOADER', payload: false});
                localStorage.setItem('similaritycheckId', resp?.data?.data?.similaritycheckId)
                setUnicheckData({...unicheckData, similaritycheckId: resp?.data?.data?.similaritycheckId})
            } catch(err) {
                dispatch({ type: 'SET_LOADER', payload: false});
            }

            // if (id) {
            //     EditArticle({
            //         payload: payload,
            //         headers: headers,
            //         params: { id: id },
            //     });
            // } else {
            //     saveAsDraft({ payload: payload, headers: headers });
            // }
        } else {
            genericError({ message: "Please Fill Title" });
        }
    };

    const SimilarityCheck = async (e) => {
        e.preventDefault();
        dispatch({ type: 'SET_LOADER', payload: true}); 
        try {
            const resp = await startSimilarityCheck({
                data: {
                    "similarityCheckId": unicheckData.similaritycheckId,
                    "userId": tokenVal?.id
                },
                headers: appHeaders
            })
            if(resp.status === 200 && resp.data.url) {
                setUnicheckData({...unicheckData, url: resp.data.url})
                setShowResult(true)
                dispatch({ type: 'SET_LOADER', payload: false});
            }
        } catch(err) {
            debugger
            dispatch({ type: 'SET_LOADER', payload: false});            
        }
        dispatch({ type: 'SET_LOADER', payload: false});
    }

    const editHeading = (e, dataId) => {
        if (e.key === "Enter") {
            if (e.target.value === "") return;
            let ind = articleData.findIndex((val) => val.id === dataId);
            let cloneArticleData = [...articleData];

            cloneArticleData[ind].heading = e.target.value;
            setArticleData(cloneArticleData);
            setIsHeadingEditing({ state: false, id: 0 });
        }
    };

    const onDragEnd = (result) => {
        const updated = [...articleData];
        const [reOrdered] = updated.splice(result.source.index, 1);
        updated.splice(result.destination.index, 0, reOrdered);
        setArticleData(updated);
    };

    return (
        <div className="centerSection">
            <div className="submit-article pt-4">
                <div className="px-4 grey-row">
                    <div className="row align-items-center">
                        <div className="col-lg-3 text-start">
                            <h5 className="heading">
                                <strong>{id ? "Edit Article" : "Upload Article"}</strong>
                            </h5>
                        </div>
                        <div className="col-lg-9">
                            <ul className={`${id && "sub-header"}  nav justify-content-end align-items-center py-4`}>
                                {id &&
                                    <>
                                        <li className="nav-link text-start">
                                            <div className="d-flex">
                                                <div className="me-3">
                                                    <span>
                                                        <small className="text-muted text-decoration-none">Get Help</small><br />
                                                        <Link to="#">Browse Marketplace</Link>
                                                    </span>
                                                </div>
                                                <div className="me-3">
                                                    <span>
                                                        <small className="text-muted text-decoration-none hidden">Get Help</small><br />
                                                        <Link to="#">My Services</Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="nav-link text-start">
                                            <div className="d-flex align-items-center">
                                                <div className="mx-3">
                                                    <img src={versionHistory} alt="no img" />
                                                </div>
                                                <div className="me-3">
                                                <span>
                                                    <Link to="#">Version History</Link><br />
                                                    <small className="text-muted text-decoration-none">Version3</small>
                                                </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-link">
                                            <div className="d-flex align-items-center">
                                                <div className="me-3 ms-3">
                                                    <Link to="#" className="grey-txt">CANCEL</Link>
                                                </div>
                                                <div className="me-3">
                                                    <Link to="#" onClick={handleSaveAsDraft}>
                                                        SAVE
                                                    </Link>
                                                </div>
                                                
                                                <div className="me-3">
                                                    <Button title="Submit Now" />
                                                </div>
                                                <div>
                                                    <i className="fa fa-trash"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </>
                                }
                                {!id && <>
                                    <li className="nav-link">
                                        <Link to="#">Cancel</Link>
                                    </li>
                                    <li className="nav-link">
                                        <Link to="#" onClick={handleSaveAsDraft}>
                                            Save As Draft
                                        </Link>
                                    </li>
                                    {
                                        unicheckData.similaritycheckId && (
                                            <li className="nav-link">
                                                <Button onClick={SimilarityCheck} title="Check Similarity" />
                                            </li>
                                        )
                                    }
                                    <li className="nav-link">
                                        <Button title="Submit Now" />
                                    </li>
                                    <li className="">
                                        <i className="fa fa-trash"></i>
                                    </li>
                                </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 px-4">
                        <div className="row">
                            <div className="col-lg-12 text-end py-2 article-submission_txt">
                                <Link to="#" className="text-decoration-none">
                                    <div className="h5"><img src={articleSubmissionInfo} alt="no img" className="me-2" />Get Help for Article
                                    Submission</div>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-lg-4 text-start stream">
                                <div className="">
                                    <div className="box-grey mb-3">
                                        <div className="p-3">
                                            <div className="col-lg-12 mb-4">
                                                <p className="m-0">Stream</p>
                                                <Select
                                                    handleChange={(e) => handleChangeSubject(e)}
                                                    options={masterData?.MasterData?.subjectdata?.map(
                                                        (val) => val.subjectName
                                                    )}
                                                    selectedValue={stream}
                                                    name="subjectdata"
                                                    placeholder={"Select Stream"}
                                                    value={masterData?.MasterData?.subjectdata?.map(
                                                        (val) => val?._id
                                                    )}
                                                />
                                            </div>
                                            <hr />
                                            <div className="col-lg-12 mb-4">
                                                <p className="m-0">Specialization</p>
                                                <Select
                                                    disabled={!stream}
                                                    options={specializationsData?.map(
                                                        (val) => val?.specialization
                                                    )}
                                                    handleChange={(e) => setSpecialization(e.target.value)}
                                                    selectedValue={specialization}
                                                    name="specialization"
                                                    placeholder={"Select Specialization"}
                                                />
                                            </div>
                                            <hr />
                                            <div className="col-lg-12 mb-4">
                                                <p className="m-0">Type of Article</p>
                                                <Select
                                                    name="articleType"
                                                    selectedValue={articleType}
                                                    handleChange={(e) => setArticleType(e.target.value)}
                                                    options={masterData?.MasterData?.typeOfArticledata?.map(
                                                        (val) => val?.articleName
                                                    )}
                                                    value={masterData?.MasterData?.typeOfArticledata?.map(
                                                        (val) => val?._id
                                                    )}
                                                />
                                            </div>
                                            <hr />
                                            <div className="col-lg-12 mb-4">
                                                <p className="">
                                                    Keywords{" "}
                                                    <Link
                                                        to="#"
                                                        onClick={() => addNewKeyword()}
                                                        className="float-end"
                                                    >
                                                        + Add
                                                    </Link>
                                                </p>
                                                <div>
                                                    {showKeywordField && (
                                                        <Input
                                                            className="form-control grey-input mb-3 border-input"
                                                            placeholder="Enter word"
                                                            value={keyword}
                                                            onKeyDown={(e) => onKeyDown(e)}
                                                            handleChange={(e) => handleSetKeywords(e)}
                                                        />
                                                    )}
                                                    {keyWordsCollection.map((val, ind) => (
                                                        <span className="key-badge me-2">
                                                            {val}
                                                            <i
                                                                onClick={() => handleRemoveKeyword(val, ind)}
                                                                className="fa fa-close"
                                                            ></i>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-grey mb-3">
                                        <div className="p-3">
                                            <div className="col-lg-12">
                                                <p className="">
                                                    Abbreviations
                                                    <Link
                                                        to="#"
                                                        onClick={() => addNewAbbr()}
                                                        className="float-end"
                                                    >
                                                        + Add
                                                    </Link>
                                                </p>
                                                {showAbbrivationField && (
                                                    <>
                                                        <div className="abbrv-row border">
                                                            <Input
                                                                className="form-control grey-input"
                                                                value={abbreviations?.apprv}
                                                                onKeyDown={(e) => onAbbrKeyDown(e)}
                                                                handleChange={(e) => handleSetAbbr(e)}
                                                                placeholder="Abbrv."
                                                                label=""
                                                                name="apprv"
                                                            />
                                                            <div className="vr mx-2"></div>
                                                            <Input
                                                                className="form-control grey-input"
                                                                value={abbreviations?.fullForm}
                                                                onKeyDown={(e) => onAbbrKeyDown(e)}
                                                                handleChange={(e) => handleSetAbbr(e)}
                                                                placeholder="Full Form"
                                                                label=""
                                                                name="fullForm"
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                                {abbreviationsCollection.map((val, ind) => (
                                                    <div key={ind} className="abbrv-view p-2 mt-3">
                                                        <span>{val?.apprv}</span>
                                                        <span className="mx-2">|</span>
                                                        <span>{val?.fullForm}</span>
                                                        <i
                                                            className="fa fa-close"
                                                            onClick={() => handleRemoveAbbvr(val, ind)}
                                                        ></i>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-grey mb-3">
                                        <div className="p-3">
                                            <div className="col-lg-12">
                                                <p className="">Images</p>
                                                <div className="">
                                                    <FileUploader
                                                        handleChange={(file) => handleUploadImg(file)}
                                                        classes="border-0"
                                                        disabled
                                                        label=""
                                                        name="file"
                                                        types={["JPG", "PNG", "GIF"]}
                                                    >
                                                        <div className="ckeditorTextarea position-relative d-flex justify-content-center align-items-center p-2 flex-wrap">
                                                            {images.length === 0 ? (
                                                                <i className="fa fa-picture-o img-placeholder"></i>
                                                            ) : (
                                                                images.map((val, ind) => (
                                                                    <div key={ind}>
                                                                        <div
                                                                            className="position-relative article-img_area mb-2"
                                                                            style={{ zIndex: 999 }}
                                                                        >
                                                                            <img
                                                                                alt='img not found'
                                                                                src={val}
                                                                                height="100px"
                                                                                width="100px"
                                                                                className="rounded-3 me-2 article-upload_img"
                                                                            />
                                                                            <Link
                                                                                to="#"
                                                                                onClick={(e) => removeImage(e, ind)}
                                                                            >
                                                                                <i className="fa fa-close"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            )}
                                                        </div>
                                                    </FileUploader>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-grey mb-3">
                                        <div className="p-3">
                                            <div className="col-lg-12 mb-4">
                                                <p className="">
                                                    Formula{" "}
                                                    <Link
                                                        to="#"
                                                        onClick={() => addNewformula()}
                                                        className="float-end"
                                                    >
                                                        + Add
                                                    </Link>
                                                </p>
                                                <div>
                                                    {showKeyFormulaField && (
                                                        <Input
                                                            className="form-control grey-input mb-3 border-input"
                                                            placeholder="Enter Formula"
                                                            value={formula}
                                                            onKeyDown={(e) => onKeyDownFormula(e)}
                                                            handleChange={(e) => handleSetFormula(e)}
                                                        />
                                                    )}
                                                    {formulasCollection?.map((val, ind) => (
                                                        <span key={ind} className="key-badge me-2">
                                                            {val}
                                                            <i
                                                                onClick={() => handleRemoveFormula(val, ind)}
                                                                className="fa fa-close"
                                                            ></i>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 text-start article">
                                <div>
                                    <p>Title</p>
                                    <div className="box-grey mb-3">
                                        <div className="p-3">
                                            <div className="col-lg-12">
                                                <Textarea
                                                    name="title"
                                                    rows="1"
                                                    className="form-control grey-input title"
                                                    placeholder=""
                                                    value={title}
                                                    onChange={(e) => {
                                                        setTitle(e.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Author Affiliations</p>
                                        <div className="box-grey mb-4">
                                            <div className="p-3">
                                                {autherAfflications?.map((val, ind) => {
                                                    return (
                                                        <div key={ind}>
                                                            <AutherAfflication
                                                                afflicationValues={val}
                                                                currentIndex={ind}
                                                                handleChangeAfflications={
                                                                    handleChangeAfflications
                                                                }
                                                                masterData={masterData}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                                <div className="row border p-3 mb-3 text-center">
                                                    <Link
                                                        to="#"
                                                        onClick={() => AddAnotherAuther()}
                                                        className=""
                                                    >
                                                        + Add Author
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-grey mb-4">
                                        <div className="p-3">
                                            <div className="col-lg-12">
                                                <p className="articleTitle">Abstact</p>
                                                <Textarea
                                                    name="abstarct"
                                                    rows="3"
                                                    className="form-control grey-input w-100"
                                                    placeholder=""
                                                    value={abstractData}
                                                    onChange={(e) => setAbstractData(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
                                        <Droppable droppableId={"Droppable"} key={"Droppable"}>
                                            {(provided, snapshot) => {
                                                return (
                                                    <div
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        {articleData.map((val, _ind) => {
                                                            return (
                                                                <Draggable
                                                                    key={_ind}
                                                                    draggableId={String(_ind)}
                                                                    index={_ind}
                                                                >
                                                                    {(provided, snapshot) => {
                                                                        return (
                                                                            <div
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                                className="box-grey mb-4 swap-box"
                                                                            >
                                                                                <div className="p-3">
                                                                                    <div className="col-lg-12">
                                                                                        <p className="articleTitle mb-2">
                                                                                            {/* {val.heading} */}
                                                                                            {isHeadingEditing.state === true &&
                                                                                                isHeadingEditing.id === val.id ? (
                                                                                                <Input
                                                                                                    onKeyDown={(e) =>
                                                                                                        editHeading(e, val.id)
                                                                                                    }
                                                                                                    handleChange={(e) =>
                                                                                                        setIsHeadingEditing({
                                                                                                            ...isHeadingEditing,
                                                                                                            value: e.target.value,
                                                                                                        })
                                                                                                    }
                                                                                                    value={isHeadingEditing.value}
                                                                                                />
                                                                                            ) : (
                                                                                                <>
                                                                                                    <OverlayTrigger
                                                                                                        key="top"
                                                                                                        placement="top"
                                                                                                        overlay={
                                                                                                            <Tooltip id={`tooltip-top`}>
                                                                                                                Drag this section to change the order
                                                                                                            </Tooltip>
                                                                                                        }
                                                                                                    >
                                                                                                        <img
                                                                                                        src={swap}
                                                                                                        alt="noImg"
                                                                                                        style={{ width: "24px", cursor: 'pointer' }}
                                                                                                        // title="Drag this section to change the order"
                                                                                                        className="title-tooltip"
                                                                                                    />
                                                                                                    </OverlayTrigger>
                                                                                                    {val.heading}
                                                                                                    <i
                                                                                                        className="fa fa-pencil ms-2"
                                                                                                        onClick={() =>
                                                                                                            setIsHeadingEditing({
                                                                                                                ...isHeadingEditing,
                                                                                                                state: true,
                                                                                                                id: val.id,
                                                                                                                value: val.heading,
                                                                                                            })
                                                                                                        }
                                                                                                    ></i>
                                                                                                </>
                                                                                            )}
                                                                                        </p>
                                                                                        <div
                                                                                            className="ckeditorTextarea"
                                                                                            style={{ minHeight: "80px" }}
                                                                                            onClick={(e) => e.target.children[1].style.display = 'block'}
                                                                                            >
                                                                                            <SunRichText 
                                                                                                name={val.heading}
                                                                                                dataId={val.id}
                                                                                                handleChange={handleArticleChange}
                                                                                                value={val.data}
                                                                                                hide={!val.data ? true : false}
                                                                                            />
                                                                                        </div>
                                                                                        
                                                                                        {/* <Ckeditor
                                                                                            name={val.heading}
                                                                                            dataId={val.id}
                                                                                            handleChange={handleArticleChange}
                                                                                            value={
                                                                                                articleData[
                                                                                                    articleData.findIndex(
                                                                                                        (v) => v.id === val.id
                                                                                                    )
                                                                                                ].data
                                                                                            }
                                                                                        /> */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        })}
                                                        {provided.placeholder}
                                                    </div>
                                                );
                                            }}
                                        </Droppable>
                                    </DragDropContext>
                                    <div className="pb-3 text-center mb-3">
                                        <Link to="#" onClick={handleAddSection}>
                                            + Add Section
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <Modal
                show={showResult}
                size="lg"
                id="unicheck-results__modal"
                tabIndex={-1}
                dialogClassName="modal-dialog-centered"
                >
                <Modal.Header>
                    <h5 className="modal-title pr-color">
                        Plagarism Report
                    </h5>
                    <button
                    type="button"
                    className="btn-close"
                    onClick={(e) => setShowResult(false)}
                    aria-label="Close"
                    />
                </Modal.Header>
                <Modal.Body className="pt-0 pb-2">
                    <div className="row">
                        <div className="col-lg-12">
                            <iframe style={{border: 0, width: '100%', height: '500px', overflow: 'auto'}} src={unicheckData.url}></iframe>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    );
};

export default SubmitArticle;
