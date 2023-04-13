
import React, { useRef, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import html2canvas from "html2canvas";
import { DragDropContext , Draggable, Droppable} from 'react-beautiful-dnd';
import {Grammarly,GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react"; 
import {
  UploadArticleContent,
  startSimilarityCheck,
  downloadSimiliratyReport,
} from "../../store/apiCalls/profileDetails";
import { jsPDF } from "jspdf";

// import 'suneditor/dist/css/suneditor.min.css';
import jwt_decode from "jwt-decode";
import SunRichText from "./SunEditor";
import "../../containers/autherFlow/personalDetails/PersonalDetails.scss";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";
import successful from "../../assets/img/icons/successful.svg";
import doneSvg from "../../assets/img/icons/done02.svg";
import alertSvg from "../../assets/img/icons/alert_info.svg";
import Input from "./Input";
import Select from "./Select";

import { BASE_URL } from "../../config";
import { FetchArticleById,EditCurrentArticle,SaveToDraft } from "../../containers/autherFlow/submitArticle/queries";
import { getAllMasterData } from "../../store/apiCalls/fetchmaster";
import {checkUrl,getUnique} from "../../utils";
import backArrow from "../../assets/img/icons/blueArrow.svg";
import active_info from "../../svg/active-info.svg";
import active_info_red from "../../assets/img/icons/active-info_red.svg";
import ToolTip from "../common/ToolTip";
import Accordion from "react-bootstrap/Accordion";
// import raw from '../../../src/akashganga.text';

const SunRichTextEditor = ({ style, name, handleChange, value, dataId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gramrlyClientID='client_UeEQaQ5bQCDA4FRBgkRv7w';
  const [articleID, setarticleID] = useState('');
  const [profanityWords, setProfanityWords] = useState([]);
  const [profanityWordsFound, setProfanityWordsFound] = useState([]);
  const tokenVal = jwtDecode(localStorage.usertoken);
  const [affiliationsMaster, setaffiliationsMaster] = useState([{}]);
  const [affiliationsMasterTitle] = useState([{ key: 'Mr', value: 'Mr' }, { key: 'Mrs', value: 'Mrs' }]);
  const [showResult, setShowResult] = useState(false);
  const [authorAffiliationsCount, setauthorAffiliationsCount] = useState([0]);
  const [mainTitle, setmainTitle] = useState('');
  const [uploadedArticleImg, setuploadedArticleImg] = useState({background:[],methodology:[],results:[],discussion:[],conclusion:[],acknowledgements:[]});
  const [articleContent, setarticleContent] = useState({id:'', affiliationTitle: [], affiliationAuthorName: [], affiliationDepartment: [], affiliationInstitute: [], title: '', uploadeImages: [], abbreviations: [], keywords: [], abstract: '', introduction: '', background: '', methodology: '', results: '', discussion: '', conclusion: '', references: '', acknowledgements: '' });
  const [articleContentError, setarticleContentError] = useState({ affiliationTitleError: [], affiliationAuthorNameError: [], affiliationDepartmentError: [], affiliationInstituteError: [], titleError: '', abstractError: '', introductionError: '' });
  const [cancelArticle, setCancelArticle] = useState(false);
  
  const [editorLength, seteditorLength] = useState([0,1,2,3,4,5,6,7,8]);
  const [editorTitleValue, seteditorTitleValue] = useState([{val:'Abstract'},{val:'Introduction'},{val:'Background'},{val:'Methodology'},{val:'Results'},{val:'Discussion'},{val:'Conclusion'},{val:'References'},{val:'Acknowledgements'}]);
  const [editorTitleValueError, seteditorTitleValueError] = useState([{val:''},{val:''},{val:''},{val:''},{val:''},{val:''},{val:''},{val:''},{val:''}]);
  const [editorContentValue, seteditorContentValue] = useState([{val:''},{val:''},{val:''},{val:''},{val:''},{val:''},{val:''},{val:''},{val:''}]);
  const [savedDraftArticle, setsavedDraftArticle] = useState(false);
  const [saveArticleConfirmation, setsaveArticleConfirmation] = useState(false);
  const [showDownloadbtn, setShowDownloadbtn] = useState(false);
  const [profanityAlert, setprofanityAlert] = useState(false);
  const [plagiarismAlert, setPlagiarismAlert] = useState(false);
  const headers = { Authorization: `Bearer ${localStorage.usertoken || ""}`};
  const [unicheckData, setUnicheckData] = useState({
    similaritycheckId: null,
    url: null,
  });
  const router=useLocation();
  const keyRef = useRef('');

  const editorContentValueRef = useRef(editorContentValue);
  editorContentValueRef.current = editorContentValue;
  const abbreviationsRef = useRef('');
  const fetchProfanityWords = async () => {
    axios.get(`${BASE_URL}AakashGanga/getProfanityWords`).then((res) => {
      setProfanityWords(res.data.data);
    });
  };
  
  const sucessHandler = (articleDetails) => {
    if(articleDetails.status===200)
    {
      
      const editDetl=articleDetails.data.data;  
     
      const data = articleContent;
      data.id=editDetl._id; 
      data.title=editDetl.title; 
      setmainTitle(editDetl.title); 
      
      const abbr=[];
      editDetl.abbreviations.forEach((abbreviation,k) => {
        abbr.push(abbreviation.fullForm);
        
      });
      
      
      data.abbreviations=abbr;
      const athrCount=[];
      const affiliationTitle=[];const affiliationAuthorName=[];const affiliationDepartment=[];const affiliationInstitute=[];
      editDetl.author.forEach((author,k) => {
        affiliationTitle.push(author.authorDesignation);
        affiliationAuthorName.push(author.authorName);
        affiliationDepartment.push(author.affiliatedDepartment);
        affiliationInstitute.push(author.affiliatedInstitude._id);
        athrCount.push(k)
      });
      setauthorAffiliationsCount([...athrCount]);
      data.affiliationTitle=affiliationTitle;
      data.affiliationAuthorName=affiliationAuthorName;
      data.affiliationDepartment=affiliationDepartment;
      data.affiliationInstitute=affiliationInstitute;
      data.keywords=editDetl.keywords;

      const editorLength=[];const titleData=[];const DescData=[];const errorTitle=[];
      editDetl.articleData.articleSection.forEach((detlart ,k) => {
        editorLength.push(k);
        titleData.push({val:detlart.title});
        DescData.push({val:detlart.content})
        errorTitle.push({val:''})
      })
      seteditorLength([ ...editorLength ]);
      seteditorTitleValue([ ...titleData ]);
      seteditorContentValue([ ...DescData ]);
      seteditorTitleValueError([ ...errorTitle ]);
      

      setarticleContent({ ...data })

     if(editDetl.images.length>0)
     {
         const imglist=uploadedArticleImg;
         imglist.background=editDetl.images[0].background;
         imglist.methodology=editDetl.images[0].methodology;
         imglist.results=editDetl.images[0].results;
         imglist.discussion=editDetl.images[0].discussion;
         imglist.conclusion=editDetl.images[0].conclusion;
         imglist.acknowledgements=editDetl.images[0].acknowledgements;
         setuploadedArticleImg({ ...imglist })
     }
     dispatch({ type: 'SET_LOADER', payload: false });
    }
    
  };
  const sucessHandlerUpdate = (articleDetails) => { 
    if(articleDetails.status===200)
    setsavedDraftArticle(true)
    dispatch({ type: 'SET_LOADER', payload: false });

  }
  const sucessHandlerSaveDraft = (articleDetails) => {  
    if(articleDetails.status===200)
    {
      setsavedDraftArticle(true)
    }
    
    dispatch({ type: 'SET_LOADER', payload: false });

  }
  const { mutate: getArticleById } = FetchArticleById(sucessHandler);
  const { mutate: updateArticle } = EditCurrentArticle(sucessHandlerUpdate);
  const { mutate: saveArticleToDraft } = SaveToDraft(sucessHandlerSaveDraft);
  useEffect(() => {
    fetchProfanityWords();
    getMasterList()
    
    if(router.pathname.includes('/dashboard/edit-article'))
    {
       const articleID=router.pathname.split('/')[3]
       setarticleID(articleID)
       getArticleDetail(articleID)
    }


  }, []);

  async function getArticleDetail(id) {

    //
    const headers = { Authorization: `Bearer ${localStorage?.usertoken}` };
    const queryParams = {
      params: { articleId: id },
      headers:headers
    };
    
   getArticleById(queryParams);

  }

  async function getMasterList() {

    const msterlst = await getAllMasterData();
    if (msterlst.status === 200) {
      const affiliation = []

      msterlst.data.affiliateddata.forEach((element) => {

        const data = { key: element._id, value: element.affiliated }
        affiliation.push(data)
      });

      setaffiliationsMaster(affiliation)

    }

  }
  const handleRedirect = (e, path) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: 'smooth'});
    navigate(path);
  }

  const escapeRegExpMatch = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  };
  const isExactMatch = (str, match) => {
    return new RegExp(`\\b${escapeRegExpMatch(match)}\\b`).test(str);
  };

  function checkRequiredField() {
    const regex = /(<([^>]+)>)/ig;
    const abstrct = editorContentValue[0].val.replace(regex, ''); 
    const intro = editorContentValue[1].val.replace(regex, '');
    const data = articleContentError;
    let isError = false;
    if (mainTitle === '') {
      //titleRef.current.focus();
      isError = true;
      data.titleError = 'Please enter title';
    }
    else {
      data.titleError = '';
    }
    if (abstrct === '') {
      isError = true;
      data.abstractError = 'Please enter abstract details';
    }
    else if (abstrct.split(' ').length >500) {
      isError = true;
      data.abstractError = '500 words are allowed';
    }
    else {
      data.abstractError = '';
    }
    if (intro === '') {
      isError = true;
      data.introductionError = 'Please enter introduction details';
    }
    else {
      data.introductionError = '';
    }
    const editorTitleError=editorTitleValueError;
    let titleerro=false;
    for (let e = 0; e < editorLength.length; e++) {
      if(editorTitleValue[e].val==='')
      {
        titleerro=true
        editorTitleError[e].val='This filed is required'
      }
    }
    if(titleerro===true)
    {
      isError = true;
      seteditorTitleValueError([...editorTitleError])
    }
    

    /// 
    for (let i = 0; i < authorAffiliationsCount.length; i++) {
      if (!articleContent.affiliationAuthorName[i] || articleContent.affiliationAuthorName[i] === '') {
        isError = true;
        data.affiliationAuthorNameError[i] = `Please enter ${i === 0 ? 'primary author' : 'co-author'} name`
      }
      else {
        data.affiliationAuthorNameError[i] = ''
      }
      if (!articleContent.affiliationDepartment[i] || articleContent.affiliationDepartment[i] === '') {
        isError = true;
        data.affiliationDepartmentError[i] = 'please enter department name';
      }
      else {
        data.affiliationDepartmentError[i] = '';
      }

      if (!articleContent.affiliationTitle[i] || articleContent.affiliationTitle[i] === '') {
        isError = true;
        data.affiliationTitleError[i] = 'Please select author title';
      }
      else {
        data.affiliationTitleError[i] = '';
      }
      if (!articleContent.affiliationInstitute[i] || articleContent.affiliationInstitute[i] === '') {
        isError = true;
        data.affiliationInstituteError[i] = 'Please select institute/university name';
      }
      else {
        data.affiliationInstituteError[i] = '';
      }


    }
    setarticleContentError({ ...data })
    return isError;
  }

  function getPayload(type) {
    const { id } = jwt_decode(localStorage.usertoken);

    const author = [];
    for (var i = 0; i < authorAffiliationsCount.length; i++) {
      const authrDetl = { "authorDesignation": articleContent.affiliationTitle[i], "affiliatedDepartment": articleContent.affiliationDepartment[i], "authorName": articleContent.affiliationAuthorName[i], "affiliatedInstitude": articleContent.affiliationInstitute[i] };
      author.push(authrDetl);
    }
    const abbreviations = [];
    for (var i = 0; i < articleContent.abbreviations.length; i++) {
      const abbre = { "apprv": articleContent.abbreviations[i], "fullForm": articleContent.abbreviations[i] };
      abbreviations.push(abbre);
    }
    const articleSection=[]; let plagrism = '';
   
    for(let k=0;k<editorLength.length;k++)
    {
      console.log('title',editorTitleValue.length); console.log('contentl',editorContentValue.length);  console.log('content',editorContentValue); 
       const content={ "title": editorTitleValue[k].val, "content":editorContentValue[k].val, "order": k+1 }
       articleSection.push(content);
       plagrism += editorContentValue[k].val + ' ';
    }
   const data = { userId: id, title: mainTitle, author: author, abstract: articleContent.abstract, keywords: articleContent.keywords, formulae: [], citations: '', abbreviations: abbreviations, status: type, images:  articleContent.uploadeImages, articleSection: articleSection }
    const detailsData = { saveDetails: data, plagrismeCheck: plagrism }
    return detailsData

  }
  async function submitAsDraft() {
    setprofanityAlert(false)
    const isRequired = checkRequiredField()
    if (isRequired === false && articleContent.id==='') {
      dispatch({ type: 'SET_LOADER', payload: true });
    
      const data = getPayload('draft'); 
      const headers ={ Authorization: `Bearer ${localStorage?.usertoken}` };;
      const queryParams = {
        payload:data.saveDetails,
        headers,
      };
      saveArticleToDraft(queryParams)
    }
    else if (isRequired === false && articleContent.id!==''){
      dispatch({ type: 'SET_LOADER', payload: true });
      const headers ={ Authorization: `Bearer ${localStorage?.usertoken}` };;
      const data = getPayload('draft')
      const queryParams = {
        params: { id:articleContent.id },
        payload:data.saveDetails,
        headers,
      };
      updateArticle(queryParams)
    }
    
  }
  async function confirmToSubmitArticle() {
    setsaveArticleConfirmation(false)
    dispatch({ type: "SET_LOADER", payload: true });
    const data = getPayload('submit');

    //return false;
    // const profanitywrd = ['fuck', 'suck'];
    // dispatch({ type: "SET_LOADER", payload: true });

    const fileData = (data.plagrismeCheck);
    let isProfinityWord = false; const profanityWordList = [];
    for (var i = 0; i < profanityWords.length; i++) {
      if (isExactMatch(fileData.toLowerCase(), profanityWords[i])) {
        isProfinityWord = true;
        profanityWordList.push(profanityWords[i])
      }
    }
    if (isProfinityWord) {

      data.saveDetails.profanityWordsPresent = { "isPresent": true, "words": profanityWordList }
     ///alert('Profanity Word Found'+ '' + profanityWordList)
     setProfanityWordsFound(profanityWordList)
     setprofanityAlert(true)
      dispatch({ type: "SET_LOADER", payload: false });

    }
    else {

      const blob = new Blob([fileData], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const txtFile = new File([blob], "down.html", { type: "text/html" });
      const formData = new FormData();
      formData.append("file", txtFile);
       const link = document.createElement("a");
         link.download = "user-info.html";
        link.href = url;
       link.click();

      try {
        const resp = await UploadArticleContent({
          data: formData,
          headers,
          userId: tokenVal?.id,
        });
        // dispatch({ type: "SET_LOADER", payload: false });
        data.saveDetails.similarityCheckId = resp.data.data.similaritycheckId;
        setUnicheckData({
          ...unicheckData,
          similaritycheckId: resp.data.data.similaritycheckId,
        });
      } catch (err) {

        alert('Unicheck Error First')
        dispatch({ type: "SET_LOADER", payload: false });
      }

      //   const link = document.createElement("a");
      //   link.download = "user-info.html";
      //  link.href = url;
      //   link.click();

      //  html2canvas(input)
      //  .then(async (canvas) => {
      //      const imgData = canvas.toDataURL('image/png');
      //      const pdf = new jsPDF();
      //      pdf.addImage(imgData, 'JPEG', 0, 0);
      //      pdf.output('dataurlnewwindow');
      //      pdf.save("download.pdf");
      //      const pdfData = pdf.output('blob');
      //      const formData = new FormData();
      //      const pdfFile = new File([pdfData], "down.pdf", {type: 'application/pdf'})
      //      formData.append("file", pdfFile);
      //      try {
      //          const resp = await UploadArticleContent({
      //             data: formData,
      //             headers,
      //             userId: tokenVal?.id
      //         })
      //         setUnicheckData({...unicheckData, similaritycheckId: resp.data.data.similaritycheckId})
      //      } catch(err) {
      //          debugger
      //      }
      //  });
      setTimeout(function() {
        checkSimilartyReport(data)
      }, 10000);
    }
  
  }
  async  function checkSimilartyReport(data)
  {
    try {
      const resp = await startSimilarityCheck({
        data: {
          similarityCheckId: data.saveDetails.similarityCheckId,
          userId: tokenVal?.id,
        },
        headers,
      });
      if (resp.status === 200) {
        if (resp.data.data.similarityCheckResult.attributes.similarity < 40) {
          const saveData = { headers: headers, payload: data.saveDetails }
          saveArticleToDraft(saveData);
          
          setsavedDraftArticle(true)
          dispatch({ type: "SET_LOADER", payload: false });
        }
        else {
          setPlagiarismAlert(true)
         // alert('Article Can not save. Because its simillar to '+resp.data.data.similarityCheckResult.attributes.similarity)
          dispatch({ type: "SET_LOADER", payload: false });
        }


      }
    } catch (err) {
      alert('Unicheck Error Second')
      dispatch({ type: "SET_LOADER", payload: false });
    }
  }

  function submit() {
    const isRequired = checkRequiredField()
    if (isRequired === false)
      setsaveArticleConfirmation(true)
  }

  const downloadReport = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADER", payload: true });
    const input = document.getElementById("textContent");
    input.style.display = "block";
    const fileData = JSON.stringify(input.innerHTML);
    let isProfinityWord = false;
    for (var i = 0; i < profanityWords.length; i++) {
      if (isExactMatch(fileData, profanityWords[i])) isProfinityWord = true;
    }
    if (isProfinityWord) {
      alert("Profanity Word found");
      dispatch({ type: "SET_LOADER", payload: false });
      return false;
    }

    // const blob = new Blob([fileData], { type: "text/html" });
    // const url = URL.createObjectURL(blob);
    // const txtFile = new File([blob], "down.html", { type: "text/html" })
    // const formData = new FormData();
    // formData.append("file", txtFile);
    //  try {
    //      const resp = await UploadArticleContent({
    //          data: formData,
    //          headers,
    //          userId: tokenVal?.id
    //     })
    //      dispatch({ type: 'SET_LOADER', payload: false});
    //      setUnicheckData({...unicheckData, similaritycheckId: resp.data.data.similaritycheckId})
    // } catch(err) {
    //      dispatch({ type: 'SET_LOADER', payload: false});
    //  }

    //  const link = document.createElement("a");
    //  link.download = "user-info.pdf";
    //  link.href = url;
    //  link.click();

    html2canvas(input).then(async (canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      //  pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
      //  const pdfData = pdf.output('blob');
      //  const formData = new FormData();
      //  const pdfFile = new File([pdfData], "down.pdf", {type: 'application/pdf'})
      //  formData.append("file", pdfFile);
      try {
        const resp = await downloadSimiliratyReport({
          data: {
            similarityCheckId: unicheckData.similaritycheckId,
            userId: tokenVal?.id,
          },
          headers,
        });
        // setUnicheckData({...unicheckData, similaritycheckId: resp.data.data.similaritycheckId})
      } catch (err) {
        debugger;
      }
    });
    dispatch({ type: "SET_LOADER", payload: false });
  };

  // function handleVideoUploadBefore(files, info, uploadHandler) {
  //     // uploadHandler is a function
  //     console.log("video before:::::", files, info)
  //     // uploadHandler(files, info)
  // }

  // function handleVideoUpload(targetElement, index, state, info, remainingFilesCount) {
  //     console.log("uploaded video::", targetElement, index, state, info, remainingFilesCount)
  // }

  // function handleInput(event) {
  //     console.log("input:::", event.target.innerText); //Get the click event
  //     console.log("input:::", event); //Get the click event
  // }

  // function handlePaste(e, cleanData, maxCharCount) {
  //     console.log("handlePaste  e", e, cleanData, maxCharCount)
  //     console.log("handlePaste cleanData", cleanData)
  //     console.log("handlePaste maxCharCount", maxCharCount)
  // }
  function openCancelArticle() {
    setCancelArticle(true)
  }

  function editorContent(content, type,key) { 
    const regex = /(<([^>]+)>)/ig;
    const dataError = articleContentError;
    const data = editorContentValueRef.current;  
    data[key].val = content; 
  
    seteditorContentValue([ ...data ])
    if(editorTitleValue[key].val==='Abstract')
    {
      const abstrct = content.replace(regex, '');
      if (abstrct !== '')
        dataError.abstractError = '';
      setarticleContentError({ ...dataError })
    }
    else if(editorTitleValue[key].val==='Introduction')
    {
      const abstrct = content.replace(regex, '');
      if (abstrct !== '')
        dataError.introductionError = '';
      setarticleContentError({ ...dataError })
    }
    if(type==='removeImg')
    {
      getExtractImageFromContent(data)
    }
  }
  
function getExtractImageFromContent(editorContentDetails)
  {
    const data = articleContent;
    const allImg=[]; 
    for(let j=0;j<editorContentDetails.length;j++)
    {   
      
       if(editorContentDetails[j].val!=='' && editorContentDetails[j].val!==null){
          let images = editorContentDetails[j].val.match(/<img\s+[^>]*src="([^"]*)"[^>]*>/i);
          if(images)
          {
            for (var i = 0; i < images.length; i++) {
              
              console.log('valid',checkUrl(images[i]))
              if(checkUrl(images[i]))
              allImg.push(images[i])
             }
          }
          
      }
    }
   
    data.uploadeImages=getUnique(allImg);
    setarticleContent({...data })
  }
  function editorUploadedImg(img, type) {
    const data=articleContent;
    const Images=articleContent.uploadeImages;
    Images.push(img);
    data.uploadeImages=getUnique(Images);
    
    setarticleContent({ ...data })
  }


  function addKeyWord(type) {
    const data = articleContent;
    if (type === 'keyword' && keyRef.current.value !== '') {
      data.keywords.push(keyRef.current.value);
      keyRef.current.value = '';

    }
    else if (type === 'abbreviations' && abbreviationsRef.current.value !== '') {
      data.abbreviations.push(abbreviationsRef.current.value);
      abbreviationsRef.current.value = '';
    }
    setarticleContent({ ...data })
  }
  function removeKeyWord(type, key) {
    const data = articleContent;
    if (type === 'keyword') {
      data.keywords.splice(key, 1)
    }
    else if (type === 'abbreviations') {

      data.abbreviations.splice(key, 1)
    }
    
    setarticleContent({ ...data })
  }

  function handleChangeInput(e) { 
    const data = articleContent; 
    if (e.target.name === 'title');
      data.title = e.target.value;
      setmainTitle(e.target.value)
    setarticleContent({ ...data })
    if (e.target.value !== '') {
      const dataError = articleContentError;
      dataError.titleError = '';
      
      setarticleContentError({ ...dataError })
    }
  }
  function handleChangeInputEditorTitle(e,k) { 
    const data = editorTitleValue;
    const editorError=editorTitleValueError
    data[k].val = e.target.value;
    seteditorTitleValue([ ...data ])
    editorError[k].val='';
    seteditorTitleValueError([...editorError])
    
  }

  function handleSelectChangeUniversity(k, val) {
    const data = articleContent;
    data.affiliationInstitute[k] = val;
    setarticleContent({ ...data })
    const dataError = articleContentError;
    dataError.affiliationInstituteError[k] = '';
    setarticleContentError({ ...dataError })
  }
  function handleSelectChangeaffiliatedTitle(k, val) {
    const data = articleContent;
    data.affiliationTitle[k] = val;
    setarticleContent({ ...data })
    const dataError = articleContentError;
    dataError.affiliationTitleError[k] = '';
    setarticleContentError({ ...dataError })

  }

  function handleprimaryAuthorName(e, key) {

    const data = articleContent;
    data.affiliationAuthorName[key] = e.target.value;
    setarticleContent({ ...data })
    if (e.target.value !== '') {
      const dataError = articleContentError;
      dataError.affiliationAuthorNameError[key] = '';
      setarticleContentError({ ...dataError })
    }
  }

  function handleAffiliatedDepartMent(e, key) {

    const data = articleContent;
    data.affiliationDepartment[key] = e.target.value;
    setarticleContent({ ...data })
    if (e.target.value !== '') {
      const dataError = articleContentError;
      dataError.affiliationDepartmentError[key] = '';
      setarticleContentError({ ...dataError })
    }
  }

  function addMoreAuthor() {
    const data = authorAffiliationsCount;
    data.push(authorAffiliationsCount.length);
    setauthorAffiliationsCount([...data])
  }
  function addMoreEditor() {
    const data = editorLength;
    const editorContent = editorContentValue;
    const editorTitle = editorTitleValue;
    const editorError = editorTitleValueError;
    data.push(editorLength.length);
    seteditorLength([...data])
   
    editorContent.push({val:''});
    editorTitle.push({val:''});
    seteditorTitleValue([...editorTitle])
    seteditorContentValue([...editorContent])
    editorError.push({val:''});
    seteditorTitleValueError([...editorError])
  }
  function removeEditor(key) {
    const editor = editorLength;
    const editorTitle = editorTitleValue;
    const editorContent = editorContentValue;
    const editorError = editorTitleValueError;
    if (editorError[key]) {
      editorError.splice(key, 1);
      seteditorTitleValueError([...editorError])
    }
    if (editor[key]) {
      editor.splice(key, 1);
      const countedit=[]
      editor.forEach((element,k) => {
        countedit.push(k)
      });
      seteditorLength([...countedit])
    }
   if (editorTitle[key]) {
        editorTitle.splice(key, 1);
      seteditorTitleValue([...editorTitle])
    }
    if (editorContent[key]){ 
      editorContent.splice(key, 1);
      
      seteditorContentValue([...editorContent])
      getExtractImageFromContent(editorContent)
    }
    
  }
  function removeAuthorInputs(key) {
    const dataError = articleContentError;
    const data = authorAffiliationsCount;
    const details = articleContent;
    if (details.affiliationInstitute[key]) {
      details.affiliationInstitute.splice(key, 1);
    }
    if (details.affiliationDepartment[key]) {
      details.affiliationDepartment.splice(key, 1);
    }
    if (details.affiliationAuthorName[key]) {
      details.affiliationAuthorName.splice(key, 1);
    }
    if (details.affiliationTitle[key]) {
      details.affiliationTitle.splice(key, 1);
    }
    dataError.affiliationAuthorNameError[key] = '';
    dataError.affiliationDepartmentError[key] = '';
    dataError.affiliationTitleError[key] = '';
    dataError.affiliationInstituteError[key] = '';
    setarticleContentError({ ...dataError })
    setarticleContent({ ...details })
    data.splice(key, 1);
    let newatc = data;
    newatc = newatc.filter(function (_, index) {

      return newatc.hasOwnProperty(index);
    });
    setauthorAffiliationsCount([...data])
  }

  

  const SimilarityCheck = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADER", payload: true });
    try {
      const resp = await startSimilarityCheck({
        data: {
          similarityCheckId: unicheckData.similaritycheckId,
          userId: tokenVal?.id,
        },
        headers,
      });
      if (resp.status === 200) {
        setShowDownloadbtn(true);
        setUnicheckData({ ...unicheckData, url: resp.data.url });
        dispatch({ type: "SET_LOADER", payload: false });
      }
    } catch (err) {
      dispatch({ type: "SET_LOADER", payload: false });
    }
    dispatch({ type: "SET_LOADER", payload: false });
  };
  function onDragEnd(result) { 
    if (!result.destination) {
      return;
    }
   /// console.log('pk',result);
    const sourceIndex=result.source.index;
    const DestinationIndex=result.destination.index;
    const editor = {editorLength }  ;
    const editorSource=editor[sourceIndex];
    const editorDestiation=editor[DestinationIndex];
    editor[sourceIndex]=editorDestiation;
    editor[DestinationIndex]=editorSource;
    //seteditorLength([...editor]);

    const editorTitle =  { ...editorTitleValue }  ;
    const editorTitleSourceVal=editorTitle[sourceIndex].val;
    const editorTitleDestiationVal=editorTitle[DestinationIndex].val;
    editorTitle[sourceIndex].val=editorTitleDestiationVal;
    editorTitle[DestinationIndex].val=editorTitleSourceVal;console.log('editorTitleValue',editorTitleValue);console.log('editorTitleSourceVal',editorTitle)
    //seteditorTitleValue([...editorTitle]);

    const editorContent =editorContentValue ;
    const editorContentSourceVal=editorContent[sourceIndex].val;
    const editorContentDestiationVal=editorContent[DestinationIndex].val;
    editorContent[sourceIndex].val=editorContentDestiationVal;
    editorContent[DestinationIndex].val=editorContentSourceVal;
   // seteditorContentValue([...editorContent]);
  }

  return (
    <Grammarly clientId={gramrlyClientID}
                  config={{
                    documentDialect: "british",
                    activation: "immediate"
                  }}>
    <div className="manageEditorBox">
       <div className="row uploadHeadMain">
          <div className="col-lg-12">
            <div className="uploadHead">
              <div className="uploadHeadLeft">
                <span className="backTop">Back</span>
                <h2>{articleID===''?'Upload':'Edit'} Article</h2>
              </div>
              <div className="uploadAction">
                <span className="btn-link-black" onClick={openCancelArticle}>Cancel</span>
                <span onClick={() => submitAsDraft()} className="btn-link-active">Save As Draft</span>
                <button className="button button-primary" type="button" onClick={() => submit()} >Submit Now</button>
                <b className="delete"></b>
              </div>
            </div>
          </div>
        </div>
        <div className="editorHeadMain">
       
       <div className="editorHead">
         <div className="editorHeadLeft">
           <h2>Submit Article</h2>
         </div>
         <div className="editorAction">
           <a href="javascript:void(0)" className="active">DETAILS</a>
           <a href="javascript:void(0)">EDITOR</a>
        </div>
       </div>
     
   </div>
        <div className="manageEditorInner">

 {/* ADD ARTICLE  */}
 <div className="peerArticlePage">
          <div className="customAccordion">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p>
                    My submission details
                    <span>
                      Description to be added. Lorem ipsum dolor sit amet.
                    </span>
                  </p>
                  <b className="completed">To be completed</b>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div className="col-md-6">
                    <div className="fieldWrap">
                        <label class="labelForm">
                          Journal<sup>*</sup>                           
                        </label>
                        <div className="selectBox">
                          <select>
                            <option>select 01</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fieldWrap">
                        <label class="labelForm">
                        Subject<sup>*</sup>                           
                        </label>
                        <div className="selectBox">
                          <select>
                            <option>select 01</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    <div className="fieldWrap">
                        <label class="labelForm">
                        Specialization                          
                        </label>
                        <div className="selectBox">
                          <select>
                            <option>select 01</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                    <div className="fieldWrap">
                        <label class="labelForm">
                        Article Type<sup>*</sup>                          
                        </label>
                        <div className="selectBox">
                          <select>
                            <option>select 01</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="guidelinesWrap">
                    <ToolTip classNameTooltip="personaldetails-tooltip" toolTipMessage="Help">
                    <img
                      className="pe-cursor ps-1"
                      src={active_info_red}
                      alt="no img"
                    />
                  </ToolTip>Author Guidelines</div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p>
                    Article registration payment
                    <span>
                      Description to be added. Lorem ipsum dolor sit amet.
                    </span>
                  </p>
                  <b>To be completed</b>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="">
                      <p className="contentReview">Make your choice regarding the type of review you want to conduct:<ToolTip classNameTooltip="personaldetails-tooltip" toolTipMessage="Help">
                            <img
                              className="pe-cursor ps-1"
                              src={active_info_red}
                              alt="no img"
                            />
                          </ToolTip></p>
                      <div className="row">
                        <div className="col-md-6">
                            <div className="regardingChkBox">
                              <div className="regardingRadio">
                                <label>
                                  <input type="radio" name="conduct" />
                                  <i></i>
                                  <b>Pre Publishing Double Anonymous Peer Review</b>
                                  <span>(Includes Post-Publication Open Review)</span>
                                </label>
                                <big>INR 9999</big>
                              </div>                                               
                              <span className="tollArea">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                            <div className="regardingChkBox">
                              <div className="regardingRadio">
                                <label>
                                  <input type="radio" name="conduct" />
                                  <i></i>
                                  <b>Only Post-Publication Open Review</b> 
                                </label>
                                <big>INR 9999</big>
                              </div>                                               
                              <span className="tollArea">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                              
                          </div>
                        </div>
                      </div>
                   
                      
                      <div className="paymentSuccessWrap">
                        <div className="paymentSuccessText">
                            <img src={successful} /> Article Registration Payment Successful
                        </div>
                        <div className="paymentSuccessTool">Download Invoice 
                          <ToolTip classNameTooltip="personaldetails-tooltip" toolTipMessage="Help">
                            <img
                              className="pe-cursor ps-1"
                              src={active_info_red}
                              alt="no img"
                            />
                          </ToolTip>
                        </div>
                      </div>

                      <div className="warningText">
                      Authors are required to pay an amount of INR 1000 for registering their article on Aakashganga. This amount will be refunded if the article gets rejected
                      </div>

                      <div className="reviewerWrap">
                        <div className="reviewerForm">

                        </div>

                      </div>

                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <p>
                    Authors and contributors
                    <span>
                      Description to be added. Lorem ipsum dolor sit amet.
                    </span>
                  </p>
                  <b>To be completed</b>
                </Accordion.Header>
                <Accordion.Body>laborum.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="disabled">
                <Accordion.Header>
                  <p>
                    Review type
                    <span>
                      Description to be added. Lorem ipsum dolor sit amet.
                    </span>
                  </p>
                  <b>To be completed</b>
                </Accordion.Header>
                <Accordion.Body>laborum.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="disabled">
                <Accordion.Header>
                  <p>
                    Funding details
                    <span>
                      Description to be added. Lorem ipsum dolor sit amet.
                    </span>
                  </p>
                  <b>To be completed</b>
                </Accordion.Header>
                <Accordion.Body>laborum.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="disabled">
                <Accordion.Header>
                  <p>
                    Products (<i>Optional</i>){" "}
                    <span>
                      Description to be added. Lorem ipsum dolor sit amet.
                    </span>
                  </p>
                  <b>To be completed</b>
                </Accordion.Header>

                <Accordion.Body>laborum.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" className="disabled">
                <Accordion.Header>
                  <p>
                    Start writing{" "}
                    <span>Description to be added. Lorem ipsum.</span>
                  </p>
                  <b>To be completed</b>
                </Accordion.Header>

                <Accordion.Body>laborum.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" className="disabled">
                <Accordion.Header>
                  <p>
                    Statements
                    <span>
                      Description to be added. Lorem ipsum dolor sit amet.
                    </span>
                  </p>
                  <b>To be completed</b>
                </Accordion.Header>

                <Accordion.Body>laborum.</Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="confirmFooter">
              <div className="confirmContent">
                <h3>Article Registration Payment: <b>INR 1000</b></h3>
                <p>The remaining balance must be paid after article acceptance</p>
              </div>
              <div className="confirmBtn">
                <span class="btn-link-active">Save</span>
                <button class="button button-primary" type="button">SAVE AND CONTINUE</button>
              </div>

            </div>
          </div>
        </div>
        {/* ADD ARTICLE END */}

        <div className="personal-details" id="article-editor__comp">
       
       <div className="row">
         <div className="col-lg-12">
           <div className="text-right pt-3 pb-3">
             <span className="btn-link-active getToolTips"><ToolTip  classNameTooltip='personaldetails-tooltip' toolTipMessage="Help"><img className="pe-cursor ps-1" src={active_info} alt='no img' /></ToolTip> Get Help for Article Submission</span>
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-lg-4">
           <div className="commanBox mb-25">

             {/* <div className="selectSpaceBox">
               <div className="selectSpaceList">
                 <div className="fieldWrap">
                   <select className="fieldForm">
                     <option>Stream</option>
                     <option>Stream</option>
                   </select>
                 </div>
               </div>
               <div className="selectSpaceList">
                 <div className="fieldWrap">
                   <select className="fieldForm">
                     <option>Specialization</option>
                     <option>activeCheck</option>
                   </select>
                 </div>
               </div>
               <div className="selectSpaceList">

                 <div className="fieldWrap">
                   <select className="fieldForm">
                     <option>Type of Article</option>
                     <option>Stream</option>
                   </select>
                 </div>
               </div>
             </div>  */}
             <div className="fieldMore d-inline-block w-100 pt-0 pb-0 editMore">
               <span>Keywords</span>
               <a className="addKey" onClick={() => addKeyWord('keyword')}>+ Add </a>
             </div>
             <div className="fieldWrap">
               <input title="" ref={keyRef} className="fieldForm" placeholder="Enter Keywords" type="text" name="" />
             </div>
             <div className="keyBox">
               {articleContent.keywords.map((keyword, index) => (
                 <span key={keyword} className="t-tag">{keyword}<i className="imgClose" onClick={() => removeKeyWord('keyword', index)}></i></span>
               ))}

             </div>

           </div>
           <div className="commanBox mb-25">
             <div className="fieldMore pt-0 pb-0 editMore">
               <span>Abbreviations</span>
               <a onClick={() => addKeyWord('abbreviations')}>+ Add</a>
             </div>
             <div className="keyBox mb-3 d-inline-block w-100"> 
               {articleContent.abbreviations.map((abbreviation, index) => (
                 <span key={abbreviation} className="t-tag" >{abbreviation}
                   <i className="imgClose" onClick={() => removeKeyWord('abbreviations', index)}></i></span>

               ))}

             </div>
             <div className="fieldWrap">
               <input title="" ref={abbreviationsRef} className="fieldForm" placeholder="Abbreviation | Full Form" type="text" name="" required />
             </div>
           </div>

           <div className="commanBox mb-25">
             <span className="tagTitle">Images</span>
             <div className="fieldWrap">
               <p className="tagContent">Upload images that you wish to insert in the article.</p>
             </div>
             <div className="imgShowBox">
              {articleContent.uploadeImages.map((src, index) => (
                <b key={src} style={{
                  backgroundImage: `url(${src})`}}>        
              
                </b>
              ))}
               
             </div>
           </div>

           {/*<div className="commanBox mb-25">
              <span className="tagTitle">Formulae</span>
             <div className="fieldWrap">
                 <p className="tagContent">Enter formulae that you wish you use in the article.</p>
             </div>
             <div className="formulaeBox">
               <span>∆x = vi∆t + 1/2 a(∆t)2<i className="imgClose"></i></span>
               <span>∆x = vi∆t + 1/2 a(∆t)2<i className="imgClose"></i></span>
             </div>
               </div> 

           <div className="commanBox mb-25">
              <span className="tagTitle">Citations</span>
             <div className="fieldWrap">
                 <p className="tagContent">Please insert citations where the text is.</p>
             </div>
             <div className="citationsBox">
               <span>(Field, 2005)</span>
               <span>(Field, 2005, p. 14)</span>
             </div>
           </div>*/}

         </div>
         <div className="col-lg-8">

           <div className="commanBox mb-25">
             <div className="fieldWrap">
               <label className="labelFormTwo">Title of the Article <div className="supTag">Mandatory</div></label>
               
               <Input
                 errors={articleContentError.titleError}
                 name="title"
                 handleChange={handleChangeInput}
                 className='fieldForm'
                 type="text"
                 required={'required'}
                 value={mainTitle}
                 label=""
                 placeholder="Enter Title"
                
               />

             </div>
           </div>
           
           {authorAffiliationsCount.map((num, index) => (
             <div className="commanBox mb-25 dBoxAuthor" key={`aff${num}`}>
               {num > 0 && <i className="imgClose" onClick={() => removeAuthorInputs(index)}></i>}
               <div className="fieldWrap">
                 <label className="labelFormTwo">Author Affiliations <div className="supTag">Mandatory</div></label>
               </div>
               <div className="authorAppiWrap">
                 <div className="authorAppiLeft firstBox mb-25">
                   <div className="fieldWrap selectBox">
                     <Select
                       
                       selectedValue={articleContent?.affiliationTitle[index]}
                       options={affiliationsMasterTitle?.map((val) => val?.value)}
                       optionValues={affiliationsMasterTitle?.map((val) => val?.key)}
                       name={`affiliatedTitle${index}`}
                       placeholder=""
                       handleChange={(e) => handleSelectChangeaffiliatedTitle(index, e)}
                       required={true}
                       mandatory={false}
                       className={'fieldForm'}
                     />
                     {articleContentError.affiliationTitleError[index] !== '' && <div className="label-error">{articleContentError.affiliationTitleError[index]}</div>}

                   </div>
                   <div className="fieldWrap mr-0 fieldInput">
                     <Input
                       errors={articleContentError?.affiliationAuthorNameError[index]}
                       name={`primaryAuthorName${index}`}
                       handleChange={(e) => handleprimaryAuthorName(e, index)}
                       className='fieldForm'
                       type="text"
                       required={'required'}
                       value={articleContent?.affiliationAuthorName[index]}

                       placeholder={index === 0 ? 'Primary Author Name' : 'Co-Author Name'}
                     />

                   </div>

                 </div>
                 <div className="authorAppiRight mb-25">
                   <div className="fieldWrap">
                     <Input
                       errors={articleContentError?.affiliationDepartmentError[index]}
                       name={`affiliatedDepartment${index}`}
                       handleChange={(e) => handleAffiliatedDepartMent(e, index)}
                       className='fieldForm'
                       type="text"
                       required={'required'}
                       value={articleContent?.affiliationDepartment[index]}
                       placeholder="Affiliated Department"
                     />

                   </div>
                 </div>

                 <div className="d-inline-block w-100">
                   <div className="authorAppiLeft">

                     <div className="fieldWrap">
                       <Select
                         selectedValue={articleContent?.affiliationInstitute[index]}
                         options={affiliationsMaster?.map((val) => val?.value)}
                         optionValues={affiliationsMaster?.map((val) => val?.key)}
                         labelclassName="none"
                         name={`affiliatedInstitute${index}`}
                         placeholder="Affiliated Institute/University"
                         handleChange={(e) => handleSelectChangeUniversity(index, e)}
                         required={true}
                         mandatory={false}
                         className={'fieldForm'}
                       />
                       {articleContentError.affiliationInstituteError[index] !== '' && <div className="label-error">{articleContentError.affiliationInstituteError[index]}</div>}
                     </div>



                   </div>
                 </div>


               </div>


             </div>
           ))}


           <div className="fieldMore pt-0 pb-0 text-center mb-25">
             <a onClick={() => addMoreAuthor()}>+ Add Author/Co-Author/Contributor/Editor</a>
           </div>
           
           <DragDropContext onDragEnd={(detl) => onDragEnd(detl)}>
             <Droppable droppableId="droppable"> 
             {(provided, snapshot) => (
               <div
               {...provided.droppableProps}
               ref={provided.innerRef}
              
              
             >
           {editorLength.map((key, index) => (
             
             <div id={`editordiv${index}`} key={key}>
             <Draggable
                   key={key}
                   draggableId={`dragid${index}`}
                   index={index}
                 >
              {(provided, snapshot) => (
             <div className="commanBox mb-25" ref={provided.innerRef}
             {...provided.draggableProps}
             {...provided.dragHandleProps}
            >
             <div className="dragArea"></div>

             {(key >8 && (editorTitleValue[key]?.val!=='Introduction' || editorTitleValue[key]?.val!=='Abstract')) && <i className="imgClose" onClick={() => removeEditor(index)}></i>}
             <div className="fieldWrap">
             {editorTitleValue[key]?.val==='Abstract' && <label className="labelFormTwo">Abstract<small>(word limit - 500 words) </small> <div className="supTag">Mandatory</div></label>}
             {editorTitleValue[key]?.val==='Introduction' &&  <label className="labelFormTwo">Introduction <div className="supTag">Mandatory</div></label>}
             {(editorTitleValue[key]?.val!=='Introduction' && editorTitleValue[key]?.val!=='Abstract') && <Input
                 errors={(editorTitleValueError[key] && editorTitleValueError[key].val!=='')?editorTitleValueError[key].val:''}
                 name={`editorTitle${key}`}
                 handleChange={(e) => handleChangeInputEditorTitle(e, key)}
                 className='fieldForm'
                 type="text"
                 required={'required'}
                 value={editorTitleValue[key]?.val}
                 label=""
                 readOnly={editorTitleValue[key]?.val==='References'?true:false}
                 placeholder="Enter Title"
                
               />}
               <div className="editorWrap"> 
              
                 <GrammarlyEditorPlugin >
                  <SunRichText
                   name={editorTitleValue[key]?.val}
                   value={editorContentValue[key]?.val}
                   handleChange={(content,type) => { editorContent(content,type, key) }}
                   uploadedImg={(imgUrl) => { editorUploadedImg(imgUrl, editorTitleValue[key]) }}
                  />
                 </GrammarlyEditorPlugin >
                 {(editorTitleValue[key]?.val==='Abstract' && articleContentError.abstractError !== '')&& <div className="label-error">{articleContentError.abstractError}</div>}
                 {(editorTitleValue[key]?.val==='Introduction' && articleContentError.introductionError !== '')&& <div className="label-error">{articleContentError.introductionError}</div>}
               </div>
             </div>
           </div>
            )}
           </Draggable>
           </div>
           ))}
            {provided.placeholder}
           </div>
           )}
          </Droppable>
          </DragDropContext>
          
           <div className="fieldMore pt-0 pb-0 text-center mb-25">
             <a onClick={() => addMoreEditor()}>+ Add New Section</a>
           </div>
          

         </div>
       </div>
       <div className="row">
         <div className="col-lg-10 my-3 m-auto">


           {/* <SunRichText
             value={richTextEditor}
             handleChange={setRichTextEditor}
           /> */}
           {/* <SunEditor
                           setOptions={{  
                               height: 300,
                               charCounter : true,
                               charCounterLabel: "character count:",
                               buttonList: [[
                                   "undo",  // we can delete the button from ui which we do not need .
                                   "redo",
                                   "font",   
                                   "fontSize",
                                   "formatBlock",
                                   "paragraphStyle",
                                   "blockquote",
                                   "bold",
                                   "underline",  // we can delete the button from ui which we do not need .
                                   "italic",
                                   "strike",
                                   "subscript",
                                   "superscript",
                                   "fontColor",
                                   "hiliteColor",
                                   "textStyle",
                                   "removeFormat",
                                   "outdent",
                                   "indent",
                                   "align",
                                   "horizontalRule",
                                   "list",
                                   "lineHeight",
                                   "table",
                                   "link",
                                   "image",
                                   "fullScreen",
                                   "showBlocks",
                                   "codeView",
                                   "preview",
                                   "print",
                                   // "video",
                                   // "audio",
                                   // "imageGallery",
                                   // "save",
                                   // "template"
                               ]]
                               
                               // Or Array of button list, eg. [['font', 'align'], ['image']]
                               // plugins: [font] set plugins, all plugins are set by default
                               // Other option
                           }}
                           onChange={onChange}
                           onImageUploadBefore={handleImageUploadBefore}
                           onImageUpload={handleImageUpload}
                           setContents={richTextEditor}

                           // onClick={handleClick}
                           // onInput={handleInput}
                           // onVideoUploadBefore={handleVideoUploadBefore}
                           // onVideoUpload={handleVideoUpload}
                           // onPaste={handlePaste}
                           // setAllPlugins={true}
                           // hideToolbar={true}
                           // setAllPlugins={false}
                       /> */}

           {/* <div className="col-lg-12 mt-3 text-right">
             <button
               className="button button-primary"
               onClick={() => submit()}
             >
               Submit
             </button>
             {unicheckData.similaritycheckId && (
               <>
                 <button
                   style={{ marginLeft: "15px" }}
                   className="button button-primary"
                   onClick={SimilarityCheck}
                 >
                   Check Results
                 </button>

                 {showDownloadbtn === true && (
                   <button
                     style={{ marginLeft: "15px" }}
                     className="button button-primary"
                     onClick={(e) => downloadReport(e)}
                   >
                     Download
                   </button>
                 )}
               </>
             )}
           </div> */}
         </div>
       </div>
     </div>

     <div className='backFooterBox'>
          <div className="backBtnWrap">
            <a onClick={(e) => handleRedirect(e,'/dashboard')}>
              <span>Back</span>
              <img src={backArrow} />
            </a>
          </div>
          </div>
          </div>
    

      <Modal
        show={showResult}
        size="lg"
        id="unicheck-results__modal"
        tabIndex={-1}
        dialogclassName="modal-dialog-centered"
      >
        <Modal.Header>
          <h5 className="modal-title pr-color">Plagarism Report</h5>
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
              <iframe
                style={{
                  border: 0,
                  width: "100%",
                  height: "500px",
                  overflow: "auto",
                }}
                src={unicheckData.url}
              ></iframe>
            </div>
          </div>
          {/* <iframe style={{border: 0, width: '100%', height: '500px', overflow: 'auto'}} src={unicheckData.url}></iframe> */}
        </Modal.Body>
      </Modal>

      <Modal
        show={saveArticleConfirmation}
        size="md md-x"
        id="unicheck-results__modal"
        tabIndex={-1}
        dialogclassName="modal-dialog-centered authorModal"
      >
        <Modal.Header className="modal-header">
          <h5 className="modal-title">Are you sure you want to submit your article?</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={(e) => setsaveArticleConfirmation(false)}
          />
        </Modal.Header>
        <Modal.Body className="pb-0 pt-0">
          <div className="grantDetails submitArticle">
            <div className="row">
              <div className="col-md-12">
                <p>Every article automatically qualifies for Post Publishing open review.</p>
                <p>Once you submit your article, please choose if your article should go through Pre-Publication and/or Post Publication review.</p>
                <p className="mb-3">Based on your choice, the article may or may not go through multiple rounds of review.</p>
              </div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4">
          <span className="btn-link-active" onClick={(e) => setsaveArticleConfirmation(false)}> I will submit later</span>
          <button className="button button-primary" onClick={() => confirmToSubmitArticle()} type="button"  >SUBMIT NOW</button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={cancelArticle}
        size="sm"
        id="unicheck-results__modal"
        tabIndex={-1}
        dialogclassName="modal-dialog-centered authorModal"
      >
        <Modal.Header className="modal-header">
          <h5 className="modal-title">Are you sure you would like to cancel?</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={(e) => setCancelArticle(false)}
          />
        </Modal.Header>
        <Modal.Body className="pb-0">
          <div className="grantDetails pl-2 pr-2 mb-3">
            <div className="row text-center">
                <p className="mb-3">The article will be not be saved. </p> 
                <p>You can ‘Save As Draft’ in case you would like to continue writing at another time.</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4">
          <span className="btn-link-active" onClick={(e) => setCancelArticle(false)}>No, GO BACK</span>
          <button className="button button-primary" type="button"   onClick={(e) => handleRedirect(e, '/draft')}>YES, CANCEL</button>
        </Modal.Footer>
      </Modal>

       



      <Modal
        dialogclassName="modal-dialog-centered modal-sm authorModal"
        show={savedDraftArticle}
        id="congratsMobile"
        tabIndex={-1}
      >
        <Modal.Header className="modal-header">
          <div className="modal-icon">
            {" "}
            <img src={doneSvg} alt="#" />
          </div>
          <h5 className="modal-title">Your article saved in draft successfully</h5>
          <button
            type="button"
            className="btn-close"
            ariaLabel="Close"
            onClick={(e) => handleRedirect(e, '/draft')}
          ></button>
        </Modal.Header>

        <Modal.Footer className="modal-footer pb-3">
          <button className="button button-primary w-50" onClick={(e) => handleRedirect(e, '/draft')}>
            OKAY
          </button>
        </Modal.Footer>
      </Modal>


      {/* Profanity Alert */}
      <Modal
        dialogclassName="modal-dialog-centered modal-sm authorModal authorModalRed"
        show={profanityAlert}
        id="congratsMobile"
        tabIndex={-1}
      >
        <Modal.Header className="modal-header">
          <div className="modal-icon">
            {" "}
            <img src={alertSvg} alt="#" />
          </div>
          <h5 className="modal-title">Profanity Alert</h5>
          <button
            type="button"
            className="btn-close"
            ariaLabel="Close"
            onClick={(e) => setprofanityAlert(false)}
          ></button>
        </Modal.Header>
        <Modal.Body className="pb-0 pt-0 pl-2 pr-2">
        <div className="grantDetails alertPopup">
              <div className="guidelinesText">To make this a safe environment for everyone, kindly follow the <a href="javascript:void(0)">Submission Guidelines</a> and correct your words.</div>
             
              <h4>Words that were found to be offensive:</h4>
              <div className="offensiveBox">
                <ol>
                {profanityWordsFound.map((wrd, index) => (
                  <li>{wrd}</li>
                 
                ))}
                </ol>
              </div>
      </div>
        </Modal.Body>
        

        <Modal.Footer className="modal-footer pb-3">
          <span className="btn-link-active" onClick={() => submitAsDraft()}>SAVE AS DRAFT</span>
          <button className="button button-primary redBtn" type="button"  onClick={(e) => setprofanityAlert(false)}>CORRECT NOW</button>
        </Modal.Footer>
      </Modal>


      {/* Plagiarism Alert */}
      <Modal
        dialogclassName="modal-dialog-centered modal-md authorModal authorModalRed"
        show={plagiarismAlert}
        id="congratsMobile"
        tabIndex={-1}
      >
        <Modal.Header className="modal-header">
          <div className="modal-icon">
            {" "}
            <img src={alertSvg} alt="#" />
          </div>
          <h5 className="modal-title">Plagiarism Alert</h5>
          <button
            type="button"
            className="btn-close"
            ariaLabel="Close"
            onClick={() => setPlagiarismAlert(false)}
          ></button>
        </Modal.Header>
        <Modal.Body className="pb-0">
        <div className="grantDetails alertPopup">
              <div className="guidelinesText">More than 40% of your article was found to be plagiarised. Please reduce it to 10% for submission.</div>
      </div>
        </Modal.Body>

        <Modal.Footer className="modal-footer pb-3">
          <span className="btn-link-active" onClick={() => setPlagiarismAlert(false)}>DO IT LATER</span>
          <button className="button button-primary redBtn" type="button" onClick={() => setPlagiarismAlert(false)}>CORRECT NOW</button>
        </Modal.Footer>
      </Modal>



    </div></Grammarly>
  );
};
export default SunRichTextEditor;
