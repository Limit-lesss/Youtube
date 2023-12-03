import React from "react";
import VideoCard from "./VideoCard";
import useVideo from "../utils/useVideo";

const VideoContainer = () => {
  const data = useVideo();
  return (
    <div className="grid grid-cols-4 pt-20 gap-2  pr-5">
      {data?.map((e) => (
          <VideoCard  key={e.id} {...e}/>
        ))}
    </div>
  );
};

export default VideoContainer;
