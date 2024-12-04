import React from 'react';
import AccountPageSidebar from './AccountPageSideBar';
import ProfileContent from './ProfileContent';

const AccountPages = () => {
    return (<>
      <div className="flex min-h-screen !w-full bg-blue-50">
      <AccountPageSidebar />
        <ProfileContent/>
      
      
    </div>
    </>);
};

export default AccountPages;
