import React from "react";
import banner from "../images/secondary.png";
import "../App.css";
function Banner({img}) {
  return (
    <div>
      <div className="absolute">
        
        <img
          className="w-[100vw] h-[75vh] object-cover absolute "
          src={banner}
          alt=""
        />
        <span className="bg-gradient-to-t from-black via-black to-70%  relative inline-block w-[100vw]  h-[75vh] opacity-40"></span>
      </div>
        <div className="flex">
      <h1 className="relative text-5xl font-black  text-white h-[75vh] pt-[55vh] pl-[10vw] ">
        YOUR FUTURE STARTS <br /> HERE 
        <h2 className="text-[12px] lg:visible invisible ">Read more</h2>
      </h1>
        </div>
        
    </div>
  );
}

export default Banner;
