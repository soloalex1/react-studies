'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super()
    this.state = {
      time: 0,
    }

    this.timer
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', this.props, nextProps)
    return this.state.time !== nextState.time
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', this.props, nextProps)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentWillUpdate', this.props, prevProps)
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return <h3>Tempo: {this.state.time}</h3>
  }
}

export default Timer
