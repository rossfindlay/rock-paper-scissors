import React, { Component } from 'react'
import Rock from './Rock'
import Paper from './Paper'
import Scissors from './Scissors'

class SelectionScreen extends Component {
  constructor(props) {
    super(props)

    this.handleRockClick = this.handleRockClick.bind(this)
    this.handlePaperClick = this.handlePaperClick.bind(this)
    this.handleScissorsClick = this.handleScissorsClick.bind(this)
  }

  handleRockClick() {
    this.props.onRockClickApp()
  }

  handlePaperClick() {
    this.props.onPaperClickApp()
  }

  handleScissorsClick() {
    this.props.onScissorsClickApp()
  }

  render() {
    return (
      <div>
        <Rock
          onRockClick={this.handleRockClick}
        />
        <Paper
          onPaperClick={this.handlePaperClick}
        />
        <Scissors
          onScissorsClick={this.handleScissorsClick}
        />
      </div>
    )
  }
}

export default SelectionScreen
