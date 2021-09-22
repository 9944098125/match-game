import './index.css'

const GameOver = props => {
  const {score, onClickPlayAgain} = props

  return (
    <div className="bg">
      <div className="score-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p className="head">YOUR SCORE</p>
        <p className="score">{score}</p>
        <div className="butt-con">
          <button
            className="play-again"
            onClick={onClickPlayAgain}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              className="reset"
              alt="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOver
