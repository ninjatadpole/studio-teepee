import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import ApproachPage from './pages/approach';
import ContactPage from './pages/contact';
import ProjectListPage from './pages/project-list';
import ProjectDetailsPage from './pages/project-details';

import Footer from './components/footer';
import Header from './components/header';

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
        <TrackedRoute exact path="/" component={ HomePage }/>
        <TrackedRoute exact path="/projects" component={ ProjectListPage }/>
        <TrackedRoute path="/projects/:projectId" component={ ProjectDetailsPage }/>
        <TrackedRoute path="/approach" component={ ApproachPage }/>
        <TrackedRoute path="/contact" component={ ContactPage }/>
        <TrackedRoute component={ HomePage }/>
      </Switch>

      <Footer />
    </div>
  );
}

const TrackedRoute = (props) => {
  window.ga('send', 'pageview', props.location.pathname);

  return (
    <Route { ...props } />
  );
}

export default App;
