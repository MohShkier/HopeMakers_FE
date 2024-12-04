import React from 'react';

const InputField = ({type, placeholder, iconClasses}) => (
    <div className="flex items-center w-full max-w-sm mb-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
    <input
      type={type}
      placeholder={placeholder}
      className="flex-1 p-3 rounded-lg outline-none border-none focus:ring-0"
    />
    <div className="flex items-center pr-3 pointer-events-none ">
      <i className={iconClasses}></i>
    </div>
  </div>
  
);

export default InputField;