import React, { useState } from "react";

const OTPInput = ({ onSubmit,className }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (value, index) => {
    if (isNaN(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };



  return (
    <form
      className={"flex flex-col items-center justify-center  " + className}
    >
      <label
        htmlFor="otp"
        className="text-lg font-medium text-gray-700"
      >
      </label>
      <div className="flex space-x-2">
        {otp.map((value, index) => (
          <input

            key={index}
            id={`otp-input-${index}`}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            aria-label={`OTP input ${index + 1}`}
          />
        ))}
      </div>
   
    </form>
  );
};

export default OTPInput;
