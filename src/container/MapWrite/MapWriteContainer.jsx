import React from "react";
import InputWithLabel from "../../components/MapWrite/InputWithLabel";
import InputWithMarkdown from "../../components/MapWrite/InputWithMarkdown";
import SendButton from "../../components/MapWrite/SendButton";

const MapWriteContainer = () => {
  return (
    <div>
      <InputWithLabel placeholder="제목을 입력해주세요" />
      <InputWithLabel placeholder="위치를 등록해주세요" />
      <InputWithMarkdown />
      <SendButton />
    </div>
  );
};

export default MapWriteContainer;
