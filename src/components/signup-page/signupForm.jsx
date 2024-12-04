import React from 'react';
import InputField from '../input/InputField';
import SubmitButton from '../input/SubmitButton';
import InputRadio from '../input/InputRadio';
import SelectUserType from './SelectUserType';

const SignUpForm = ({ logoHeader }) => {
  return (
    <div className="signup-form-container">

    <div className="flex flex-col justify-center items-center h-screen  bg-white  overflow-hidden">

      <h2 className="text-4xl font-bold mb-6">Sign Up</h2>

      <form className="w-full max-w-sm">
      
        <InputField type={"email"} placeholder={"Enter Your Email"} iconClasses={"fa-solid fa-envelope text-blue-500"} />

        <InputField type={"password"} placeholder={"Enter Your Password"} iconClasses={"fa-solid fa-lock text-blue-500"} />

        <InputField type={"password"} placeholder={"Confirm your password"} iconClasses={"fa-solid fa-check text-blue-500"} />

    

        <div className="flex flex-row gap-3 justify-center mb-4">
          <SelectUserType/>

        </div>

        <SubmitButton title={"Submit"}/>
        
      </form>


      <div className="my-4 flex items-center justify-center">
        <div className="w-1/3 border-t border-gray-300"></div>
        <span className="mx-2 text-gray-500">or</span>
        <div className="w-1/3 border-t border-gray-300"></div>
      </div>

      <button className="flex items-center justify-center w-64 mb-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300">
        <i className="fa-brands fa-google pr-4"></i>
        Sign up with Google
      </button>

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

export default SignUpForm;
