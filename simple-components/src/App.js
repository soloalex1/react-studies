import React, { Component } from 'react';

// import Header from './components/Header';
import Navbar from './components/Navbar'


import './assets/styles/main.css';

class App extends Component {

  myName = 'alexandre machado'
  menuLinks = [
    'início',
    'projetos',
    'contato'
  ]

  render() {
    return (
      <main>
        {/* <Header name="Alexandre Machado"/> */}
        <Navbar name={this.myName} menuLabels={ this.menuLinks }/> {/* passar props com nome da prop em si, não do parâmetro do construtor */}
      </main>
    );
  }
}

export default App;
