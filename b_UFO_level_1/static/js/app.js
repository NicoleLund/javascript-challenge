// from data.js
var tableData = data;

// reference to the table body
var tbody = d3.select("tbody");

// reference to the filter input
var dateFilter = d3.select("#form");

// reference to the button input
var filterButton = d3.select("#filter-btn")

// initialize event handlers
dateFilter.on("submit", filterData);
filterButton.on("click", filterData);

// Add data to table body
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Filter data table
function filterData() {
    var filterText = d3.select("#datetime").property("value");
    console.log(filterText);
    var filteredData = tableData.filter(sighting => sighting.datetime === filterText);
    console.log(filteredData);
};