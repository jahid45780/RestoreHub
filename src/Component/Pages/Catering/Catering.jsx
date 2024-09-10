import gorup from '../../../../public/photo/Group 1000002806.png'
import fi1 from '../../../../public/photo/fi1.png'
import fi2 from '../../../../public/photo/fi2.png'
import fi3 from '../../../../public/photo/fi3.png'
import contact from '../../../../public/photo/catrgory-contacrt.png'
const Catering = () => {
    return (
        <div className=' max-w-6xl mx-auto' >
            <h1 className=" text-5xl font-bold mt-8" > Our story </h1>
            <div className=' grid lg:grid-cols-2 grid-cols-1 gap-3 justify-center items-center' >
                <div>
           <p className=' mt-6 text-lg' >
           scelerisque convallis. Sed faucibus dui. sit tincidunt eu placerat. eget Ut nisi cursus venenatis tortor. leo. faucibus dui diam est. Ut at sed tincidunt eget consectetur non, tincidunt In efficitur. laoreet non felis, faucibus Praesent id id diam elementum Donec ex venenatis id porta ex tincidunt dui. sodales. Sed tempor eget Vestibulum Quisque luctus dui lacus sed gravida facilisis adipiscing id sed Ut vitae odio gravida In venenatis felis, tempor faucibus amet, Nunc sapien vitae ex convallis. tortor. dolor nisi massa amet, urna tincidunt ac eget sed nulla, eu nec malesuada venenatis convallis. quam nisl. Donec In sed quis urna. ullamcorper elementum gravida enim. sit nisl. sollicitudin. hendrerit fringilla lacus dui. consectetur venenatis placerat. placerat lacus, at viverra 
            <br /> <br />

tincidunt dui fringilla tortor. ipsum tempor Praesent laoreet luctus tempor id quam ipsum ullamcorper ultrices Nunc convallis. scelerisque sollicitudin. venenatis Lorem orci massa massa Morbi sit hendrerit volutpat placerat nec at non hendrerit Morbi ex nec amet, Nunc fringilla Nunc Donec at tempor luctus ex Nunc varius Quisque sit in facilisis at libero, quis adipiscing maximus felis, amet, turpis quis at urna diam Praesent Cras libero, lacus tempor elementum Lorem vitae elementum tincidunt lorem. nec Vestibulum lacus Ut tincidunt orci est. nec lacus, risus enim. laoreet cursus ipsum nec ultrices Donec urna. diam ullamcorper vel consectetur libero, Nunc In cursus odio faucibus id vitae volutpat sapien sit Lorem viverra vel tincidunt non, eget nibh scelerisque In faucibus Nunc
           </p>
                </div>
                <div>
        <img src={gorup} alt="" />
                </div>
            </div>


          <h1 className=' text-5xl text-center mt-5 font-bold' > Perfect for any occasion </h1>

          <div className=' grid lg:grid-cols-3 grid-cols-1 gap-7 justify-center items-center mt-8' >
       
          <div 
           data-aos="zoom-out-down"
            data-aos-duration="3000"
          className=' bg-[#F1EEF1] p-4 rounded-lg' >
          <img className=' mx-auto' src={fi1} alt="" />
         <h1 className=' text-3xl font-bold text-center mt-4' > Business Catering </h1>
         <h2 className=' text-center text-lg mt-4' > Catering everyone will love, with convenient delivery and setup included,  </h2>    
          <ol className=' list-disc font-medium mt-5 ml-6 ' >
            <li className='mt-3' >Holiday Parties </li>
            <li className='mt-3' > Office Meetings </li>
            <li className='mt-3' > Employee Appreciation </li>
          </ol>
          </div>

          <div 
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          className=' bg-[#E9F2E8] p-4 rounded-lg' >
          <img className=' mx-auto' src={fi2} alt="" />
         <h1 className=' text-3xl font-bold text-center mt-4' > Bridal Category </h1>
         <h2 className=' text-center text-lg mt-4' > Catering everyone will love, with convenient delivery and setup included,  </h2>    
          <ol className=' list-disc font-medium mt-5 ml-6 ' >
            <li className='mt-3' >Holiday Parties </li>
            <li className='mt-3' > Office Meetings </li>
            <li className='mt-3' > Employee Appreciation </li>
          </ol>
          </div>


          <div 
          data-aos="zoom-out-left"
           data-aos-duration="3000"
          className=' bg-[#F9F1F2] p-4 rounded-lg' >
          <img className=' mx-auto' src={fi3} alt="" />
         <h1 className=' text-3xl font-bold text-center mt-4' > Event Catering </h1>
         <h2 className=' text-center text-lg mt-4' > Catering everyone will love, with convenient delivery and setup included,  </h2>    
          <ol className=' list-disc font-medium mt-5 ml-6 ' >
            <li className='mt-3' >Holiday Parties </li>
            <li className='mt-3' > Office Meetings </li>
            <li className='mt-3' > Employee Appreciation </li>
          </ol>
          </div>
        
         <div>
        
     </div>

     


          </div>
          <img className=' h-full w-full' src={contact} alt="" />
        </div>
    );
};

export default Catering;