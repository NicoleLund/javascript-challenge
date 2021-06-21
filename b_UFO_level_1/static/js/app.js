/* ---------------------------------------------------------
index.html, app.js, style.css
----

Written in HTML with Bootstrap and D3.js

By Nicole Lund 

The starter code and data for this challenge was 
provided and can be reviewed in a_assignment_instructions 
--------------------------------------------------------- */

// -----------------------
// Setup references
// -----------------------

// from data.js
var tableData = data;

// reference to the table elements
var table = d3.select("#ufo-table");

// reference to the filter input
var dateFilter = d3.select("#form");


// -----------------------
// Populate the webpage table
// -----------------------

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

// Load full data table on initial load
loadTable(tableData);


// -----------------------
// initialize event handler
// -----------------------
dateFilter.on("change", filterData);


// -----------------------
// Filter the data upon form change 
// and repopulate the webpage table
// -----------------------

function filterData() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Get filter input
    var dateFilter = d3.select("#datetime").property("value");

    // Filter tableData for selection
    var filteredData = tableData;
    if (dateFilter !== "") {
        var filteredData = filteredData.filter(sighting => sighting.datetime === dateFilter);
    };

    // remove existing table data
    d3.select("tbody").remove();

    // add table body back
    table.append("tbody");

    // reload table
    loadTable(filteredData);
};