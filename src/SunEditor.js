
import React, { useRef,useEffect, } from 'react';

// import html2canvas from 'html2canvas';

// import { jsPDF } from "jspdf";

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import katex from 'katex'
import 'katex/dist/katex.min.css'



const SunRichText = ({ hide=false, style, name, handleChange,uploadedImg, value, dataId= ''}) => {
   
    const editor = useRef();
    const getSunEditorInstance = (sunEditor) => {
        editor.current = sunEditor;
    };
    
    useEffect(() => {
       // editor.current.onload.reload(true)

       
    
      }, []);
    function onChange(content) {
       
      
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
        
       
        if(imageInfo && isExactMatch(imageInfo.src, 'base64')){
            try {
                
            } catch(err) {
                
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