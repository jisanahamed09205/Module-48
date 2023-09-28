import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Conponent/Header/Navbar/Navbar";
import Footer from "../Conponent/Header/Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {


    const loc = useLocation()
    // console.log(loc);
    useEffect(()=>{

        if(loc.pathname === '/'){
            document.title = `Donation Campaign-home`
        }
        else{
            document.title = `Donation Campaign  ${(loc.pathname.replace("/","-"))}`
        }

        // console.log(loc.pathname);
    },[loc.pathname])


    return (
        <div className="md:max-w-[900px]  lg:max-w-[1200px] mx-auto">
            <Navbar></Navbar>
            <div className="py-10">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;