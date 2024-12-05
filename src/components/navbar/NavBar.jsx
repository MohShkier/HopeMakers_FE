import React, { useState } from "react";
import NavItem from "./NavItem";
import SideBar from "./SideBar";
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar's open/close state
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const [isSelect, setIsSelected] = useState("Home");

    function chooseSelected(selectedField) {
        setIsSelected(selectedField); 
    }

    return (
        <div className="p-4 bg-white text-lg font-bold sticky top-0 text-black shadow-lg flex items-center justify-between md:justify-between !z-10">
            <div className="flex items-center">
                <img src="./logo.jpg" alt="Hope Maker Logo" className="" />
            </div>
            <div className="lg:hidden" onClick={toggleSidebar}>
                    <i className="fa-solid fa-bars"></i>
            </div>
            <nav className="lg:pr-6 hidden lg:block">
                <ul className="flex gap-4 items-center text-white">
                    <NavItem
                        iconClasses={"fa-solid fa-house"}
                        title={"Home"}
                        onClick={() => chooseSelected("Home")}
                        isSelected={isSelect}
                    />
                    <NavItem
                        iconClasses={"fa-solid fa-hand-holding-heart"}
                        title={"Donate"}
                        onClick={() => chooseSelected("Donate")}
                        isSelected={isSelect}
                    />
                    <NavItem
                        iconClasses={"fa-solid fa-handshake"}
                        title={"Sponsors"}
                        onClick={() => chooseSelected("Sponsors")}
                        isSelected={isSelect}
                    />
                    <NavItem
                        iconClasses={"fa-solid fa-handshake"}
                        title={"Contact"}
                        onClick={() => chooseSelected("Contact")}
                        isSelected={isSelect}
                    />
                    <NavItem
                        iconClasses={"fa-solid fa-question"}
                        title={"About"}
                        onClick={() => chooseSelected("About")}
                        isSelected={isSelect}
                    />
                </ul>
            </nav>
            <SideBar isSideBarOpen={isSidebarOpen} toggleSideBar={() => toggleSidebar()}/> 
           

        </div>
    );
};

export default Navbar;