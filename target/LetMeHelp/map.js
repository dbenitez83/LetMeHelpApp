var map;
// Hacky. Get legend color definitions and labels from HTML,
// which are defined with a python script
var tmp = document.getElementById("color-definitions").innerHTML;
var colors = tmp.split(',');
var tmp = document.getElementById("labels").innerHTML;
var labels = tmp.split(',');
var tmp = document.getElementById("color-definitions-alternate").innerHTML;
var bcolors = tmp.split(',');
var tmp = document.getElementById("labels-alternate").innerHTML;
var blabels = tmp.split(',');

// Primary map styling created with Google Maps
// Styling Wizard at https://mapstyle.withgoogle.com/
var style = [
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
];
// Alternative map styling
var altStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

// Create button for switching between visualizations
function switchVisualization(switchControlDiv, data_layer){

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to switch between visualization styles';
  switchControlDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Change visualization';
  controlUI.appendChild(controlText);

  // Setup the click event listener. Button click switches
  // between two visualization schemes, which represent
  // different demographic data
  google.maps.event.addDomListener(controlUI, 'click', function() {
    // Trigger events that update Polygon colors and legend
    google.maps.event.trigger(data_layer, 'setcolor');
    google.maps.event.trigger(data_layer, 'updatelegend');
  });
}

// Define actual Google Maps object
function initMap() {
  // Initialize map
  var map = new google.maps.Map( document.getElementById('horizontal').querySelectorAll('.map')[0], {
    zoom: 10,
    mapTypeControl: false,
    streetViewControl: false,
    styles: style
  });


  // Center map on Helsinki using geocoding
  var geocoder = new google.maps.Geocoder();
  var address = 'Barbens';
  geocodeAddress(geocoder, map, address);

  function geocodeAddress(geocoder, map, address) {
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  var data_layer = new google.maps.Data({map: map});
  var data_layer_2 = new google.maps.Data({map: map});

  // Load GeoJSON that contains zip code boundaries and geographic information
  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  data_layer.loadGeoJson("https://raw.githubusercontent.com/dbenitez83/LetMeHelp/main/map_data_ES_filtered_reduced.json")
  data_layer_2.loadGeoJson("https://raw.githubusercontent.com/dbenitez83/LetMeHelp/main/myfile.geojson")
  data_layer_2.setStyle({
    strokeColor: 'blue',
    strokeOpacity: 0.2,
    strokeWeight: 1,
    fillColor: 'blue',
    fillOpacity: 0.35
  });

  // Colorize zip code areas based on relative median danger
  // or population density (changeable via dedicated button)
  data_layer.setStyle(function(feature) {
    if (!feature.getProperty('useDensity')) {
      var color = feature.getProperty('fill');
      var opacity = 0.7;
      map.setOptions({styles : style});
    } else {
      var color = feature.getProperty('fill_density');
      var opacity = 0.9;
      map.setOptions({styles : altStyle});
    }
    return {
      fillColor: color,
      fillOpacity: opacity,
      strokeWeight: 1,
      strokeColor: color
    }
  });

  // When the user hovers, tempt them to click by outlining zip code area.
  // Call revertStyle() to remove all overrides. This will use the style rules
  // defined in the function passed to setStyle()
  data_layer.addListener('mouseover', function(event) {
    data_layer.revertStyle();
    data_layer.overrideStyle(event.feature, {strokeWeight: 4, strokeColor: 'gray'});
  });

  data_layer.addListener('mouseout', function(event) {
    data_layer.revertStyle();
  });

  // When the user selects a zip code area,
  // display info window with more detailed information
  var infowindow = new google.maps.InfoWindow();
  data_layer.addListener('click', function(event) {
      createInfoWindow(map, event, infowindow);
  });

  data_layer_2.addListener('click', function(event) {
    createInfoWindowInundacion(map, event, infowindow);
  });

  function createInfoWindow(map, event){
    // Get properties from Data Layer to populate info window
    var name = event.feature.getProperty('name');
    var zip = event.feature.getProperty('zip');
    var risk = event.feature.getProperty('risk');
    var riskRelative = event.feature.getProperty('risk_relative');
    var population = event.feature.getProperty('pop2020');
    var populationDensity = event.feature.getProperty('pop_density');

    // Create content for info window
    var contentString = '<div id="content"><div id="siteNotice"></div>'+
      '<h2 id="firstHeading" class="firstHeading">' + name + '</h2>'+
      '<h3>Zip code: ' + zip + '</h3>'+
      '<div id="bodyContent" style="font-size: 12pt;" >'+
      '</br>Population (2020): '+ population +
      '</br>Median Risk (2015): '+ risk.toFixed(2) + ' €' +
      '</br>Median risk relative to national average (2015): '+ riskRelative.toFixed(2) + ' €' +
      '</br>Population density (persons / km<sup>2</sup>): '+ populationDensity.toFixed(2) +'</p>'+
      '</div>'+
      '</div>';

    // Center info window on selected zip code area
    // Find center of zip code area by converting
    // the corresponding Polygon object to a
    // LatLngBounds object which has the getCenter function
    var bounds = new google.maps.LatLngBounds();
    var geometry = event.feature.getGeometry();

    geometry.forEachLatLng(function(point){
      bounds.extend({
        lat : point.lat(),
        lng : point.lng()
      });
    });
    var center = bounds.getCenter();

    // Create invisible marker for info window
    var marker = new google.maps.Marker({
      position: center,
      map: map,
      visible : false
    });
    // Create info window
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  }

  function createInfoWindowInundacion(map, event){
    // Get properties from Data Layer to populate info window
    var name = event.feature.getProperty('name');

    if(name==null){
      name="Zona inundable"
    }
    // Create content for info window
    var contentString = '<div id="content"><div id="siteNotice"></div>'+
        '<h2 id="firstHeading" class="firstHeading">' + name + '</h2>'+
        '</div>'+
        '</div>';

    var bounds = new google.maps.LatLngBounds();
    var geometry = event.feature.getGeometry();

    geometry.forEachLatLng(function(point){
      bounds.extend({
        lat : point.lat(),
        lng : point.lng()
      });
    });
    var center = bounds.getCenter();

    var marker = new google.maps.Marker({
      position: center,
      map: map,
      visible : false
    });

    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  }

  // Create DIV for the button that switches between the two
  // data sets used to colorize the zip code areas.
  var switchControlDiv = document.createElement('div');
  var switchControl = new switchVisualization(switchControlDiv, data_layer);

  switchControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(switchControlDiv);

  // Create a color bar legend for the colored zip code areas.
  // By default, shows colors used for describing relative median risk.
  // Button click toggles changes data to population density.
  var legend = document.getElementById('horizontal').querySelectorAll('.legend')[0];
  createLegend(legend, true)

  function createLegend(legend, useDensity){
    // Legend for population density
    if (useDensity) {
      var div = document.createElement('center');
      div.innerHTML = '<h3>Relative<br/>Median<br/>risk<br/>(€)</center></h3>'
      legend.appendChild(div);
      for (var key in colors) {
        var color = colors[key];
        var label = labels[key];
        var div = document.createElement('div');
        div.innerHTML = '<div class="cbox" style="background-color: '+ color + '; padding: 5px; box-sizing: border-box; opacity: 0.8;"><center>'+label+'</center>';
        legend.appendChild(div);
      };
    // Legend for relative median risk
    } else {
      var div = document.createElement('center');
      div.innerHTML = '<h3>Population<br/>density<br/>(persons / km<sup>2</sup>)</center></h3>'
      legend.appendChild(div);
      for (var key in bcolors) {
        var color = bcolors[key];
        var label = blabels[key];
        var div = document.createElement('div');
        div.innerHTML = '<div class="cbox" style="background-color: '+ color + '; padding: 5px; box-sizing: border-box; opacity: 0.8;"><center>'+label+'</center>';
        legend.appendChild(div);
      };
    };
  }
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);

  // Add listener that detects when button is clicked
  // triggering a recoloring of the Polygons objects
  data_layer.addListener('setcolor', function(event) {
    data_layer.forEach(function(feature) {
      feature.setProperty('useDensity', !feature.getProperty('useDensity'));
    });
  })

  // Add listener that detects when button is clicked
  // triggering a redraw of the map legend
  data_layer.addListener('updatelegend', function(event) {
    var useDensity;
    var accessed = false;
    // Determine which color scheme to use
    data_layer.forEach(function(feature) {
      if (!accessed) {
        useDensity = !feature.getProperty('useDensity');
        accessed = true;
      }
    });
    // Clear old legend
    while (legend.hasChildNodes()) {
      legend.removeChild(legend.firstChild);
    }
    // Recreate legend with new color scheme
    createLegend(legend, useDensity);
  });
};
