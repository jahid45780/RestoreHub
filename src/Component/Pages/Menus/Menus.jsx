import { useState } from "react";
import MenusCart from "./MenusCart";
import { useEffect } from "react";
import Paginate from "../paginate/Paginate";
import { p } from "framer-motion/client";
import Loader from "../../Share/Loader/Loader";

const Menus = () => {
  const [menus, setMenus] = useState([]);
  const [allFood, setAllFood] = useState([]);
  const [loading, setLoading] = useState(true)
  const filterFood = (category) => {
    if (category === "full-menu") {
      setAllFood(menus);
      return;
    }
    const filteredFood = menus.filter((food) => food.category === category);
    setAllFood(filteredFood);
  };

  useEffect(() => {
    setLoading(true); // Ensure this is a valid call to setLoading
    fetch("/menus.json") // Ensure the correct path to the JSON file
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
        setAllFood(data);
        setLoading(false); // Valid call to setLoading to stop loading spinner
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading stops even if there's an error
      });
  }, []);

  // Paginate logic
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const currentProducts = allFood?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  function paginate(number) {
    setCurrentPage(number);
  }

  function handlePrevOrNextClick(prevOrNext, allPageNumbers) {
    if (prevOrNext === "next") {
      if (allPageNumbers[allPageNumbers.length - 1] === currentPage) {
        return;
      }
      setCurrentPage(currentPage + 1);
    } else {
      if (currentPage === 1) {
        return;
      }
      setCurrentPage(currentPage - 1);
    }
  }


  
  if (loading) {
    return <Loader/> ;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className=" mt-8 flex gap-4">
        <button
          onClick={() => filterFood("full-menu")}
          className=" btn font-semibold bg-[#FDB64E]"
        >
          {" "}
          Full menus{" "}
        </button>
        <button onClick={() => filterFood("entree")} className=" btn">
          {" "}
          Enteree{" "}
        </button>
        <button onClick={() => filterFood("breakfast")} className=" btn">
          {" "}
          Breakfast{" "}
        </button>
        <button onClick={() => filterFood("snacks")} className=" btn">
          {" "}
          Snacks{" "}
        </button>
      </div>
      <hr className=" mt-5" />
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-2 mt-7 justify-center items-center">
        {currentProducts?.map((menu) => (
          <MenusCart key={menu.id} menuCart={menu}></MenusCart>
        ))}
      </div>
      {/* pagi */}
      <Paginate
        productsPerPage={productsPerPage}
        product={menus.length}
        paginate={paginate}
        onPrevOrNextClick={handlePrevOrNextClick}
      />

      {/* pagi */}
    </div>
  );
};

export default Menus;
