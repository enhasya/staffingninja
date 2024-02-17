import React from "react";

const { default: NavbarUI } = require("../components/navbar-ui");

const IncludeNavbar = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-auto p-0 m-0">
      <NavbarUI />
      {React.Children.map(children, (child) => child)}
    </div>
  );
};

export default IncludeNavbar;
