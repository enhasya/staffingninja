import React from "react";
import NavbarItems from "./navbar-items";

const {
  default: StaffingNinja,
} = require("../assets/public/staffing-ninja.svg");
const {
  default: Instagram,
} = require("../assets/icons/instagram-negative.svg");
const { default: LinkedIn } = require("../assets/icons/linkedin-negative.svg");
const { default: Threads } = require("../assets/icons/threads-negative.svg");
const { default: X } = require("../assets/icons/x-negative.svg");

const NavbarUI = () => {
  return (
    <nav className="bg-[#2c3640] flex flex-col lg:flex-row gap-2 lg:gap-4 items-center justify-between w-full h- p-4">
      <section className="flex flex-col lg:flex-row gap-2 items-start lg:items-center justify-start w-full lg:w-[20%]">
        <img src={StaffingNinja} width="128" height="128" alt="StaffingNinja" />
      </section>
      <section className="flex flex-col lg:flex-row gap-2 items-start lg:items-center justify-center w-full lg:w-[60%]">
        <NavbarItems title={"Home"} />
        <NavbarItems title={"What We Serve"} />
        <NavbarItems title={"Get in Touch"} />
        <NavbarItems title={"Privacy Policy"} />
        <NavbarItems title={"Contact Us"} />
      </section>
      <section className="flex flex-col lg:flex-row gap-2 items-start lg:items-center justify-center lg:justify-end w-full lg:w-[20%]">
        <div className="flex flex-row gap-2 items-center justify-start lg:justify-center w-full lg:w-auto">
          <button className="bg-transparent transition-all hover:bg-[#ffffff]/10 rounded-lg p-4">
            <img src={Instagram} width="16" height="16" alt="Instagram" />
          </button>
          <button className="bg-transparent transition-all hover:bg-[#ffffff]/10 rounded-lg p-4">
            <img src={LinkedIn} width="16" height="16" alt="LinkedIn" />
          </button>
          <button className="bg-transparent transition-all hover:bg-[#ffffff]/10 rounded-lg p-4">
            <img src={Threads} width="16" height="16" alt="Threads" />
          </button>
          <button className="bg-transparent transition-all hover:bg-[#ffffff]/10 rounded-lg p-4">
            <img src={X} width="16" height="16" alt="X" />
          </button>
        </div>
      </section>
    </nav>
  );
};

export default NavbarUI;
