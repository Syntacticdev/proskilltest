import React from "react";
import { Link } from "react-router-dom";
import { MdContactPage, MdSupervisedUserCircle } from "react-icons/md";

const Navigations = ({ setToggle }) => {
  const navs = [
    {
      title: "Profile",
      path: "/profile",
      icon: <MdSupervisedUserCircle className="w-[40px] h-[40px]" />,
    },
    {
      title: "Test",
      path: "/test",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
      icon: <MdContactPage className="w-[40px] h-[40px]" />,
    },
  ];
  return (
    <div className="absolute h-screen grid justify-center items-center bg-[rgba(0,0,0,.8)] rounded-l-md w-full top-0 right-0">
      <ul>
        {navs.map(({ title, path, icon }) => (
          <li className=" text-teal-50 my-4 py-3" key={title + path}>
            <Link
              to={path}
              onClick={() => setToggle(false)}
              className="flex items-center"
            >
              <span>{title}</span>{" "}
              <div className="bg-blue-300 p-2 rounded-full mx-2">{icon}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigations;
