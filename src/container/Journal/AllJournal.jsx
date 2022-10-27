import React from "react";
import Category from "../../components/Jounal/Category";
import InputSearch from "../../components/Jounal/InputSearch";
import Article from "../../components/Jounal/Article";
import PostButton from "../../components/Jounal/PostButton";

function AllJournal() {
  return (
    <div>
      저널 컨테이너 / 저널 컴포넌트 모아놓는곳
      <Category />
      <InputSearch />
      <Article />
      <PostButton />
    </div>
  );
}

export default AllJournal;
