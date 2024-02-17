import React from "react";
import css from "../../modules/universal.module.css";

const {
  default: RecruitmentConsultancy,
} = require("../../assets/public/recruitment-consultancy.svg");

const Hero = () => {
  return (
    <div
      className={`${css.hero} flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center justify-center w-full h-auto lg:h-auto p-8 lg:p-32`}
    >
      <section className="flex flex-col gap-0 items-start justify-center w-full lg:w-[50%]">
        <p className="text-[#2c3640] text-2xl lg:text-6xl font-bold tracking-tight leading-relaxed lg:leading-relaxed w-full mt-0">
          Making Recruitment Simple
        </p>
        <p className="text-[#2c3640] text-lg lg:text-2xl font-bold tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
          A Leading Recruitment Consultancy for Industry 4.0
        </p>
        <p className="text-[#2c3640] text-sm lg:text-lg font-medium tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
          We are a dynamic and innovative staffing solutions company committed
          to revolutionizing the way businesses find the perfect talent and
          individuals discover their dream careers.
        </p>
        <div className="flex flex-row gap-2 items-center justify-start w-full h-auto">
          <button className="bg-[#2c3640]/100 transition-all hover:bg-[#2c3640]/80 rounded-lg px-8 py-4 mt-8 lg:mt-16">
            <p className="text-[#ffffff] text-xs lg:text-base font-bold tracking-tight leading-relaxed lg:leading-relaxed">
              Get Started
            </p>
          </button>
          <button className="bg-[#ffffff]/100 transition-all hover:bg-[#ffffff]/80 rounded-lg px-8 py-4 mt-8 lg:mt-16">
            <p className="text-[#2c3640] text-xs lg:text-base font-bold tracking-tight leading-relaxed lg:leading-relaxed">
              Privacy Policy
            </p>
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-0 items-center justify-center w-full lg:w-[50%]">
        <img
          src={RecruitmentConsultancy}
          width="480"
          height="480"
          alt="RecruitmentConsultancy"
        />
      </section>
    </div>
  );
};

export default Hero;
