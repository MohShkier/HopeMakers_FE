import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiShoppingCartLine, RiMenuLine } from "react-icons/ri";
import { MdCompareArrows } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { LiaDonateSolid } from "react-icons/lia";
import { DiAptana } from "react-icons/di";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../Context/LanguageContext";
import { useTranslation } from "react-i18next";
const BottomBar = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  return (
    <div className={"fixed bottom-0 w-full bg-white border-t border-gray-300 shadow-lg flex justify-around py-2 text-sm text-gray-600 lg:hidden"} dir={ language != "en" ? "rtl" : "ltr"}>
      <NavLink
        to="/pages/home"
        className={({ isActive }) =>
          `flex items-center space-x-4 px-4 py-3 rounded-lg  ${isActive
            ? "bg-blue-500 text-white shadow-lg"
            : "text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all"
          }`
        }
      >
        <div className="flex flex-col items-center">
          <AiOutlineHome className="text-2xl" />
          <span>{t("Home")}</span>
        </div>
      </NavLink>


      <NavLink
        to="/pages/settings"
        className={({ isActive }) =>
          `flex items-center space-x-4 px-4 py-3 rounded-lg  ${isActive
            ? "bg-blue-500 text-white shadow-lg"
            : "text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all"
          }`
        }
      >
        <div className="flex flex-col items-center relative">
          <DiAptana className="text-2xl" />
          <span>{t("Settings")}</span>

        </div>
      </NavLink>


      <NavLink
        to="/pages/security"
        className={({ isActive }) =>
          `flex items-center space-x-4 px-4 py-3 rounded-lg  ${isActive
            ? "bg-blue-500 text-white shadow-lg"
            : "text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all"
          }`
        }
      >

        <div className="flex flex-col items-center">
          <MdOutlineSecurity className="text-2xl" />
          <span>{t("Security")}</span>
        </div>
      </NavLink>


      <NavLink
        to="/pages/donate"
        className={({ isActive }) =>
          `flex items-center space-x-4 px-4 py-3 rounded-lg  ${isActive
            ? "bg-blue-500 text-white shadow-lg"
            : "text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all"
          }`
        }
      >
        <div className="flex flex-col items-center relative">
          <LiaDonateSolid className="text-2xl" />
          <span>{t("Donate")}</span>
          <span className="absolute -top-1 ms-10 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
      </NavLink>


      <NavLink
        to="/pages/profile"
        className={({ isActive }) =>
          `flex items-center space-x-4 px-4 py-3 rounded-lg  ${isActive
            ? "bg-blue-500 text-white shadow-lg"
            : "text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all"
          }`
        }
      >
        <div className="flex flex-col items-center">
          <AiOutlineUser className="text-2xl" />
          <span>{t("Profile")}</span>
        </div>
      </NavLink>




    </div>
  );
};

export default BottomBar;
