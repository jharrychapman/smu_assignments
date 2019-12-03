// Harry Chapman - An app that displays filtered UFO sightings

// from data.js
var tableData = data;

console.log(tableData);

// YOUR CODE HERE!
// Get references to the table body

var tbody = document.querySelector("tbody");
var dateInput = document.querySelector("#datetime");
var searchBtn = document.querySelector("#search");
var cityInput = document.querySelector("#city");
var stateInput = document.querySelector("#state");
var countryInput = document.querySelector("#country");
var shapeInput = document.querySelector("#shape");


// Add event listener to buttons

var searchBtn = document.querySelector("#btn");
var searchBtn1 = document.querySelector("#btn1");
var searchBtn2 = document.querySelector("#btn2");
var searchBtn3 = document.querySelector("#btn3");
var searchBtn4 = document.querySelector("#btn4");

searchBtn1.addEventListener("click", ButtonClick1);
searchBtn2.addEventListener("click", ButtonClick2);
searchBtn3.addEventListener("click", ButtonClick3);
searchBtn4.addEventListener("click", ButtonClick4);
searchBtn.addEventListener("click", ButtonClick);


// Render the filtered data to the tbody
function renderTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // Get get the current UFO object and its fields
    var ufo = tableData[i];
    var observations = Object.keys(ufo);
    // Create row in tbody for each observation
    var row = tbody.insertRow(i);
    for (var j = 0; j < observations.length; j++) {
      var observation = observations[j];
      var cell = row.insertCell(j);
      cell.innerText = ufo[observation];
    }
  }
}

// Filter by datetime
function ButtonClick() {
  var filterDate = dateInput.value
  tableData = data.filter(function (ufo) {
    var ufoDate = ufo.datetime.toLowerCase();
    // If true, add the date to the filteredUFO
    return ufoDate === filterDate;
  });

  renderTable();
}

// Filter by city
function ButtonClick1() {
  var filterCity = cityInput.value.toLowerCase();
  tableData = data.filter(function (ufo) {
    var ufoCity = ufo.city.toLowerCase();
    return ufoCity === filterCity;
  });

  renderTable();
}

// Filter by state
function ButtonClick2() {
  var filterState = stateInput.value.toLowerCase();
  tableData = data.filter(function (ufo) {
    var ufoState = ufo.state.toLowerCase();
    return ufoState === filterState;
  });

  renderTable();
}

// Filter by country (basically just resets the data table)
function ButtonClick3() {
  var filterCountry = countryInput.value.toLowerCase();
  tableData = data.filter(function (ufo) {
    var ufoCountry = ufo.country.toLowerCase();
    return ufoCountry === filterCountry;
  });

  renderTable();
}

// Filter by shape of UFO
function ButtonClick4() {
  var filterShape = shapeInput.value.toLowerCase();
  tableData = data.filter(function (ufo) {
    var ufoShape = ufo.shape.toLowerCase();
    return ufoShape === filterShape;
  });

  renderTable();
}
renderTable();