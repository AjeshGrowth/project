import React from "react";

function LatestNews() {
  return (
    <div className="mt-20 mb-10 lg:mb-20">
      <div className="flex">
        <p className="flex-shrink mx-4 lg:text-[60px] ml-[10vw] ">LATEST NEWS </p>
        <button className="border-2 border-black rounded-full text-[10px] lg:text-[20px] px-5 lg:px-9 h-[40px] ml-20 mt-5   hover:bg-red-700 hover:text-white">
          VIEW ALL
        </button>
        <button className="border-2 border-black rounded-full text-[10px] lg:text-[20px] px-5 lg:px-9 h-[40px] ml-[20vw] mt-5 hover:bg-red-700 hover:text-white lg:block hidden">
          NEWS
        </button>
        <button className="border-2 border-black rounded-full text-[10px] lg:text-[20px] px-5 lg:px-9 h-[40px] ml-20 mt-5  hover:bg-red-700 hover:text-white lg:block hidden">
          EVENTS
        </button>
      </div>

      <div className="relative flex  items-center">
        <span className="flex-shrink mx-4 lg:text-[60px] ml-[10vw]"> & EVENTS</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
    </div>
  );
}

export default LatestNews;
