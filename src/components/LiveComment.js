import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveComment = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      //! Api polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  const message = useSelector((store) => store.chat.message);
  return (
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
      <div className="border-x border-b rounded-b-2xl h-14 border-slate-600 flex justify-center items-center  ml-5 font-medium ">
        Hide Chat
      </div>
    </>
  );
};

export default LiveComment;
