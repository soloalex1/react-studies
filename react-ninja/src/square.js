import React from 'react'

export default function Square({ color, onClick }) {
	return (
		<div
			style={{ backgroundColor: color, width: '100px', height: '100px' }}
			onClick={onClick}
		/>
	)
}
