import React from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
const InputWithMarkdown = () => {
  return (
    <div>
      <Editor
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="300px" // 에디터 창 높이
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
        ]}
      ></Editor>
    </div>
  );
};

export default InputWithMarkdown;
