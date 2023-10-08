import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-12 py-2">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default MainLayout;