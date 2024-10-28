// src/components/EventItem/index.js
import React from 'react'
import './index.css'

const EventItem = ({eventDetails, setActiveEventId, isActive}) => {
  const {id, imageUrl, name, location} = eventDetails
  const onClickEvent = () => setActiveEventId(id)

  return (
    <li
      className={`event-item ${isActive ? 'active' : ''}`}
      onClick={onClickEvent}
    >
      <button type="button" className="event-button">
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p> {/* Added location */}
    </li>
  )
}

export default EventItem
