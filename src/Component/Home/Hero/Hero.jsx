import { MdArrowOutward } from "react-icons/md";
import hero from '../../../../public/photo/Rectangle 49.png'
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div  className=" grid lg:grid-cols-2 grid-cols-1   items-center justify-center mt-10" >
            {/* part 1 */}
            <div 
             
            className=" h-full w-full bg-[#C4C4C4] flex justify-center items-center" >
                  <div 
                    data-aos="fade-up"
                   data-aos-duration="3000"
                  className=" bg-white w-[1440px]  mr-6 p-3 rounded-r-full " >
                    <h1 className=" font-bold text-4xl mx-14 mt-8" > Make daily meals  
                    healthy and moderate </h1>

                    <p className="text-lg mt-8 mx-14" >Ingredients are naturally rich and full of taste.</p>
                    <Link to={'/meal-plans'} > <button className=' bg-[#6EA963] p-2 mx-14 font-bold flex gap-2 items-center justify-center mt-5  rounded-lg' > Meal plans<MdArrowOutward className=' text-2xl' /> </button> </Link>
                  </div>
            </div>
     {/* part 2 */}
      <div>
    <img src={hero} alt="" />
      </div>

        </div>
    );
};

export default Hero;