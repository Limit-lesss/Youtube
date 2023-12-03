import React, { useEffect } from "react";
import MenuList from "./MenuList";
import { useDispatch, useSelector } from "react-redux";
// import { showSidebar } from "../utils/appSlice";

const SideBar = () => {
  const sideBar = useSelector((store) => store.App.isShowSideBar);
  return sideBar ? (
    <div className="mr-2 mt-20">
      <MenuList />
    </div>
  ) : (
    <></>
  );
};

export default SideBar;
