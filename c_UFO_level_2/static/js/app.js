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
    
    // Get filter inputs
    var dateFilter = d3.select("#datetime").property("value");
    var cityFilter = d3.select("#city").property("value");
    var stateFilter = d3.select("#state").property("value");
    var countryFilter = d3.select("#country").property("value");

    // Filter tableData
    var filteredData = tableData;
    if (dateFilter !== "") {
        var filteredData = filteredData.filter(sighting => sighting.datetime === dateFilter);
    };

    if (cityFilter !== "") {
        var filteredData = filteredData.filter(sighting => sighting.city === cityFilter.toLowerCase());
    };
    
    if (stateFilter !== "") {
        var filteredData = filteredData.filter(sighting => sighting.state === stateFilter.toLowerCase());
    };

    if (countryFilter !== "") {
        var filteredData = filteredData.filter(sighting => sighting.country === countryFilter.toLowerCase());
    };

    // if (countryFilter.toLowerCase() === "not us") {
    //     var filteredData = filteredData.filter(sighting => sighting.country !== "us");
    // };


    // remove existing table data
    d3.select("tbody").remove();

    // add table body back
    table.append("tbody");

    // load table
    loadTable(filteredData);

};