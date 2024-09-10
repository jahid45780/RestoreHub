import { Link } from "react-router-dom";
import photo from "../../../../public/photo/Rectangle 4.png";
import bg from "../../../../public/photo/bg.png";
import { MdArrowOutward } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className=" mt-8"
    >
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3 justify-center items-center max-w-6xl mx-auto ">
        <div className="hover:rotate-2">
          <h1 className=" text-7xl font-bold">
            {" "}
            Keep track of <br />{" "}
            <span className="text-[#6EA963]">Fitness Goal </span>{" "}
          </h1>

          <p className=" text-2xl font-semibold mt-5">
            Order on Simply Good Food
          </p>
          <Link to="/our-menus">
            {" "}
            <button className=" bg-[#FDB64E] p-2 rounded-md font-bold flex gap-2 items-center justify-center mt-5">
              {" "}
              Explore Menu <MdArrowOutward className=" text-2xl" />{" "}
            </button>{" "}
          </Link>
        </div>

        <div className="border-[30px] border-[#6EA963] rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[470px] lg:h-[470px] flex justify-center items-center hover:rotate-45  m-4">
          <img
            src={photo}
            alt="image"
            className=" object-cover rounded-full  hover:animate-spin"
          />
        </div>

        <div className=" md:block hidden">
          {/* <MdAddShoppingCart className=' text-5xl bg-[#277E16] p-1 rounded-full ml-[1080px] -mt-16' /> */}
          <MdAddShoppingCart className=" text-5xl bg-[#277E16] p-1 rounded-full ml-[1080px] -mt-16 text-black">
            {" "}
          </MdAddShoppingCart>
        </div>
      </div>
    </section>
  );
};

export default Banner;
