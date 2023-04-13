import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import tinymce from 'tinymce/tinymce'
// import XMLHttpRequest from "xmlhttprequest"


import 'tinymce/models/dom/model'
// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin.min.css';

import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/image';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';

// importing plugin resources
import 'tinymce/plugins/emoticons/js/emojis';


import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.min.css';

// Content styles, including inline UI like fake cursors
// eslint import/no-webpack-loader-syntax: off /
// import contentCss from '!!raw-loader!tinymce/skins/content/default/content.min.css';
// import contentUiCss from '!!raw-loader!tinymce/skins/ui/oxide/content.min.css';





const RichTextEditor = ({ style, name, handleChange, value, dataId }) => {

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    const example_image_upload_handler = (blobInfo, progress) => new Promise((resolve, reject) => {
       
        console.log("blobInfo-------",blobInfo.blob())
       
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', 'postAcceptor.php');
      
        xhr.upload.onprogress = (e) => {
          progress(e.loaded / e.total * 100);
        };
      
        xhr.onload = () => {
          if (xhr.status === 403) {
            reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
            return;
          }
      
          if (xhr.status < 200 || xhr.status >= 300) {
            reject('HTTP Error: ' + xhr.status);
            return;
          }
      
          const json = JSON.parse(xhr.responseText);
      
          if (!json || typeof json.location != 'string') {
            reject('Invalid JSON: ' + xhr.responseText);
            return;
          }
      
          resolve(json.location);
        };
      
        xhr.onerror = () => {
          reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
        };
      
        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
      
        xhr.send(formData);
      });
      
      tinymce.init({
        selector: 'textarea',  // change this value according to your HTML
        images_upload_handler: example_image_upload_handler
      });


    const handleImageUpload =  (blobInfo, success, failure, progress) => {
       console.log("progress:",progress)
        // console.log("handleImageUpload:",  blobInfo.blob(), success, failure, progress)

        example_image_upload_handler(blobInfo,progress)
     
       
        // const formData = new FormData();
        // formData.append('file', blobInfo.blob(),blobInfo.filename());
        // fetch('postAcceptor.php', {
        //   method: 'POST',
        //   body: formData
        // })
        // .then(response => response.json())
        // .then(result => {
        //     console.log("result",result)
        //   success(result.location);
        // })
        // .catch(error => {
        //     console.log("error-------------:",error)
        //   failure('Image upload failed');
        // });
    };

    const filePickerCallBack = (callback, value, meta) => {

        console.log("callback, value, meta::", callback, value, meta)
        // Provide file and text for the link dialog
        if (meta.filetype == 'file') {
            callback('mypage.html', { text: 'My text' });
        }

        // Provide image and alt text for the image dialog
        if (meta.filetype == 'image') {
            callback('myimage.jpg', { alt: 'My alt text' });
        }

        // Provide alternative source and posted for the media dialog
        if (meta.filetype == 'media') {
            callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
        }

    }


    return (
      <>  
            <div >
                <Editor
                    apiKey="29yzlt0ntlt35wr0alzxdmnzv4aate6lskylxgylzqhb7tuj"
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{

                        selector: 'textarea',
                        plugins: 'anchor autolink code charmap codesample emoticons image editimage link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                        toolbar: 'tableofcontents | undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat | insertfile image link | code',
                        // tinycomments_mode: 'embedded',
                        // tinycomments_author: 'Author name',
                        // height: 500,
                        // menubar: false,
                        // image_caption: true,
                        // content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                        // images_upload_url: 'postAcceptor.php',

                        // we override default upload handler to simulate successful upload
                        // images_upload_handler: function (blobInfo, success, failure) {
                        //     console.log('=====', blobInfo, success, failure)
                        //     // setTimeout(function() {
                        //     //   // no matter what you upload, we will turn it into TinyMCE logo :)

                        //     //   success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
                        //     // }, 2000);
                        // }



                        // height: 500,

                        // images_file_types: 'jpg,svg,webp',
                        // selector: 'textarea',  // change this value according to your HTML
                        // file_picker_types: 'file image media',
                        // automatic_uploads: true,
                        // images_reuse_filename: true,
                        // block_unsupported_drop: false,
                        // images_upload_url: 'postAcceptor.php',
                        // images_upload_credentials: true, // the URL for handling image uploads
                        // images_upload_handler: handleImageUpload,
                        // file_picker_callback: filePickerCallBack,

                        // paste_data_images: true

                        height: 500,
                        menubar: false,
                        // plugins: [
                        //   'image'
                        // ],
                        // toolbar: 'undo redo | image',
                        images_upload_url: 'postAcceptor.php', // the URL for handling image uploads
                        images_upload_handler: handleImageUpload


                    }}


                />
                <button onClick={log}>Log editor content</button>
            </div>
        </>
    );
}

export default RichTextEditor;