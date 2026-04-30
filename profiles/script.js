async function loadList() {
  const response = await fetch('./company_profiles.json');
  const data = await response.json();
  
  // Get all the headers
  let headers = [];
  for (let x in data[0]){
    headers.push(x);
  }

  // Generate the first row of the table
  let table = document.getElementById("table-ranking")
  let headerRow = document.createElement("tr");
  headers.forEach(header =>{
    console.log(header);
    let column = document.createElement("th");
    column.scope = "col";
    column.innerText = header;
    headerRow.appendChild(column);
  })
  table.appendChild(headerRow);

  // Fill in the table
  data.forEach(app =>{
    let appName = app[headers[0]];
    let companyRow = document.createElement("tr");
    let nameHeader = document.createElement("th");
    nameHeader.scope = "row";
    nameHeader.innerText = appName;
    companyRow.appendChild(nameHeader);

    for(let i=1; i<headers.length; i++){
      let item = document.createElement("td");
      item.innerText = app[headers[i]];
      companyRow.appendChild(item);
    }
    table.appendChild(companyRow);
  })
  



}
loadList();