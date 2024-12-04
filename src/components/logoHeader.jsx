import React from 'react';

const LogoHeader = ({ showTitle }) => (
  <div className={`flex items-center ${showTitle ? '' : 'hidden'} lg:flex mb-8`}>
    <img src="./hopemaker.png" alt="Logo" className="h-auto w-24" />
    <h1 className="text-3xl font-bold text-blue-600">HOPE MAKERS</h1>
  </div>
);

export default LogoHeader;