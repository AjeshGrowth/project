/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import LatestNews from "./Components/LatestNews";
import Navbar from "./Components/Navbar";
import Section3 from "./Components/Section3";
import img5 from "./images/enter.png";
import img6 from "./images/CAA-small.png";
import img7 from "./images/abet-cac.png";
import img8 from "./images/abeteac.png";
import img9 from "./images/SACSCOC-Stamp-Color-small-png.png";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App bg-white h-[100vh]">
      <Header />
      <div>
        <Navbar />
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
      {/* section 5 ends */}

      {/* section 6 */}

      <div className="bg-gray-500 lg:h-[70vh] pb-10 lg:pb-0">
        <h2 className="uppercase text-white text-4xl pt-[7%] pl-[20%] py-10">accreditation</h2>
        <div className="grid lg:grid-cols-4 grid-rows-4 w-[70vw]  mx-auto mt-10">
          <img src={img6} alt="" className="mx-auto py-4 lg:py-0" />
          <img src={img7} alt="" className="mx-auto py-4 lg:py-0" />
          <img src={img8} alt="" className="mx-auto py-4 lg:py-0" />
          <img src={img9} alt="" className="mx-auto py-4 lg:py-0" />
        </div>
      </div>

      {/* section 6 ends */}
      <Footer/>
    </div>
  );
}

export default App;
