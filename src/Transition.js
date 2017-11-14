import React, { Component } from 'react'

class Transition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showThree: false,
      showTwo: false,
      showOne: false,
      showGo: false
    }

    this.countdown = this.countdown.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.countdown()
  }

  countdown() {
    setTimeout(() => {
      this.setState({
        showThree: true
      })
      setTimeout(() => {
        this.setState({
          showThree: false,
          showTwo: true
        })
        setTimeout(() => {
          this.setState({
            showTwo: false,
            showOne: true
          })
          setTimeout(() => {
            this.setState({
              showOne: false,
              showGo: true
            })
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }

  render() {
    return (
      <div>
        {this.state.showThree && <span class="countdown-format">3</span>}
        {this.state.showTwo && <span class="countdown-format">2</span>}
        {this.state.showOne && <span class="countdown-format">1</span>}
        {this.state.showGo && <span class="countdown-format">GO</span>}
      </div>
    )
  }
}

export default Transition
