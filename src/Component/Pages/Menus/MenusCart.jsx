import { Link } from "react-router-dom";

const MenusCart = ({menuCart}) => {

    const {title, rating, image, price,dis, id} = menuCart;

    return (
        <div
       data-aos="zoom-in"
        data-aos-duration="2000"
        className="bg-slate-100 rounded-lg p-1" >

           <Link to={`/menu/${id}`} > <img className="w-full object-cover h-64 rounded-xl" src={image} alt="food" /> </Link>
            
            <div className="rating rating-xs flex items-center gap-2 ">

<input
  type="radio"
  name="rating-5"
  className="mask mask-star-2  bg-orange-400"
  defaultChecked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
<h2 className=' text-3xl mt-2 font-bold' >{rating}</h2>
</div>
  <Link to={`/menu/${id}`} > <h2 className=' text-3xl mt-2 font-bold' >{title}</h2> </Link>
<p className=' mt-4 text-sm font-semibold' > $ {price} </p>

<button className="btn btn-block bg-[#6EA963] font-extrabold mt-4" > Add To Cart </button>

<p className=' text-lg mt-3 text-center text-[#BF757B] font-semibold' > {dis} </p>


        </div>
    );
};

export default MenusCart;