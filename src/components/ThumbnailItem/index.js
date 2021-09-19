import './index.css'

const ThumbItem = props => {
  const {thumbDetails, clickThumbnail} = props
  const {id, thumbnailUrl} = thumbDetails
  const onClickThumbnail = () => {
    clickThumbnail(id)
  }

  return (
    <>
      <li className="thumb-item-container" onClick={onClickThumbnail}>
        <img className="thumb-item-image" src={thumbnailUrl} alt={id} />
      </li>
    </>
  )
}

export default ThumbItem
