var MapSearchApp = angular.module("MapSearchApp", [
  "pascalprecht.translate",
  "leaflet-directive",
  "MapSearchApp.filters",
  "MapSearchApp.services",
  "MapSearchApp.repositories",
  "MapSearchApp.models",
  "MapSearchApp.controllers"
]).config([
  "$translateProvider",
  function($translateProvider) {
    log(arguments.length);
    $translateProvider.translations('en', I18n.en);
    //TODO
  }
]);

MapSearchApp.filters = angular.module("MapSearchApp.filters", []);
MapSearchApp.services = angular.module("MapSearchApp.services", []);
MapSearchApp.repositories = angular.module("MapSearchApp.repositories", []);
MapSearchApp.models = angular.module("MapSearchApp.models", []);
MapSearchApp.controllers = angular.module("MapSearchApp.controllers", []);
