'use strict'

import React from 'react'
import LikeButton from './like-button'
import Square from './square'
import Title from './title'
import Timer from './timer'
import Button from './button'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			time: 0,
			showTimer: true,
		}
	}

	render() {
		return (
			<div className="container">
				<Title />
				{this.state.showTimer && <Timer />}
				<Button
					handleClick={() =>
						this.setState({ showTimer: !this.state.showTimer })
					}
				>
					Toggle timer
				</Button>
			</div>
		)
	}
}

export default App
