import React, { Component } from 'react'

class Results extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Winner: {this.props.message}</div>
    )
  }
}

export default Results
