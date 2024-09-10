import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";

const Main = () => {
    const location = useLocation()
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
        { noHeaderFooter || <Navbar/>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;