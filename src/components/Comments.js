import React, { useEffect, useState } from "react";
import { COMMENT_DATA_URL, REPLY_DATA_URL } from "../utils/constants";
import { likes, subscribers } from "../utils/helper";

const Comments = ({ snippet, totalReplies, commentId }) => {
  // const { name, text, replies } = data;
  // const like = useSelector((store) => store.App.like);
  // const dispatch = useDispatch();
  // const handleLike = () => {
  //   dispatch(increaseLike());
  // };
  //   const [like, setLike] = useState(0);
  const [showComment, setShowComment] = useState(false);
  const [commentReplies, setCommentReplies] = useState([]);
  const [pageToken, setPageToken] = useState("");
  // console.log(pageToken);
  //   const handleLike = () => {
  //     setLike(like + 1);
  //   };
  useEffect(() => {
    getReplies("");
  }, []);
  async function getReplies(nextPage) {
    const response = await fetch(
      REPLY_DATA_URL + commentId + "&pageToken=" + nextPage
    );
    const data = await response.json();
    // console.log(data);
    setPageToken(data?.nextPageToken);
    data?.items && setCommentReplies([...commentReplies, ...data?.items]);
  }

  return (
    <div>
      <div className="my-4 grid grid-cols-12 ">
        <div className="col-span-1 pl-2">
          <img
            className="rounded-full border w-12 h-12"
            alt="Avatar image"
            src={snippet.authorProfileImageUrl}
          />
        </div>
        <div className="flex flex-col col-span-11">
          <p className="font-semibold text-sm">{snippet?.authorDisplayName}</p>
          <p
            className="text-sm py-1"
            // dangerouslySetInnerHTML={{ __html: snippet?.textDisplay }}
          >
            {snippet?.textDisplay}
          </p>
          <div className="flex my-1 items-center ">
            <div className="flex items-center w-36 ">
              <div>
                <img
                  src={"https://img.icons8.com/ios/50/facebook-like--v1.png"}
                  alt="facebook-like--v1"
                  className="h-7 w-7 cursor-pointer"
                />
              </div>
              <p className="text-center text-sm px-2">
                {likes(snippet?.likeCount)}
              </p>
              <div>
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/000000/facebook-like--v1.png"
                  alt="facebook-like--v1"
                  className="h-7 w-7 cursor-pointer rotate-180 "
                />
              </div>
            </div>
            <p className=" text-sm font-semibold rounded-full hover:bg-slate-200 hover:border w-20 h-8 text-center flex items-center justify-center cursor-pointer">
              Reply
            </p>
          </div>
          {totalReplies > 0 && (
            <div
              className="text-blue-500 w-fit px-3  cursor-pointer font-semibold h-9 hover:bg-slate-200 rounded-full flex items-center justify-center my-2"
              onClick={(e) => setShowComment(!showComment)}>
              <img
                width="20"
                height="40"
                src="https://img.icons8.com/color/48/sort-down.png"
                alt="triangle"
                className={showComment ? "mr-2 rotate-180" : "mr-2 "}
              />
              {totalReplies} {totalReplies === 1 ? "reply" : "replies"}
            </div>
          )}
        </div>
      </div>
      {showComment && (
        <div
          className={
            commentReplies?.length !== 0
              ? "ml-8 pl-4 border-l border-dotted border-l-slate-400"
              : ""
          }>
          {commentReplies?.map((e, index) => (
            <Comments {...e} key={index} />
          ))}
          {pageToken && (
            <div
              className="w-52 h-10 rounded-full flex items-center ml-10 hover:cursor-pointer hover:bg-sky-100 my-5"
              onClick={(e) => getReplies(pageToken)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                className="w-7 h-7 fill-blue-600 mr-1 ml-4">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path>
              </svg>
              <p className="text-blue-600 font-semibold">Show more replies</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const VideoComments = ({ videoId }) => {
  const [commentData, setCommentData] = useState([]);
  const [nextPage, setNextPage] = useState("");
  //   console.log(commentData);
  useEffect(() => {
    getCommentThread(nextPage);
  }, []);
  async function getCommentThread(token) {
    try {
      const response = await fetch(
        COMMENT_DATA_URL + videoId + "&pageToken=" + token
      );
      const data = await response.json();
      //   console.log(data?.items);

      if (data?.nextPageToken) {
        setNextPage(data?.nextPageToken);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
      setCommentData([...commentData, ...data?.items]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextPage]);
  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    if (scrollTop + window.innerHeight === scrollHeight) {
      getCommentThread(nextPage);
    }
  }
  return (
    <div className="w-full">
      {commentData?.map((e) => (
        <Comments
          snippet={e?.snippet?.topLevelComment?.snippet}
          replies={e?.replies?.comments}
          totalReplies={e?.snippet?.totalReplyCount}
          commentId={e?.id}
          key={e?.id}
        />
      ))}
    </div>
  );
};
