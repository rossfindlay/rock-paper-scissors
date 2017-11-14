import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectionScreen from './SelectionScreen'
import Transition from './Transition'
import Results from './Results'

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
      userWinStreak: 0,
      userBestStreak: 0,
      winningMessage: ''

    }

    this.selectComputerChoice = this.selectComputerChoice.bind(this)

    this.handleRockClickApp = this.handleRockClickApp.bind(this)
    this.handlePaperClickApp = this.handlePaperClickApp.bind(this)
    this.handleScissorsClickApp = this.handleScissorsClickApp.bind(this)

    this.gameEngine = this.gameEngine.bind(this)

    this.handleWinStreak = this.handleWinStreak.bind(this)

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
    this.startGame()
  }

  handleScissorsClickApp() {
    this.setState({
      userSelection: 'scissors'
    })
    this.selectComputerChoice()
    this.startGame()
  }

  handlePaperClickApp() {
    this.setState({
      userSelection: 'paper'
    })

    this.selectComputerChoice()
    this.startGame()
  }

  handleWinStreak(value) {
    if (value >= this.state.userBestStreak) {
      this.setState({
        userBestStreak: value
      })
    }
  }



  startGame() {
    this.gameEngine()
  }

  gameEngine() {
    if (this.state.userSelection === this.state.computerSelection) {
      console.log("Tie!")
      this.state.gameResults.unshift('Tie')
      this.setState({
        tieCount: this.state.tieCount + 1,
        gameResults: this.state.gameResults,
        userWinStreak: 0,
        gameWinner: 'Tie',
        winningMessage: 'It\'s a tie!'
      })
    } else if ((this.state.userSelection === "rock" && this.state.computerSelection === "scissors") ||
    (this.state.userSelection === "paper" && this.state.computerSelection === "rock") ||
    (this.state.userSelection === "scissors" && this.state.computerSelection === "paper")) {
      console.log("Player wins!")
      this.state.gameResults.unshift('Player')
      this.setState({
        userWinCount: this.state.userWinCount + 1,
        gameResults: this.state.gameResults,
        userWinStreak: this.state.userWinStreak + 1,
        gameWinner: 'Player',
        winningMessage: 'You win!'
      }, () => {
        this.handleWinStreak(this.state.userWinStreak)
      })

    } else {
      console.log ("Computer wins!")
      this.state.gameResults.unshift('Computer')
      this.setState({
        computerWinCount: this.state.computerWinCount + 1,
        gameResults: this.state.gameResults,
        userWinStreak: 0,
        gameWinner: 'Computer',
        winningMessage: 'Computer wins!'
      })
    }
    if (this.state.gameResults.length > 10) {
      this.state.gameResults.splice(-1,1)
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Rock, Paper, Scissors</h1>
        <div class="selections">
        <SelectionScreen
          onRockClickApp={this.handleRockClickApp}
          onPaperClickApp={this.handlePaperClickApp}
          onScissorsClickApp={this.handleScissorsClickApp}
        />
      </div>
        <div class="text-container">
          <div class="scores">
            <div>User wins: {this.state.userWinCount}</div>
            <div>Computer wins: {this.state.computerWinCount}</div>
            <div>Ties: {this.state.tieCount}</div>
          </div>
          <div class="streaks">
            <div>Current win streak: {this.state.userWinStreak}</div>
            <div>Best win streak: {this.state.userBestStreak}</div>
          </div>
          <div class="last-results">Last results: {this.state.gameResults.map(result => `${result} `)}</div>
          <div class="winning-message">
            <Results
              message={this.state.winningMessage}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
