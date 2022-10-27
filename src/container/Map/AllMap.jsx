import React from "react";
import MapCom from "../../components/Map/MapCom";
import MapSideCom from "../../components/Map/MapSideCom";
function AllMap() {
  return (
    <div>
      지도 컨테이너 / 지도 컴포넌트 모아놓는곳
      <MapSideCom />
      <MapCom />
    </div>
  );
}

export default AllMap;
