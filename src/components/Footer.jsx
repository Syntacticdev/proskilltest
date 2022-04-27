import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-screen ">
      <h3 className="copytight text-center text-white font-semibold sm:text-sm text-lg  py-2 ">
        Copyright {new Date().getFullYear()}. <span>ProSkillTest</span>
      </h3>
    </div>
  );
};

export default Footer;
