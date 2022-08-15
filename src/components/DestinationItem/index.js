// Write your code here

import './index.css'

const DestinationItem = props => {
  const {displayItem} = props
  const {name, imgUrl} = displayItem

  return (
    <li className="card">
      <img className="destination-image" src={imgUrl} alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
