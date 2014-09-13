(function(window, mapster) {
  
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),

  // map
  map = mapster.create(element, options);
  map.addMarker(52.585707, -2.023618, true);
  map.addMarker(52.585707, -1.921618, true);
  
  // var marker = new google.maps.Marker({
  //   position: {
  //     lat: 52.585707,
  //     lng: -2.023618
  //   },
  //   map: map.gMap,
  //   icon: 'http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-ff8a22/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/sleddog.png'
    
  // });
  
}(window, window.Mapster));