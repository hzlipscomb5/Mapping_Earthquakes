
// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0552, -118.2437], 5);


// We create the tile layer that will be the background of our map. (tweaking the api url at the beginning)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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

// // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// // Loop through the cities array and create one marker for each city. (toLocaleString() adds comma thousands separators)
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// Loop through the cities array and create circle marker thats radius pairs with the population for each city. (toLocaleString() adds comma thousands separators)
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        fillColor: '#f78d3b',
        color: '#f78d3b',
        weight: 4
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});