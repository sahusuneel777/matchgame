import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-button ${activeClass}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
