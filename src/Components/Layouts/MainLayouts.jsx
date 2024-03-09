import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPages/NavBar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Pages/SharedPages/Footer/Footer";

const MainLayouts=()=>{
    return(
        <div>
            <Navbar />
             <Outlet />
             <Footer />
            <Toaster />
        </div>
    )}
export default MainLayouts;