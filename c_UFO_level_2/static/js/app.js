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

// -----------------------
// Filter the data upon form change 
// and repopulate the webpage table
// -----------------------
function filterData() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Get all filter inputs
    var filterValues = {
        datetime: d3.select("#datetime").property("value"),
        city: d3.select("#city").property("value"),
        state: d3.select("#state").property("value"),
        country: d3.select("#country").property("value"),
        shape: d3.select("#shape").property("value")
    };
    console.log(filterValues);

    // Filter tableData for all selections
    var filteredData = tableData;
    Object.entries(filterValues).forEach(([key, value]) => {
        if (key === 'country' && value.toLowerCase() === "not us") {
            console.log(`Filtering on [Key: ${key}, Value: ${value}]`);
            filteredData = filteredData.filter(sighting => sighting[key] !== "us");
        }
        else if (value.toLowerCase() !== "not us" && value.toLowerCase() !== "") {
            console.log(`Filtering on [Key: ${key}, Value: ${value}]`);
            filteredData = filteredData.filter(sighting => sighting[key] === value.toLowerCase());
        };
    });

    // remove existing table data and reload table
    d3.select("tbody").remove();
    table.append("tbody");
    loadTable(filteredData);
};

// -----------------------
// Load full data table on initial load
// -----------------------
loadTable(tableData);

// -----------------------
// initialize event handler
// -----------------------
d3.select("#form").on("change", filterData);