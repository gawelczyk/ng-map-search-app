MapSearchApp.services.factory("mapSrv", [
  function() {
    var DEFAULT_CENTER = {
      lat: 51.505,
      lng: -0.09,
      zoom: 4
    };

    var DEFAULT_ICON = {};

    var HIGHLIGHTED_ICON = {
      iconUrl: 'images/marker-icon-2x.png',
      shadowUrl: 'images/marker-shadow.png',
      iconSize: [50, 82],
      shadowSize: [41, 41],
      iconAnchor: [25, 81],
      shadowAnchor: [4, 39]
    };

    var selectedMarker = null;
    var markers = {};

    return {
      toMarkers: function(objects) {
        markers = {};
        _(objects).each(function(obj, i) {
          var markerName = "marker_" + i;
          var marker = {
            lat: obj.lat,
            lng: obj.lng,
            object: obj,
            icon: DEFAULT_ICON
          };
          markers[markerName] = marker;
        }, this);
        return markers;
      },
      center: function() {
        return DEFAULT_CENTER;
      },
      highlightMarker: function(object) {
        if (selectedMarker)
          selectedMarker.icon = DEFAULT_ICON;
        selectedMarker = _(markers).find(function(marker) {
          return marker.object === object;
        });
        selectedMarker.icon = HIGHLIGHTED_ICON;
      },
      findObject: function(markerName) {
        return markers[markerName].object;
      }
    };
  }
]);
