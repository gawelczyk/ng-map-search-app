var MapSearchApp = angular.module("MapSearchApp", [
  "leaflet-directive",
  "MapSearchApp.services",
  "MapSearchApp.repositories",
  "MapSearchApp.models",
  "MapSearchApp.controllers"
]);

MapSearchApp.services = angular.module("MapSearchApp.services", []);
MapSearchApp.repositories = angular.module("MapSearchApp.repositories", []);
MapSearchApp.models = angular.module("MapSearchApp.models", []);
MapSearchApp.controllers = angular.module("MapSearchApp.controllers", []);
