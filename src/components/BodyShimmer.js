import React from "react";

const BodyShimmer = () => {
  return (
    <div className="grid grid-cols-4 pt-20 gap-10  pr-5">
      {Array(100)
        .fill(0)
        .map((e, index) => (
          <div key={index}>
            <div className="h-40 w-72 animate-pulse bg-slate-300 rounded-md"></div>
            <div className="h-5 w-64 animate-pulse bg-slate-300 rounded-sm my-2"></div>
            <div className="h-5 w-52 animate-pulse bg-slate-300 rounded-sm my-2"></div>
          </div>
        ))}
    </div>
  );
};

export default BodyShimmer;
