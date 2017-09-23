import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './components/footer.jsx'
import Header from './components/header.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />



        <Footer />
      </div>
    );
  }
}

export default App;
