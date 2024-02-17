import React from "react";

const {
  default: RecruitmentStrategies,
} = require("../../assets/public/recruitment-strategies.svg");
const {
  default: LargeCandidatePool,
} = require("../../assets/public/large-candidate-pool.svg");
const {
  default: TeamBuildingPlan,
} = require("../../assets/public/team-building-plan.svg");
const {
  default: RightOpportunities,
} = require("../../assets/public/right-opportunities.svg");
const {
  default: GlobalSourcing,
} = require("../../assets/public/global-sourcing.svg");

const WhatDoWeServe = () => {
  return (
    <div className="bg-[#ffffff] flex flex-col gap-8 lg:gap-16 items-start lg:items-center justify-center w-full h-auto lg:h-auto p-8 lg:p-32">
      <section className="flex flex-col gap-0 items-start lg:items-center justify-center w-full">
        <p className="text-[#2c3640] text-2xl lg:text-4xl font-bold tracking-tight leading-relaxed lg:leading-relaxed w-full lg:w-[720px] mt-0">
          What do We Serve?
        </p>
        <p className="text-[#2c3640]/60 text-sm lg:text-lg font-medium tracking-tight leading-relaxed lg:leading-relaxed w-full lg:w-[720px] mt-4 lg:mt-8">
          At our core, we are dedicated to providing comprehensive services that
          empower businesses in the realm of talent acquisition. Our offerings
          are meticulously designed to cater to the diverse needs of
          organizations seeking to build robust teams and secure the right
          talent. Here's a breakdown of what we bring to the table:
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 w-full h-auto mt-8 lg:mt-16">
          <div className="flex flex-col gap-0 items-center justify-center w-full p-4 lg:p-8 shadow-2xl transition-all shadow-black/10 lg:hover:shadow-black/20 rounded-lg">
            <img
              src={RecruitmentStrategies}
              width="128"
              height="128"
              alt="RecruitmentStrategies"
            />
            <p className="text-[#2c3640] text-sm font-bold text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
              Recruitment Strategies
            </p>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center w-full p-4 lg:p-8 shadow-2xl transition-all shadow-black/10 lg:hover:shadow-black/20 rounded-lg">
            <img
              src={LargeCandidatePool}
              width="128"
              height="128"
              alt="LargeCandidatePool"
            />
            <p className="text-[#2c3640] text-sm font-bold text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
              Large Candidate Pool
            </p>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center w-full p-4 lg:p-8 shadow-2xl transition-all shadow-black/10 lg:hover:shadow-black/20 rounded-lg">
            <img
              src={TeamBuildingPlan}
              width="128"
              height="128"
              alt="TeamBuildingPlan"
            />
            <p className="text-[#2c3640] text-sm font-bold text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
              Team Building Plan
            </p>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center w-full p-4 lg:p-8 shadow-2xl transition-all shadow-black/10 lg:hover:shadow-black/20 rounded-lg">
            <img
              src={RightOpportunities}
              width="128"
              height="128"
              alt="RightOpportunities"
            />
            <p className="text-[#2c3640] text-sm font-bold text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
              Right Opportunities
            </p>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center w-full p-4 lg:p-8 shadow-2xl transition-all shadow-black/10 lg:hover:shadow-black/20 rounded-lg">
            <img
              src={GlobalSourcing}
              width="128"
              height="128"
              alt="GlobalSourcing"
            />
            <p className="text-[#2c3640] text-sm font-bold text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
              Global Sourcing
            </p>
          </div>
          <div className="bg-[#2c3640] transition-all hover:bg-[#2c3640]/80 flex flex-col gap-0 items-center justify-center w-full p-4 lg:p-8 shadow-2xl shadow-black/10 lg:hover:shadow-black/20 rounded-lg">
            <p className="text-[#ffffff] text-sm font-bold text-start lg:text-center tracking-tight leading-relaxed lg:leading-relaxed w-full mt-4">
              Learn More
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatDoWeServe;
