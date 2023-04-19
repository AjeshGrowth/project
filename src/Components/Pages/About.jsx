import React from "react";
import "../../App.css";

import Banner from "../Banner";
import Section3 from "../Section3";
import LatestNews from "../LatestNews";
import Footer from "../Footer";
import Section5 from "../Section5";

import img6 from "../../images/CAA-small.png";
import img7 from "../../images/abet-cac.png";
import img8 from "../../images/abeteac.png";
import img9 from "../../images/SACSCOC-Stamp-Color-small-png.png";

function About() {
  return (
    <div>
      <div>

        <Banner />
      </div>

      {/* section 2  */}
      <div className="grid grid-cols-2 h-[35vh]">
        <div className="bg-red-700">
          <h2 className=" text-white ml-[20%] mt-[10%] text-[19px] font-bold">
            Ranked
          </h2>
          <h2 className="text-white ml-[20%] text-[50px] font-black">#11</h2>
          <h2 className="text-white ml-[20%] font-bold">
            IN THE UNITED ARAB EMIRATES
          </h2>
        </div>
        <div className="bg-gray-500">
          <h2 className=" text-white ml-[20%] mt-[10%] text-[19px] font-bold">
            Ranked
          </h2>
          <h2 className="text-white ml-[20%] text-[50px] font-black">#49</h2>
          <h2 className="text-white ml-[20%] font-bold">IN THE ARAB REGION</h2>
        </div>
      </div>

      {/* section 2 ends */}
      <Section3 />
      <LatestNews />
      {/* section 5 */}
      <Section5 />
      {/* section 5 ends */}

      {/* section 6 */}

      <div className="bg-gray-500 lg:h-[70vh] pb-10 lg:pb-0">
        <h2 className="uppercase text-white text-4xl pt-[7%] pl-[20%] py-10">
          accreditation
        </h2>
        <div className="grid lg:grid-cols-4 grid-rows-4 w-[70vw]  mx-auto mt-10">
          <img src={img6} alt="" className="mx-auto py-4 lg:py-0" />
          <img src={img7} alt="" className="mx-auto py-4 lg:py-0" />
          <img src={img8} alt="" className="mx-auto py-4 lg:py-0" />
          <img src={img9} alt="" className="mx-auto py-4 lg:py-0" />
        </div>
      </div>

      {/* section 6 ends */}
      <Footer />
    </div>
  );
}

export default About;
