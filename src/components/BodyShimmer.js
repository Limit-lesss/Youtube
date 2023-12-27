import React from "react";

const BodyShimmer = () => {
  return (
    <div className="grid grid-cols-4 pt-24 gap-10 pr-5">
      {Array(30)
        .fill(0)
        .map((e, index) => (
          <div key={index}>
            <div className="h-40 w-72 animate-pulse bg-slate-300 rounded-lg"></div>
            <div className="flex py-3">
              <div className="w-14 h-14 rounded-full animate-pulse bg-slate-300 mr-2"></div>
              <div className="pl-3">
                <div className="h-5 w-48 animate-pulse bg-slate-300 rounded-sm my-2"></div>
                <div className="h-5 w-36 animate-pulse bg-slate-300 rounded-sm my-2"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BodyShimmer;
