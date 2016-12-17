var map;
var mapPoint = {lat: 59.880413, lng: 30.2659823};
stylesMap = [
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#f3f4f4"
            },
            {
                "saturation": -84
            },
            {
                "lightness": 59
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#83cead"
            },
            {
                "saturation": 1
            },
            {
                "lightness": -15
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#d7e4e4"
            },
            {
                "saturation": -60
            },
            {
                "lightness": 23
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#bbbbbb"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 26
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffcc00"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -22
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffcc00"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -35
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#7fc8ed"
            },
            {
                "saturation": 55
            },
            {
                "lightness": -6
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#7fc8ed"
            },
            {
                "saturation": 55
            },
            {
                "lightness": -6
            },
            {
                "visibility": "off"
            }
        ]
    }
]


function ZoomControl(controlDiv, map) {
    var controlWrapper = document.createElement('div');
  controlWrapper.style.borderStyle = 'solid';
  controlWrapper.style.borderColor = '#fff';
  controlWrapper.style.borderWidth = '0px';
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.textAlign = 'center';
  controlWrapper.style.right = '0px';
  controlDiv.appendChild(controlWrapper);

  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  zoomInButton.style.width = '47px'; 
  zoomInButton.style.height = '47px';
  zoomInButton.style.backgroundColor = '#fff';
  zoomInButton.style.borderRadius = '50%';
  zoomInButton.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.12)';
  zoomInButton.style.marginBottom = '8px';
  zoomInButton.style.backgroundImage = 'url("img/plus-map.png")';
  zoomInButton.style.backgroundRepeat = 'no-repeat';
  zoomInButton.style.backgroundPosition = 'center';
  controlWrapper.appendChild(zoomInButton);

  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  zoomOutButton.style.width = '47px'; 
  zoomOutButton.style.height = '47px';
  zoomOutButton.style.backgroundColor = '#fff';
  zoomOutButton.style.borderRadius = '50%';
  zoomOutButton.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.12)';
  zoomOutButton.style.backgroundImage = 'url("img/minus-map.png")';
  zoomOutButton.style.backgroundRepeat = 'no-repeat';
  zoomOutButton.style.backgroundPosition = 'center';
  controlWrapper.appendChild(zoomOutButton);


    // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });

  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });  


}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: mapPoint,
    zoom: 17,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false,
    styles: stylesMap
         
  }
 );


  var zoomControlDiv = document.createElement('div');
  var zoomControl = new ZoomControl(zoomControlDiv, map);

  zoomControlDiv.index = 1;
  if (window.innerWidth > 750) {
    zoomControlDiv.style.paddingLeft = '100px';
    zoomControlDiv.style.paddingBottom = '36px';}
  else{
    zoomControlDiv.style.paddingLeft = '35px';
    zoomControlDiv.style.paddingBottom = '105px';
  }
  
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(zoomControlDiv);

    var markerImage = new google.maps.MarkerImage(
    'img/marker.png',
    new google.maps.Size(130,33),
    new google.maps.Point(0,0),
    new google.maps.Point(115,-5)
);
var marker = new google.maps.Marker({
    icon: markerImage,
    position: {lat: 59.880413, lng: 30.2659823},
    map: map,
    title: 'Hello World!'
  });
 var triangleCoords = [
    {lat: 59.880377, lng: 30.265600},
    {lat: 59.880184, lng: 30.266493},
    {lat: 59.879979, lng: 30.266300},
    {lat: 59.880157, lng: 30.265418}
  ];

  // Construct the polygon.
  var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: ' #ffd427',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: ' #ffd427',
    fillOpacity: 1
  });
  bermudaTriangle.setMap(map);


}
window.onresize = function resize() {
    map.setCenter(mapPoint);
    console.log('awd');
}