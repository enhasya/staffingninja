import React from "react";

const { default: IncludeNavbar } = require("../layouts/include-navbar");
const { default: Hero } = require("../components/hero");
const { default: Partner } = require("../components/partner");
const { default: Details } = require("../components/details");

const Landing = () => {
  return (
    <IncludeNavbar>
      <Hero />
      <Partner />
      <Details />
    </IncludeNavbar>
  );
};

export default Landing;
