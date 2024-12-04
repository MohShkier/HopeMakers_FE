import React from "react";
const AccountPageSidebar = () => {
    return (
      <div className="!w-72 min-h-screen bg-white shadow-lg p-4 lg:flex flex-col items-start hidden">
        <h2 className="text-xl font-bold mb-6">My Profile</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <i className="fa-solid fa-user-circle"></i>
            <span>Role setup</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fa-solid fa-shield"></i>
            <span>Security</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fa-solid fa-donate"></i>
            <span>Donate History</span>
          </li>
       
          <li className="flex items-center space-x-2 text-red-500">
            <i className="fa-solid fa-trash"></i>
            <span>Delete Account</span>
          </li>
        </ul>
      </div>
    );
  };
  
  export default AccountPageSidebar;
  