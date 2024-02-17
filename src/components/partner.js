import React from "react";

const { default: BingX } = require("../assets/public/bingx.svg");
const { default: Binocs } = require("../assets/public/binocs.svg");
const { default: BloxStaking } = require("../assets/public/bloxstaking.svg");
const { default: Crastonic } = require("../assets/public/crastonic.svg");
const { default: DeGate } = require("../assets/public/degate.svg");
const { default: Navcoin } = require("../assets/public/navcoin.svg");
const { default: Ontropy } = require("../assets/public/ontropy.svg");
const { default: Tassets } = require("../assets/public/tassets.svg");
const {
  default: TechforceTechnologies,
} = require("../assets/public/techforce-technologies.svg");
const { default: ZKX } = require("../assets/public/zkx.svg");

const Partner = () => {
  return (
    <div className="bg-[#ffffff] flex flex-col gap-8 lg:gap-16 items-start lg:items-center justify-center w-full h-auto lg:h-auto p-8 lg:p-32">
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center justify-center w-full lg:w-auto">
        <div className="flex flex-col w-full lg:w-[640px]">
          <p className="text-[#2c3640] text-2xl lg:text-4xl font-bold text-start tracking-tight leading-relaxed lg:leading-relaxed w-auto mt-0">
            Our Clients & Partners
          </p>
          <p className="text-[#2c3640]/60 text-sm lg:text-lg font-medium tracking-tight leading-relaxed lg:leading-relaxed w-full mt-8">
            We pride ourselves on fostering robust relationships with our
            clients and partners, creating a dynamic ecosystem that thrives on
            collaboration, innovation, and mutual growth. Our clientele
            comprises a diverse range of individuals, businesses, and
            institutions from around the globe, united by their shared
            enthusiasm for blockchain technology and digital assets.
          </p>
        </div>
        <div className="flex flex-col gap-8 justify-center w-full mt-0">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 w-full h-auto">
            <div className="bg-black/5 flex flex-col gap-0 items-center justify-center w-full p-8 rounded-lg">
              <img src={BingX} width="128" height="128" alt="BingX" />
            </div>
            <div className="bg-black/5 flex flex-col gap-0 items-center justify-center w-full p-8 rounded-lg">
              <img src={Binocs} width="128" height="128" alt="Binocs" />
            </div>
            <div className="bg-black/5 flex flex-col gap-0 items-center justify-center w-full p-8 rounded-lg">
              <img
                src={BloxStaking}
                width="128"
                height="128"
                alt="BloxStaking"
              />
            </div>
            <div className="bg-black/5 flex flex-col gap-0 items-center justify-center w-full p-8 rounded-lg">
              <img src={Crastonic} width="128" height="128" alt="Crastonic" />
            </div>
            <div className="bg-black/5 flex flex-col gap-0 items-center justify-center w-full p-8 rounded-lg">
              <img src={DeGate} width="128" height="128" alt="DeGate" />
            </div>
            <div className="bg-black/5 flex flex-col gap-0 items-center justify-center w-full p-8 rounded-lg">
              <img src={Navcoin} width="128" height="128" alt="Navcoin" />
            </div>
            <div className="bg-black/5 flex flex-col gap-0 items-center justify-center w-full p-8 rounded-lg">
              <img src={Ontropy} width="128" height="128" alt="Ontropy" />
            </div>
            <div className="bg-black/5 flex flex-col gap-0 items-center justify-center w-full p-8 rounded-lg">
              <img src={Tassets} width="128" height="128" alt="Tassets" />
            </div>
            <div className="bg-black/5 flex flex-col gap-0 items-center justify-center w-full p-8 rounded-lg">
              <img
                src={TechforceTechnologies}
                width="128"
                height="128"
                alt="TechforceTechnologies"
              />
            </div>
            <div className="bg-black/5 flex flex-col gap-0 items-center justify-center w-full p-8 rounded-lg">
              <img src={ZKX} width="128" height="128" alt="ZKX" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
