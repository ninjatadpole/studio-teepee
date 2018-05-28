import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home';
import ApproachPage from '../pages/approach';
import ContactPage from '../pages/contact';
import PrivacyPage from '../pages/privacy';
import ProjectListPage from '../pages/project-list';
import ProjectDetailsPage from '../pages/project-details';

import Footer from './footer';
import Header from './header';

const RouteContents = (props) => {
  return (
    <div className="teepee container-fluid">
      <Header />

      <Switch>
        <TrackedRoute exact path="/" component={ HomePage }/>
        <TrackedRoute exact path="/projects" component={ ProjectListPage }/>
        <TrackedRoute path="/projects/:projectId" component={ ProjectDetailsPage }/>
        <TrackedRoute path="/approach" component={ ApproachPage }/>
        <TrackedRoute path="/contact" component={ ContactPage }/>
        <TrackedRoute path="/privacy" component={ PrivacyPage }/>
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

export default RouteContents;
