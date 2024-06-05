const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

// Create table element
const table = document.createElement("table");

// Create header row
const headerRow = document.createElement("tr");

// Get column names from the first object
const columns = Object.keys(MOUNTAINS[0]);

// Fill in top row with column names
columns.forEach((columnName) => {
  const th = document.createElement("th");
  th.appendChild(document.createTextNode(columnName));
  headerRow.appendChild(th);
});

// Append header row to the table
table.appendChild(headerRow);

// Create data rows
MOUNTAINS.forEach((mountain) => {
  const row = document.createElement("tr");
  columns.forEach((columnName) => {
    const td = document.createElement("td");
    td.appendChild(document.createTextNode(mountain[columnName]));
    row.appendChild(td);
  });
  // Append data row to the table
  table.appendChild(row);
});

// Append the table to the parent node with id "mountains"
const mountainsElement = document.getElementById("mountains");
mountainsElement.appendChild(table);
