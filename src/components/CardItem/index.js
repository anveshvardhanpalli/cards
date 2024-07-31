import './index.css'

const CardItem = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt="imagecard" />
      </div>
    </li>
  )
}

export default CardItem
