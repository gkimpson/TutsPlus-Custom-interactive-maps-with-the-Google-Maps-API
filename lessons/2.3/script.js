(function(window, mapster) {
  
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),

  // map
  map = mapster.create(element, options);
  map.zoom(15);
  
}(window, window.Mapster));