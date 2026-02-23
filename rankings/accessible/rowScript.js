async function loadList() {
  const response = await fetch('../rankings.json');
  const data = await response.json();

  // Get all the headers
  let headers = [];
  for (let x in data[0]){
    headers.push(x);
  }

  // Generate the category first listing of rankings.
  let rowList = document.getElementById("row-first");
  for(let i=1; i<headers.length -1; i++){
    // Set up current category header and list
    let category = headers[i];
    catergoryHeader = document.createElement("h4");
    catergoryHeader.textContent = category+":";
    rowList.appendChild(catergoryHeader);

    let trueList = document.createElement("ul");
    trueList.id = category+"-true";
    trueList.innerText = "All the companies that have '" + category + "':";
    rowList.appendChild(trueList);
    
    let falseList = document.createElement("ul");
    falseList.id = category+"-false";
    falseList.innerText = "All the companies that don't have '" + category + "':";
    rowList.appendChild(falseList);

    
    // Fill up list with apps that do and don't have such category.
    for( let j=0; j<data.length; j++){
      let app = data[j]
      let name = app[headers[0]];
      let val = app[category]
      let item = document.createElement("li");
      item.innerText = name;

      if( val == "TRUE" ){
        trueList.appendChild(item);
      }else{
        falseList.appendChild(item);
      }

      
    }

    rowList.appendChild(trueList);
    rowList.appendChild(falseList);
  }


}

loadList();