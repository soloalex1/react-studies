import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: 'valor inicial',
      checked: false,
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value })
          }}
        />
        <input type="checkbox" value={this.state.checked} />
      </form>
    )
  }
}

export default Form
