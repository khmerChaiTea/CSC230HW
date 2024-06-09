// Mountain data
var mountains = [
  { name: "Mt. Rainier", height: 14417, place: "Washington State" },
  { name: "Mt. Adams", height: 12281, place: "Washington State" },
  { name: "Mt. Baker", height: 10786, place: "Washington State" },
];

// Function to build the table
function buildTable(data) {
  // Create a table element
  var table = document.createElement("table");

  // Create table header row
  var headerRow = table.insertRow();
  Object.keys(data[0]).forEach(function (key) {
    var headerCell = document.createElement("th");
    headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize the first letter of each key
    headerRow.appendChild(headerCell);
  });

  // Create table data rows
  data.forEach(function (object) {
    var row = table.insertRow();
    Object.keys(object).forEach(function (key) {
      var cell = row.insertCell();
      cell.textContent = object[key];
    });
  });

  return table;
}

// Get the parent node where the table will be inserted
var parent = document.getElementById("mountains");

// Invoke the buildTable function and append the table to the parent node
parent.appendChild(buildTable(mountains));
