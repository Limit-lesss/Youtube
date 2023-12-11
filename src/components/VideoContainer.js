import React from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import useVideo from "../utils/useVideo";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const data = useVideo();
  // console.log(data[0]);
  return (
    <div className="grid grid-cols-4 pt-20 gap-2  pr-5">
      {/* <AdVideoCard/> */}
      {data?.map((e) => (
        <Link to={"/watch?v=" + e?.id} key={e.id}>
          <VideoCard  {...e} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
