import React, { Component } from 'react';
import './App.scss';
import Head from './components/Head';
import Introduce from './components/Introduce';
import Line from './components/Line';
import Information from './components/Information';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Head />
        <Introduce />
        <Line />
        <h3>ABOUT ME</h3>
        <Information />
        <h3>EDUCATION</h3>
        <Resume />
      </main>
    );
  }
}

export default App;
