import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import logo from '../../../public/photo/logo.png'

const Dashboard = () => {
    return (
        <div>
         

            <div className=" relative min-h-max md:flex" >
{/* slider side */}  <Sidebar/>
<div className=" flex-1 md:ml-64" >
    <div className=" p-5" >  {/* out let from dainamic contact */}  <Outlet></Outlet> </div>
</div>
</div>

        </div>
    );
};

export default Dashboard;