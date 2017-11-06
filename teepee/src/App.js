import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import ApproachPage from './pages/approach';
import ContactPage from './pages/contact';
import ProjectListPage from './pages/project-list';

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
        <Route exact path="/" component={ HomePage }/>
        <Route path="/projects" component={ ProjectListPage }/>
        <Route path="/approach" component={ ApproachPage }/>
        <Route path="/contact" component={ ContactPage }/>
        <Route component={ HomePage }/>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
