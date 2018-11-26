import React, { Component } from 'react';
import './App.css';
//import './Sidebar.js';
//import './Marker.js';

import axios from 'axios';

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
  }
  /**/

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA4wn9OaUhNbdPmDt0ai4KO1St90C2VVAI&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () =>{
    const endPoint = "https://api.foursquare.com/v2/venues/search?"
    const parameters = {
      client_id: "CMXNDXH3PWKCAX335HXM30HEVJHOKA0ESKN1GWXYWO1QNW4U",
      client_secret: "DJT0CSDRAFW0GURJWZ3MCJX1DYXOPLV3Z5WBRYHAZQ1FID4J",
      query: "shops",
      near: "Toronto,ON",
      v: "20182511",
    }
    axios.get(endPoint + new URLSearchParams(parameters)).then(response =>{
      this.setState({ venues: response.data.response.venues[0]}, this.renderMap())
      //console.log(response)
    })
    .catch(error => {
    console.log("ERROR!!!" + error)
  })

  }

  initMap = () => {
    // Create A Map
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.761539, lng: -79.411079},
      zoom: 8
    })

    // Create An InfoWindow
    var infowindow = new window.google.maps.InfoWindow()

    // Display Dynamic Markers
    this.state.venues.map(myVenue => {

      var contentString = `${myVenue.venue.name}`

      // Create A Marker
      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      })

      // Click on A Marker!
      marker.addListener('click', function() {

        // Change the content
        infowindow.setContent(contentString)

        // Open An InfoWindow
        infowindow.open(map, marker)
      })

    })
  }


  render() {
    return (
      <div id="map"></div>
    );
  }
}


function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
