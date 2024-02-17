import React from "react";

const {
  default: RecruitmentConsultancy,
} = require("../assets/public/recruitment-consultancy.svg");

const Details = () => {
  return (
    <div className="bg-[#2c3640] flex flex-col gap-8 lg:gap-16 items-start lg:items-center justify-center w-full h-auto lg:h-auto p-8 lg:p-32">
      <section className="flex flex-col gap-0 items-start lg:items-center justify-center w-full">
        <p className="text-[#ffffff] text-2xl lg:text-4xl font-bold tracking-tight leading-relaxed lg:leading-relaxed w-full lg:w-[720px] mt-0">
          Why do We call Ourselves a Leading Recruitment Consultancy for
          Industry 4.0?
        </p>
        <p className="text-[#ffffff]/60 text-sm lg:text-lg font-medium tracking-tight leading-relaxed lg:leading-relaxed w-full lg:w-[720px] mt-8">
          Staffing Ninja has been supporting businesses in industry 4.0 with
          great recruitment strategies, and always helps businesses with the
          right set of candidates and fulfill their recruitment needs. We cater
          to businesses who are building businesses with technologies like
          blockchain, AI, Machine Learning, etc.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 justify-center w-full mt-8 lg:mt-16">
          <div className="bg-white/10 transition-all hover:bg-white/20 flex flex-col gap-0 items-center w-full lg:w-[480px] p-8 rounded-lg">
            <p className="text-[#ffffff] text-lg lg:text-2xl font-bold tracking-tight leading-relaxed lg:leading-relaxed w-full mt-0">
              Mission & Goal
            </p>
            <p className="text-[#ffffff] text-sm lg:text-lg font-medium tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
              We want to support every{" "}
              <span className="font-bold">Blockchain</span>,{" "}
              <span className="font-bold">AI</span>,{" "}
              <span className="font-bold">Gaming</span> and{" "}
              <span className="font-bold">Forex</span> project to build a
              magnificent team using our splendid services. We want to help
              candidates find the right opportunity where they can showcase
              their skills.
            </p>
          </div>
          <div className="bg-white/10 transition-all hover:bg-white/20 flex flex-col gap-0 items-center w-full lg:w-[480px] p-8 rounded-lg">
            <p className="text-[#ffffff] text-lg lg:text-2xl font-bold tracking-tight leading-relaxed lg:leading-relaxed w-full mt-0">
              Why Us?
            </p>
            <p className="text-[#ffffff] text-sm lg:text-lg font-medium tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
              Our magnificent team who drive innovative strategies and challenge
              every complex business problems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
