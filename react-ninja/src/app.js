'use strict'

import React from 'react'
import LikeButton from './like-button'
import Square from './square'
import Title from './title'

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Title />
				<LikeButton>children</LikeButton>
				{['blue', 'red', 'green'].map((color, index) => (
					<Square color={color} key={index} onClick={() => alert('clicou')} />
				))}
			</div>
		)
	}
}

export default App
