
// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// To change the map's style, change the map id using the list of Mapbox ids below:
// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11
// mapbox://styles/mapbox/navigation-day-v1
// mapbox://styles/mapbox/navigation-night-v1

// Add a streets and a darkmode map to toggle between
// // We create the tile layer that will be the background of our map. (tweaking the api url at the beginning)
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });


// // We create the dark view tile layer that will be an option for our map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Create a base layer that holds both maps. (Street and Dark set the text for the toggle on the)
// let baseMaps = {
//     Light: light,
//     Dark: dark
//   };
 
// We create the dark view tile layer that will be an option for our map.
let nightNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// We create the dark view tile layer that will be an option for our map.
let dayNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps. (Street and Dark set the text for the toggle on the)
let baseMaps = {
    Day: dayNav,
    Night: nightNav
  };


  // Street: streets,

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [dayNav]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/hzlipscomb5/Mapping_Earthquakes/main/torontoRoutes.json";
// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    style:myStyle,
    //   color:"#ffffa1",
    //   weight:2,
      onEachFeature: function(feature, layer){
          console.log(layer)
          layer.bindPopup("<h2> Airline Code: " + feature.properties.airline + "</h2> <hr> <h3> Destination: " + feature.properties.dst + "</h3>");
           }
      }).addTo(map);
});




// // // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/hzlipscomb5/Mapping_Earthquakes/main/majorAirports.json";

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//       onEachFeature: function(feature, layer){
//           console.log(layer)
//           layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2> <hr> <h3> Airport: " + feature.properties.name + "</h3>");
//            }
//       }).addTo(map);
// });




// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Add our sanfranAirport to map
// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);


// // Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.city + ", " + feature.properties.country + "</h2> <hr> <h3> Airport: " + feature.properties.name + "</h3>")
//     }

//   }).addTo(map);

// pointToLayer syntax
// L.geoJson(data, {
//     pointToLayer: function(feature, latlng) {
//       return L.marker(latlng);
//      }
// });

// onEachFeature 
// SYNTAX
//  L.geoJson(data, {
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup();
//      }
// });

// Airport info with airpot code and name
// L.geoJson(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer)
//         layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2> <hr> <h3> Airport: " + feature.properties.name + "</h3>");
//      }
// }).addTo(map);


// NOTE
// Please note that the coordinates appear in reverse order [-122.375, 37.61899948120117], compared to their order in the setView() method. This is because the GeoJSON data coordinates are set with the first parameter as X (longitude) and the second parameter as Y (latitude), as documented in the GeoJSON Standard. (Links to an external site.) The L.geoJSON()layer reverses the coordinates to plot them on the map.