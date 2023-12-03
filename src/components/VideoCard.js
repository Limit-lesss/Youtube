import React from "react";

const VideoCard = ({ snippet, statistics }) => {
  const viewCount = statistics?.viewCount;
  console.log(viewCount?.length);
  let views;
  if (viewCount?.length > 7) {
    views = Math.round(parseInt(viewCount) / 1000000);
    views += "M";
  } else if (viewCount?.length > 6) {
    views = (parseInt(viewCount) / 1000000).toFixed(1);
    views += "M";
  } else {
    views = (parseInt(viewCount) / 1000).toFixed(1);
    views += "K"
  }
  return (
    <div className=" my-3 rounded-lg p-2 cursor-pointer">
      <div>
        <img
          src={snippet?.thumbnails?.maxres?.url}
          alt="video"
          className="rounded-md"
        />
      </div>
      <div className="flex items-center mt-2">
        <div>
          {/* <p className="w-10 h-10 rounded-full bg-slate-400 mx-0"></p> */}
        </div>
        <div className="p-2 ">
          <p className="text-base font-semibold text-slate-800 ">
            {snippet?.title?.length >= 50
              ? snippet?.title?.slice(0, 50) + " &..."
              : snippet?.title}
          </p>
          <p className="text-slate-500 font-medium mt-1">
            {snippet?.channelTitle}
          </p>
          <p className="text-slate-500 font-medium mt-1">{views} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
