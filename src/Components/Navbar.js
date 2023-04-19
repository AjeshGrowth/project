import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-[7vh] bg-red-700 grid grid-cols-3 rounded-b-3xl">
      <div className="col-span-2 font-semibold text-white text-center my-auto cursor-pointer">
        <Link to="/" className="px-2 text-[10px] lg:text-[18px]">ABOUT</Link>
        <Link to="/program" className="px-2 text-[10px] lg:text-[18px]">PROGRAMS</Link>
        <span className="px-2 text-[10px] lg:text-[18px]">JOIN AURAK</span>
        <span className="px-2 text-[10px] lg:text-[18px]">STUDENT SUPPORT</span>
        <span className="px-2 text-[10px] lg:text-[18px]">ALUMNI</span>
        <span className="px-2 text-[10px] lg:text-[18px]">TEACHING</span>
        <span className="px-2 text-[10px] lg:text-[18px]">REASEARCH</span>
      </div>
      <div className="font-semibold text-white text-center my-auto">
        <span className="px-2 text-[10px] lg:text-[18px]">MEDIA</span>
        <span className="px-2 text-[10px] lg:text-[18px]">CONTACT</span>
        <span className="p-1 bg-white rounded-full">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#000000" }}
          />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
