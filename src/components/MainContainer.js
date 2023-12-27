import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="pl-28 mt-20 w-full">
      <ButtonList />
      <Outlet />
    </div>
  );
};

export default MainContainer;
