import React from "react";
import banner from "../../images/ezgif.com-gif-maker (13).png";
import Footer from "../Footer";

function Programs() {
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
        <h1 className="uppercase relative text-4xl font-black  text-white h-[75vh] pt-[55vh] pl-[10vw] ">
          Programs
        </h1>
      </div>
      <div className=" lg:h-[50vh] lg:w-[70%] mx-auto">
        <h1 className="uppercase  mt-[5%] text-[60px] font-thin ">It’s the place you can learn <br /> & grow </h1>
        <p className="pt-3">The University program has been built with a goal of educating students' individuals, while also improving the lives of their communities. It is designed with a holistic education in mind. The program is designed to be flexible, empowering you to choose your own pathway to success.</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Programs;
