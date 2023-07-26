import './index.css'

const TabItem = props => {
  const {tabItemDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabItemDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'highlight-text' : ''

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
