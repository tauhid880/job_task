import React from "react";
import Img1 from "../../assets/image1.jpg";
import Img2 from "../../assets/image2.jpg";
import Img3 from "../../assets/image3.jpg";
import { HiArrowRight } from "react-icons/hi";

const Offerings = () => {
  return (
    <div className="my-16">
      <h1 className="text-3xl font-bold text-center mb-2">Our Offerings</h1>
      <div className="flex justify-center items-center mb-5">
        <hr className=" bg-gray-950 h-1 w-52" />
      </div>
      <p className="text-center text-base mb-5">
        This whole purchase journey can be divided into three stages. For more
        details,{" "}
        <a className="font-bold text-[#002550]" href="">
          Click Here
        </a>
      </p>
      {/* Offer 2nd portion */}
      <div className="flex flex-row-3 justify-around items-center my-10">
        <div className="btn text-black border-0 rounded-none hover:bg-[#F2F4F6] flex flex-row justify-center items-center gap-3 bg-[#F2F4F6] w-96 h-24 hover:border-b-4 hover:border-black">
          <p className="bg-white rounded-full px-4 py-2 text-2xl">1</p>
          <div className="text-2xl font-normal">Pre-Booking</div>
        </div>
        <div className="btn text-black border-0 rounded-none hover:bg-[#F2F4F6] flex flex-row justify-center items-center gap-3 bg-[#F2F4F6] w-96 h-24 hover:border-b-4 hover:border-black">
          <p className="bg-white rounded-full px-4 py-2 text-2xl">2</p>
          <div className="text-2xl font-normal">
            Post-Booking & <br /> Pre-Registration
          </div>
        </div>
        <div className="btn text-black border-0 rounded-none hover:bg-[#F2F4F6] flex flex-row justify-center items-center gap-3 bg-[#F2F4F6] w-96 h-24 hover:border-b-4 hover:border-black">
          <p className="bg-white rounded-full px-4 py-2 text-2xl">3</p>
          <div className="text-2xl font-normal">Post-Registration</div>
        </div>
      </div>
      {/* Offer 2nd portion end */}

      {/* Card section */}
      <div className="flex flex-row-3 gap-3 justify-around items-center my-10">
        <div className="card w-96 bg-base-100 shadow-xl p-6 rounded-md">
          <figure>
            <img src={Img3} />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title pt-7 pb-5">Background verification</h2>
            <p className="text-gray-400 my-2">
              Assuring your capital is in safe hands, we provide detailed
              verification reports of the project and developer. These are
              customized and detailed...
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-outline text-lg rounded-sm text-black">
                Contact Us <HiArrowRight className="ml-2"></HiArrowRight>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl p-6 rounded-md">
          <figure>
            <img src={Img2} />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title pt-7 pb-5">Virtual site visit</h2>
            <p className="text-gray-400 my-2">
              It becomes imperative to observe your apartment or plot very
              closely before paying the booking amount. We are here to assist
              with an AI-enabled UAV...
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-outline text-lg rounded-sm text-black">
                Contact Us <HiArrowRight className="ml-2"></HiArrowRight>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl p-6 rounded-md">
          <figure>
            <img src={Img1} />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title pt-7 pb-5">Title diligence</h2>
            <p className="text-gray-400 my-2">
              Due diligence is necessary to prevent real estate malpractices
              which have contributed to more than 20% of the civil cases in
              India. We have a panel of...
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-outline text-lg rounded-sm text-black">
                Contact Us <HiArrowRight className="ml-2"></HiArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card section end */}
    </div>
  );
};

export default Offerings;
