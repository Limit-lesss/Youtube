import React,{useEffect} from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import useVideo from "../utils/useVideo";
import { Outlet } from "react-router-dom";
import {useDispatch} from "react-redux"
import { showSidebar } from "../utils/appSlice";
const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
