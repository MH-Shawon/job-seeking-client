import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPages/NavBar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayouts=()=>{
    return(
        <div>
            <Navbar />
             <Outlet />
            <Toaster />
        </div>
    )}
export default MainLayouts;