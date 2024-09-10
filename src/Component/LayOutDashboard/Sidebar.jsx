import { useState } from 'react'
// Components

import { AiOutlineBars } from 'react-icons/ai'
import { GrLogout } from 'react-icons/gr'
import { ImProfile } from "react-icons/im";
import { Link, NavLink } from 'react-router-dom'
import { LuBadgeDollarSign } from "react-icons/lu";
import icone from '../../../public/photo/dsh2.png'
import icone1 from '../../../public/photo/Dsh1.png'
import { IoIosArrowBack } from "react-icons/io";




// Icons




const Sidebar = () => {
  

//   const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)





  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>

    
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
   
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#FDFDFD] shadow-lg w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
           
          </div>

          {/* Nav Items */}

      

       <div className=' text-lg bg-[#277E16] lg:-ml-10 text-center text-white p-2  mt-4' >
          <NavLink className='flex  items-center justify-center gap-2'  to='/dashboard/transactions' > <LuBadgeDollarSign className=' text-3xl' /> Transactions </NavLink> 
         </div>

         <div className=' text-lg hover:bg-[#277E16] hover:text-white  text-[#3E3E3E] lg:-ml-7  text-center p-2  mt-2' >
          <NavLink className='flex  items-center justify-center gap-2' to='/dashboard/ManageMenu' > <img src={icone} alt="" /> Manage Menu </NavLink> 
         </div>

         <div className='text-lg hover:bg-[#277E16] hover:text-white  text-[#3E3E3E] lg:-ml-7  text-center p-2  mt-2' >
          <NavLink className='flex  items-center justify-center gap-2 lg:ml-9' to='/dashboard/Testimonials' > <img src={icone1} alt="" /> Manage Testimonials   </NavLink> 
         </div>

       
           <>
           


         
           </>
     
        
        </div>

        <div>
          <hr />


          <Link to='/' >
         <button className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
            <IoIosArrowBack className='w-5 h-5' />
              
            <span className='mx-4 font-medium'> Back to home </span>
          </button>
         </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar