import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseLike, showSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  VIDEO_DATA_URL,
  YOUTUBE_CHANNEL_URL,
  commentData,
} from "../utils/constants";
import LiveComment from "./LiveComment";
import { subscribers } from "../utils/helper";
import Comments, { VideoComments } from "./Comments";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");
  const [videoData, setVideoData] = useState([]);
  const { snippet, statistics } = videoData;
  const [channelData, setChannelData] = useState([]);
  useEffect(() => {
    getVideoData();
  }, []);
  async function getVideoData() {
    const response = await fetch(VIDEO_DATA_URL + params);
    const data = await response.json();
    data?.items && setVideoData(data?.items[0]);
  }
  useEffect(() => {
    getChannelData();
  }, [videoData]);
  async function getChannelData() {
    try {
      const response = await fetch(YOUTUBE_CHANNEL_URL + snippet?.channelId);
      const data = await response.json();
      data?.items && setChannelData(data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col pl-8">
      <div className="pt-20 flex h-[700px]  ">
        <div>
          {
            <iframe
              width="900"
              height="500"
              // src={"https://www.youtube.com/embed/" + params + "?autoplay=1"}
              src={"https://www.youtube.com/embed/" + params}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen="allowFullScreen"
              className="rounded-2xl"></iframe>
          }
          <div className="w-full bg-white rounded-lg py-2">
            <p className="text-xl font-medium ml-1 truncate">
              {snippet?.title}
            </p>
            <div className="flex items-center pt-4">
              <img
                src={
                  channelData?.snippet?.thumbnails?.default?.url ||
                  channelData?.snippet?.thumbnails?.medium?.url ||
                  channelData?.snippet?.thumbnails?.high?.url
                }
                className="w-12 h-12 rounded-full"
                alt=""
              />
              <div className="mx-3 ">
                <p className="font-semibold ">{snippet?.channelTitle}</p>
                <p className="text-sm pt-0.5 text-slate-500">
                  {subscribers(channelData?.statistics?.subscriberCount)}{" "}
                  subscribers
                </p>
              </div>
              <div className="mx-5">
                <button className="w-28 h-10 bg-black text-white rounded-full">
                  Subscribe
                </button>
              </div>
              <div className="w-44 h-10 border flex justify-around rounded-full items-center ml-24 bg-slate-200 px-1">
                <div className="flex items-center ">
                  <img
                    width="50"
                    height="50"
                    src={
                      statistics?.likeCount > 0
                        ? "https://img.icons8.com/ios-filled/50/343434/facebook-like.png"
                        : "https://img.icons8.com/ios/50/facebook-like--v1.png"
                    }
                    alt="facebook-like--v1"
                    className="h-7 w-7 cursor-pointer "
                  />
                </div>
                <p className="text-sm font-medium border-r border-slate-400 p-1 pl-0 pr-2">
                  {subscribers(statistics?.likeCount)}
                </p>
                <div className="">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios/50/facebook-like--v1.png"
                    alt="facebook-like--v1"
                    className="h-7 w-7 cursor-pointer rotate-180 "
                  />
                </div>
              </div>
              <div className="w-24 h-10 border flex rounded-full items-center bg-slate-200 mx-3 pl-2">
                <img
                  width="26"
                  height="50"
                  src="https://img.icons8.com/ios/50/forward-arrow.png"
                  alt="forward-arrow"
                />
                <p className="font-md mx-1 text-sm">Share</p>
              </div>
              <div className="w-28 h-10 border flex rounded-full items-center bg-slate-200 ">
                <img
                  width="25"
                  height="32"
                  src="https://img.icons8.com/small/32/download--v1.png"
                  alt="download--v1"
                  className="pl-1 ml-1"
                />
                <p className="font-md mx-1 text-sm">Download</p>
              </div>
            </div>
          </div>
        </div>
        <div><LiveComment /></div>
      </div>
      <div className="mt-5 pb-5 w-[900px]">
        <h1 className="text-xl font-semibold ">
          {statistics?.commentCount} Comments:
        </h1>
        <VideoComments videoId={params} />
      </div>
    </div>
  );
};

export default WatchPage;
