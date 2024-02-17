import React from "react";

const {
  default: StaffingNinja,
} = require("../assets/public/staffing-ninja.svg");

const NavbarUI = () => {
  return (
    <nav className="bg-[#fffff] flex flex-col lg:flex-row gap-4 items-center justify-between w-full h- p-4">
      <section className="flex flex-col lg:flex-row gap-2 items-center justify-start w-full lg:w-[20%]">
        <img src={StaffingNinja} width="128" height="128" />
      </section>
      <section className="flex flex-col lg:flex-row gap-2 items-center justify-center w-full lg:w-[60%]">
        <button className="bg-transparent transition-all hover:bg-black/10 rounded-lg p-4">
          <p className="text-[#000000] text-sm font-bold tracking-tight leading-none">
            Home
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/10 rounded-lg p-4">
          <p className="text-[#000000] text-sm font-bold tracking-tight leading-none">
            What We Serve
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/10 rounded-lg p-4">
          <p className="text-[#000000] text-sm font-bold tracking-tight leading-none">
            Get in Touch
          </p>
        </button>
      </section>
      <section className="flex flex-col lg:flex-row gap-2 items-center justify-end w-full lg:w-[20%]">
        <button className="bg-transparent transition-all hover:bg-black/10 rounded-lg p-4">
          <p className="text-[#000000] text-sm font-bold tracking-tight leading-none">
            Contact us
          </p>
        </button>
      </section>
    </nav>
  );
};

export default NavbarUI;
