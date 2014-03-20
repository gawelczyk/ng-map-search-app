MapSearchApp.services.factory("mapSrv", [
  function() {
    var DEFAULT_CENTER = {
      lat: 51.505,
      lng: -0.09,
      zoom: 4
    };

    return {
      toMarkers: function(objects) {
        var markers = {};
        _(objects).each(function(obj, i) {
          var markerName = "marker_" + i;
          var marker = {
            lat: obj.lat,
            lng: obj.lng,
            object: obj
          };
          markers[markerName] = marker;
        });
        return markers;
      },
      center: function() {
        return DEFAULT_CENTER;
      }
    };
  }
]);
