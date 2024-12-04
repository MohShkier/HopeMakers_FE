import React from 'react';

const SubmitButton = ({ title }) => (
    <button className="bg-blue-500 text-white w-full py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-300">
        {title}
    </button>
);

export default SubmitButton;
