import {Component} from 'react'

import './index.css'

class Navbar extends Component {
  renderScore = () => {
    const {score, isGameOver} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="score-container">
        <h1 className="score-head">Score: </h1>
        <h1 className="score">{score}</h1>
      </div>
    )
  }

  render() {
    const {timer} = this.props

    return (
      <div className="header-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <div className="score-timer-container">
          {this.renderScore()}
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="icon"
            />
            <h1 className="timer">{timer}</h1>
            <h1 className="seconds">Sec</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
