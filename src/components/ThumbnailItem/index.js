import './index.css'

const ThumbItem = props => {
  const {thumbDetails, clickThumbnail} = props
  const {id, thumbnailUrl} = thumbDetails
  const onClickThumbnail = () => {
    clickThumbnail(id)
  }

  return (
    <>
      <li className="thumb-item-container">
        <button type="button" onClick={onClickThumbnail}>
          <img
            className="thumb-item-image"
            src={thumbnailUrl}
            alt="thumbnail"
          />
        </button>
      </li>
    </>
  )
}

export default ThumbItem
