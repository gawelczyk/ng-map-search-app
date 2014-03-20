var mapView = new MapView();
var detailsView = new DetailsView();
var listView = new ListView();

function mediateWithObserver() {
  listView.on("list-item:selected", function(selectedItem) {
    mapView.changeSelected(selectedItem);
    detailsView.update(selectedItem);
  });

  mapView.on("marker:select", function(selectedItem) {
    listView.changeSelected(selectedItem);
    detailsView.update(selectedItem);
  });

  pubSub.subscribe("listView:list-item:selected");

  // on marker click
  mapView.select(item); // trigger("marker:select") & pubish("global")
  // on list item click
  listView.select(item);
}
