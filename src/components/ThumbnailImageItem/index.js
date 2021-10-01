import './index.css'

const ThumbnailImageItem = props => {
  const {imageDetails} = props
  const {id, thumbnailUrl, category} = imageDetails

  return (
    <div className="thumbNail-image-container">
      <img src={thumbnailUrl} className="thumbNail-image" alt="thumbnail" />
    </div>
  )
}

export default ThumbnailImageItem
