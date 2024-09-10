import vector from '../../../../public/photo/Vector.png'
import vector1 from '../../../../public/photo/Vector1.png'
import vector2 from '../../../../public/photo/Vector2.png'

const Why = () => {
    return (
        <div
        className=' max-w-6xl mx-auto' >
            <h1 className=" text-4xl text-center mt-10 font-bold text-[#3E3E3E]" > Why Simply Good Food  </h1>

            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-3 items-center justify-center mt-20 ' >

         {/* why 1 */}
         <div
            data-aos="fade-right"
             data-aos-duration="3000"
         className=' bg-[#F9F9F9] rounded-md h-52 p-2 shadow-md' >
            <img className='text-center mx-auto' src={vector} alt="" />
      <h1 className='text-[#3E3E3E] text-2xl font-bold text-center' > Health awareness </h1>

      <p className='text-[14px] text-center text-[#656565]' > Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best. </p>
         </div>

             {/* why 2 */}
             <div
              data-aos="flip-right"
               data-aos-duration="3000"
             className=' bg-[#F9F9F9] rounded-md  shadow-md h-52 p-2' >
             <img className='text-center mx-auto' src={vector1} alt="" />
      <h1 className='text-[#3E3E3E] text-2xl font-bold text-center' > More Protein </h1>

      <p className='text-[14px] text-center text-[#656565]' > Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes. </p>
            </div>

            {/* why 3 */}    
         <div 
           data-aos="zoom-in-down"
            data-aos-duration="3000"
         className=' bg-[#F9F9F9] shadow-md rounded-md  h-52 p-2' >
         <img className='text-center mx-auto' src={vector2} alt="" />
      <h1 className='text-[#3E3E3E] text-2xl font-bold text-center'  > Unending Variety </h1>

      <p className='text-[14px] text-center text-[#656565]' > Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.</p>
            
            </div>
          
            </div>
       
       
        </div>
    );
};

export default Why;