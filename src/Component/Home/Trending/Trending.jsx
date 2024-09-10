import { useEffect } from "react";
import { useState } from "react";
import TrendingSlider from "./TrendingSlider";

const Trending = () => {

    const [trending, setTrending] = useState([])
    useEffect(()=>{
        fetch('trending.json')
        .then(res => res.json())
        .then(data => setTrending(data) )
    },[])

    return (
        <div>
            <h1 className=" text-4xl text-center mt-10 font-bold text-[#3E3E3E]"> New & Trending menu </h1>

           {/* carousel */}
   
      <TrendingSlider trending={trending} ></TrendingSlider>


        </div>
    );
};

export default Trending;