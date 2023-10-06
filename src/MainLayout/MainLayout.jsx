import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16 py-2 my-8">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default MainLayout;