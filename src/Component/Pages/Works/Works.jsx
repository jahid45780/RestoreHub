import wor from '../../../../public/photo/category.png';
import d1 from '../../../../public/photo/d1.png';
import d2 from '../../../../public/photo/d2.png';
import d3 from '../../../../public/photo/d3.png';
import d4 from '../../../../public/photo/d4.png';
import vc from '../../../../public/photo/Vector.png'
import vc1 from '../../../../public/photo/Vector1.png'
import vc2 from '../../../../public/photo/Vector2.png'

const Works = () => {
    return (
        <div>
            <section className=' grid lg:grid-cols-2 grid-cols-1 gap-2 justify-center items-center max-w-6xl mx-auto '>
                <div>
                    <section className="dark:bg-white mt-14 dark:text-black">
                        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                            <h2 className="text-2xl font-semibold sm:text-4xl">How it Works</h2>
                            <p className="mt-4 mb-8 text-black">
                                Your food should match your effort. Our tasty meal plans and tailored macros support your fitness and weight goals.
                            </p>
                            <div className="space-y-4">
                                <details className="w-full shadow-lg rounded-lg group">
                                    <summary className="px-4 py-6 text-lg font-medium cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-violet-600 dark:focus-visible:ring-violet-300 transition duration-300">
                                        What is the best way to get started with your services?
                                    </summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 max-h-0 overflow-hidden group-open:max-h-96 transition-all duration-500 ease-in-out transform group-open:opacity-100 opacity-0">
                                        To get started, you can sign up on our platform and choose the service that fits your needs. If you need assistance, our support team is available to guide you through the process.
                                    </p>
                                </details>
                                <details className="w-full shadow-lg rounded-lg group">
                                    <summary className="px-4 py-6 text-lg font-medium cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-violet-600 dark:focus-visible:ring-violet-300 transition duration-300">
                                        How can I track my order status?
                                    </summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 max-h-0 overflow-hidden group-open:max-h-96 transition-all duration-500 ease-in-out transform group-open:opacity-100 opacity-0">
                                        You can track your order in real-time through your account dashboard. We also send email updates with tracking information once your order is processed and shipped.
                                    </p>
                                </details>
                                <details className="w-full shadow-lg rounded-lg group">
                                    <summary className="px-4 py-6 text-lg font-medium cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-violet-600 dark:focus-visible:ring-violet-300 transition duration-300">
                                        What is your refund and return policy?
                                    </summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 max-h-0 overflow-hidden group-open:max-h-96 transition-all duration-500 ease-in-out transform group-open:opacity-100 opacity-0">
                                        We offer a 30-day refund policy on all purchases. If you're unsatisfied with a product or service, simply contact us within 30 days for a full refund or exchange.
                                    </p>
                                </details>
                                <details className="w-full shadow-lg rounded-lg group">
                                    <summary className="px-4 py-6 text-lg font-medium cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-violet-600 dark:focus-visible:ring-violet-300 transition duration-300">
                                        Can I upgrade my plan at any time?
                                    </summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 max-h-0 overflow-hidden group-open:max-h-96 transition-all duration-500 ease-in-out transform group-open:opacity-100 opacity-0">
                                        Yes, you can upgrade your plan at any time through your account settings. Our support team can assist you if needed.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <img className='w-full h-full' src={wor} alt="Category" />
                </div>
            </section>

            
            <section className=' max-w-7xl mx-auto bg-[#F1F1F1] p-4 rounded-2xl' >
                <h1 className=' font-bold text-4xl ' > How it Works </h1>
                <p className=' text-[#656565] text-lg mt-5' > Subscribe for free shipping. Just pick your meals, <br /> tell us how often you want them,and then we’ll take care of the rest. </p>

             <section className=' grid lg:grid-cols-2 grid-cols-1 gap-5 justify-center items-center mt-5 m-16' >
             
             <div 
                data-aos="fade-left"
                 data-aos-duration="3000"
             className="flex gap-3 items-center">
                    <img src={d1} alt="Weekly Delivery" />
                    <div>
                        <h1 className="text-2xl font-semibold">Weekly Delivery</h1>
                        <p>
                            Subscribe for free shipping. Just pick your meals, tell us how often you want them, and then we’ll take care of the rest.
                        </p>
                    </div>
                </div>


                <div 
                 data-aos="fade-right"
                  data-aos-duration="3000"
                className="flex gap-3 items-center">
                    <img src={d2} alt="Weekly Delivery" />
                    <div>
                        <h1 className="text-2xl font-semibold">Weekly Delivery</h1>
                        <p>
                            Subscribe for free shipping. Just pick your meals, tell us how often you want them, and then we’ll take care of the rest.
                        </p>
                    </div>
                </div>



                <div 
                  data-aos="fade-right"
                   data-aos-duration="3000"
                className="flex gap-3 items-center">
                    <img src={d3} alt="Weekly Delivery" />
                    <div>
                        <h1 className="text-2xl font-semibold">Weekly Delivery</h1>
                        <p>
                            Subscribe for free shipping. Just pick your meals, tell us how often you want them, and then we’ll take care of the rest.
                        </p>
                    </div>
                </div>



                <div 
                  data-aos="fade-left"
                   data-aos-duration="3000"
                className="flex gap-3 items-center">
                    <img src={d4} alt="Weekly Delivery" />
                    <div>
                        <h1 className="text-2xl font-semibold">Weekly Delivery</h1>
                        <p>
                            Subscribe for free shipping. Just pick your meals, tell us how often you want them, and then we’ll take care of the rest.
                        </p>
                    </div>
                </div>
            
            
             </section>

            </section>

            <section className=' max-w-6xl mx-auto' >
                <h1 className=' text-4xl font-bold text-center mt-10' > Why Simply Good Food  </h1>

              <section className=' grid lg:grid-cols-3 grid-cols-1  items-center justify-center gap-6 mt-9' >
                <div 
                 data-aos="fade-right"
                  data-aos-duration="3000"
                className='bg-[#F9F9F9] rounded-md h-52 p-2 shadow-md' >
                    <img className='mx-auto' src={vc} alt="" />
                    <h1 className=' text-center text-2xl font-bold mt-2' > Health awareness </h1>
                    <p className=' text-center' > Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best. </p>
                </div>

                <div 
                data-aos="flip-right"
                 data-aos-duration="3000"
                className='bg-[#F9F9F9] rounded-md h-52 p-2 shadow-md' >
                    <img className='mx-auto' src={vc1} alt="" />
                    <h1 className=' text-center text-2xl font-bold mt-2' > More Protein </h1>
                    <p className=' text-center' > Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best. </p>
                </div>

                <div 
                  data-aos="zoom-in-down"
                className='bg-[#F9F9F9] rounded-md h-52 p-2 shadow-md' >
                    <img className='mx-auto' src={vc2} alt="" />
                    <h1 className=' text-center text-2xl font-bold mt-2' > Unending Variety </h1>
                    <p className=' text-center' > Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best. </p>
                </div>
              </section>
            </section>


        </div>
    );
};

export default Works;
