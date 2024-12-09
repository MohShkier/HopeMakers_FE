import React, { useState } from "react";
import NavItem from "./NavItem";
import { useLanguage } from '../../Context/LanguageContext';
import { useTranslation } from "react-i18next";
import { useTheme } from '../../Context/ThemeContext';
import { GrLanguage } from "react-icons/gr";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();
    const { language, changeLanguage } = useLanguage();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    
        // Function to toggle the sidebar's open/close state
        const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
        };
   {
    
    /* const [isSelect, setIsSelected] = useState("Home");

    function chooseSelected(selectedField) {
        setIsSelected(selectedField);
    }*/}

    return (
        <div className="dark:bg-gray-900 dark:text-gray-200 p-4 bg-white text-lg font-bold sticky top-0 text-black shadow-lg flex items-center justify-between md:justify-between !z-30" dir={language !== "en" ? "rtl" : "ltr"}>
            <div className="flex items-center">
                <img src="/1edited.png" alt="Hope Makers Logo" className="" />
            </div>
            <div className="hidden" onClick={toggleSidebar}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <nav className="lg:pr-6 ">
                <ul className="flex gap-4 items-center text-white">
                    { /*<NavItem
                        iconClasses={"fa-solid fa-house"}
                        title={t("Home")}
                        onClick={() => chooseSelected("Home")}
                        isSelected={isSelect}
                    />
                    <NavItem
                        iconClasses={"fa-solid fa-hand-holding-heart"}
                        title={t("Donate")}
                        onClick={() => chooseSelected("Donate")}
                        isSelected={isSelect}
                    />
                    <NavItem
                        iconClasses={"fa-solid fa-handshake"}
                        title={t("Sponsors")}
                        onClick={() => chooseSelected("Sponsors")}
                        isSelected={isSelect}
                    />
                    <NavItem
                        iconClasses={"fa-solid fa-handshake"}
                        title={t("Contact")}
                        onClick={() => chooseSelected("Contact")}
                        isSelected={isSelect}
                    />
                    <NavItem
                        iconClasses={"fa-solid fa-question"}
                        title={"About"}
                        onClick={() => chooseSelected("About")}
                        isSelected={isSelect}
                    />*/}

                    <button
                        class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 " onClick={toggleTheme}>
                        <svg class="fill-blue-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg class="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <button
                        className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 text-blue-500"
                        onClick={() => changeLanguage(language === "en" ? "ar" : "en")}
                    >
                        <GrLanguage size={28} />
                    </button>

                </ul>
            </nav>
            {/*<SideBar isSideBarOpen={isSidebarOpen} toggleSideBar={() => toggleSidebar()}/>*/}


        </div>
    );
};

export default Navbar;