import {Component} from 'react'
import './index.css'

class Nav extends Component {
  /* state = {
    counterTime: 10,
  }

  componentDidMount() {
    this.timerID = setInterval(this.decrementTimer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  } 

  decrementTimer = () => {
    const {counterTime} = this.state
    const {isGameIsOn} = this.props
    this.setState(prevState => ({
      counterTime: prevState.counterTime - 1,
    }))

    if (counterTime === 1) {
      clearInterval(this.timerID)
      {isGameIsOn:false}

    }
  } */

  render() {
    // const {counterTime} = this.state
    const {score, isGameIsOn, counterTime} = this.props
    if (!isGameIsOn) {
      clearInterval(this.timerID)
    }

    return (
      <div className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="match-logo"
        />
        <div className="score-nav-card">
          <p className="score">Score:{score}</p>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-image"
            />
            <p className="score">{`${counterTime} sec`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
