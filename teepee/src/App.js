import React, { Component } from 'react';

import Footer from './components/footer.jsx'
import Header from './components/header.jsx'

import './styles/teepee.css';

class App extends Component {
  render() {
    return (
      <div className="teepee wrapper">
        <Header />

        <Footer />
      </div>
    );
  }
}

export default App;
