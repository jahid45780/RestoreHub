import { FaFacebookF, FaX } from 'react-icons/fa6';
import logo from '../../../../public/photo/logo.png'
import { ImInstagram } from 'react-icons/im';
import { GiThunderball } from 'react-icons/gi';
const Footer = () => {
    return (
        <div>
              <div>
  <footer className="bg-[#F9F9F9]  mt-14 text-black ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Shop Info */}
        <div>
        
        <img src={logo} alt="" />
      
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-black">Customer Service</h2>
          <ul>
            <li><a href="#" className="hover:underline">Help & Contact</a></li>
            <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
            <li><a href="#" className="hover:underline">Shipping Info</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-black">About Us</h2>
          <ul>
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-black">Subscribe To Our Email Alerts</h2>
          <p className="mb-4">Get the latest updates and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none"
            />
            <button className="p-2 bg-blue-600 rounded-r text-black hover:bg-blue-700">
              Subscribe
            </button>
        
          </form>
            <div className=' flex items-center justify-center gap-4 mt-4 text-2xl' >
                <FaFacebookF/>
                <ImInstagram/>
                <FaX/>
                <GiThunderball/>
            </div>
        </div>
      </div>

      <div className="border-t bg-black border-gray-700 mt-8  text-center text-white p-4">
        <p>&copy; All rights reserved by Simply Good Foods</p>
      </div>
    </footer>

        </div>
        </div>
    );
};

export default Footer;