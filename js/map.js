var map;
function initialize() {
  var myLatLng = new google.maps.LatLng(28.665286,77.236419);
  var myLatLng1 = new google.maps.LatLng(28.47352,77.025726);
  var myLatLng2 = new google.maps.LatLng(28.551354,77.393081);
  var myLatLng3 = new google.maps.LatLng(28.420995,77.318237);

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
