import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, clearMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveComment = () => {
  const message = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState(true);
  const [chatText, setChatText] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      //! Api polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1000);
    return () => {
      clearInterval(timer);
      dispatch(clearMessage());
    };
  }, []);

  return showComment ? (
    <>
      <div className="h-[500px] w-[450px] border rounded-t-2xl border-slate-600 ml-5">
        <div className="border-b h-12 border-slate-600 p-3 pl-5 font-medium">
          Live Chat
        </div>
        {/*//! Live chat */}
        <div className="overflow-y-scroll h-[450px] border flex flex-col-reverse">
          {message?.map((e, index) => (
            <div
              key={index}
              className="flex  px-2 py-1 hover:bg-slate-300 hover:cursor-pointer">
              <div className="h-9 w-14 ">
                <img
                  className="rounded-full border-2"
                  alt="Avatar image"
                  height="34"
                  width="34"
                  src="https://yt3.ggpht.com/mAP2zvvI0nShwQ3LMk5Qllot8-OKAq7879BBwqeq6CMaeQ9onnQRfVTd6M6VynPsFNXAokZkqA=s88-c-k-c0x00ffffff-no-rj"
                />
              </div>
              <p className=" w-96 ">
                {" "}
                <span className="mr-3 text-red-800 font-medium">{e.name}</span>
                {e.message}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-x border-b  h-16 border-slate-600 flex justify-center items-center  ml-5">
        <input
          type="text"
          className="border-slate-600 border w-full h-10 rounded-full pl-3 outline-none text-lg ml-2 placeholder:text-slate-600"
          placeholder="Chat..."
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(
                addMessage({
                  name: "Genius",
                  message: chatText,
                })
              );
              setChatText("");
            }
          }}
        />
        <div
          className=" hover:bg-slate-200 rounded-full p-2.5 flex justify-center items-center border-slate-600 mx-3 hover:cursor-pointer"
          onClick={(e) => {
            dispatch(
              addMessage({
                name: "Genius",
                message: chatText,
              })
            );
            setChatText("");
          }}>
          <img
            width="29"
            src="https://img.icons8.com/small/64/sent.png"
            alt="sent"
            className=""
          />
        </div>
      </div>
      <div className="border-x border-b rounded-b-2xl h-14 border-slate-600 flex justify-center items-center  ml-5 font-medium ">
        <div
          className="hover:bg-slate-300 mx-2 w-full text-center py-2 rounded-full hover:cursor-pointer"
          onClick={(e) => setShowComment(false)}>
          {" "}
          Hide Chat
        </div>
      </div>
    </>
  ) : (
    <div
      className="hover:bg-slate-300 border border-slate-600 w-[450px] hover:cursor-pointer ml-5  text-center py-2 rounded-full"
      onClick={(e) => setShowComment(true)}>
      Show chat replay
    </div>
  );
};

export default LiveComment;
