import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import useVideo from "../utils/useVideo";

const Body = () => {
  const data = useVideo();
  console.log(data[1]);
  return (
    <div className="flex">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
