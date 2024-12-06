import React, { useState } from 'react';
import AccountPageSidebar from './AccountPageSideBar';
import ProfileContent from './ProfileContent';
import LoginPage from "../Login-Page/LoginPage"
import SettingsPage from './settingsPage';
import SecurityPage from './SecurityPage';
const AccountPages = () => {


  return (
    <>
      <div className="flex min-h-screen !w-full bg-blue-50">
        <AccountPageSidebar />
      </div>
    </>
  );
};

export default AccountPages;
