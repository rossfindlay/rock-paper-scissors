import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectionScreen from './SelectionScreen'
import Transition from './Transition'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectionArray: ['rock', 'paper', 'scissors'],
      userSelection: '',
      computerSelection: '',
      gameWinner: '',
      gameResults: [],
      userWinCount: 0,
      computerWinCount: 0,
      tieCount: 0,
      userWinStreak: 0

    }

    this.selectComputerChoice = this.selectComputerChoice.bind(this)

    this.handleRockClickApp = this.handleRockClickApp.bind(this)
    this.handlePaperClickApp = this.handlePaperClickApp.bind(this)
    this.handleScissorsClickApp = this.handleScissorsClickApp.bind(this)

    this.gameEngine = this.gameEngine.bind(this)

    this.startGame = this.startGame.bind(this)
  }

  selectComputerChoice() {
    this.setState({
      computerSelection: this.state.selectionArray[Math.floor(Math.random() * 3)]
    })
  }

  handleRockClickApp() {
    this.setState({
      userSelection: 'rock'
    })
    this.selectComputerChoice()
  }

  handleScissorsClickApp() {
    this.setState({
      userSelection: 'scissors'
    })
    this.selectComputerChoice()
  }

  handlePaperClickApp() {
    this.setState({
      userSelection: 'paper'
    })

    this.selectComputerChoice()
  }

  startGame() {
    this.gameEngine()
  }

  gameEngine() {
    if ((this.state.userSelection === "rock" && this.state.computerSelection === "rock") ||
    (this.state.userSelection === "paper" && this.state.computerSelection === "paper") ||
    (this.state.userSelection === "scissors" && this.state.computerSelection === "scissors")) {
      console.log("Tie!")
      this.setState({
        tieCount: this.state.tieCount + 1
      })
    } else if ((this.state.userSelection === "rock" && this.state.computerSelection === "scissors") ||
    (this.state.userSelection === "paper" && this.state.computerSelection === "rock") ||
    (this.state.userSelection === "scissors" && this.state.computerSelection === "paper")) {
      console.log("Player wins!")
      this.setState({
        userWinCount: this.state.userWinCount + 1
      })
    } else if ((this.state.userSelection === "rock" && this.state.computerSelection === "paper") ||
    (this.state.userSelection === "paper" && this.state.computerSelection === "scissors") ||
    (this.state.userSelection === "scissors" && this.state.computerSelection === "rock")) {
      console.log ("Computer wins!")
      this.setState({
        computerWinCount: this.state.computerWinCount + 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        Hello World
        <SelectionScreen
          onRockClickApp={this.handleRockClickApp}
          onPaperClickApp={this.handlePaperClickApp}
          onScissorsClickApp={this.handleScissorsClickApp}
        />
        {console.log(`player ` +this.state.userSelection)}
        {console.log(`computer `+ this.state.computerSelection)}
        <button onClick={this.startGame}>Ready?</button>
        <div>
          User wins: {this.state.userWinCount}
          Computer wins: {this.state.computerWinCount}
          Ties: {this.state.tieCount}
        </div>
        <Transition/>
      </div>
    )
  }
}

export default App;
