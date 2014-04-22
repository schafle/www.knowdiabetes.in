var map;
function initialize() {
  var myLatLng = new google.maps.LatLng(12.93156,77.623256);

  var mapOptions = {
	zoom: 10,
	center: myLatLng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
	  mapOptions);

var marker = new google.maps.Marker({
    position:myLatLng,
	map: map,
    title:"Hello World!"
});
	marker.setMap(map);
}
// To add the marker to the map, call setMap();
google.maps.event.addDomListener(window, 'load', initialize);
