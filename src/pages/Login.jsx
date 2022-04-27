import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen bg-[url('/icon_image/abstract-city.png')] flex-col flex justify-center  items-center ">
      <h3 className="text-4xl mb-4">
        <span className="text-white px-4 bg-purple-400 ">ProSkill</span>
        <span className=" bg-green-600 text-yellow-400 px-2 text-3xl">
          test
        </span>
      </h3>
      <div className=" w-[85vw]  h-[60vh]   sm:w-[40vw]">
        <div className="grid justify-center my-6">
          <button className="bg-blue-400 flex justify-center items-center px-16 py-2 text-white">
            <span className="mx-2">Login with Facebook</span> <FaFacebook />
          </button>
          <button className="bg-blue-400 flex justify-center  items-center px-16 py-2 mt-2 text-white">
            <span className="mx-2">Login with Google</span> <FaGoogle />
          </button>
        </div>
        <form action="" className="grid align-center justify-center w-full">
          <div className="w-full mb-8">
            <input
              type="email"
              placeholder="Email Address"
              className="border-b-2 w-[300px] outline-none border-gray-400"
            />
          </div>
          <div className="w-full mb-8">
            <input
              type="password"
              placeholder="Password"
              className="border-b-2 w-[300px] outline-none border-gray-400"
            />
          </div>
          <div>
            <button className="bg-green-600 text-white w-full py-2 hover:bg-blue-200 ">
              Login now!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
