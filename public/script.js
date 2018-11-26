
//var map;
//var venues = [];
/*
var locations = [
  ['Distillery Sunday Market',43.6497757,-79.3612566,1]
  ['St. Lawrence Market (South Building)',43.648578,-79.3737321,2]
  ['LCBO',43.6485776,-79.380325,3]
  ['MEC',43.6485719,-79.406697,4]
  ['Real Sports Apparel',43.64391,-79.381648,5]

]
*/
/*
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 43.761539, lng: -79.411079},
  zoom: 8
  });
/*
  var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
}
*/
/*
venues.forEach(myVenue => {
  let marker = new google.maps.Marker({
    position: { lat: myVenue.location.lat, lng: myVenue.location.lng },
        map: this.map,
        venue: myVenue.venue,
        //id: venue.id,
        name: myVenue.venue.name,
animation: google.maps.Animation.DROP
  })
})

*/


/*
var marker = new window.google.maps.Marker({
    position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
    map: map,
    title: myVenue.venue.name
  });
*/


}
