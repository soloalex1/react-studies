'use strict'

import React from 'react'

const Title = ({ name, lastname }) => <h1>Olá {`${name} ${lastname}`}!</h1>

Title.defaultProps = {
	name: 'Anônimo',
	lastname: 'da Silva',
}

export default Title
