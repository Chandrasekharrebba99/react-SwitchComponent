// Write your code here
import './index.css'

const EventsItem = props => {
  const {arr, onClickOnCard} = props
  const {id, imageUrl, name, location, registrationStatus} = arr
  const onClickCard = () => {
    onClickOnCard(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickCard}>
        <img src={imageUrl} className="eventImg" alt="event" />
      </button>

      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventsItem
