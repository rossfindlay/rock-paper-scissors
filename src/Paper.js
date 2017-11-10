import React, { Component } from 'react'

class Paper extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onPaperClick()
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        Paper
      </div>
    )
  }
}

export default Paper
