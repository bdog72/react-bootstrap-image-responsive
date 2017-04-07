import React, { Component } from 'react'

function BoilingVerdict (props) {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>
  }
  return <p>The water would not boil</p>
}
export default class Calculator extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {temperature: ''}
  }

  handleChange (e) {
    this.setState({temperature: e.target.value})
  }

  render () {
    const temperature = this.state.temperature
    return <div>
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <legend>The water needs to be atleast 100 to boil</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    </div>
  }
}