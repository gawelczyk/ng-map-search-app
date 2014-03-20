var mapView = new MapView();
var detailsView = new DetailsView();
var listView = new ListView();

function eventAggregatorSolution() {
  // MapCtrl.js
  function MapCtrl() {
    pubSub.subscribe("listView:list-item:selected", function(selectedItem) {
      mapView.changeSelected(selectedItem);
    });
  }

  // ListCtrl.js
  function ListCtrl() {
    pubSub.subscribe("mapView:list-item:selected", function(selectedItem) {
      listView.changeSelected(selectedItem);
    });
  }

  // DetailsCtrl.js
  function DetailsCtrl() {
    pubSub.subscribe("mapView:list-item:selected", function(selectedItem) {
      detailsView.update(selectedItem);
    });
    pubSub.subscribe("listView:list-item:selected", function(selectedItem) {
      detailsView.update(selectedItem);
    });
  }
}
