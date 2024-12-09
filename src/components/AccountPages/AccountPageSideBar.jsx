import React from "react";
import SideBarItem from "./SideBarItems";
import { NavLink } from "react-router-dom";
import { useLanguage } from '../../Context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Context/ThemeContext';

const AccountPageSidebar = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div 
      className={`!min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 border-blue-400 rtl:border-l-2 ltr:border-r-2 text-gray-200" : "bg-white text-gray-800"
      }`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="w-72 h-full p-6  lg:flex flex-col items-start hidden shadow-md ">
        <ul className="flex flex-col w-full space-y-4 sticky top-32 ">
          <NavLink
            to="/pages/home"
            className={({ isActive }) =>
              `flex items-center space-x-4 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-500 text-white shadow-lg"
                  : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <SideBarItem title={t("Home")} iconClasses={"fa-solid fa-house"} />
          </NavLink>
          <NavLink
            to="/pages/profile"
            className={({ isActive }) =>
              `flex items-center space-x-4 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-500 text-white shadow-lg"
                  : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <SideBarItem title={t("Profile")} iconClasses={"fa-solid fa-user-circle"} />
          </NavLink>
          <NavLink
            to="/pages/settings"
            className={({ isActive }) =>
              `flex items-center space-x-4 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-500 text-white shadow-lg"
                  : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <SideBarItem title={t("Settings")} iconClasses={"fa-solid fa-gear"} />
          </NavLink>
          <NavLink
            to="/pages/security"
            className={({ isActive }) =>
              `flex items-center space-x-4 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-500 text-white shadow-lg"
                  : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <SideBarItem title={t("Security")} iconClasses={"fa-solid fa-shield"} />
          </NavLink>
          <NavLink
            to="/pages/donate"
            className={({ isActive }) =>
              `flex items-center space-x-4 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-500 text-white shadow-lg"
                  : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <SideBarItem title={t("Donate")} iconClasses={"fa-solid fa-donate"} />
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default AccountPageSidebar;
