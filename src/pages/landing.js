import React from "react";

const { default: IncludeNavbar } = require("../layouts/include-navbar");
const { default: Hero } = require("../components/landing/hero");
const {
  default: ClientsAndPartner,
} = require("../components/landing/clients-and-partner");
const { default: Details } = require("../components/landing/details");
const {
  default: WhatDoWeServe,
} = require("../components/landing/what-do-we-serve");
const { default: Footer } = require("../components/landing/footer");

const Landing = () => {
  return (
    <IncludeNavbar>
      <Hero />
      <ClientsAndPartner />
      <Details />
      <WhatDoWeServe />
      <Footer />
    </IncludeNavbar>
  );
};

export default Landing;
