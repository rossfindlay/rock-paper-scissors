import React, { Component } from 'react'

class Rock extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onRockClick()
  }

  render() {
    return (
      <div
        class="weapon rock"
        onClick={this.handleClick}>
        Rock
      </div>
    )
  }
}

export default Rock
