import React from "react";
import vector from "../images/Vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="lg:h-[15vh] bg-white lg:grid lg:grid-cols-3">
      <img className="pl-[20%] pt-[2%] " src={vector} alt="" />
      <div className="my-auto  flex">
        <FontAwesomeIcon icon={faGlobe} className="px-5 text-2xl lg:visible invisible" />
        <div className="flex lg:py-0 py-3 px-5">
          <FontAwesomeIcon icon={faUser} className="px-3" />
          <p className="text-[10px] lg:text-[18px]">STUDENTS PORTAL</p>
        </div>
        <div className="flex lg:py-0 py-3">
          <FontAwesomeIcon icon={faUser} className="px-3" />
          <p className="text-[10px] lg:text-[18px]">FACULTY PORTAL</p>
        </div>
      </div>
      <div className="my-auto ml-16 pb-5 lg:pb-0 flex">
        <div className="px-5">
          <button className="bg-red-700 text-white font-semibold rounded-full p-2 px-5 text-[10px] lg:text-[18px]">
            Enquire Now
          </button>
        </div>
        <div className="px-5">
          <button className="bg-red-700 text-white font-semibold rounded-full p-2 px-5 text-[10px] lg:text-[18px]">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
