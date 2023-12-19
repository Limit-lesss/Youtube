import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import useVideo from "../utils/useVideo";
import { Link, ScrollRestoration } from "react-router-dom";
import BodyShimmer from "./BodyShimmer";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoContainer = () => {
  // const data = useVideo();
  const [youtubeData, setYoutubeData] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    getYoutubeData("");
  }, []);
  async function getYoutubeData(nextPage) {
    const response = await fetch(YOUTUBE_VIDEOS_API + "&pageToken=" + nextPage);
    const data = await response.json();
    setYoutubeData([...youtubeData, ...data?.items]);
    if (data.nextPageToken) {
      setPageToken(data.nextPageToken);
    } else {
      console.log("No more pages available.");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setShowLoading(true);
    return () => {
      setShowLoading(false);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageToken]);
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop + window.innerHeight === scrollHeight) {
      getYoutubeData(pageToken);
    }
  };
  return youtubeData.length === 0 ? (
    <BodyShimmer />
  ) : (
    <>
      <div className="grid grid-cols-4 pt-20 gap-2  pr-5">
        {/* <AdVideoCard/> */}
        {Array.from(new Set(youtubeData))?.map((e, index) => (
          <Link to={"/Youtube/watch?v=" + e?.id} key={e?.id}>
            <VideoCard {...e} />
          </Link>
        ))}
      </div>
      {showLoading && (
        <div className="w-full text-center ">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/synchronize.png"
            alt="synchronize"
            className="animate-spin mx-auto"
          />
          <div className="text-lg font-semibold text-sky-800">Loading</div>
        </div>
      )}
    </>
  );
};

export default VideoContainer;
