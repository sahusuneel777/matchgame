import {Component} from 'react'
import Nav from '../navItem'
import ThumbnailImageItem from '../ThumbnailImageItem'
import TabItem from '../TabItem'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    counterTime: 60,
    activeTabId: 'FRUIT',
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

  render() {
    const {score, activeTabId, counterTime} = this.state
    const {tabsList, imagesList} = this.props
    const filteredImagesList = this.getFilteredImages()
    const randomImageList = imagesList.sort(() => Math.random())
    const randomImage = randomImageList[0]

    return (
      <div className="app-container">
        <Nav score={score} counterTime={counterTime} />
        <div className="thumbNail-Big-image-container">
          <img
            src={randomImage.imageUrl}
            className="big-display-image"
            alt="match"
          />
        </div>
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
            <ThumbnailImageItem key={eachImage.id} imageDetails={eachImage} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MatchGame
