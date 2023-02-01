import {Component} from 'react'
import EventsItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]
// Write your code here

class Events extends Component {
  state = {eventsListState: [], onRegistationStatus: ''}

  renderDefault = () => {
    console.log('')

    return (
      <p className="leftboxtext">
        Click on an event, to view its registration details
      </p>
    )
  }

  onClickOnCard = id => {
    const Status = eventsList.filter(arr => arr.id === id)
    console.log(Status[0].registrationStatus)

    this.setState({onRegistationStatus: Status[0].registrationStatus})
  }

  renderRegistrationClosed = () => {
    console.log('')
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="imageregisterd"
        />
        <h1 className="leftboxtext">Registrations Are Closed Now!</h1>
        <p className="leftboxtext">
          Stay tuned. We will reopen the registrations soon!
        </p>
        <button type="button" className="btnRegister">
          Register Here
        </button>
      </div>
    )
  }

  renderRegisterdContainer = () => {
    console.log('')
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
        />
        <h1 className="leftboxtext">
          You have already registered for the event
        </h1>
      </div>
    )
  }

  renderYetToRegister = () => {
    console.log('')
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
        />
        <p>A live performance brings so much to your relationship with dance</p>
      </div>
    )
  }

  renderStatus = () => {
    const {onRegistationStatus} = this.state

    switch (onRegistationStatus) {
      case 'REGISTERED':
        return this.renderRegisterdContainer()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosed()
      case 'YET_TO_REGISTER':
        return this.renderYetToRegister()
      default:
        return this.renderDefault()
    }
  }

  render() {
    const {onRegistationStatus} = this.state
    return (
      <div className="topBgCont">
        <div className="insideBgBox">
          <h1>Events</h1>
          <ul className="Allevents">
            {eventsList.map(arr => (
              <EventsItem
                arr={arr}
                key={arr.id}
                onClickOnCard={this.onClickOnCard}
              />
            ))}
          </ul>
        </div>
        <div className="leftbox">{this.renderStatus()}</div>
      </div>
    )
  }
}

export default Events
