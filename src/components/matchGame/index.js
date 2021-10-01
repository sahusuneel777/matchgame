import {Component} from 'react'
import Nav from '../navItem'
import ThumbnailImageItem from '../ThumbnailImageItem'
import TabItem from '../TabItem'
import './index.css'

const initialState = {
  score: 0,
  counterTime: 60,
  activeTabId: 'FRUIT',
  isGameIsOn: true,
  selectedImage: {
    id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
    category: 'FRUIT',
  },
}

class MatchGame extends Component {
  state = initialState

  componentDidMount() {
    this.timerID = setInterval(this.decrementTimer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  decrementTimer = () => {
    const {counterTime} = this.state

    this.setState(prevState => ({
      counterTime: prevState.counterTime - 1,
    }))

    if (counterTime === 1) {
      clearInterval(this.timerID)
      this.setState({isGameIsOn: false})
    }
  }

  clickTabItem = tabId => {
    this.setState({activeTabId: tabId})
  }

  getFilteredImages = () => {
    const {imagesList} = this.props
    const {activeTabId} = this.state
    const filteredItemsList = imagesList.filter(
      eachImage => eachImage.category === activeTabId,
    )
    return filteredItemsList
  }

  generateRandomImage = () => {
    const {imagesList} = this.props
    const {selectedImage} = this.state
    const randomImageList = imagesList.sort(() => Math.random() - 0.5)
    this.setState({selectedImage: randomImageList[0]})
    // console.log(selectedImage)
    return selectedImage
  }

  onSelectIncrement = id => {
    const headImage = this.generateRandomImage()
    console.log(headImage)
    if (id === headImage.id) {
      this.setState(prevState => ({score: prevState.score + 1}))
      console.log('hi')
    } else {
      this.setState({isGameIsOn: false})
      clearInterval(this.timerID)
    }
  }

  onclickPlayAgain = () => {
    this.setState(initialState)
    this.timerID = setInterval(this.decrementTimer, 1000)
  }

  dispalyGame = () => {
    const {selectedImage, activeTabId} = this.state
    const {tabsList} = this.props
    const filteredImagesList = this.getFilteredImages()
    return (
      <>
        <ul className="thumbNail-Big-image-container">
          <img
            src={selectedImage.imageUrl}
            className="big-display-image"
            alt="match"
          />
        </ul>
        <ul className="tab-list-container">
          {tabsList.map(eachTab => (
            <TabItem
              key={eachTab.tabId}
              clickTabItem={this.clickTabItem}
              tabDetails={eachTab}
              isActive={activeTabId === eachTab.tabId}
            />
          ))}
        </ul>
        <ul className="thumbnail-images-list-container">
          {filteredImagesList.map(eachImage => (
            <ThumbnailImageItem
              key={eachImage.id}
              onSelectIncrement={this.onSelectIncrement}
              imageDetails={eachImage}
            />
          ))}
        </ul>
      </>
    )
  }

  showResults = () => {
    const {score} = this.state
    return (
      <div className="results-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          className="trophy"
          alt="trophy"
        />
        <p className="result-heading">YOUR SCORE</p>

        <h1 className="score-value">{score}</h1>
        <div className="reset">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-img"
          />
          <button
            className="playAgain-button"
            onClick={this.onclickPlayAgain}
            type="button"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {score, counterTime, isGameIsOn} = this.state

    return (
      <div className="app-container">
        <Nav score={score} isGameIsOn={isGameIsOn} counterTime={counterTime} />
        {isGameIsOn ? this.dispalyGame() : this.showResults()}
      </div>
    )
  }
}

export default MatchGame
