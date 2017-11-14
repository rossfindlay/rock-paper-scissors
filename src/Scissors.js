import React, { Component } from 'react'

class Scissors extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onScissorsClick()
  }

  render() {
    return (
      <div
        class="weapon scissors"
        onClick={this.handleClick}>
        Scissors
      </div>
    )
  }
}

export default Scissors
