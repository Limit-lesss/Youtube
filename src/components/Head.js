import React, { useState } from "react";
import YoutubeLogo from "../assets/pngwing.com.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import ShowMenu from "./FullMinuList";
const Head = () => {
  const [searchText, setSearchText] = useState("");
  // const [showFullSideBar, setShowFullSideBar] = useState(false);
  function disableScroll() {
    const scrollLeft = document.documentElement.scrollLeft;
    const scrollTop = document.documentElement.scrollTop;
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = function () {};
  }
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const isMenuOpen = useSelector(store => store.App.isMenuOpen);
  return (
    <div>
      <ShowMenu/>
      {isMenuOpen ? disableScroll() : enableScroll()}
      <div className="border py-3  flex justify-between fixed w-screen bg-white z-10 ">
        <div className="flex w-1/5  ml-1 items-center ">
          <span
            className="hover:bg-slate-300 w-12 h-12 rounded-full mx-4 flex items-center justify-center hover:cursor-pointer"
            onClick={(e) => handleToggleMenu()}>
            <img
              width="25"
              className="h-5 "
              src="https://img.icons8.com/ios/50/menu--v7.png"
              alt="menu"
            />
          </span>
          <img
            src={YoutubeLogo}
            alt="youtube"
            width="120"
            height={"120"}
            className="ml-2"
          />
        </div>
        <div className="w-3/5  flex  justify-center">
          <div className="relative w-8/12">
            <input
              type="text"
              placeholder="Search"
              className="h-11 w-full rounded-l-full border border-slate-300 px-5 pr-9 text-lg outline-1 outline-blue-400"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText.length > 0 && (
              <span
                className="absolute top-0 right-0 text-3xl font-light hover:bg-slate-400 rounded-full w-11 h-11 flex justify-center items-center hover:bg-opacity-60 cursor-pointer text-slate-600"
                onClick={(e) => setSearchText("")}>
                X
              </span>
            )}
          </div>
          <span className=" w-20 bg-slate-300  rounded-r-full h-11 flex justify-center items-center">
            <img
              width="25"
              height="20"
              src="https://img.icons8.com/ios-glyphs/30/search--v1.png"
              alt="search--v1"
            />
          </span>
          <span className="border bg-slate-300 rounded-full w-11 h-11 flex justify-center items-center mx-3 ">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/microphone.png"
              alt="microphone"
            />
          </span>
        </div>
        <div className="w-1/5  flex items-center justify-end">
          <span className="hover:cursor-pointer hover:bg-slate-300 rounded-full p-2.5">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/android/48/575757/appointment-reminders.png"
              alt="notification"
            />
          </span>
          <div className=" mx-6 mr-8 flex items-center w-28 h-10 rounded-full border border-slate-500 hover:cursor-pointer hover:bg-sky-100 hover:border-sky-100">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency-systems-filled/48/075CEC/user-male-circle.png"
              alt="user-profile"
              className="mx-2"
            />
            <p className="text-base font-medium text-blue-600">Sign in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
