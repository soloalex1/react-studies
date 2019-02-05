import React, { Component } from 'react';

// import Header from './components/Header'
// import Navbar from './components/Navbar'
// import Comment from './components/Comment';
// import Clock from './components/Clock';
import Table from './components/Table';

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

  userList = ['João', 'Tiego', 'Alexandre', 'Analu', 'Rafael', 'Jemima']

  render() {
    return (
      <main>
        {/* <Header name="Alexandre Machado"/> */}
          {/* passar props com nome da prop em si, não do parâmetro do construtor */}
        {/* <Navbar name={this.myName} menuLabels={ this.menuLinks }/>  */}
        {/* <Comment author={this.author} text="busquem conhecimento" date={new Date().toLocaleTimeString()}/> */}
        {/* <Clock/> */}
        <Table users={this.userList}/>
      </main>
    );
  }
}

export default App;