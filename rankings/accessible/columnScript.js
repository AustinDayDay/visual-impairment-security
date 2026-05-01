async function loadList() {
  const response = await fetch('../rankings.json');
  const data = await response.json();

  // Get all the headers
  let headers = [];
  for (let x in data[0]){
    headers.push(x);
  }

  // Generate the company first listing of company rankings
  let columnList = document.getElementById("column-first");
  for(let i =0; i<data.length; i++){
    let app = data[i];
    appName = app[headers[0]]
    companyHeader = document.createElement("h4");
    companyHeader.textContent = appName;
    subList = document.createElement("ul");
    subList.id = appName;
    for(let j=1; j<headers.length;j++){
      let category = headers[j];
      let value = app[category];
      item = document.createElement("li");
      if (category == "Score"){
        item.textContent = appName + " has a score of " + value;
        console.log("category is score, with a value of: " + value);
      }else{
        if (value == "TRUE"){
          item.textContent = appName + " has " + category;
        }
        else{
          item.textContent = appName + " doesn't have " + category;
        }
        subList.appendChild(item);
      }
    }
    columnList.appendChild(companyHeader);
    columnList.appendChild(subList);

  }

}

loadList();
