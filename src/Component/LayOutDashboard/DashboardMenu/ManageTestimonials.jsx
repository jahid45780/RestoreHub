
import btn from '../../../../public/photo/M button.png'
import Tabile from '../../Share/Tabile/Tabile';

const ManageTestimonials = () => {
    return (
        <div>
                <section className=' grid lg:grid-cols-3 grid-cols-2 gap-3 mx-7 items-center justify-evenly' > 
         <div>
          <h1 className=' text-[#333333] font-semibold text-[18px]' > Testimonials </h1>
         </div>

       
      
         <div>
          <input className=' h-[40px] w-full rounded-lg border-2 px-2 border-[#00000040]' placeholder='🔎 Search Date & menu' type="search" name="" id="" />
         </div>


         <div >
            <img className=' lg:ml-48' src={btn} alt="" />
         </div>
    </section>


       <section>
        <Tabile/>
       </section>

        </div>
    );
};

export default ManageTestimonials;