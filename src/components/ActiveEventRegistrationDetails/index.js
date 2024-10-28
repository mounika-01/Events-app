// src/components/ActiveEventRegistrationDetails/index.js
import React from 'react'
import './index.css'

const YET_TO_REGISTER_IMAGE_URL =
  'https://assets.ccbp.in/frontend/react-js/events-register-img.png'
const REGISTERED_IMAGE_URL =
  'https://assets.ccbp.in/frontend/react-js/events-regestered-img.png'
const REGISTRATIONS_CLOSED_IMAGE_URL =
  'https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png'

const ActiveEventRegistrationDetails = ({activeEventRegistrationStatus}) => {
  const renderRegistrationStatus = () => {
    switch (activeEventRegistrationStatus) {
      case 'YET_TO_REGISTER':
        return (
          <div>
            <img src={YET_TO_REGISTER_IMAGE_URL} alt="yet to register" />
            <p>
              A live performance brings so much to your relationship with dance.
            </p>
            <button type="button">Register Here</button>
          </div>
        )
      case 'REGISTERED':
        return (
          <div>
            <img src={REGISTERED_IMAGE_URL} alt="registered" />
            <h1>You have already registered for the event</h1>
          </div>
        )
      case 'REGISTRATIONS_CLOSED':
        return (
          <div>
            <img
              src={REGISTRATIONS_CLOSED_IMAGE_URL}
              alt="registrations closed"
            />
            <h1>Registrations Are Closed Now!</h1>
            <p>Stay tuned. We will reopen registrations soon.</p>
          </div>
        )
      default:
        return <p>Click on an event, to view its registration details</p>
    }
  }

  return (
    <div className="registration-status-container">
      {renderRegistrationStatus()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
