import React, { useEffect, useState } from "react";
import {
  VIDEO_DATA_URL,
  YOUTUBE_CHANNEL_URL,
  YOUTUBE_VIDEOS_API,
} from "../utils/constants";
import { findTimeDiff, views, duration } from "../utils/helper";

const SearchResultVideo = ({ snippet, videoId }) => {
  const [channelImg, setChannelImg] = useState("");
  const [videoDetail, setVideoDetail] = useState([]);
  const { statistics } = videoDetail;
//   console.log(videoDetail);
  useEffect(() => {
    getChannelData();
    getVideoDetail();
  }, []);
  async function getChannelData() {
    try {
      const response = await fetch(YOUTUBE_CHANNEL_URL + snippet?.channelId);
      const data = await response.json();
      data?.items && setChannelImg(
        data?.items[0]?.snippet?.thumbnails?.default?.url ||
          data?.items[0]?.snippet?.thumbnails?.high?.url ||
          data?.items[0]?.snippet?.thumbnails?.medium?.url
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function getVideoDetail() {
    try {
      const response = await fetch(VIDEO_DATA_URL + videoId);
      const data = await response.json();
      data?.items && setVideoDetail(data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex py-2 my-3 w-full pr-5">
      <div className="relative">
        <img
          src={
            videoDetail?.snippet?.thumbnails?.maxres?.url ||
            videoDetail?.snippet?.thumbnails?.standard?.url ||
            videoDetail?.snippet?.thumbnails?.high?.url
          }
          alt="video"
          className="rounded-xl w-96 h-56"
        />
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 rounded-md text-white py-0.5 px-2 text-sm font-medium">
          {videoDetail?.contentDetails?.duration && duration(videoDetail?.contentDetails?.duration)}
        </div>
      </div>
      <div className="mx-5 mt-2">
        <p className="text-lg font-medium">{snippet?.title}</p>
        <p className="text-sm text-slate-500 ">
          {views(statistics?.viewCount)} views{" "}
          <span className="mx-1">&#x2022;</span>{" "}
          {findTimeDiff(videoDetail?.snippet?.publishedAt)}
        </p>
        <div className="flex items-center">
          <div className="">
            <img
              src={channelImg}
              alt=""
              className="w-10 h-10 rounded-full my-2"
            />
          </div>
          <div className="text-slate-500 text-sm mx-2">
            {snippet?.channelTitle}
          </div>
        </div>
        <div className="truncate text-sm text-slate-600 mt-2">{snippet?.description}</div>
      </div>
    </div>
  );
};

export default SearchResultVideo;
