import './index.css'

const ThumbnailImageItem = props => {
  const {imageDetails, onSelectIncrement} = props
  const {id, thumbnailUrl} = imageDetails

  const onclickImage = () => {
    onSelectIncrement(id)
    console.log('ThumbnailImageClicked')
  }

  return (
    <li className="thumbNail-image-container">
      <button type="button" className="thumbnail-button">
        <img
          src={thumbnailUrl}
          className="thumbNail-image"
          onClick={onclickImage}
          alt="thumbnail"
        />
      </button>
    </li>
  )
}

export default ThumbnailImageItem
