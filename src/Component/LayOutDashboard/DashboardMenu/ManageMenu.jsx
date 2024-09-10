import { IoIosArrowDown } from "react-icons/io";
import btn from '../../../../public/photo/M button.png'
import far from '../../../../public/photo/Frame 427321310.png'
import Tabile from "../../Share/Tabile/Tabile";
const ManageMenu = () => {
    return (
        <div className="bg-[#FDFDFD] mt-4" >
              <section className=' grid lg:grid-cols-6 grid-cols-2 gap-3 mx-7 items-center justify-around' > 
         <div>
          <h1 className=' text-[#333333] font-semibold text-[18px]' > Add Menu</h1>
         </div>

       
      
         <div>
          <input className=' h-[40px] rounded-lg border-2 px-2 border-[#00000040]' placeholder='🔎 Search Date & menu' type="search" name="" id="" />
         </div>


           <div> 
            <h1 className=" flex justify-center items-center border-2 py-1 rounded-lg border-[#00000040] bg-[#FDFDFD] md:ml-16" > Our menu <IoIosArrowDown/>   </h1>
         </div>

         <div> 
            <h1 className="flex justify-center items-center border-2 py-1 rounded-lg border-[#00000040] bg-[#FDFDFD] md:ml-16" > Meal plan <IoIosArrowDown/>  </h1>
         </div>

         <div>
            <button className="bg-[#277E16] py-2 px-2 text-white rounded-lg" > +  Add menu </button>
         </div>

         <div >
            <img src={btn} alt="" />
         </div>

       </section>

        
        <section>

            <Tabile/>
           

        </section>

        </div>
    );
};

export default ManageMenu;