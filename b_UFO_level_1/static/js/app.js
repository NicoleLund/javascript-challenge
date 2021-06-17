// from data.js
var tableData = data;

// reference to the table elements
var table = d3.select("#ufo-table");

// Add data to table body
function loadTable(data) {
    var tbody = d3.select("tbody");
    data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Load full data table
loadTable(tableData);


// reference to the filter input
var dateFilter = d3.select("#form");

// reference to the button input
var filterButton = d3.select("#filter-btn")

// initialize event handlers
dateFilter.on("submit", filterData);
filterButton.on("click", filterData);

// Filter data table
function filterData() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Get datetime filter input
    var filterText = d3.select("#datetime").property("value");
    console.log(filterText);

    // Filter tableData on datetime
    var filteredData = tableData.filter(sighting => sighting.datetime === filterText);
    console.log(filteredData);

    // remove existing table data
    d3.select("tbody").remove();

    // add table body back
    table.append("tbody");

    // load table
    loadTable(filteredData);

};