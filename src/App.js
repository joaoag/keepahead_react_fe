
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'
import VenuePortal from './components/venuePortal'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: [],
      venuePortal: false
      }
    }

   componentDidMount() {
     fetch('http://localhost:3000/api/v1/venues')
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      this.setState({
        venues: response
      })
    })
  }

  venuePortal() {
    this.setState({
      venuePortal: true
    })
  }

  render() {
// refactor to render sub render functions - see blog post !?!?
    const { venues, venuePortal } = this.state;
      return (
        <div>
        {
          venuePortal ?
          <button onClick={() => {window.location = '/'}}>Home</button>
          :
          <button id='venue_portal_button' onClick={()=> { this.venuePortal() } }>Venue Portal</button>
        }

        <h1>Keep Ahead</h1>

        {
          (!venuePortal && venues.length > 0) ?
          <ShowVenues
          venueList={venues}
          />
          :
          null
        }
        {
           venuePortal ? <VenuePortal /> : null
        }
        </div>
      );
    }
}
