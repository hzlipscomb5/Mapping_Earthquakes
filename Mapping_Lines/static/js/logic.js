
// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// We create the tile layer that will be the background of our map. (tweaking the api url at the beginning)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// for (let i = 0; i < cities.length; i++)    could use this

// // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//    });

// Get data from cities.js
let cityData = cities;

// // Loop through the cities array and create circle marker thats radius pairs with the population for each city. (toLocaleString() adds comma thousands separators)
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         fillColor: '#f78d3b',
//         color: '#f78d3b',
//         weight: 4
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });




// // Coordinates for each point to be used in the line. San fran to LA
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ];


// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "red"
//   }).addTo(map);



// Coordinates for each point to be used in the polyline. (Sanfran, LA, Seattle, Salt Lake City)
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

// // Create a polyline using the line coordinates and make the line black.
// L.polyline(line, {
//     color: "yellow"
//  }).addTo(map);

// SFran, Austin, Toronto, JFK airports
 let line = [
     [37.6213, -122.3790],
     [30.1975, -97.6664],
     [36.1263, -86.6774],  
     [43.6777, -79.6248],
     [40.6413, -73.7781],
    ];

 L.polyline(line, {
     color: "blue",
     weight: 4,
     opacity: .5,
     dashArray: 10
 }).addTo(map);