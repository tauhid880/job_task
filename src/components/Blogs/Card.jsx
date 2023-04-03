import Img from "../../assets/card 1.jpg";
import { FiCalendar } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
function Card() {
  return (
    <>
      <div className="card bg-white w-[300px] h-[500px] m-2 rounded-lg shadow-lg">
        <div className="top">
          <img
            className="w-[300px] h-[200px] object-cover rounded-md  p-2"
            src={Img}
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">
            Real Estate, Analysis
          </div>
          <div className="text-xs font-medium my-1 flex flex-row justify-around items-center">
            <div className="flex flex-row justify-center items-center text-black text-xs">
              <FiCalendar className="mr-2"></FiCalendar> <p>09 jun 2022</p>
            </div>
            <div className="ml-5">
              <p>By Admin</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="">
              <p>Guide for personal property Buying </p>
            </div>
          </div>
          <div className="flex items-center my-2 text-gray-400">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
              eiusmod temp incididuut labore dolore magna aliqua do eiusmod...
            </p>
          </div>
          <button className="btn btn-outline text-sm rounded-sm my-8 text-black">
            View More <HiArrowRight className="ml-2"></HiArrowRight>
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
