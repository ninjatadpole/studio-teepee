import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Curtain from "./components/curtain";
import RouteContents from "./components/route-contents";
import ScrollToTop from "./components/scroll-to-top";

import "./styles/teepee.css";

const App = () => (
  <Router>
    <ScrollToTop>
      <RouteContents />
      <Curtain />
    </ScrollToTop>
  </Router>
);

export default App;
