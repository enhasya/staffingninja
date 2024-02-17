import React from "react";

const NavbarItems = ({ title }) => {
  return (
    <button className="bg-transparent transition-all hover:bg-[#ffffff]/10 rounded-lg p-4">
      <p className="text-[#ffffff] text-sm font-bold tracking-tight leading-none">
        {title}
      </p>
    </button>
  );
};

export default NavbarItems;
