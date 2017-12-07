import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteContents from './components/route-contents';
import ScrollToTop from './components/scroll-to-top';

import './styles/teepee.css';

const App = () => (
  <Router>
    <ScrollToTop>
      <RouteContents />
    </ScrollToTop>
  </Router>
)

export default App;
