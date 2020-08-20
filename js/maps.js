"use strict";

// var map;
// function initMap() {
//   map = new google.maps.Map(
//     document.getElementById('map'),
//     {center: new google.maps.LatLng(-33.91722, 151.23064), zoom: 16});
//
//   var iconBase =
//     'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
//
//   var icons = {
//     parking: {
//       icon: iconBase + 'parking_lot_maps.png'
//     },
//     library: {
//       icon: iconBase + 'library_maps.png'
//     },
//     info: {
//       icon: iconBase + 'info-i_maps.png'
//     }
//   };
//
//   var features = [
//     {
//       position: new google.maps.LatLng(-33.91721, 151.22630),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91539, 151.22820),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91747, 151.22912),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91910, 151.22907),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91725, 151.23011),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91872, 151.23089),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91784, 151.23094),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91682, 151.23149),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91790, 151.23463),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91666, 151.23468),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.916988, 151.233640),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
//       type: 'library'
//     }
//   ];
//
//   // Create markers.
//   for (var i = 0; i < features.length; i++) {
//     var marker = new google.maps.Marker({
//       position: features[i].position,
//       icon: icons[features[i].type].icon,
//       map: map
//     });
//   }
// }
var map;
var mapSearch;
var mapLocation;
var popup, Popup;
var $map = document.getElementById('map');
var $mapSearch = document.getElementById('map-search');
var $mapLocation = document.getElementById('map-location');
var $locationAutocomplete = document.querySelector('.location-autocomplete');
var $locationAutocomplete2 = document.querySelector('.location-autocomplete-2');
var $locationAutocomplete3 = document.querySelector('.location-autocomplete-3');
var $locationAutocomplete4 = document.querySelector('.location-autocomplete-4');
var $locationAutocomplete5 = document.querySelector('.location-autocomplete-5');
var $locationAutocomplete6 = document.querySelector('.location-autocomplete-6');
var styleMap = [{
  "featureType": "administrative",
  "elementType": "all",
  "stylers": [{
    "visibility": "on"
  }, {
    "saturation": -100
  }, {
    "lightness": 20
  }]
}, {
  "featureType": "road",
  "elementType": "all",
  "stylers": [{
    "visibility": "on"
  }, {
    "saturation": -100
  }, {
    "lightness": 40
  }]
}, {
  "featureType": "water",
  "elementType": "all",
  "stylers": [{
    "visibility": "on"
  }, {
    "saturation": -10
  }, {
    "lightness": 30
  }]
}, {
  "featureType": "landscape.man_made",
  "elementType": "all",
  "stylers": [{
    "visibility": "simplified"
  }, {
    "saturation": -60
  }, {
    "lightness": 10
  }]
}, {
  "featureType": "landscape.natural",
  "elementType": "all",
  "stylers": [{
    "visibility": "simplified"
  }, {
    "saturation": -60
  }, {
    "lightness": 60
  }]
}, {
  "featureType": "poi",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }, {
    "saturation": -100
  }, {
    "lightness": 60
  }]
}, {
  "featureType": "transit",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }, {
    "saturation": -100
  }, {
    "lightness": 60
  }]
}];

function initMap() {
  var location = {
    lat: 25.740662,
    lng: -80.215623
  };
  var image = 'img/icons/map-marker.svg';

  if ($map) {
    map = new google.maps.Map($map, {
      center: location,
      zoom: 12,
      styles: styleMap
    });
    var beachMarker = new google.maps.Marker({
      position: location,
      map: map,
      icon: image
    });
  }

  if ($locationAutocomplete || $locationAutocomplete2 || $locationAutocomplete3 || $locationAutocomplete4 || $locationAutocomplete5 || $locationAutocomplete6) {
    var options = {
      types: ['(cities)']
    };
    var autocomplete = new google.maps.places.Autocomplete($locationAutocomplete, options);
    var autocomplete2 = new google.maps.places.Autocomplete($locationAutocomplete2, options);
    var autocomplete3 = new google.maps.places.Autocomplete($locationAutocomplete3, options);
    var autocomplete4 = new google.maps.places.Autocomplete($locationAutocomplete4, options);
    var autocomplete5 = new google.maps.places.Autocomplete($locationAutocomplete5, options);
    var autocomplete6 = new google.maps.places.Autocomplete($locationAutocomplete6, options);
  }

  if ($mapSearch) {
    mapSearch = new google.maps.Map($mapSearch, {
      center: location,
      zoom: 12,
      styles: styleMap
    });
    var input = document.getElementById("search-google-map");
    var searchBox = new google.maps.places.SearchBox(input); // Bias the SearchBox results towards current map's viewport.

    mapSearch.addListener("bounds_changed", function () {
      searchBox.setBounds(mapSearch.getBounds());
    });
    var _markers = []; // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.

    searchBox.addListener("places_changed", function () {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      } // Clear out the old markers.


      _markers.forEach(function (marker) {
        marker.setMap(null);
      });

      _markers = []; // For each place, get the icon, name and location.

      var bounds = new google.maps.LatLngBounds();
      places.forEach(function (place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }

        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        }; // Create a marker for each place.

        _markers.push(new google.maps.Marker({
          mapSearch: mapSearch,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      mapSearch.fitBounds(bounds);
    });
  }

  if ($mapLocation) {
    var mapLocation = new google.maps.Map($mapLocation, {
      center: location,
      zoom: 12,
      styles: styleMap
    });
    var mapContent = document.querySelectorAll('#map-content .object-item');
    var locations = [];
    var content = [];
    mapContent.forEach(function (item) {
      locations.push({
        lat: +item.dataset.lat,
        lng: +item.dataset.lng
      });
      content.push(item);
    });
    var markers = locations.map(function (location, i) {
      return new google.maps.Marker({
        position: location,
        icon: image
      });
    });
    var markerCluster = new MarkerClusterer(mapLocation, markers, {
      imagePath: "img/maps/"
    });
    markers.forEach(function (item, index) {
      var infowindow = new google.maps.InfoWindow({
        content: content[index]
      });
      item.addListener("click", function () {
        var el = document.querySelector('.gm-style-iw-a');

        if (el) {
          el.remove();
        }

        infowindow.open(mapLocation, item);
      });
    });
  }
}