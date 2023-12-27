import React, { useEffect, useState } from "react";
import useVideo from "../utils/useVideo";
import { duration, findTimeDiff, views } from "../utils/helper";
import { YOUTUBE_CHANNEL_URL, YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoCard = ({ snippet, statistics, contentDetails }) => {
  const [channelImg, setChannelImg] = useState("");
  useEffect(() => {
    getChannelData();
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
  return (
    <div className=" my-3 rounded-lg p-2 cursor-pointer">
      <div className="relative">
        <img
          src={
            snippet?.thumbnails?.maxres?.url ||
            snippet?.thumbnails?.high?.url ||
            snippet?.thumbnails?.standard?.url
          }
          alt="video"
          className="rounded-md"
        />
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 rounded-md text-white py-0.5 px-2 text-sm font-medium">
          {duration(contentDetails?.duration)}
        </div>
      </div>
      <div className="grid grid-cols-10  mt-3">
        <div className="col-span-2 ">
          <img
            src={channelImg}
            alt=""
            className="w-14 h-14 border rounded-full"
          />
        </div>
        <div className=" col-span-8 px-2">
          <p className="text-base font-semibold text-slate-800 text-wrap  line-clamp-2">
            {snippet?.title}
          </p>
          <p className="text-slate-500 font-medium mt-1">
            {snippet?.channelTitle}
          </p>
          <div className="flex items-center">
            <p className="text-slate-500 font-medium">
              {views(statistics?.viewCount)} views
            </p>
            <p className="h-3 flex items-center justify-center mx-1  w-3 text-slate-500 font-medium">
              &#x2022;
            </p>
            <p className="text-slate-500 font-medium">
              {findTimeDiff(snippet?.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const AdVideoCard = () => {
  const data = useVideo();
  return (
    data[0] && (
      <div className="p-0 border border-red-900">
        <VideoCard {...data[0]} />
      </div>
    )
  );
};
export default VideoCard;
