MapSearchApp.controllers.controller("MapCtrl", [
  "$scope",
  "mapSrv",
  function($scope, mapSrv) {
    $scope.centerPoint = mapSrv.center();
    $scope.realEstateMarkers = {};
    $scope.selectedRealEstate = null;

    // TODO

    $scope.$on('leafletDirectiveMarker.click', function(event, data) {
      //TODO
      var obj = mapSrv.findObject(data["markerName"]);
      mapSrv.highlightMarker(obj);

      //TODO
    })
  }
]);
