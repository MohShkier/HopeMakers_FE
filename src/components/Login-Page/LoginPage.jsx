import React from 'react';
import InputField from '../input/InputField';
import SubmitButton from '../input/SubmitButton';

const LoginPage = ({ }) => {
  return (
    <div className="signup-form-container">
      <div className="flex flex-col justify-center items-center min-h-screen bg-white ">

        <h2 className="text-4xl font-bold mb-6">Sign In</h2>

        <form className="w-full max-w-sm">

          <InputField type={"email"} placeholder={"Enter Your Email"} iconClasses={"fa-solid fa-envelope text-blue-500"} />

          <InputField type={"password"} placeholder={"Enter Your Password"} iconClasses={"fa-solid fa-lock text-blue-500"} />
          <div className=" flex items-center justify-left  mb-3">
            <div className=" border-t border-gray-300"></div>
            <a href='#' className='underline text-blue-500 hover:text-blue-800'>Forgot Password ?</a>
            <div className="border-t border-gray-300"></div>
          </div>

          <SubmitButton title={"Submit"} />

        </form>



        <div className="mt-4 !flex  w-full items-center justify-left">
          <div className=" border-t border-gray-300"></div>
          <p> Don`t Have An Account ? 
          <a href='#' className=' border-gray-300'><span className='text-blue-500 hover:underline hover:text-blue-800'> Sign Up</span></a>
          </p>
          <div className="border-t border-gray-300"></div>
        </div>

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

export default LoginPage;
