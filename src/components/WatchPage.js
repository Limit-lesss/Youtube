import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseLike, showSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { commentData } from "../utils/constants";



const Comments = ({ name, text, replies }) => {
  // const { name, text, replies } = data;
  // const like = useSelector((store) => store.App.like);
  // const dispatch = useDispatch();
  // const handleLike = () => {
  //   dispatch(increaseLike());
  // };
  const [like, setLike] = useState(0);
  const [showComment, setShowComment] = useState(true);
  const handleLike = () => {
    setLike(like + 1);
  };
  return (
    <div>
      <div className="my-4 flex">
        <div className="mr-5">
          <img
            className="rounded-full border-2"
            alt="Avatar image"
            height="44"
            width="44"
            src="https://yt3.ggpht.com/mAP2zvvI0nShwQ3LMk5Qllot8-OKAq7879BBwqeq6CMaeQ9onnQRfVTd6M6VynPsFNXAokZkqA=s88-c-k-c0x00ffffff-no-rj"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-sm">@{name}</p>
          <p className="">{text}</p>
          <div className="flex my-1 items-end">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/facebook-like--v1.png"
              alt="facebook-like--v1"
              className="h-7 w-7 cursor-pointer"
              onClick={(e) => handleLike()}
            />
            <p className="mx-2 w-6 text-center text-sm">{like}</p>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/000000/facebook-like--v1.png"
              alt="facebook-like--v1"
              className="h-7 w-7 cursor-pointer rotate-180 "
            />
            <p className="mx-4 text-sm font-semibold rounded-full hover:bg-slate-200 hover:border w-20 h-8 text-center flex items-center justify-center cursor-pointer">
              Reply
            </p>
          </div>
          {replies.length > 0 && (
            <div
              className="text-sky-500 w-24 cursor-pointer font-semibold h-9 hover:bg-slate-200 rounded-full flex items-center justify-center my-2"
              onClick={(e) => setShowComment(!showComment)}>
              {replies.length} {replies.length === 1 ? "reply" : "replies"}
            </div>
          )}
        </div>
      </div>
      {showComment && (
        <div
          className={
            replies.length !== 0
              ? "ml-4 pl-4 border-l border-dotted border-l-slate-400"
              : ""
          }>
          {replies?.map((e, index) => (
            <Comments {...e} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");
  // console.log(searchParams.get("v"));
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(showSidebar(false));
  //   window.scrollTo(0,0);
  //   return () => {
  //     dispatch(showSidebar(true));
  //   };
  // }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col pl-8">
      <div className="pt-20 ">
        {
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + params + "?autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen="allowFullScreen"
            className="rounded-2xl"></iframe>
        }
      </div>
      <div className="mt-5 pb-5">
        <h1 className="text-xl font-medium ">Comments:</h1>
        {commentData?.map((e, index) => (
          <Comments {...e} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
