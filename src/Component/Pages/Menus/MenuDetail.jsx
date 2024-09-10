import { useLoaderData, useParams } from "react-router-dom";


const MenuDetail = () => {
  const { id } = useParams(); // Get the id from the route parameters
  const menuSingleData = useLoaderData();
  const idInd = parseInt(id);

  const menuData = menuSingleData.find((menuData) => menuData.id === idInd);
  const { image, title, rating, dis, price, description } = menuData;

  return (
    <div>
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
              <div className="swiper main-slide-carousel swiper-container relative mb-6">
                <div className="swiper-wrapper transition-all">
                  <div className="h-auto w-auto cursor-pointer">
                    <div className=" block">
                      <img
                        src={image}
                        alt="food image"
                        className="max-lg:mx-auto rounded-[5rem] border-8 border-gray-200 w-[27rem] h-[20rem] sm:w-[40rem] sm:h-[27rem] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-6 xl:pl-6 max-lg:mx-auto max-lg:mt-8">
                <div className="flex items-center justify-between gap-6 mb-6">
                  <div className="text">
                    <h2 className="font-manrope font-bold text-2xl leading-5 text-gray-500 mb-2">
                      {title}
                    </h2>

                    {/* <p className="font-semibold text-base text-gray-500">
                    {foodItem.category}
                  </p> */}
                    <div className="text-[#fdb64e] text-medium mt-4">
                      ⭐{rating}
                    </div>

                    <div className="flex justify-between items-center ml-1 font-medium text-small text-[#bf757b] mt-3">
                      {dis}
                    </div>
                  </div>

                </div>

                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-2 gap-y-3">
                  <div className="flex items-center">
                    <h5 className="font-manrope font-bold text-2xl leading-2 ml-1 text-[#605858] ">
                      $ {price}
                    </h5>
                  </div>
                </div>
                <div className="font-medium ml-1 mb-3 text-base md:w-1/2 text-gray-500">
                  {description}
                </div>
                <button className="text-center mt-3 w-full px-3 py-2 rounded-lg bg-[#6ea963] flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-200 hover:bg-[#7ceb69] hover:shadow-indigo-300">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* salider  */}

<section className="mx-auto max-w-7xl lg:px-8" >
    <h1 className=" text-4xl font-bold text-center " > Related products </h1>

   <section className=" grid lg:grid-cols-3 grid-cols-1 gap-4 items-center justify-center mt-9" >
   <div
       data-aos="zoom-in"
        data-aos-duration="2000"
        className="bg-slate-100 rounded-lg border-t-2 border-s-2 border-black p-1" >

          <img className="w-full object-cover h-64 rounded-xl" src={image} alt="food" /> 
            
            <div className="rating rating-xs flex items-center justify-center gap-2 ">

<input
  type="radio"
  name="rating-5"
  className="mask mask-star-2   bg-orange-400"
  defaultChecked />
<input type="radio" name="rating-5" className="mask mask-star-2  bg-orange-400" />
<h2 className=' text-3xl mt-2 font-bold' > 6.3 </h2>
</div>
 <h2 className=' text-3xl mt-2 font-bold text-center mx-auto' >Does Tasty Food </h2> 
<p className=' mt-4 text-lg font-semibold text-center mx-auto ' > $ 12 </p>

<button className="btn btn-block bg-[#6EA963] font-extrabold mt-4" > Add To Cart </button>

<p className=' text-lg mt-3 text-center text-[#BF757B] font-semibold' > Protein 01g / Carbs 13g / Fat 48g / </p>


        </div>


        <div
       data-aos="zoom-in"
        data-aos-duration="2000"
        className="bg-slate-100 rounded-lg border-t-2 border-s-2 border-black p-1" >

          <img className="w-full object-cover h-64 rounded-xl" src='https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?resize=768,574' alt="food" /> 
            
            <div className="rating rating-xs flex items-center justify-center gap-2 ">

<input
  type="radio"
  name="rating-5"
  className="mask mask-star-2  bg-orange-400"
  defaultChecked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
<h2 className=' text-3xl mt-2 font-bold' > 7.1 </h2>
</div>
 <h2 className=' text-3xl mt-2 font-bold text-center mx-auto' > Easy Meals </h2> 
<p className=' mt-4 text-lg font-semibold text-center mx-auto ' > $ 17 </p>

<button className="btn btn-block bg-[#6EA963] font-extrabold mt-4" > Add To Cart </button>

<p className=' text-lg mt-3 text-center text-[#BF757B] font-semibold' > Protein 11g / Carbs 23g / Fat 98g / </p>


        </div>




    <div
       data-aos="zoom-in"
        data-aos-duration="2000"
        className="bg-slate-100 rounded-lg border-t-2 border-s-2 border-black p-1" >

          <img className="w-full object-cover h-64 rounded-xl" src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg' alt="food" /> 
            
            <div className="rating rating-xs flex justify-center items-center gap-2 ">

<input
  type="radio"
  name="rating-5"
  className="mask mask-star-2  bg-orange-400"
  defaultChecked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
<h2 className=' text-3xl mt-2 font-bold' > 8.2 </h2>
</div>
 <h2 className=' text-3xl mt-2 font-bold text-center mx-auto ' > French food </h2> 
<p className=' mt-4 text-lg font-semibold text-center mx-auto ' > $ 22  </p>

<button className="btn btn-block bg-[#6EA963] font-extrabold mt-4" > Add To Cart </button>

<p className=' text-lg mt-3 text-center text-[#BF757B] font-semibold' > Protein 49g / Carbs 23g / Fat 23g / </p>


        </div>            




   </section>
  
</section>

    </div>
  );
};

export default MenuDetail;
