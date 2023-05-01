
import React, { useState } from "react";
import {Grammarly,GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react"; 
import SunRichText from "./SunEditor";
import './App.css';




const SubmitArticle = ({ }) => {

 
  const [editorLength, seteditorLength] = useState([0]);
  const [editorTitleValue, seteditorTitleValue] = useState([
    { val: "Introduction" },
    
    
  ]);
  const [editorContentValue, seteditorContentValue] = useState([
    { val: "" },
    
  ]);
  
  function editorContent(content, type, key) {  
   
    const data = editorContentValue;
    
      data[key].val = content;
      seteditorContentValue([...data]);
    
  }
  function addMoreEditor() {
    const data = editorLength;
   
    const editorContent = editorContentValue;
    const editorTitle = editorTitleValue;
   
    data.push(editorLength.length);
    seteditorLength([...data]);
  
    editorContent.push({ val: "" });
    editorTitle.push({ val: "eferwe"+editorLength.length });
    seteditorTitleValue([...editorTitle]);
    seteditorContentValue([...editorContent]);
   
  }

  return (
    <div className="App">
     
      <div>
        <Grammarly clientId={'client_UeEQaQ5bQCDA4FRBgkRv7w'}
                  config={{
                    documentDialect: "british",
                    activation: "immediate"
                  }}>
        {editorLength.map((key, index) => (
        <GrammarlyEditorPlugin >
                   <SunRichText
                      name={editorTitleValue[key]?.val}
                      value={editorContentValue[key]?.val}
                      handleChange={(content, type) => {
                        editorContent(content, type, key);
                      }}
                      uploadedImg={(imgUrl) => {
                        
                      }}
                    />
                    </GrammarlyEditorPlugin >
        ))}
                    </Grammarly>


                    <div className="fieldMore pt-0 pb-0 text-center mb-25">
                <a onClick={() => addMoreEditor()}>+ Add New Section</a>
              </div>
        </div>
    </div>
  );
}

export default SubmitArticle;
