import React from "react";
import { useState, useRef, useEffect } from "react";
import { BUTTON_LIST, YOUTUBE_VIDEOS_API } from "../utils/constants";

const ButtonList = () => {
  const [leftArrowDisable, setLeftArrowDisable] = useState(false);
  const [rightArrowDisable, setRightArrowDisable] = useState(true);
  const elementRef = useRef(null);
  useEffect(() => {
    const handleElementScroll = () => {
      if (
        elementRef.current.scrollLeft + elementRef.current.clientWidth ===
        elementRef.current.clientWidth
      ) {
        setLeftArrowDisable(false);
      } else if (
        elementRef.current.scrollLeft + elementRef.current.clientWidth ===
        elementRef.current.scrollWidth
      ) {
        setRightArrowDisable(false);
      } else {
        setLeftArrowDisable(true);
        setRightArrowDisable(true);
      }
    };
    elementRef.current?.addEventListener("scroll", handleElementScroll);
    return () => {
      elementRef.current?.removeEventListener("scroll", handleElementScroll);
    };
  }, []);
  function handleHorizantalScroll(element, speed, distance, step) {
    let scrollAmount = 0;
    const sliderId = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(sliderId);
      }
      if (element.scrollLeft + element.clientWidth === element.clientWidth) {
        setLeftArrowDisable(false);
      } else if (
        element.scrollLeft + element.clientWidth ===
        element.scrollWidth
      ) {
        setRightArrowDisable(false);
      } else {
        setLeftArrowDisable(true);
        setRightArrowDisable(true);
      }
    }, speed);
  }
  return (
    <div className="h-20 bg-white   fixed -mt-2 w-11/12 pr-20 z-10">
      {leftArrowDisable && (
        <div className="w-14 h-14 backdrop-blur-3xl absolute top-3 shadow-[10px_-18px_10px_20px_#ffffff] bg-white ">
          <span
            className=" w-12 h-12 hover:bg-slate-300 rounded-full flex justify-center items-center hover:cursor-pointer "
            onClick={(e) =>
              handleHorizantalScroll(elementRef.current, 10, 360, -40)
            }>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency-systems-filled/48/less-than.png"
              alt="less-than"
            />
          </span>
        </div>
      )}
      <div
        className="flex items-center   overflow-x-scroll no-scrollbar py-5"
        ref={elementRef}>
        {BUTTON_LIST?.map((e, index) => (
          <button
            className="h-10 whitespace-nowrap px-4 mx-2 bg-slate-200 rounded-md"
            key={index}>
            {e}
          </button>
        ))}
      </div>
      {rightArrowDisable && (
        <div className="w-14 h-14 backdrop-blur-3xl absolute top-3 right-4 shadow-[-10px_-18px_10px_20px_#ffffff] bg-white ">
          <span
            className="w-12 h-12 hover:bg-slate-300 rounded-full flex justify-center items-center hover:cursor-pointer "
            onClick={(e) =>
              handleHorizantalScroll(elementRef.current, 10, 360, 40)
            }>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency-systems-filled/48/more-than.png"
              alt="less-than"
            />
          </span>
        </div>
      )}
    </div>
  );
};
// const Button = () => {
//   return (

//   );
// }
export default ButtonList;
