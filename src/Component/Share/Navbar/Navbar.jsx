import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/photo/logo.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut().then(() => {});
    toast.success(" LogOut Successfully ").error((error) => {
      error;
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavLinks = (
    <div className="flex flex-col lg:flex-row lg:gap-3 gap-4 text-lg text-black font-semibold">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#277E16] underline" : ""
        }
      >
        Home |
      </NavLink>

      <NavLink
        to="/our-menus"
        className={({ isActive }) =>
          isActive ? "text-[#277E16] underline" : ""
        }
      >
        Our Menus |
      </NavLink>

      <NavLink
        to="/meal-plans"
        className={({ isActive }) =>
          isActive ? "text-[#277E16] underline" : ""
        }
      >
        Meal Plans |
      </NavLink>

      <NavLink
        to="/catering"
        className={({ isActive }) =>
          isActive ? "text-[#277E16] underline" : ""
        }
      >
        Catering |
      </NavLink>

      <NavLink
        to="/how-it-works"
        className={({ isActive }) =>
          isActive ? "text-[#277E16] underline" : ""
        }
      >
        How It Works |
      </NavLink>

      <NavLink
        to="/testimonials"
        className={({ isActive }) =>
          isActive ? "text-[#277E16] underline" : ""
        }
      >
        Testimonials |
      </NavLink>

      <NavLink
        to="/faq"
        className={({ isActive }) =>
          isActive ? "text-[#277E16] underline" : ""
        }
      >
        FAQ
      </NavLink>
    </div>
  );

  return (
    <div>
      {/* Free Shipping Banner */}
      <div className="bg-[#FDB64E] w-full h-[38px] p-2 flex items-center justify-center text-lg font-semibold">
        97% Free shipping on all orders 97%
      </div>

      {/* Navbar */}
      <div className="navbar bg-white shadow  border-b-2 border-b-white  ">
        
        <div className="navbar-start">
          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="btn btn-ghost"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-16 w-auto md:ml-24" />
          </Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>

        {/* Authentication Buttons */}
        <div className="navbar-end font-semibold  flex items-center">
          <div className="md:mr-24" >
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h1 className="text-lg font-bold mt-1 uppercase animate-pulse ">
                      {user?.displayName?.charAt(0)}
                    </h1>
                  </div>
                  
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-3 z-[1] p-4 shadow-lg bg-gradient-to-b from-orange-200 to-orange-300 rounded-box w-60 transition-all duration-300 ease-in-out transform origin-top scale-95 hover:scale-100"
                >
                  <li className="text-center mb-4">
                    <Link
                      to={"/profile"}
                      className="text-xl font-bold text-gray-700 hover:underline"
                    >
                      Profile
                    </Link>
                  </li>

                  <li className="text-center mb-4">
                    <Link
                      to={"/dashboard/transactions"}
                      className="text-xl font-bold text-gray-700 hover:underline"
                    >
                      Dashboard
                    </Link>
                  </li>
                {/* 
                  <li className="text-center mb-2">
                    <p className="text-2xl font-semibold text-gray-800">
                      {user?.displayName}
                    </p>
                  </li> */}
                  {/* <li className="text-center mb-4">
                    <p className="text-lg font-medium text-gray-600">
                      {user?.email}
                    </p>
                  </li> */}
                  <li className="text-center">
                    <button
                      onClick={handleLogOut}
                      className="btn btn-secondary w-full font-bold transition-transform transform hover:scale-105 hover:bg-secondary-focus shadow-md"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                {" "}
                <button className=" btn btn-outline text-[#6EA963] btn-[#6EA963] bg-[#F4F4F4] ">
                  {" "}
                  Login{" "}
                </button>
                <Link to="/signup">
                  {" "}
                  <button className=" btn btn-outline text-white btn-[#6EA963] bg-[#6EA963] mx-3 ">
                    {" "}
                    Sign up{" "}
                  </button>{" "}
                </Link>
              </Link>
            )}
          </div>
        </div>
        
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-white shadow-md p-4 z-50">
          <ul className="flex flex-col gap-4">{NavLinks}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
