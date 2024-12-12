import React from 'react';
import InputField from '../input/InputField';
import SubmitButton from '../input/SubmitButton';
import OTPInput from './OtpForm';

const EnterNewPass = ({ }) => {
  return (
    <div className="signup-form-container">

    <div className="flex flex-col justify-center items-center h-screen  bg-white  overflow-hidden">

      <h2 className="text-4xl font-bold mb-6">Reset Password</h2>

      <form className="w-full max-w-sm">
      

        <InputField type={"password"} placeholder={"Enter Your Password"} iconClasses={"fa-solid fa-lock text-blue-500"} />
        <InputField type={"password"} placeholder={"Confirm your password"} iconClasses={"fa-solid fa-check text-blue-500"} />
        <OTPInput className=" max-w-sm mb-3"/>
        <SubmitButton title={"Submit"}/>
        
      </form>


      <div className="my-4 flex items-center justify-center">
        <div className="w-1/3 border-t border-gray-300"></div>
        <span className="mx-2 text-gray-500">or</span>
        <div className="w-1/3 border-t border-gray-300"></div>
      </div>

     

      <div className="mt-6 text-sm text-gray-500">
        <a href="#" className="hover:underline mr-4">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline mr-4">
          Community Guidelines
        </a>
        <a href="#" className="hover:underline">
          Language
        </a>
      </div>
    </div>
</div>
  );
};

export default EnterNewPass;
