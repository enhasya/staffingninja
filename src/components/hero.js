import React from "react";
import css from "../modules/universal.module.css";

const {
  default: RecruitmentConsultancy,
} = require("../assets/public/recruitment-consultancy.svg");

const Hero = () => {
  return (
    <div
      className={`${css.hero} flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center justify-center w-full h-auto lg:h-auto p-8 lg:p-32`}
    >
      <section className="flex flex-col gap-0 items-start justify-center w-full lg:w-[50%]">
        <p className="text-[#2c3640] text-4xl lg:text-6xl font-bold tracking-tight leading-relaxed lg:leading-relaxed w-full mt-0">
          Making Recruitment Simple
        </p>
        <p className="text-[#2c3640] text-lg lg:text-2xl font-bold tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
          A leading recruitment consultancy for industry 4.0
        </p>
        <p className="text-[#2c3640] text-sm lg:text-lg font-medium tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
          We are a dynamic and innovative staffing solutions company committed
          to revolutionizing the way businesses find the perfect talent and
          individuals discover their dream careers.
        </p>
        <button className="bg-[#E6F4FF]/100 transition-all hover:bg-[#E6F4FF]/90 ring-1 ring-[#2c3640]/20 rounded-lg px-8 py-4 mt-16">
          <p className="text-[#2c3640] text-xs lg:text-base font-bold tracking-tight leading-relaxed lg:leading-relaxed">
            Get started
          </p>
        </button>
      </section>
      <section className="flex flex-col gap-0 items-center justify-center w-full lg:w-[50%]">
        <img src={RecruitmentConsultancy} width="480" height="480" />
      </section>
    </div>
  );
};

export default Hero;
