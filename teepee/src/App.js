import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home.jsx';
import Developer from './pages/developer.jsx';
import HomeOwner from './pages/homeowner.jsx';
import PastExperience from './pages/past-experience.jsx';

import Footer from './components/footer.jsx';
import Header from './components/header.jsx';

import './styles/teepee.css';

const App = () => (
  <Router>
    <Contents />
  </Router>
)

const Contents = (props) => {
  return (
    <div className="teepee container-fluid">
      <Header />

      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/developer" component={ Developer }/>
        <Route path="/experience" component={ PastExperience }/>
        <Route path="/homeowner" component={ HomeOwner }/>
        <Route component={ Home }/>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
