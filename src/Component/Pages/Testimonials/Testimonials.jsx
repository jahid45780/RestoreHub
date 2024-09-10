import er from '../../../../public/photo/Ellipse 14.png'
import er1 from '../../../../public/photo/SEllipse 14.png'
const Testimonials = () => {
    return (
        <div className=" " >
            <h1 className=" text-4xl font-bold mt-3 max-w-6xl mx-auto" > Testimonials </h1>

         <section className=' grid lg:grid-cols-2 grid-cols-1 gap-3 justify-center items-center bg-[#F7F7F7] p-3 mt-5' >
            <div className=' lg:mx-28' > <img className=' w-full h-full' src={er} alt="" /> </div>
            <div className='my-28' >
                <h1 className=' font-semibold mt-3 text-3xl' > Mokles </h1>
                <p className='text-[#FDB64E]' > Student </p>
                <p> elit nibh elit lacus vitae lacus sed diam dui. est. lacus hendrerit enim. non Nam sollicitudin. tincidunt ex urna. lacus, elit. tincidunt Nunc lorem. adipiscing vitae hendrerit Nunc ipsum est. est. felis, dui non elit. sit at, Sed non nec 
                    <br /> viverra fringilla placerat in nisl. tincidunt amet, nec non, risus urna ac ex. Nullam Donec nec tortor. Morbi ex urna. placerat odio leo. nulla, lobortis, faucibus risus at, vitae Donec Quisque tincidunt libero, sapien laoreet Quisque id 
                     </p>
            </div>
         </section>


         <section className=' grid lg:grid-cols-2 grid-cols-1 gap-3 justify-center items-center bg-[#F7F7F7] p-3 mt-5' >
            
         <div className='mx-28' >
                <h1 className=' font-semibold mt-3 text-3xl' > Johan </h1>
                <p className='text-[#FDB64E]' > Student </p>
                <p> elit nibh elit lacus vitae lacus sed diam dui. est. lacus hendrerit enim. non Nam sollicitudin. tincidunt ex urna. lacus, elit. tincidunt Nunc lorem. adipiscing vitae hendrerit Nunc ipsum est. est. felis, dui non elit. sit at, Sed non nec 
                    <br /> viverra fringilla placerat in nisl. tincidunt amet, nec non, risus urna ac ex. Nullam Donec nec tortor. Morbi ex urna. placerat odio leo. nulla, lobortis, faucibus risus at, vitae Donec Quisque tincidunt libero, sapien laoreet Quisque id 
                     </p>
            </div>

            <div className=' lg:mx-28' > <img className=' w-full h-full' src={er1} alt="" /> </div>

           
         </section>

        </div>
    );
};

export default Testimonials;