MapSearchApp.controllers.controller("MapCtrl", [
  "$scope",
  "mapSrv",
  function($scope, mapSrv) {
    $scope.centerPoint = mapSrv.center();
    $scope.realEstateMarkers = {};

    // TODO

    $scope.$on('leafletDirectiveMarker.click', function(event, data) {
      var selectedRealEstate = mapSrv.findObject(data["markerName"]);
      mapSrv.highlightMarker(selectedRealEstate);

      //TODO
    })
  }
]);
