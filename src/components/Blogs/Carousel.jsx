import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <div className="relative bg-[#F2F4F6] p-20 my-16">
      <div className="text-center py-4  text-xl font-bold">Blogs</div>
      <div className="flex justify-center items-center mb-5">
        <hr className=" bg-gray-950 h-1 w-16" />
      </div>
      <div className="absolute right-0 top-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div
        id="content"
        className="carousel p-4 flex items-center justify-center overflow-x-auto scroll-smooth  scrollbar-hide"
      >
        <div>
          <Card />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card3 />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card3 />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card2 />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
