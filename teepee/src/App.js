import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/footer.jsx'
import Header from './components/header.jsx'

import './styles/teepee.css';

const Home = () => <main><h2>Home</h2></main>
const HomeOwner = () => <main><h2>Home Owner</h2></main>
const Developer = () => <main><h2>Developer</h2></main>
const Experience = () => <main><h2>Experience</h2></main>

const App = () => (
  <Router>
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
  </Router>
)

export default App;
