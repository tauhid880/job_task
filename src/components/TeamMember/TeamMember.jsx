import React from "react";
import Img1 from "../../assets/p1.jpg";
import Img2 from "../../assets/p2.jpg";
import Img3 from "../../assets/p3.jpg";
import { HiArrowRight } from "react-icons/hi";

const Offerings = () => {
  return (
    <div className="my-16">
      <h1 className="text-3xl font-bold text-center  mb-2">Our Team Members</h1>
      <div className="flex justify-center items-center mb-5">
        <hr className=" bg-gray-950 h-1 w-52" />
      </div>
      {/* Card section */}
      <div className="flex flex-row-3 gap-3 justify-around items-center my-10">
        <div className="card w-96 bg-base-100 shadow-xl p-6 rounded-md">
          <figure>
            <img className="object-cover" src={Img1} />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title pt-7 pb-2">Brajesh Pathak</h2>
            <p className="text-gray-400">
              A Chartered Accountant & Company Secretary, has over a decade of
              experience in managing realty focused venture capital funds, and
              was heading Azure Capital Advisors Private Limited. He has also
              been...
            </p>
            <div className="card-actions justify-end">
              <a className="text-sm rounded-sm text-black cursor-pointer">
                View More
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl p-6 rounded-md">
          <figure>
            <img className="object-cover" src={Img2} />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title pt-7 pb-2">Brajesh Pathak</h2>
            <p className="text-gray-400">
              A Chartered Accountant & Company Secretary, has over a decade of
              experience in managing realty focused venture capital funds, and
              was heading Azure Capital Advisors Private Limited. He has also
              been...
            </p>
            <div className="card-actions justify-end">
              <a className="text-sm rounded-sm text-black cursor-pointer">
                View More
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl p-6 rounded-md">
          <figure>
            <img className="object-cover" src={Img3} />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title pt-7 pb-2">Brajesh Pathak</h2>
            <p className="text-gray-400">
              A Chartered Accountant & Company Secretary, has over a decade of
              experience in managing realty focused venture capital funds, and
              was heading Azure Capital Advisors Private Limited. He has also
              been...
            </p>
            <div className="card-actions justify-end">
              <a className="text-sm rounded-sm text-black cursor-pointer">
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Card section end */}
    </div>
  );
};

export default Offerings;
