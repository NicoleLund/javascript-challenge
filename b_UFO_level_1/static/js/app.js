// from data.js
var tableData = data;

// reference the table body
var tbody = d3.select("tbody");

// Add data to table body
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});