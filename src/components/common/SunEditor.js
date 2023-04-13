
import React, { useRef,useEffect, useState } from 'react';

// import html2canvas from 'html2canvas';
import {  UploadMedia } from '../../store/apiCalls/profileDetails';
// import { jsPDF } from "jspdf";

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import "../../containers/autherFlow/personalDetails/PersonalDetails.scss";

import { useDispatch } from 'react-redux';

import katex from 'katex'
import 'katex/dist/katex.min.css'


const SunRichText = ({ hide=false, style, name, handleChange,uploadedImg, value, dataId= ''}) => {
    const dispatch = useDispatch();
    const editor = useRef();
    const getSunEditorInstance = (sunEditor) => {
        editor.current = sunEditor;
    };
    
    useEffect(() => {
       // editor.current.onload.reload(true)

       
    
      }, []);
    function onChange(content) {
       
        console.log('edtr', editor.current);
      
        handleChange(content, 'added')
    }

    function handleImageUploadBefore(files, info, uploadHandler) {
        uploadHandler(files, info)
    }
    const escapeRegExpMatch = function (s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      };
    const isExactMatch = (str, match) => {
        return new RegExp(`\\b${escapeRegExpMatch(match)}\\b`).test(str);
      };
    async function handleImageUpload(targetImgElement, index, state, imageInfo, remainingFilesCount) {
        
        //console.log(imageInfo)
        if(imageInfo && isExactMatch(imageInfo.src, 'base64')){
            try {
                dispatch({ type: 'SET_LOADER', payload: true});
                const formData = new FormData();
                let reader = new FileReader();
                formData.append("baseFile", imageInfo.src);
                const uploadResp = await UploadMedia(formData);
                if(uploadResp.status===200)
                {
                    targetImgElement.src = uploadResp.data.url;
                    uploadedImg(uploadResp.data.url)
                }
                else{
                    alert('s3 bucket upload error')
                }
                dispatch({ type: 'SET_LOADER', payload: false});
            } catch(err) {
                dispatch({ type: 'SET_LOADER', payload: false});
            }
        }
        else if(imageInfo){
            targetImgElement.src = imageInfo.src ;
            uploadedImg(imageInfo.src)
        }
        else if(imageInfo===null){
            
            handleChange(editor.current.getContents(), 'removeImg') 
        }
    }
    function onKeyUp(e) 
    {
         
    }
    
    

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
    function getMenuList()
    {
       const button= [
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
            "math",
            // "video",
            // "audio",
            // "imageGallery",
            // "save",
            // "template"
        ];
        if(name==='Abstract' || name==='Introduction' || name==='References')
        {
            button.splice(25, 1);
        }

        return button;
    }

    return (
        <>
        
    
            
        <SunEditor
            getSunEditorInstance={getSunEditorInstance}
            hide={hide}
            setOptions={{  
                katex:katex ,
                height: 300,
                charCounter : true,
                charCounterLabel: "character count:",
                buttonList: [getMenuList()]
                
                // Or Array of button list, eg. [['font', 'align'], ['image']]
                // plugins: [font] set plugins, all plugins are set by default
                // Other option
            }}
            onChange={onChange}
            onImageUploadBefore={handleImageUploadBefore}
            onImageUpload={handleImageUpload}
            setContents={value}
            onKeyUp={onKeyUp}
           
            // onClick={handleClick}
            // onInput={handleInput}
            // onVideoUploadBefore={handleVideoUploadBefore}
            // onVideoUpload={handleVideoUpload}
            // onPaste={handlePaste}
            // setAllPlugins={true}
            // hideToolbar={true}
            // setAllPlugins={false}
        />


       </>
    );
};
export default SunRichText