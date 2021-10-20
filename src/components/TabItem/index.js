import './index.css'

const TabItem = props => {
  const {isActive, displayText, id, onChangeActiveTabItem} = props

  const onClickTabItem = () => {
    onChangeActiveTabItem(id)
  }

  const tabClass = isActive === id ? 'active-tab-item' : 'tab-item'
  return (
    <li className={tabClass} onClick={onClickTabItem}>
      <button type="button" className="tab-button">
        <p className={tabClass}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
