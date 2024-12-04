import React, { useState } from "react";
import SideBarItem from "./SideBarItems";
import { iconClasses } from "@mui/material";
const AccountPageSidebar = ({ editCurrentPage }) => {

  return (
    <div className="!w-72 min-h-screen bg-white shadow-lg p-4 lg:flex flex-col items-start hidden">
      <h2 className="text-xl font-bold mb-6">My Profile</h2>
      <ul className="space-y-4  ">
        <SideBarItem title={"Profile"} iconClasses={"fa-solid fa-user-circle"} onClickItem={() => editCurrentPage("Profile")} />
        <SideBarItem title={"Settings"} iconClasses={"fa-solid fa-gear"} onClickItem={() => editCurrentPage("Settings")} />
        <SideBarItem title={"Security"} iconClasses={"fa-solid fa-shield"} onClickItem={() => editCurrentPage("Security")} />
        <SideBarItem title={"Donate"} iconClasses={"fa-solid fa-donate"} onClickItem={() => editCurrentPage("Donate")} />
        <SideBarItem title={"Delete Account"} iconClasses={"fa-solid fa-trash"} liClasses={'!flex !items-center !space-x-2 !text-red-500'} onClickItem={() => editCurrentPage("Delete Account")} />

      </ul>
    </div>
  );
};

export default AccountPageSidebar;
