import React from "react";
import HomePost from "./HomePost";
import HomeInterview from "./HomeInterview";
import HomeMap from "./HomeMap";
import HomeApply from "./HomeApply";
import HomeCarousel from "./HomeCarousel";
function AllHome() {
  return (
    <div>
      <HomeCarousel />
      <HomePost />
      <HomeMap />
      <HomeInterview />
      <HomeApply />
    </div>
  );
}

export default AllHome;
