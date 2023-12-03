import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showSidebar(false));
    return () => {
      dispatch(showSidebar(true));
    };
  }, []);
  return (
    <div className="pt-20 pl-8">
      <iframe
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + params}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        allowFullScreen="allowFullScreen" 
        className="rounded-2xl"></iframe>
    </div>
  );
};

export default WatchPage;
