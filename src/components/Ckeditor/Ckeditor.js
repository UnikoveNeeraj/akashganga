import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import "./Ckeditor.scss"

import React from "react";

const Ckeditor = ({ style, name, handleChange, value, dataId }) => {
    
  const onRead = (editor) => {
    console.log(editor.config);
  };
  return (
    <GrammarlyEditorPlugin clientId="client_K44K3SrGf1arZqCgaNJPLi">
      <div
        className="ckeditorTextarea"
        style={{ minHeight: "80px", ...style }}
        onClick={(e) => e.target.children[0].focus()}
      >
        <CKEditor
          id={dataId}
          className="ckeditorTextarea"
          editor={InlineEditor}
          data={value}
          onReady={onRead}
          onChange={(event, editor) => {
            const data = editor.getData();
            handleChange(dataId, data);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    </GrammarlyEditorPlugin>
  );
};

export default Ckeditor;
