import React from "react";
import SideBarItem from "./SideBarItems";
import { NavLink } from "react-router-dom";

const AccountPageSidebar = () => {
  return (
    <div className="w-72 min-h-screen bg-white shadow-md p-6 lg:flex flex-col items-start hidden">
      {/* Sidebar Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-8">My Profile</h2>
      
      {/* Sidebar Links */}
      <ul className="flex flex-col w-full space-y-4">
        <NavLink
          to="/pages/profile"
          className={({ isActive }) =>
            `flex items-center space-x-4 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-blue-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all"
            }`
          }
        >
          <SideBarItem title={"Profile"} iconClasses={"fa-solid fa-user-circle"} />
        </NavLink>

        <NavLink
          to="/pages/settings"
          className={({ isActive }) =>
            `flex items-center space-x-4 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-blue-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all"
            }`
          }
        >
          <SideBarItem title={"Settings"} iconClasses={"fa-solid fa-gear"} />
        </NavLink>

        <NavLink
          to="/pages/security"
          className={({ isActive }) =>
            `flex items-center space-x-4 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-blue-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all"
            }`
          }
        >
          <SideBarItem title={"Security"} iconClasses={"fa-solid fa-shield"} />
        </NavLink>

        <NavLink
          to="/pages/donate"
          className={({ isActive }) =>
            `flex items-center space-x-4 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-blue-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all"
            }`
          }
        >
          <SideBarItem title={"Donate"} iconClasses={"fa-solid fa-donate"} />
        </NavLink>
      </ul>
    </div>
  );
};

export default AccountPageSidebar;
