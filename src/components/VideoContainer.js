import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import useVideo from "../utils/useVideo";
import { Link, ScrollRestoration } from "react-router-dom";
import BodyShimmer from "./BodyShimmer";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { scrollTo } from "../utils/scrollSlice";
import { addPageToken, addVideo } from "../utils/videoSlice";

const VideoContainer = () => {
  const videoList = useSelector((store) => store.video.videoList);
  const scroll = useSelector((store) => store.scroll.scrollData);
  const pageToken = useSelector((store) => store.video.pageToken);
  // const data = useVideo();
  // const [youtubeData, setYoutubeData] = useState([]);
  // const [pageToken, setPageToken] = useState("");
  const [showLoading, setShowLoading] = useState(true);
  // scroll.scrollLeft, scroll.scrollTop
  useEffect(() => {
    window.scrollTo(scroll.scrollLeft, scroll.scrollTop);
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (videoList.length === 0) {
      getYoutubeData("");
    }
  }, []);

  async function getYoutubeData(nextPage) {
    const response = await fetch(YOUTUBE_VIDEOS_API + "&pageToken=" + nextPage);
    const data = await response.json();
    dispatch(addVideo(data?.items));
    if (data.nextPageToken) {
      dispatch(addPageToken(data.nextPageToken));
    } else {
      console.log("No more pages available.");
      setShowLoading(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setShowLoading(true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageToken]);
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop + window.innerHeight === scrollHeight) {
      getYoutubeData(pageToken);
      // setShowLoading(false);
    }
  };
  const scrollRestorationHandle = () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft;
    dispatch(scrollTo({ scrollTop, scrollLeft }));
  };

  return videoList.length === 0 ? (
    <BodyShimmer />
  ) : (
    // <></>
    <div className="">
      <div className="grid grid-cols-4 pt-20 gap-2  pr-5 relative">
        {/* <AdVideoCard/> */}
        {videoList?.map((e, index) => (
          <Link
            to={"/Youtube/watch?v=" + e?.id}
            key={e?.id}
            onClick={(e) => scrollRestorationHandle()}>
            <VideoCard {...e} />
          </Link>
        ))}
        {showLoading && (
          <div className="text-center absolute -bottom-8 left-2/4">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/synchronize.png"
              alt="synchronize"
              className="animate-spin "
            />
            <div className="text-lg font-semibold text-sky-800">Loading</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
