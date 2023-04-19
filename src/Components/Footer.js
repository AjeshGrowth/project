/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

function Footer() {
  return (
    <div className="lg:grid lg:grid-cols-3">
      <div className="col-span-2 bg-red-700 h-[95vh] grid grid-cols-2 pt-16">
        <div className="p-10 ">
          <h3 className="uppercase text-4xl text-white pl-[5%] py-5 ">
            Quick Links
          </h3>
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-5 pl-[10%] text-white">
              <a href="#" className="py-2">
                Enquire Now
              </a>
              <a href="#" className="py-2">
                Apply Now{" "}
              </a>
              <a href="#" className="py-2">
                Student Portal{" "}
              </a>
              <a href="#" className="py-2">
                Faculty Portal
              </a>
              <a href="#" className="py-2">
                {" "}
                About AURAK
              </a>
            </div>

            <div className="grid grid-rows-5 pl-[20%] text-white ">
              <a href="#" className="py-2">
                Leadership
              </a>
              <a href="#" className="py-2">
                Alumni
              </a>
              <a href="#" className="py-2">
                Campus Directory
              </a>
              <a href="#" className="py-2">
                Library
              </a>
              <a href="#" className="py-2">
                Academic Calendar
              </a>
            </div>
          </div>
          <hr className="w-[55vw] my-10 hidden lg:block" />
          <div className="lg:grid lg:grid-cols-5 mt-5 col-span-1 mr-[40%] hidden lg:block">
            <div>
              <i
                className="fa-brands fa-facebook p-2 border-2 border-white rounded-full"
                style={{ color: "white" }}
              ></i>
            </div>
            <div>
              <i
                className="fa-brands fa-twitter p-2 border-2 border-white rounded-full"
                style={{ color: "white" }}
              ></i>
            </div>
            <div>
              <i
                className="fa-brands fa-youtube p-2 border-2 border-white rounded-full"
                style={{ color: "white" }}
              ></i>
            </div>
            <div>
              <i
                className="fa-brands fa-linkedin p-2 border-2 border-white rounded-full"
                style={{ color: "white" }}
              ></i>
            </div>
            <div>
              <i
                className="fa-brands fa-instagram p-2 border-2 border-white rounded-full"
                style={{ color: "white" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="p-10">
          <h3 className="uppercase text-4xl text-white pl-[5%] py-5">
            Study at aurak
          </h3>
          <div className="grid grid-rows-2 text-white">
            <a href="#" className="py-2">
              Enquire Now
            </a>
            <a href="#" className="py-2">
              Apply Now{" "}
            </a>
          </div>
        </div>

        <p className="text-white w-[40vw] ml-[8%] hidden lg:block">
          Copyright © 2022 American University of Ras Al Khaimah. All rights
          reserved
        </p>
      </div>
      <div>
        <div className="p-10">
          <h3 className="uppercase text-4xl  pl-[5%] py-5">AURAK Campus</h3>
          <div className="grid lg:grid-rows-2 ">
            <p className="py-6 lg:py-2 lg:w-[15vw]">
              AURAK <br />
              <br /> Ras al Khaimah, UAE <br /> PO Box: 10021
            </p>
            <div className="grid grid-cols-2">
              <div>
                <h4>Tel</h4>
                <p>+ 971 7 2210 900</p>
              </div>
              <div>
                <h4>Fax</h4>
                <p>+ 971 7 2210 300</p>
              </div>
            </div>
            <span className="w-[20vw] border-t-2 border-black"></span>
            <div className="grid grid-cols-2 pt-10">
              <div>
                <h4>Email</h4>
                <p>info@aurak.ac.ae</p>
              </div>
              <div>
                <h4>Admissions</h4>
                <p>admissions@aurak.ac.ae</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
