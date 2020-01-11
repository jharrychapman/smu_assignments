// Tile layers
// grayscale
var graymap_background = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1IjoiamhhcnJ5Y2hhcG1hbiIsImEiOiJjazQyMGtmN24wM2luM2pwdGhuZWdwcHJ2In0.Mbck3r2Lubwx5I-vC6XOIQ");

// satellite
var satellitemap_background = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1IjoiamhhcnJ5Y2hhcG1hbiIsImEiOiJjazQyMGtmN24wM2luM2pwdGhuZWdwcHJ2In0.Mbck3r2Lubwx5I-vC6XOIQ");

// outdoors
var outdoors_background = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1IjoiamhhcnJ5Y2hhcG1hbiIsImEiOiJjazQyMGtmN24wM2luM2pwdGhuZWdwcHJ2In0.Mbck3r2Lubwx5I-vC6XOIQ");

// map object layers
var map = L.map("mapid", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [graymap_background, satellitemap_background, outdoors_background]
});

// add grapymap layer to map
graymap_background.addTo(map);

// add tectonic plate and earthquake layers
var tectonicplates = new L.LayerGroup();
var earthquakes = new L.LayerGroup();

// make map variable for all of the backgrounds
var baseMaps = {
  Satellite: satellitemap_background,
  Grayscale: graymap_background,
  Outdoors: outdoors_background
};

// label overlays when visualized
var overlayMaps = {
  "Tectonic Plates": tectonicplates,
  "Earthquakes": earthquakes
};

// control layers layer visibility
L
  .control
  .layers(baseMaps, overlayMaps)
  .addTo(map);

// retrieve earthquake data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", function(data) {


  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  // change marker color based on magnitude of earthquake
  function getColor(magnitude) {
    switch (true) {
      case magnitude > 5:
        return "#ea2c2c";
      case magnitude > 4:
        return "#ea822c";
      case magnitude > 3:
        return "#ee9c00";
      case magnitude > 2:
        return "#eecc00";
      case magnitude > 1:
        return "#d4ee00";
      default:
        return "#98ee00";
    }
  }

  // change radius of earthquake marker based on magnitude of earthquake

  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }

    return magnitude * 4;
  }

  // add GeoJSON layer to the map
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Time:" + new Date(feature.properties.time));
    }

  }).addTo(earthquakes);

  earthquakes.addTo(map);


  var legend = L.control({
    position: "bottomright"
  });


  legend.onAdd = function() {
    var div = L
      .DomUtil
      .create("div", "info legend");

    var grades = [0, 1, 2, 3, 4, 5];
    var colors = [
      "#98ee00",
      "#d4ee00",
      "#eecc00",
      "#ee9c00",
      "#ea822c",
      "#ea2c2c"
    ];


    for (var i = 0; i < grades.length; i++) {
      div.innerHTML += "<i style='background: " + colors[i] + "'></i> " +
        grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }
    return div;
  };


  legend.addTo(map);

  // retrive tectonic plate data
  d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json",
    function(platedata) {
 
      L.geoJson(platedata, {
        color: "orange",
        weight: 2
      })
      .addTo(tectonicplates);

      // add tectonic plate layer to the map
      tectonicplates.addTo(map);
    });
});
