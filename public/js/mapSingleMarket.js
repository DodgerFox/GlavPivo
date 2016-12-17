var mapMarkets;
var pointSingleMarket = {lat: 59.948192, lng: 30.2323043};
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

function CenterControl(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '50%';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.width = '56px'; 
  controlUI.style.height = '56px';
  controlUI.style.backgroundImage = 'url("img/point-map.png")';
  controlUI.style.backgroundRepeat = 'no-repeat';
  controlUI.style.backgroundPosition = 'center';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,23,21)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlUI.appendChild(controlText);


  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    mapMarkets.setCenter(pointSingleMarket);
  });
}
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
  if (window.innerWidth > 750) {
  zoomInButton.style.width = '56px'; 
  zoomInButton.style.height = '56px';
  }
  else{
  zoomInButton.style.width = '42px'; 
  zoomInButton.style.height = '42px'; 
  zoomInButton.style.backgroundSize = '38%'; 
  }
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
  if (window.innerWidth > 750) {
  zoomOutButton.style.width = '56px'; 
  zoomOutButton.style.height = '56px';
  }
  else{
  zoomOutButton.style.width = '42px'; 
  zoomOutButton.style.height = '42px'; 
  zoomOutButton.style.backgroundSize = '38%'; 
  }
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
  mapMarkets = new google.maps.Map(document.getElementById('map-singleMarkets'), {
    center: pointSingleMarket,
    zoom: 15,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    styles: stylesMap,
    zoomControl: false,
    minZoom: false
         
  }
 );

  var zoomControlDiv = document.createElement('div');
  var zoomControl = new ZoomControl(zoomControlDiv, mapMarkets);
  var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, mapMarkets);

  centerControlDiv.index = 1;

 

    if (window.innerWidth > 750) {
    centerControlDiv.style.paddingLeft = '10%';
    centerControlDiv.style.paddingTop = '60px';
    zoomControlDiv.style.paddingLeft = '10%';
    zoomControlDiv.style.paddingBottom = '190px';
    mapMarkets.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(zoomControlDiv);
    mapMarkets.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv); 
  }
  else{
    centerControlDiv.style.paddingLeft = '32px';
    centerControlDiv.style.paddingTop = '60px';
    zoomControlDiv.style.paddingLeft = '32px';
    zoomControlDiv.style.paddingBottom = '140px';
    mapMarkets.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(zoomControlDiv);
  }
  zoomControlDiv.index = 1;




    var markerImage = new google.maps.MarkerImage(
    'img/marker.png',
    new google.maps.Size(130,33),
    new google.maps.Point(0,0),
    new google.maps.Point(115,-5)
);
var marker = new google.maps.Marker({
    icon: markerImage,
    position: {lat: 59.880413, lng: 30.2659823},
    map: mapMarkets,
    title: 'Hello World!'
  });
 var triangleCoords = [
    {lat: 59.880377, lng: 30.265600},
    {lat: 59.880184, lng: 30.266493},
    {lat: 59.879979, lng: 30.266300},
    {lat: 59.880157, lng: 30.265418}
  ];


}

window.onresize = function resize() {
    mapMarkets.setCenter(pointSingleMarket);
    console.log('awd');
}
