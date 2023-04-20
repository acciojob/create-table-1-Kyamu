function insert_Row() {
  // Find the table element by its ID
  var table = document.getElementById("sampleTable");

  // Insert a new row element at the top of the table
  var newRow = table.insertRow(0);

  // Insert two new cells in the new row
  var newCell1 = newRow.insertCell(0);
  var newCell2 = newRow.insertCell(1);

  // Set the text content of the new cells
  newCell1.textContent = "New Cell1";
  newCell2.textContent = "New Cell2";
}

