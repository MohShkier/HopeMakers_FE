import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiShoppingCartLine, RiMenuLine } from "react-icons/ri";
import { MdCompareArrows } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { LiaDonateSolid } from "react-icons/lia";
import { DiAptana } from "react-icons/di";


const BottomBar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-300 shadow-lg flex justify-around py-2 text-sm text-gray-600 lg:hidden">
      <div className="flex flex-col items-center">
        <AiOutlineHome className="text-2xl" />
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center relative">
        <DiAptana className="text-2xl" />
        <span>Settings</span>

      </div>
      <div className="flex flex-col items-center">
        <MdOutlineSecurity className="text-2xl" />
        <span>Security</span>
      </div>
      <div className="flex flex-col items-center relative">
        <LiaDonateSolid className="text-2xl" />
        <span>Donate</span>
        <span className="absolute -top-1 ms-10 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          0
        </span>
      </div>
      <div className="flex flex-col items-center">
        <AiOutlineUser className="text-2xl" />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default BottomBar;
