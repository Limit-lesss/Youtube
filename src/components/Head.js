import React, { useState, useEffect } from "react";
import YoutubeLogo from "../assets/pngwing.com.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import ShowMenu from "./FullMinuList";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cachesResults } from "../utils/searchSlice";
import {addSearch} from "../utils/searchHistory"

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [suggData, setSuggData] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const searchHistory = useSelector(store => store.searchHistory.history);
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
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) setSuggData(searchCache[searchText]);
      else getData(searchText);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  async function getData(text) {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + text);
      const data = await response.json();
      dispatch(cachesResults({ [searchText]: data[1] }));
      setSuggData(data[1]);
    } catch (error) {
      console.log(error);
    }
  }
  const isMenuOpen = useSelector((store) => store.App.isMenuOpen);
  return (
    <div>
      <ShowMenu />
      {isMenuOpen ? disableScroll() : enableScroll()}
      <div className=" py-3  flex justify-between fixed w-screen bg-white z-20 ">
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
          <Link to={"/Youtube"}>
            <img
              src={YoutubeLogo}
              alt="youtube"
              width="120"
              height={"120"}
              className="ml-2"
              onClick={() => window.scrollTo(0, 0)}
            />
          </Link>
        </div>
        <div className="w-3/5  flex  justify-center">
          <div className="relative w-8/12">
            <input
              type="text"
              placeholder="Search"
              className="h-11 w-full rounded-l-full border border-slate-300 px-5 pr-9 text-lg outline-1 outline-blue-400 group "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onFocus={(e) => setShowSugg(true)}
              onBlur={(e) => setShowSugg(false)}
            />
            {showSugg && suggData?.length != 0 && (
              <div className="w-full bg-white shadow-2xl border absolute top-12 rounded-lg py-3 text-lg font-medium">
                {suggData?.map((e, index) => (
                  <div
                    key={index}
                    className="flex items-center w-full hover:bg-slate-300 py-1 cursor-default"
                    onMouseDown={(event) => {
                      // event.preventDefault();
                      dispatch(addSearch(e));
                      setSearchText(e);
                      navigate("/Youtube/results?search_query=" + e);
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      focusable="false"
                      className="ml-4">
                      <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                    </svg>
                    <p className="pl-3 w-full">{e}</p>
                  </div>
                ))}
              </div>
            )}
            {searchText.length > 0 && (
              <span
                className="absolute top-0 right-0 text-xl font-semibold hover:bg-slate-400 rounded-full w-11 h-11 flex justify-center items-center hover:bg-opacity-50 cursor-pointer text-slate-600"
                onClick={(e) => setSearchText("")}>
                X
              </span>
            )}
          </div>
          <span className=" w-20 bg-slate-300  rounded-r-full h-11 flex justify-center items-center cursor-pointer">
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
