(function(window, mapster) {
  
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),

  // map
  map = mapster.create(element, options);
  
  map.addMarker({
      lat: 52.585707,
      lng: -2.023618,
      draggable: true,
      visible: true,
      id: 1,
      event: {
        name: 'dragend',
        callback: function() {
          alert('I have done dragging');
        }
      },
      icon: 'http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-ff8a22/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/sleddog.png'      
  });

  map.addMarker({
      lat: 52.585707,
      lng: -2.123618,
      draggable: true,
      visible: true,
      id: 1,
      event: {
        name: 'click',
        callback: function() {
          alert('Wassup');
        }
      },
      icon: 'http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-ff8a22/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/sleddog.png'      
  });
  
}(window, window.Mapster));