import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home.jsx';

import Footer from './components/footer.jsx';
import Header from './components/header.jsx';

import './styles/teepee.css';

const HomeOwner = () => <main><h2>Home Owner</h2></main>
const Developer = () => <main><h2>Developer</h2></main>
const Experience = () => <main><h2>Experience</h2></main>

const App = () => (
  <Router>
    <Contents />
  </Router>
)

const Contents = (props) => {
  return (
    <div>
      <div className="teepee wrapper container-fluid">
        <Header />

        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/developer" component={ Developer }/>
          <Route path="/experience" component={ Experience }/>
          <Route path="/homeowner" component={ HomeOwner }/>
          <Route component={ Home }/>
        </Switch>

        <Footer />
      </div>
    </div>
  );
}

export default App;
