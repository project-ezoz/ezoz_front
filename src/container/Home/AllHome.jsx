import React from "react";
import HomeHeader from "./HomeHeader";
import HomePost from "./HomePost";
import HomeInterview from "./HomeInterview";
import HomeMap from "./HomeMap";
import HomeApply from "./HomeApply";
function AllHome() {
  return (
    <div>
      <HomeHeader />
      <HomePost />
      <HomeInterview />
      <HomeMap />
      <HomeApply />
    </div>
  );
}

export default AllHome;
