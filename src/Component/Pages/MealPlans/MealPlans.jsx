import { useState } from "react";
import detail from '../../../../public/photo/xI_N1K-m.jpg'
const MealPlans = () => {
    const [count, setCount] = useState(1);
    
    return (
        <div className=" max-w-6xl mx-auto" >
            <h1 className="text-4xl font-bold mt-4" > Select your meal plans  </h1>
            <div className=" grid lg:grid-cols-2 grid-cols-1 mt-9" >
             
             {/* part 1 */}
            
             <div className=" bg-[#FDFDFD] w-72 flex  gap-3 p-5 " >
                 <div  >
                
                <button className=" btn bg-[#FDB64E] rounded-lg w-40 text-white font-bold mt-4" > Small Meal </button> <br />
                <button  className=" btn text-black rounded-lg w-40 shadow-lg  font-bold mt-4" > Small Paleo Meal </button> <br />
                <button className=" btn text-black rounded-lg w-40 shadow-lg   font-bold mt-4" > Medium Meal </button> <br />
                <button className=" btn text-black rounded-lg w-40 shadow-lg  font-bold mt-4" > Medium Paleo Meal </button>  <br />
                <button className=" btn text-black rounded-lg w-40 shadow-lg  font-bold mt-4" > Large Meal </button>  <br />
                <button className=" btn text-black rounded-lg w-40 shadow-lg  font-bold mt-4" > Large Paleo Meal</button>

                 </div>
                 <div className=" flex gap-3  mt-3" >
                 <button className=" btn btn-active text-2xl " onClick={() => setCount(count - 1)}> - </button>
                    <p className=" text-2xl text-red-500" > {count} </p>
                 <button className=" btn btn-active text-2xl " onClick={() => setCount(count + 1)}> + </button>
                 </div>
             </div>
            
              {/* part 2 */}
           
             <div  className="bg-[#FDFDFD]" >

               <div className=" flex items-center justify-around" >
                <h1 className=" text-red-600 font-bold " > Subtotal : </h1>
                <p className="text-red-600 font-bold" > $ 123.78 </p>
               </div>

               <button className=" bg-[#6EA963] btn btn-block shadow-lg mt-4" > CONFIRM MEALS </button>

               <h1 className=" text-2xl font-bold mt-8" > Meal Details </h1>

              <img className="w-full -mr-10" src={detail} alt="fake data" />
             
             </div>


            </div>
        </div>
    );
};

export default MealPlans;