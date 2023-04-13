import React, { useRef, useState, useEffect } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Form from "../../../components/common/Form";
import FeedbackFlow from "../Feedback";
import EducationSection from "../../../components/personalDetails/EducationSection";
import PersonalDetailsSection from "../../../components/personalDetails/PersonalDetailsSection";
import ProfessionalDetails from "../../../components/personalDetails/ProfessionalDetails";
import WorkSection from "../../../components/personalDetails/WorkSection";
import { GET_PROFILE_DETAILS } from "../../../store/actions/profileActions";
import { getProfileDetails, UploadMedia } from "../../../store/apiCalls/profileDetails";
import { FetchProfileDetails, RemoveProfile, SelectSpecialization, UpdateProfile } from "./queries";
import { PATH } from "../../../routes/path";
import InfoAlert from "../../../components/common/InfoAlert";
import StateJson from "../../../constants/States.json";
import { affiliationFields, isPublishable, validatePhoneNumber, unPublishToolTip, getUnique } from "../../../utils";
import SuccessModal from "../../../components/Modal/sucessModal";
import { SET_LOGIN_USER_SUCCESS } from "../../../store/actions/loginActions";
import CommonTab from "../../../components/common/CommonTab";
import SubjectOfIntrestSection from "../../../components/personalDetails/SubjectOfIntrestSection";
import Button from "../../../components/common/Button";
import FormModal from "../../../components/Modal/formModal";
import LightButton from "../../../components/common/Light_button";

import LeftArrow from "../../../svg/LeftArrow.svg";
import Logout from "../../../svg/logout.svg";
import "./PersonalDetails.scss";
import { async } from "@firebase/util";
import { updateProfileDetails } from '../../../store/apiCalls/profileDetails';
import UpArrowQuestion from "../../../components/UpArrowQuestion/UpArrowQuestion";
import { Dropdown } from "react-bootstrap";

const initialState = {showFeedbackModal: false, skipModal: false, congratsModal: false, referModal: false, congratsPreview: false };

const affiliationSchema = Yup.array().of(
  Yup.object().shape({
    affiliatedDepartment: Yup.string().required(),
    city: Yup.string().required(),
    pincode: Yup.string().required(),
    state: Yup.string().required(),
    subject: Yup.string().required(),
    universitySchoolCompany: Yup.string().required()
  })
)

const educationSchema = Yup.object().shape({
  subject: Yup.string().required(),
  specialization: Yup.array().min(1),
  qualification: Yup.string().required()
})

const subjectSchema = Yup.array().of(
  Yup.object().shape({
    subject: Yup.string().required(),
    specialization: Yup.array().min(1)
  })
)


function PersonalDetails() {
  const [profileDetails, setProfileDetails] = useState({})
  const [showFeedbackModal, setShowFeedbackModal] = useState(initialState);
  const [phone, setPhone] = useState("");
  const [webcamImage, setWebcamImage] = useState("");
  const [imageFile, setImageFile] = useState(null)
  const [openWebcam, setOpenWebcam] = useState(false);
  const [profile, setProfile] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [openProfilePage, setOpenprofilePage] = useState(false);
  const [openImageUpload, setOpenImageUpload] = useState(false);
  const [showDoLatterModal, setShowDoLatterModal] = useState(false);
  const [showBackMoveModal, setShowBackMoveModal] = useState(false);
  const [specializationsData, setSpecializationsData] = useState([]);
  const [allSpecializationsData, setAllSpecializationsData] = useState([]);
  const [specializationStateName, setSpecializationStateName] = useState({
    name: "",
    index: null,
  });
  const [openConfermationModal, setOpenConfermationModal] = useState(false);
  const [openRemoveImage, setOpenRemoveImage] = useState(false);
  const [saveMyWorkModal, setSaveMyWorkModal] = useState(false)
  const masterData = useSelector((state) => state?.MasterDataReducer);
  const [workSection, setWorkSection] = useState([
    {
      heading: "Primary Affiliation",
      affiliationType: "",
      URL: "",
      subject: "",
      specialization: [],
      allSpecializationsData: [],
      universitySchoolCompany: "",
      affiliatedDepartment: "",
      city: "",
      state: "",
      pincode: "",
      error: "",
    }
  ]);
  const [subjectOfIntrestSection, setSubjectOfIntrestSection] = useState([
    {
      subject: "",
      specialization: [],
      allSpecializationsData: [],
    },
  ]);
  const [educationSection, setEducationSection] = useState({
    qualification: "",
    subject: "",
    specialization: [],
    allSpecializationsData: [],
  });
  const [formError, setFormError] = useState({})
  const [validationError, setValidationError] = useState({
    affiliation: {},
  });
  const hiddenFileInput = useRef();
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setUploadedImage("");
    setWebcamImage(pictureSrc);
  }, []);
  
  const handleWebcam = () => {
    setWebcamImage("");
    setUploadedImage("");
    setOpenWebcam(!openWebcam);
  };
  
  const profileSavedData = useSelector(state => state.ProfileReducer.user);
  const servicePercentage = (profileSavedData?.affiliation?.affiliations?.length > 0) && profileSavedData.workType && profileSavedData.Education?.qualification?._id ? "80" : "30";
  const dispatch = useDispatch();
  const isSetupProfile = useSelector(
    (state) => state?.LoginReducer?.user?.publishProfile ?? null
  );

  const [activeTab, setActiveTab] = useState("personal");
  const navigate = useNavigate();
  useEffect(() => {
    setOpenprofilePage(isSetupProfile);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setAllSpecializationsData([
      ...allSpecializationsData,
      ...specializationsData,
    ]);
    // eslint-disable-next-line
  }, [specializationsData]);

  const setFocusToTextBox = () => {
    const elmnt = document.getElementsByClassName('errored')[0];
    if(elmnt) {
      var doc = document.documentElement;
      var x = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      var y = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      const errorInput = elmnt.getElementsByTagName('input')[0];
      if(errorInput) {
        errorInput.focus();
      }
    }
    // window.scrollTo(x, y);
  }

  const handleImageSubmit = async () => {
    if(imageFile !== profile) {
      const formData = new FormData();
      if (
        webcamImage &&
        webcamImage?.match("data:image") &&
        webcamImage.match("data:image").length > 0
      ) {
        formData.append("baseFile", webcamImage);
      } else {
        formData.append("file", imageFile);
      }

      dispatch({ type: 'SET_LOADER', payload: true});
      setUploadedImage(null);
      setImageFile(null);
      setWebcamImage(null)
      setOpenWebcam(false);
      setOpenImageUpload(false);
      setProfile(null);
      const imgResp = await UploadMedia(formData);
      if((imgResp.status === 200) && imgResp.data.url) {
        setProfile(imgResp.data.url);
        setValidationError({
          ...validationError,
          profile: false
        })
      }
      dispatch({ type: 'SET_LOADER', payload: false});
    }
  };

  const handleImageModalClose = () => {
    setOpenWebcam(false);
    setUploadedImage("");
    setWebcamImage("");
    setFormError({ profile: '' })
    setOpenImageUpload(false);
  };

  const handleCloseModal = () => {
    setShowBackMoveModal(false);
  };


  const handleSaveModalClose = () => {
    setSaveMyWorkModal(false)
  }

  const handleUploadImage = (event) => {
    setWebcamImage("");
    setOpenWebcam(false);
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    if (file.type?.split('/')[0] === 'image' && file.size < 50000000) {
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        debugger
        setImageFile(file);
        setFormError({ profile: '' })
      };
    } else {
      setFormError({ ...formError, profile: 'Image size should be less than 50kb.' })
    }
  };
  
  const addAnotherField = () => {
    if (workSection.length < 3) {
      const cloneWorkSection = [...workSection];
      cloneWorkSection.push({
        heading: workSection.length < 2 ? "Secondary Affiliation" : "Tertiary Affiliation",
        URL: "",
        subject: "",
        specialization: [],
        allSpecializationsData: [],
        universitySchoolCompany: "",
        affiliatedDepartment: "",
        city: "",
        state: "",
        pincode: "",
        error: "",
      });
      setWorkSection(cloneWorkSection);
    }
  };
  const removeField = (order) => {
    const cloneWorkSection = [...workSection];
    const newArray = cloneWorkSection.filter(
      (element, index) => index !== order
    );
    setWorkSection(newArray);
  };

  const handleSubjectOfIntrestChange = (e, index) => {
    const { name, value } = e.target;
    let cloneSubjectOfIntrestSection = [...subjectOfIntrestSection];
    if (name === "interestedsubject") {
      cloneSubjectOfIntrestSection[index].subject = value;
      cloneSubjectOfIntrestSection[index].specialization = [];
      const getsubject = masterData?.MasterData?.subjectdata.find(
        (item) => item.subjectName === value
      );
      setSpecializationStateName({
        name: "subjectOfIntrestSection",
        index: index,
      });
      const dataRecords = setSpecializationsRecords(getsubject?._id);
      cloneSubjectOfIntrestSection[index].allSpecializationsData = dataRecords;
    } else if (name === 'Interested Specialization') {
      if (cloneSubjectOfIntrestSection[index].specialization.includes(value)) {
        cloneSubjectOfIntrestSection[index].specialization.splice(
          cloneSubjectOfIntrestSection[index].specialization.indexOf(value),
          1
        );
      } else {
        if (cloneSubjectOfIntrestSection[index].specialization.length < 3) {
          cloneSubjectOfIntrestSection[index].specialization.push(value);
        }
      }
    }
    setSubjectOfIntrestSection(cloneSubjectOfIntrestSection);
  };

  const setSpecializationsRecords = (id = "") => {
    const subjectRec = masterData.MasterData.subjectdata.find(a=> a._id === id)
    if(subjectRec) {
      setSpecializationsData(subjectRec?.specializationId || []);
    }
    return subjectRec?.specializationId || []
  }

  const handleEducationOtherSpecialization = (data = {}) => {
    const cloneEducationSection = { ...educationSection };
    cloneEducationSection.otherSpecialization = cloneEducationSection.otherSpecialization ?? [];
    cloneEducationSection.otherSpecialization.push(data)
    cloneEducationSection.specialization?.push(data.specialization)
    setEducationSection(cloneEducationSection);
  }

  const workSectionOtherSpecialization = (data = {}, index) => {
    const cloneWorkSection = [...workSection];
    cloneWorkSection[index].otherSpecialization = cloneWorkSection[index].otherSpecialization ?? [];
    cloneWorkSection[index]?.otherSpecialization?.push(data)
    cloneWorkSection[index].specialization?.push(data.specialization)
    setWorkSection(cloneWorkSection);
  }

  const handleSubjectSpecialization = (data = {}, index) => {
    let cloneSubjectOfIntrestSection = [...subjectOfIntrestSection];
    cloneSubjectOfIntrestSection[index].otherSpecialization = cloneSubjectOfIntrestSection[index].otherSpecialization ?? [];
    cloneSubjectOfIntrestSection[index].otherSpecialization.push(data);
    cloneSubjectOfIntrestSection[index].specialization?.push(data.specialization)
    setSubjectOfIntrestSection(cloneSubjectOfIntrestSection);
  }

  const handleEducationChange = (e, type) => {
    const { name, value } = e.target;
    const cloneEducationSection = { ...educationSection };

    if (name === "specialization") {
      if (cloneEducationSection.specialization.includes(value)) {
        cloneEducationSection.specialization.splice(
          cloneEducationSection.specialization.indexOf(value),
          1
        );
      } else {
        if (cloneEducationSection.specialization.length < 3) {
          cloneEducationSection.specialization.push(value);
        }
      }
    } else if (name === "subject") {
      const getsubject = masterData?.MasterData?.subjectdata.find(
        (item) => item.subjectName === value
      );
      setSpecializationStateName({
        name: "educationSection",
        index: null,
      });
      const dataRecords = setSpecializationsRecords(getsubject?._id);
      cloneEducationSection[name] = value;
      cloneEducationSection.allSpecializationsData = dataRecords;
    } else {
      cloneEducationSection[name] = value;
    }
    setEducationSection(cloneEducationSection);

    setValidationError({
      ...validationError,
      educationError : {...validationError?.educationError , [name] : false}
    })

  };

  const handleSubjectSelectChange = (value, name, index) => {
    let cloneSubjectOfIntrestSection = [...subjectOfIntrestSection];
    if (name === "interestedsubject") {
      cloneSubjectOfIntrestSection[index].subject = value;
      cloneSubjectOfIntrestSection[index].specialization = [];
      const getsubject = masterData?.MasterData?.subjectdata.find(
        (item) => item.subjectName === value
      );
      setSpecializationStateName({
        name: "subjectOfIntrestSection",
        index: index,
      });
      const dataRecords = setSpecializationsRecords(getsubject?._id);
      cloneSubjectOfIntrestSection[index].allSpecializationsData = dataRecords;
    }
    setSubjectOfIntrestSection(cloneSubjectOfIntrestSection);
  }


  const handleEducationSelectChange = (value, name) => {
    const cloneEducationSection = { ...educationSection };
    if (name === "subject") {
      const getsubject = masterData?.MasterData?.subjectdata.find(
        (item) => item.subjectName === value
      );
      setSpecializationStateName({
        name: "educationSection",
        index: null,
      });
      const dataRecords = setSpecializationsRecords(getsubject?._id);
      cloneEducationSection[name] = value;
      cloneEducationSection.specialization = [];
      cloneEducationSection.allSpecializationsData = dataRecords;
    } else {
      cloneEducationSection[name] = value;
    }

    setValidationError({
      ...validationError,
      educationError : {...validationError?.educationError , [name] : false}
    })
    setEducationSection(cloneEducationSection);
  }

  const handleWorkSelectChange = (value, Sectionindex, name) => {
    var clonedError = validationError;
    const cloneWorkSection = [...workSection];
    const updateWorkSection = cloneWorkSection.map((item, ind) => {
      if (ind === Sectionindex) {
        if(clonedError['affiliation']?.[ind]){
          clonedError['affiliation'][ind][name] = false;
        }

        if (name === "subject") {
          const getsubject = masterData?.MasterData?.subjectdata.find(
            (item) => item.subjectName === value
          );
          setSpecializationStateName({ name: "workSection", index: ind });
          const dataRecords = setSpecializationsRecords(getsubject?._id);
          return { ...item,allSpecializationsData: dataRecords,  [name]: value, specialization: [] };
        } else {
          return { ...item, [name]: value };
        } 
      }
      return item;
    });
    setWorkSection(updateWorkSection);
    setValidationError({
      ...clonedError
    })
  }

  const handleSelectChange = (value, type) => {
    return setProfileDetails({ ...profileDetails, [type]: value });
  };

  const handleChange = (e, type) => {
    const { name, value } = e.target;

    if (type) {
      if (name === "subject") {
        const getsubject = masterData?.MasterData?.subjectdata.find(
          (item) => item.subjectName === value
        );
        setSpecializationsRecords(getsubject?._id);
      }
      return setProfileDetails({
        ...profileDetails,
        [type]: { ...profileDetails[type], [name]: value },
      });
    } else {
      if (name === 'phoneNumber') {
        return setProfileDetails({
          ...profileDetails,
          [name]: validatePhoneNumber(value),
        });
      }
      return setProfileDetails({ ...profileDetails, [name]: value });
    }
  };

  const handleWorkSectionChange = (e, index) => {
    const { name, value, id } = e.target;
    console.log(name, value, id, "NAME<VALUE<IDDD")
    const cloneWorkSection = [...workSection];

    var clonedError = validationError;
    const updateWorkSection = cloneWorkSection.map((item, ind) => {

      if (ind === index) {
        if(clonedError['affiliation']?.[ind]){
          clonedError['affiliation'][ind][name] = false;
        }
        
        if (name === "pincode") {
          return { ...item, pincode: validatePhoneNumber(value) };
        } else if (name === "affiliationType") {
          return { ...item, verified: false, affiliationType: id, city: "", state: "", specialization: [], subject: '', universitySchoolCompany: '', affiliatedDepartment: '', pincode: '', URL: '',error: "" };
        } else if (name === "specialization") {
          if (cloneWorkSection[index].specialization.includes(value)) {
            cloneWorkSection[index].specialization.splice(
              cloneWorkSection[index].specialization.indexOf(value),
              1
            );
          } else {
            if (cloneWorkSection[index].specialization.length < 3) {
              cloneWorkSection[index].specialization.push(value);
            }
          }
        } else if (name === "subject") {
          const getsubject = masterData?.MasterData?.subjectdata.find(
            (item) => item.subjectName === value
          );
          setSpecializationStateName({ name: "workSection", index: ind });
          const dataRecords = setSpecializationsRecords(getsubject?._id);
          return { ...item,allSpecializationsData: dataRecords,  [name]: value, specialization: [] };
        } else return { ...item, [name]: value };
      }
      return item;
    });
    setWorkSection(updateWorkSection);

   
    setValidationError({
      ...clonedError
    })

  };

  const handleChangeRadioButton = (e, type) => {
    const { name, id } = e.target;
    console.log(name, id, type, 'NAME ID ')
    setProfileDetails({ ...profileDetails, [name]: id });
    setValidationError({
      ...validationError,
      [name] : false
    })
  };
  
  const { user, userLoginDetails } = useSelector(
    (state) => state?.LoginReducer
  );
  const renderHeading = (value) => {
    if (value?.order == 2) {
      return "Secondary Affiliation"
    }
    else if (value?.order == 3) {

      return "Tertiary Affiliation"
  }
    return null

  }
  const sucessHandler = (fetchedData) => {
    let resData = fetchedData?.data?.data;
    dispatch({
      type: GET_PROFILE_DETAILS,
      payload: fetchedData?.data,
    });
    const payload = fetchedData?.data;
    const newPayload = { ...payload, token: localStorage.getItem("usertoken") };
    dispatch({
      type: SET_LOGIN_USER_SUCCESS,
      payload: newPayload,
    });
    setUploadedImage("");
    setWebcamImage("");
    setPhone(fetchedData?.data?.data?.phoneNumber);
    if (resData?.Education?.qualification) {
      let educationData = {
        qualification: resData?.Education?.qualification?.qualification,
        specialization: resData?.Education?.specialization?.map(
          (val) => val?.specialization
        ),
        subject: resData?.Education?.subject?.subjectName,
        allSpecializationsData: resData?.Education?.specialization,
      };
      setEducationSection(educationData);
    }

    if (resData?.subjectOfInterest?.length > 0) {
      let subOfIntData = resData?.subjectOfInterest?.map((val) => {
        return {
          specialization: val?.specialization?.map(
            (val) => val?.specialization
          ),
          subject: val?.interestedsubject?.subjectName,
          allSpecializationsData: val?.specialization,
        };
      });
      setSubjectOfIntrestSection(subOfIntData);
    }

    if (resData?.affiliation?.affiliations?.length > 0) {
      let afflicationData = resData?.affiliation?.affiliations?.map((val) => {
        return {
          heading:
            // eslint-disable-next-line
            val?.order == 1
              ? "Primary Affiliation"
              // eslint-disable-next-line
              :
              renderHeading(val),
          affiliationType:
            // eslint-disable-next-line
            val?.order == 1 && resData?.affiliation?.affiliation_type,
          URL: val?.url,
          verified: val?.url ? true : false,
          subject: val?.subject?.subjectName,
          specialization: val.specialization?.map((val) => val?.specialization),
          allSpecializationsData: val.specialization,
          universitySchoolCompany: val?.name,
          affiliatedDepartment: val?.department,
          city: val?.city,
          state: val?.state,
          pincode: val?.pincode === 0 ? "" : val?.pincode,
          error: "",
        };
      });
      setWorkSection(afflicationData);
    }

    setProfileDetails({
      title: resData?.title,
      fullName: resData?.fullName,
      gender: resData?.gender,
      phoneNumber: resData?.phoneNumber,
      workType: resData?.workType,
      email: resData?.email,
      oldProfilePicture: resData?.profilePicture,
      promoCode: resData?.promoCode,
      nationality: resData?.nationality,
      feedbackDone: resData.feedbackDone,
      publishProfile: resData.publishProfile
    });

    setProfile(resData?.profilePicture);
    // setOpenConfermationModal(resData?.publishProfile)
  };

  const fetchdata = async () => {
    const params = { id: user?._id };
    const headers = { Authorization: `Bearer ${userLoginDetails?.token}` };
    return getProfileDetails(headers, params);
  };
  const { refetch } = FetchProfileDetails(fetchdata, sucessHandler, setFormError, formError);
  const updedProfile = (sucess) => {
    refetch();
  };
  const specializationData = (data) => {
    setSpecializationsData(data?.data?.data);
  };

  useEffect(() => {
    setValidationError({
      affiliation: {},
    })
  }, [activeTab]);

  useEffect(() => {
    if (
      specializationStateName.name === "workSection" &&
      typeof specializationStateName.index === "number"
    ) {
      let cloneState = [...workSection];
      cloneState[specializationStateName.index].allSpecializationsData = [
        ...specializationsData,
      ];
      setWorkSection(cloneState);
    } else if (
      specializationStateName.name === "subjectOfIntrestSection" &&
      typeof specializationStateName.index === "number"
    ) {
      let cloneState = [...subjectOfIntrestSection];
      cloneState[specializationStateName.index].allSpecializationsData = [
        ...specializationsData,
      ];
      setSubjectOfIntrestSection(cloneState);
    } else if (
      specializationStateName.name === "educationSection" &&
      specializationStateName.index === null
    ) {
      let cloneState = { ...educationSection };
      cloneState.allSpecializationsData = [...specializationsData];
      setEducationSection(cloneState);
    }
    // eslint-disable-next-line
  }, [specializationsData]);
  const removeProfileSucess = (sucess) => {
    console.log(sucess, "Sucess of Profile Removed")
    refetch()
  }

  const { mutate: removeProfilePic } = RemoveProfile(removeProfileSucess, setFormError, formError);
  const { mutate: edit } = UpdateProfile(updedProfile, setFormError, formError);
  const updateAuthorProfileDetails = async (data, isPreview = false) => {
    const headers = { Authorization: `Bearer ${userLoginDetails?.token}` };
    const queryParams = {
      params: { id: user?._id },
      data,
      headers,
    };
    const updateResp = await updateProfileDetails(queryParams);
    if(updateResp.data.success && (isPreview)) {
      navigate("/previewprofile");
    }
    refetch();
    // edit(queryParams);
  };

  const handleDoItLatterModal = () => {
    setShowDoLatterModal(false);
    navigate("/");
    // navigate("/authorDashboard");
  };

  const isProfilePublishable = isPublishable({...profileDetails, profilePicture: profile, affiliations: workSection, subjects: subjectOfIntrestSection, educationSection: educationSection })
  let SaveContinueBtn = (
    <div className="d-flex align-items-center justify-content-end">
      {
        false ? (
          <Link to="/" className="link me-5" onClick={handleRedirect}>
            Home
          </Link>            
        ) : (
          <>
            <Link id="Save" to="#" className="link me-4" onClick={(e) => handleSubmit(e, true)}>
              SAVE
            </Link>
            <Button
              form="personal_details"
              title="Continue"
              handleClick={(e) => handleSubmit(e, true, true)}
              className="custom_button ms-2"
            />
          </>          
        )
      }
      {/* <Link to="#" className="link ms-4 logout-dropdown_container">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" variant="standard">
          <i className="fa fa-ellipsis-v"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleLogout()} href="#/action-1"><img src={Logout} alt="logout" className="me-2" />Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Link> */}
      <Link to="#" className="link ms-4 logout-dropdown_container" onClick={() => handleLogout()}>Log Out</Link>
    </div>
  );

  const handleLogout = () => {
      localStorage.clear();
      dispatch({ type: 'LOGOUT_STATUS_SUCCESS' })
  };


  let SaveContinueBtnFooter = (
    <>
      {
        false ? (
          <Link to="/" className="link me-5" onClick={handleRedirect}>
            Home
          </Link>
        ) : (
          <>
            <Link to="#" id="Save" className="link me-4" onClick={(e) => handleSubmit(e, true)}>
              SAVE
            </Link>
            <Button
              form="personal_details"
              title="Continue"
              handleClick={(e) => handleSubmit(e, true, true)}
              className="custom_button ms-2"
            />
          </>
        )
      }
    </>
  );
  const savePreviewPublishBtn = (
    <div className="sort-nav">
      {
        profileDetails.publishProfile ? (          
          <Link to="/" className="link">
            Home
          </Link>
        ) : (
          <>
            <Link id="Save" to="#" className="link" onClick={(e) => handleSubmit(e, true)}>
              SAVE
            </Link>

            <Link
              // form="personal_details"
              className="link"
              // type="submit"
              onClick={(e) => handleSubmit(e, true)}
              id="Preview Profile"
              title="Preview Profile"
            > 
              Preview Profile
            </Link>
            <Button
              title="Publish Profile"
              // toolTipMsg={isProfilePublishable ? "" : unPublishToolTip}
              // form="personal_details"
              placement="auto"
              type="button"
              onClick={(e) => handleSubmit(e, false)}
              // disabled={!isProfilePublishable}
              className="custom_button ms-2"
            />
          </>
        )
      }

    </div>
  );
  const renderLinks = () => {
    if (workSection.length < 3) {
      return (
        <>
          <Link to="#" onClick={addAnotherField} className="link pe-5">
            + Add Another Affiliation
          </Link><br />
          <small className="subText_affiliation">*You can add up to 3 affiliations</small>
        </>
      );
    }
    return null;
  };
  const addAnothersubjectOfIntrestField = () => {
    setSubjectOfIntrestSection([
      ...subjectOfIntrestSection,
      {
        subject: "",
        specialization: [],
        allSpecializationsData: [],
      },
    ]);
  };
  const removesubjectOfIntrestField = () => {
    setSubjectOfIntrestSection([
      ...subjectOfIntrestSection.slice(0, subjectOfIntrestSection.length - 1),
    ]);
  };
  const renderSubjectOfIntrestLinks = () => {
    if (subjectOfIntrestSection.length === 1) {
      return (
        <Link to="#" onClick={addAnothersubjectOfIntrestField} className="link">
          + Add Another
        </Link>
      );
    }
    if (subjectOfIntrestSection.length === 2) {
      return (
        <div className="grp-subject">
          <Link
            to="#"
            onClick={addAnothersubjectOfIntrestField}
            className="link pe-5"
          >
            + Add Another
          </Link>
          <Link to="#" onClick={removesubjectOfIntrestField} className="link">
            {" "}
            - Remove Subject
          </Link>
        </div>
      );
    }
    return (
      <div className="another-subject">
        <p style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link
          to="#"
          onClick={() => removesubjectOfIntrestField()}
          className="link"
        >
          - Remove Subject
        </Link>
        </p>
      </div>
    );
  };

  const personalValidation = () => {
    const fields = ['title', 'email', 'phoneNumber', 'fullName'];
    const clonedError = {}
    fields.map(field => {
      clonedError[field] = profileDetails[field] ? false : true
      if(field === 'phoneNumber' && profileDetails.nationality === 'outSideIndia') {
        clonedError[field] = false;
      }
    })
    clonedError.profile = profile ? false : true;
    setValidationError(clonedError)
    const CheckUniqueValue =  {...clonedError}
    return getUnique(Object.values(CheckUniqueValue)).length > 1 ? false : true;
  }

  const professionalValidation = async () => {
    const educationError = await educationSchema.validate(educationSection, {
      abortEarly: false
    }).then(data => {
      return {};
    }).catch(error => {
      return error.inner.reduce((acc, error) => {
        return {
          ...acc,
          [error.path]: true,
        }
      }, {})
    });

    const clonedError = {educationError}
    clonedError.workType = profileDetails.workType ? false : true
    clonedError.affiliation = {};
    workSection.map((record, index) => {
      if(index < 1 || (record.universitySchoolCompany || record.URL)) {
        clonedError.affiliation[index] = {};
        affiliationFields.map(field => {
          if(!record[field]) {
            clonedError.affiliation[index][field] = true;
          }
        })
        if((index < 1) && !record.affiliationType) {
          clonedError.affiliation[index]['affiliationType'] = true;
        }
        if(record.specialization.length < 1) {
          clonedError.affiliation[index]['specialization'] = true;
        }
  
        if(!record.verified) {
          clonedError.affiliation[index]["url"] = true
        }
      }
    })
    debugger
    let finalErrors = [clonedError.workType, [Object.values(educationError), getErrors(clonedError.affiliation)]].flat();
    finalErrors = getUnique(finalErrors.flat());
    setValidationError(clonedError);
    return finalErrors.length > 1 ? false : !finalErrors[0];
  }

  const getErrors = (data = {}) => {
    return Object.values(data).map(a => Object.values(a)).flat()
  }

  const validateSubmission = () => {
    return (activeTab === 'personal') ? personalValidation() : professionalValidation()
  }

  const handleSubmit = async (event, dontPublishPro, nomodalopen) => {
    event.preventDefault();
    window.scroll({ top: 0, behavior: 'smooth' });
    const submitterId = event?.nativeEvent?.submitter?.id || event?.nativeEvent?.srcElement?.id;
    const isValid = submitterId === 'Save' ? true : await validateSubmission();
    if(isValid) {
      event.preventDefault();
      const affiliationData = [...workSection];
      const formdata = {};
      formdata.publishProfile = false;
      formdata.title = profileDetails?.title;
      formdata.fullName = profileDetails?.fullName;
      formdata.gender = profileDetails?.gender;
      formdata.phoneNumber = profileDetails?.phoneNumber;
      formdata.workType = profileDetails?.workType;
  
      formdata.Education = {
        qualification: masterData?.MasterData?.qualificationdata?.find(
          (val) => val.qualification === educationSection?.qualification
        )?._id,
        subject: masterData?.MasterData?.subjectdata?.find(
          (val) => val.subjectName === educationSection?.subject
        )?._id,
        specialization: educationSection?.specialization?.map((spl) => {
          return educationSection?.allSpecializationsData?.find(
            (val) => val?.specialization === spl
          )?._id;
        }),
      };
      if(Array.isArray(educationSection?.otherSpecialization)) {
        formdata.Education.specialization = [...formdata.Education.specialization, ...educationSection?.otherSpecialization.map(a => a._id)]
      }
  
      formdata.subjectOfInterest = subjectOfIntrestSection?.map((soi) => {
        const record = {
          interestedsubject: masterData?.MasterData?.subjectdata?.find(
            (val) => val?.subjectName === soi?.subject
          )?._id,
          specialization: soi?.specialization?.map((spl) => {
            return soi?.allSpecializationsData?.find(
              (val) => val.specialization === spl
            )?._id;
          }),
        };
        if(Array.isArray(soi.otherSpecialization)) {
          record.specialization = [...record.specialization, ...soi.otherSpecialization.map(a => a._id)]
        }
        return record
      });
      formdata.affiliation = {
        affiliation_type:
          affiliationData[0] && affiliationData[0].affiliationType,
        affiliations: affiliationData?.map((affData, ind) => {
          const affRecord = {
            order: ind + 1,
            name: affData?.universitySchoolCompany,
            url: affData?.URL,
            department: affData?.affiliatedDepartment,
            state: affData?.state,
            city: affData?.city,
            subject: masterData?.MasterData?.subjectdata?.find(
              (val) => val?.subjectName === affData?.subject
            )?._id,
  
            specialization: affData?.specialization?.map((spl) => {
              return affData?.allSpecializationsData?.find(
                (val) => val.specialization === spl
              )?._id;
            }),
            pincode: Number(affData?.pincode),
          };
          if(Array.isArray(affData.otherSpecialization)) {
            affRecord.specialization = [...affRecord.specialization, ...affData.otherSpecialization.map(a => a._id)]
          }
          return affRecord
        }),
      };
  
      if (profile) {
        formdata.profilePicture = profile;
      }
      
      const isPreviewBtn = ((submitterId === 'Preview Profile') || submitterId === 'Preview Profile');
      if (isPreviewBtn) {
          formdata.publishProfile = false
          updateAuthorProfileDetails(formdata, isPreviewBtn);
          // navigate("/previewprofile");
        return null
      }
  
      if (submitterId !== 'Save' && (activeTab === "personal")) {
        setActiveTab("professional");
        updateAuthorProfileDetails(formdata);
      } else {
        updateAuthorProfileDetails(formdata);
      }
  
      setSaveMyWorkModal(!nomodalopen && dontPublishPro)
      if(!dontPublishPro) {
        setShowFeedbackModal({...initialState, showFeedbackModal: !profileDetails.feedbackDone, congratsModal: profileDetails.feedbackDone}) 
      }
    } else {
      setFocusToTextBox();
    }
  };

  const handleRedirect = (e, path = "/registration") => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
    localStorage.clear();
    dispatch({ type: "LOGOUT_STATUS_SUCCESS" });
    navigate(path);
  };

  const handleRemoveImageSubmit = () => {
    if(profile === profileDetails.oldProfilePicture) {
      const headers = { Authorization: `Bearer ${userLoginDetails?.token}` };
      removeProfilePic(headers)
      setOpenRemoveImage(false)
    }
    setOpenRemoveImage(false)
    setProfile(null)
  };
  
  const handleSubmitConfermationModal = () => {
    setOpenConfermationModal(false);
    navigate("/dashboard");
    // navigate("/authorDashboard");
  };

  const handleSaveMyWorkSubmit = (e) => {
    handleSubmit(e, true, 'nomodalopen');
    setShowBackMoveModal(false);
    setActiveTab('personal')
  };
  console.log(profile, 'edede')
  // if (openProfilePage) {
  //   return (
  //     <Navigate
  //       to={PATH.AUTHORDASHBOARD}
  //       state={{ openSuccessLoginModal: true }}
  //     />
  //   );
  // }

  const setAffiliationValidation = (index) => {
    const clonedError = {...validationError}
    const currentAff = Object.values(clonedError.affiliation)[index]
    if(currentAff) {
      currentAff.url = false
    }
    setValidationError(clonedError)
  }

  const propsCommonTab = [
    {
      eventKey: "personal",
      title: "1. Personal Details",
      propsComponent: (
        <PersonalDetailsSection
          handleSelectChange={handleSelectChange}
          validationError={validationError}
          openImageUpload={openImageUpload}
          setOpenImageUpload={setOpenImageUpload}
          profile={profile}
          profileDetails={profileDetails}
          handleUploadImage={handleUploadImage}
          hiddenFileInput={hiddenFileInput}
          handleChangeRadioButton={handleChangeRadioButton}
          handleChange={handleChange}
          handleImageSubmit={handleImageSubmit}
          showDoLatterModal={showDoLatterModal}
          setShowDoLatterModal={setShowDoLatterModal}
          capture={capture}
          phone={phone}
          webcamImage={webcamImage}
          setWebcamImage={setWebcamImage}
          webcamRef={webcamRef}
          openWebcam={openWebcam}
          setOpenWebcam={setOpenWebcam}
          handleWebcam={handleWebcam}
          uploadedImage={uploadedImage}
          setUploadedImage={setUploadedImage}
          handleImageModalClose={handleImageModalClose}
          masterData={masterData}
          handleDoItLatterModal={handleDoItLatterModal}
          buttonBar={SaveContinueBtnFooter}
          setOpenRemoveImage={setOpenRemoveImage}
          openRemoveImage={openRemoveImage}
          handleRemoveImageSubmit={handleRemoveImageSubmit}
          formError={formError}
          setFormError={setFormError}
          removeProfilePic={removeProfilePic}
        />
      ),
    },
    {
      eventKey: "professional",
      title: "2. Professional Details",
      propsComponent: (
        <div>
          <div className="text-start shadow-box">
            <ProfessionalDetails
              handleSelectChange={handleSelectChange}
              handleChange={handleChange}
              validationError={validationError}
              handleChangeRadioButton={handleChangeRadioButton}
              profileDetails={profileDetails}
              errored={validationError.workType}
              activeTab={activeTab}
              masterData={masterData}
            />
            <br />
            {workSection?.map((val, index) => {
              return (
                <div key={index} className="col-lg-12">
                  <WorkSection
                    setValidationError={setAffiliationValidation}
                    val={val}
                    errorObj={validationError.affiliation?.[index]}
                    removeField={removeField}
                    ind={index}
                    specializationsData={specializationsData}
                    StateJson={StateJson}
                    otherSpecialization={val.otherSpecialization}
                    handleChange={handleWorkSectionChange}
                    handleSelectChange={handleWorkSelectChange}
                    handleOthers={workSectionOtherSpecialization}
                    activeTab={activeTab}
                    heading={val.heading}
                    Sectionindex={index}
                    workSectionValues={val}
                    masterData={masterData}
                    setWorkSection={setWorkSection}
                    workSection={workSection}
                    profileDetails={profileDetails}
                  />
                </div>
              );
            })}
            <div className="col-pd">
              <div className="mb-2 col-lg-12">
                <p className="pb-0">{renderLinks()}</p>
                
              </div>
              </div>
              <div className="br_divide"></div>
              <div className="col-pd">
              <div className="col-lg-12 mb-4">
                <p>
                  Education <span className="option-badge mandatory-span badge">Mandatory</span> <br />
                  <span className="muted-label">
                    Highest degree earned
                  </span>
                </p>
              </div>
            </div>
            <EducationSection
              handleChange={handleEducationChange}
              handleOthers={handleEducationOtherSpecialization}
              handleSelectChange={handleEducationSelectChange}
              profileDetails={profileDetails?.Education}
              educationSection={educationSection}
              activeTab={activeTab}
              errorObj={validationError.educationError}
              masterData={masterData}
              specializationsData={specializationsData}
            />
            <div className="pt-0 mb-4 col-lg-12">
              <div className="br"></div>
            </div>
            <SubjectOfIntrestSection
              handleSelectChange={handleSubjectSelectChange}
              subjectOfIntrestSection={subjectOfIntrestSection}
              masterData={masterData}
              errorObj={validationError?.subjectOfIntrestSection}
              handleOthers={handleSubjectSpecialization}
              handleSubjectOfIntrestChange={handleSubjectOfIntrestChange}
              profileDetails={profileDetails}
              activeTab={activeTab}
              specializationsData={specializationsData}
            />
            <div className="col-pd mb-4">
              <p>{renderSubjectOfIntrestLinks()}</p>
            </div>
          </div>
          <div className="mt-3 bottomNav">
            <span
              className="pull-left pt-2"
              onClick={() => setShowBackMoveModal(true)}
            >
              <Link to="#" className="link">
                <img src={LeftArrow} alt='not found' />
              </Link>
            </span>
            {savePreviewPublishBtn}
          </div>
        </div>
      ),
    },
  ];

  const handleFeedbackModalStat  = async (data, refetchData = false) => {
    setShowFeedbackModal(data);
    if(refetchData) {
      const response = await fetchdata()
      setProfileDetails({...profileDetails, feedbackDone: refetchData})
      if(response.status === 200) {
          setProfileDetails(response?.data?.data)
      }
    }
  }

  return (
    <div className="centerSection">
      <FeedbackFlow handleModalClose={handleFeedbackModalStat} modalStat={showFeedbackModal} code={profileDetails.promoCode} />
      <div className="personal-details">
        <div className="row">
          <div className="col-lg-11 my-3 m-auto">
            <InfoAlert />
            <div className="col-lg-12 col-xl-12 col-md-8 m-auto">
              <Form id="personal_details" onSubmit={(e) => handleSubmit(e)}>
                <div className="label-error text-center">{formError.apiErrors}</div>
                <CommonTab
                  propsCommonTab={propsCommonTab}
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                  isSection={true}
                  isOnSelect={false}
                  buttonBar={
                    activeTab === "personal"
                      ? SaveContinueBtn
                      : savePreviewPublishBtn
                  }
                  progressBarStatus={activeTab === "personal" ? "20" : servicePercentage}
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
      

      <UpArrowQuestion upArrowButton={activeTab !== "personal" ? true : false} />
      <SuccessModal
        label=""
        className="founder-message success-modal"
        show={openConfermationModal}
        LinkTitle="Home"
        LinkPath="/"
        // LinkPath="/authorDashboard"
        submitButtonTitle={"Start Your Publishing Journey Now"}
        modalHeading="YOU ARE AWESOME!"
        upperInformationText="You have registered and joined"
        lowerInformationText="the mission successfully."
        onSubmit={() => handleSubmitConfermationModal()}
      // handleClose={()=>setOpenConfermationModal(false)}
      />
      <FormModal
        size='sm'
        show={saveMyWorkModal}
        upperInformationText="Complete your profile to"
        lowerInformationText="<strong>JOIN</strong> the <strong>MOVEMENT</strong>"
        submitButtonTitle="Complete Profile Setup"
        handleClose={() => handleSaveModalClose()}
        onSubmit={() => handleSaveModalClose()}
        className="founder-message success-modal"
        modalHeading='Your work has been saved' />

      <FormModal
        size='sm'
        label=""
        modalHeading="Do you want to go back?"
        show={showBackMoveModal}
        upperInformationText="Please save your work before"
        lowerInformationText="going to the previous screen."
        submitButtonTitle={"Save My Work"}
        onSubmit={(e) => handleSaveMyWorkSubmit(e)}
        handleClose={handleCloseModal}
      />
    </div>
  );
}

export default PersonalDetails;
