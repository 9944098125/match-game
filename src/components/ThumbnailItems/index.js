import './index.css'

const ThumbnailItem = props => {
  const {details, onClickBottomImg} = props
  const {imageUrl, id, thumbnailUrl, category} = details

  const onClickThumbNail = () => {
    onClickBottomImg(id)
  }

  return (
    <li className="thumb-image-list" onClick={onClickThumbNail}>
      <button type="button" className="thumb-button">
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
