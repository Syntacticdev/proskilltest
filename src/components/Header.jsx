import React from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <div className="p-4 flex justify-between bg-[url('/icon_image/edu.png')] bg-cover">
      <h3 className="text-4xl">
        <span className="text-white px-4 bg-purple-400 ">ProSkill</span>
        <span className=" bg-green-600 text-yellow-400 px-2 text-3xl">
          test
        </span>
      </h3>
    </div>
  );
};

export default Header;
