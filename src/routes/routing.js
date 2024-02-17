import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const { default: Landing } = require("../pages/landing");

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default Routing;
