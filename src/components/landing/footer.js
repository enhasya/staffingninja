import React from "react";
import css from "../../modules/universal.module.css";

const {
  default: StaffingNinja,
} = require("../../assets/public/staffing-ninja.svg");

const Footer = () => {
  return (
    <div
      className={`${css.details} flex flex-col gap-8 lg:gap-16 items-start lg:items-center justify-center w-full h-auto lg:h-auto p-8 lg:p-32`}
    >
      <section className="flex flex-col gap-0 items-start lg:items-center justify-center w-full">
        <img src={StaffingNinja} width="256" height="256" alt="StaffingNinja" />
        <p className="text-[#ffffff]/60 text-sm lg:text-lg font-medium tracking-tight leading-relaxed lg:leading-relaxed w-full lg:w-[720px] mt-4 lg:mt-8">
          Welcome to Staffing Ninja! We are a dynamic and innovative staffing
          solutions company committed to revolutionizing the way businesses find
          the perfect talent and individuals discover their dream careers.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 justify-center w-full mt-8 lg:mt-16">
          <div className="bg-white/10 transition-all hover:bg-white/20 ring-1 ring-white/15 hover:backdrop-blur-lg flex flex-col gap-0 items-center w-full lg:w-[480px] p-8 rounded-lg">
            <p className="text-[#ffffff] text-lg font-bold tracking-tight leading-relaxed w-full mt-0">
              Home
            </p>
          </div>
          <div className="bg-white/10 transition-all hover:bg-white/20 ring-1 ring-white/15 hover:backdrop-blur-lg flex flex-col gap-0 items-center w-full lg:w-[480px] p-8 rounded-lg">
            <p className="text-[#ffffff] text-lg font-bold tracking-tight leading-relaxed w-full mt-0">
              What We Serve
            </p>
          </div>
          <div className="bg-white/10 transition-all hover:bg-white/20 ring-1 ring-white/15 hover:backdrop-blur-lg flex flex-col gap-0 items-center w-full lg:w-[480px] p-8 rounded-lg">
            <p className="text-[#ffffff] text-lg font-bold tracking-tight leading-relaxed w-full mt-0">
              Get in Touch
            </p>
          </div>
          <div className="bg-white/10 transition-all hover:bg-white/20 ring-1 ring-white/15 hover:backdrop-blur-lg flex flex-col gap-0 items-center w-full lg:w-[480px] p-8 rounded-lg">
            <p className="text-[#ffffff] text-lg font-bold tracking-tight leading-relaxed w-full mt-0">
              Privacy Policy
            </p>
          </div>
        </div>
        <p className="text-[#ffffff]/60 text-sm lg:text-lg font-medium tracking-tight leading-relaxed lg:leading-relaxed w-full lg:w-[720px] mt-8 lg:mt-16">
          © 2023 Staffing Ninja. All Rights Reserved.
        </p>
      </section>
    </div>
  );
};

export default Footer;
