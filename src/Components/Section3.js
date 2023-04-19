import React from "react";
import img1 from "../images/advantages-of-internet-for-students-scaled.png";
import img2 from "../images/Rectangle 6.png";

function Section3() {
  return (
    <div className="grid grid-cols-2 bg-gradient-to-t from-white via-black to-black relative">
      <div>
        <img src={img2} alt="" className="w-[50vw] absolute bg-black opacity-40" />
        <h3 className="relative lg:text-4xl text-white font-black ml-[80%] lg:mt-20 w-[20vw] text-center">
          EXPLORE <br /> OUR PROGRAMS
        </h3>
      </div>
      <div>
        <img src={img1} alt="" className="w-[50vw]  bg-black opacity-40" />
      </div>
    </div>
  );
}

export default Section3;
