import React, { Component } from 'react';
import Header from './components/Header';

import { menuLabels } from './const/app.const';
import './assets/styles/_base.sass';

class App extends Component {
	constructor(props){
		super(props);
		this.authorName = "Alexandre Machado"
		this.menuLabels = menuLabels;
	}

	render() {
		return (
		<main>
			<Header name={this.authorName} menuLabels={this.menuLabels}/>
		</main>
		);
	}
}

export default App;
