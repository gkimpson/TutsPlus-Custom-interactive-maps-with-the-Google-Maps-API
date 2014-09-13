(function(window, mapster) {
  
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),

  // map
  map = mapster.create(element, options);
  
  map._on('click', function(e) {
    console.log(e);
    console.log(this);
  });
  
  map._on('dragend', function(e) {
    alert('finishing drag');
  });
  // google.maps.event.addListener(map.gMap, 'click', function(e) {
  //   console.log(e);
  // });
  
}(window, window.Mapster));