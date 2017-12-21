'use strict';

function initMap() {
  var uluru = {lat: 51.514494, lng: -0.031297};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
