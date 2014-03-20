var mapView = new MapView();
var detailsView = new DetailsView();
var listView = new ListView();

function mediateWithEventAggregator() {
  pubSub.subscribe("listView:list-item:selected", function() {
    mapView.changeSelected(selectedItem);
    detailsView.update(selectedItem);
  });

  pubSub.subscribe("mapView:list-item:selected", function() {
    listView.changeSelected(selectedItem);
    detailsView.update(selectedItem);
  });

  // on marker click
  mapView.select(item); // publish("mapView:list-item:selected")
  // on list item click
  listView.select(item); // publish("listView:list-item:selected")
}
