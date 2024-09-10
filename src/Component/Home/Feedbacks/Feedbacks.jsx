import img from '../../../../public/photo/Ellipse .png'
import img1 from '../../../../public/photo/Ellipse 14.png'
const Feedbacks = () => {
    return (
   

<div className=' mt-11 max-w-6xl mx-auto ' >
            <h1 className=" text-4xl text-center mt-8 font-bold" > Feedbacks </h1>


            <div 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
             data-aos-duration="3000"
            
            className=' grid lg:grid-cols-2 grid-cols-1 gap-3 justify-center items-center mt-8' >
            <div className=' flex gap-2 items-center justify-center' >
               <div> <img src={img} alt="" /></div>
                <div>
                    <h1 className=' text-lg font-bold' > Ms Liya </h1>
                    <h1 className='text-[#FDB64E] mt-2' > Mentor </h1>
                    <p> Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services </p>
                </div>
              </div>


              <div
               data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000"
              className=' flex gap-2 items-center justify-center' >
               <div> <img src={img1} alt="" /></div>
                <div>
                    <h1 className=' text-lg font-bold' > Ms Faija </h1>
                    <h1 className='text-[#FDB64E] mt-2' > Mentor </h1>
                    <p> Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services </p>
                </div>
              </div>
            </div>
       
        </div>


 
    );
};

export default Feedbacks;