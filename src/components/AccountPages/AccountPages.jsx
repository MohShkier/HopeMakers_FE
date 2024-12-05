import React, { useState } from 'react';
import AccountPageSidebar from './AccountPageSideBar';
import ProfileContent from './ProfileContent';
import LoginPage from "../Login-Page/LoginPage"
import SettingsPage from './settingsPage';
import SecurityPage from './SecurityPage';
const AccountPages = () => {
  const [currentPage, setCurrentPage] = useState('');

  const editCurrentPage = (page) => {
    setCurrentPage(page);
    console.log(page); // Optional: for debugging purposes
  };

  let pageContent;
  switch (currentPage) {
    case 'Profile':
      pageContent = <ProfileContent />;
      break;
    case 'Settings':
      pageContent = <SettingsPage/>;
      break;
    case 'Security':
      pageContent = <SecurityPage />;
      break;
    case 'Donate':
      pageContent = <LoginPage />;
      break;
    case 'Delete Account':
      pageContent = <LoginPage />;
      break;
    default:
      pageContent = <ProfileContent />; // Default to Profile if no page is selected
      break;
  }

  return (
    <>
      <div className="flex min-h-screen !w-full bg-blue-50">
        <AccountPageSidebar editCurrentPage={editCurrentPage} />
          {pageContent}
      </div>
    </>
  );
};

export default AccountPages;
