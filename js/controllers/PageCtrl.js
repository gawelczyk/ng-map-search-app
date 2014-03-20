MapSearchApp.controllers.controller("PageCtrl", [
  "$scope",
  "pubSubSrv",
  "realEstatesRepository",
  function($scope, pubSubSrv, realEstatesRepository) {

    realEstatesRepository.getAll(function(realEstates) {
      pubSubSrv.publish("realEstates:load", [realEstates]);
    });

  }
]);
