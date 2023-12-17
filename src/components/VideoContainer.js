import React from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import useVideo from "../utils/useVideo";
import { Link, ScrollRestoration } from "react-router-dom";
import BodyShimmer from "./BodyShimmer";

const VideoContainer = () => {
  const data = useVideo();
  return data.length === 0 ? <BodyShimmer/>:(
    <div className="grid grid-cols-4 pt-20 gap-2  pr-5">
      {/* <AdVideoCard/> */}
      {data?.map((e) => (
        <Link to={"/Youtube/watch?v=" + e?.id} key={e.id}>
          <VideoCard {...e} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
