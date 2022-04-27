import React from "react";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import {
  MdInsertInvitation,
  MdMiscellaneousServices,
  MdSettings,
  MdUpdate,
  MdVerified,
} from "react-icons/md";

const Profile = () => {
  return (
    <div className=" bg-slate-100 bg-[url('/icon_image/abstract-city.png')] relative">
      <div className="profile__head px-4 rounded-b-2xl   flex items-center text-center sm:text-left">
        <h1 className="text-white font-bold text-3xl">Profile</h1>
      </div>
      <div className="main_comp h-[80vh]  top-[15vh] rounded-md  w-[90vw] mx-auto">
        <div className="w-full grid grid-cols-[60%,40%] h-[120px] bg-white rounded-md">
          <div className="flex items-center">
            <img
              src="/icon_image/cute-pencil-waving-hand.png"
              className="w-[120px] h-full"
              alt=""
            />
            <div>
              <h3 className="username text-xl font-bold">FantasyU</h3>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <span className="status flex items-center font-semibold text-white px-6 rounded-l-xl bg-yellow-500 py-2">
              <span className="mx-1">Verified</span>
              <MdVerified />
            </span>
          </div>
        </div>
        <ul className="mt-3 bg-white p-4">
          <li className="py-2">
            <Link to="/" className="flex items-center">
              <FaHamburger />
              <span className="px-3 text-lg">Purchase of course</span>
            </Link>
          </li>
          <li className="py-2">
            <Link to="/" className="flex items-center">
              <MdUpdate />
              <span className="px-3 text-lg">Update Profile</span>
            </Link>
          </li>
          <li className="py-2">
            <Link to="/" className="flex items-center">
              <MdInsertInvitation />
              <span className="px-3 text-lg">invite friends</span>
            </Link>
          </li>
          <li className="py-2">
            <Link to="/" className="flex items-center">
              <MdMiscellaneousServices />
              <span className="px-3 text-lg">Customer Service</span>
            </Link>
          </li>
          <li className="py-2">
            <Link to="/" className="flex items-center">
              <MdSettings />
              <span className="px-3 text-lg">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
