import React from 'react'
import img5 from "../images/enter.png";

function Section5() {
  return (
    <div className="lg:grid lg:grid-cols-2">
        {/* left side  */}
        <div className="lg:grid lg:grid-rows-2">
          <div className="object-cover lg:h-[60vh]">
            <img src={img5} alt="" />
          </div>
          <div className="bg-red-700 w-full lg:p-32 text-center lg:text-left text-white py-20 lg:py-0">
            <p className="">09-01-2022</p>
            <div className="w-[75px] h-[2px] border-t-2 border-white pt-2 hidden lg:block"></div>
            <h2 className="text-3xl py-5 ">Entrepreneurship Talk</h2>
            <p className="py-4 px-5 lg:px-0">
              Professor Hariclea Zengos, a distinguished professor of
              literature...
            </p>
            <a href="#" className="hover:underline">
              Read More
            </a>
            <span className="pl-2">></span>
          </div>
        </div>
        {/* right side  */}
        <div className="p-10">
          <p className="text-gray-500">09-01-2022</p>
          <div className="w-[75px] h-[2px] border-t-2 border-gray-500 pt-2"></div>
          <h2 className="text-3xl py-5 text-gray-500">
            AURAK welcomes Prof. Hariclea Zengos as the new Dean of the School
            of Arts and Sciences
          </h2>
          <p className="py-4 text-gray-500">
            Professor Hariclea Zengos, a distinguished professor of
            literature...
          </p>
          <a href="#" className="hover:underline">
            Read More
          </a>
          <span className="pl-2">></span>

          <hr className="my-5" />
          {/* second para  */}
          <p className="text-gray-500">09-01-2022</p>
          <div className="w-[75px] h-[2px] border-t-2 border-gray-500 pt-2"></div>
          <h2 className="text-3xl py-5 text-gray-500">
            AURAK Awarded ACCA Accreditation for two undergraduate degree
            programs
          </h2>
          <p className="py-4 text-gray-500">
            The American University of Ras Al Khaimah (AURAK) recently
            celebrated...
          </p>
          <a href="#" className="hover:underline">
            Read More
          </a>
          <span className="pl-2">></span>
        </div>
      </div>
  )
}

export default Section5
