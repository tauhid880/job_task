import React from "react";
import Img1 from "../../assets/Group 36936.png";
import Img2 from "../../assets/image 27.jpg";
import { HiArrowRight } from "react-icons/hi";
const Header = () => {
  return (
    <header className="my-16">
      <img src={Img1} alt="" />
      <div className="mt-9 grid grid-cols-2 justify-center items-center bg-[#E6EAEE]">
        <div>
          <img className="w-full h-96 py-6 px-7" src={Img2} alt="" />
        </div>
        <div>
          <h2 className="py-5 text-4xl font-semibold">Who We Are</h2>
          <p className="text-lg font-normal pr-8">
            The Indian real estate sector is resilient despite global headwinds.
            Returns are impressive and the sector is expected to reach US$ 1
            trillion in market size by 2030 (Niti Aayog report, 2021). However,
            the whole real estate purchase journey is very tedious and takes
            more than 2 years on average. Further, as the ticket size of this
            investment is large, security and trust become quite critical.
            Problems compound when you are currently away from your purchase
            destination. If you are experiencing difficulties in the real estate
            purchase journey, we are here to make it fast and transparent.
          </p>
          <button className="btn btn-outline text-lg my-5 rounded-sm text-black">
            Contact Now <HiArrowRight className="ml-2"></HiArrowRight>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
