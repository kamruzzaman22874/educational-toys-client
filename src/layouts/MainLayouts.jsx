import { Outlet } from "react-router-dom";
import Navbar from "../pages/Header/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const MainLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayouts;