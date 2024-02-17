import React from "react";

const { default: IncludeNavbar } = require("../layouts/include-navbar");
const { default: Hero } = require("../components/hero");

const Landing = () => {
  return (
    <IncludeNavbar>
      <Hero />
    </IncludeNavbar>
  );
};

export default Landing;
