MapSearchApp.controllers.controller("MapCtrl", [
  "$scope",
  "mapSrv",
  function($scope, mapSrv) {
    $scope.centerPoint = mapSrv.center();
    $scope.realEstateMarkers = {};
    $scope.selectedRealEstate = null;

    //TODO

    $scope.$on('leafletDirectiveMarker.click', function(event, data) {
      var selectedMarker = $scope.realEstateMarkers[data["markerName"]];
      log(selectedMarker);
      //TODO
    })
  }
]);
