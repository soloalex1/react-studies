import React, { Component } from 'react';

// import Header from './components/Header'
// import Navbar from './components/Navbar'
import Comment from './components/Comment';

import './assets/styles/scss/_base.scss';

class App extends Component {

  myName = 'Alexandre Machado'
  menuLinks = [
    'início',
    'projetos',
    'contato'
  ]

  author = {
    name: 'alexandre machado',
    avatarUrl: require('./assets/images/Doppelsoeldner.png')
  }

  render() {
    return (
      <main>
        {/* <Header name="Alexandre Machado"/> */}
        {/* <Navbar name={this.myName} menuLabels={ this.menuLinks }/>  */}
        {/* passar props com nome da prop em si, não do parâmetro do construtor */}
        <Comment author={this.author} text="busquem conhecimento" date={new Date().toLocaleTimeString()}/>
      </main>
    );
  }
}

export default App;