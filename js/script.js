function myFunction(x) {
    if (x.matches) {
      document.body.style.backgroundColor = "grey";
    } else {
     document.body.style.backgroundColor = "pink";
    }
  }
  
  let x = window.matchMedia("(max-width: 400px)")
  myFunction(x) 
  x.addListener(myFunction) ;

  document.querySelector("button").addEventListener("click", () => {
    
    let swars = document.querySelector("input").value;
    
    fetch(`https://swapi.co/api/people/${swars}`)
    
    .then( (response) => {
      
      response.json()
      
      .then( (data) => {
        
    document.querySelector("main").innerHTML = '';
        
    let tableElement = document.createElement("table");
    document.querySelector("main").appendChild(tableElement);
        
    let theadElement = document.createElement("thead");
    tableElement.appendChild(theadElement);
        
    let trElement1 = document.createElement("tr");
    theadElement.appendChild(trElement1);
    
    let thElement1 = document.createElement("th");
    let thElement2 = document.createElement("th");
    let thElement3 = document.createElement("th");
    let thElement4 = document.createElement("th");
    let thElement5 = document.createElement("th");
    let thElement6 = document.createElement("th");
    let thElement7 = document.createElement("th");
    let thElement8 = document.createElement("th");


    thElement1.innerHTML = "Name";
    thElement2.innerHTML = "Height";
    thElement3.innerHTML = "Mass";
    thElement4.innerHTML = "Hair Color";
    thElement5.innerHTML = "Skin Color";
    thElement6.innerHTML = "Eye Color";
    thElement7.innerHTML = "Birth Year";
    thElement8.innerHTML = "Gender";

    trElement1.appendChild(thElement1);
    trElement1.appendChild(thElement2);
    trElement1.appendChild(thElement3);
    trElement1.appendChild(thElement4);
    trElement1.appendChild(thElement5);
    trElement1.appendChild(thElement6);
    trElement1.appendChild(thElement7);
    trElement1.appendChild(thElement8);

    let tbodyElement = document.createElement("tbody");
    tableElement.appendChild(tbodyElement);

    let trElement2 = document.createElement("tr");
    tbodyElement.appendChild(trElement2);

    let tdElement1 = document.createElement("td");
    let tdElement2 = document.createElement("td");
    let tdElement3 = document.createElement("td");
    let tdElement4 = document.createElement("td");
    let tdElement5 = document.createElement("td");
    let tdElement6 = document.createElement("td");
    let tdElement7 = document.createElement("td");
    let tdElement8 = document.createElement("td");
    
    trElement2.appendChild(tdElement1);
    trElement2.appendChild(tdElement2);
    trElement2.appendChild(tdElement3);
    trElement2.appendChild(tdElement4);
    trElement2.appendChild(tdElement5);
    trElement2.appendChild(tdElement6);
    trElement2.appendChild(tdElement7);
    trElement2.appendChild(tdElement8); 
    
    
    document.querySelectorAll("td")[0].innerHTML = data.name;
    document.querySelectorAll("td")[1].innerHTML = data.height;
    document.querySelectorAll("td")[2].innerHTML = data.mass;
    document.querySelectorAll("td")[3].innerHTML = data.hair_color;
    document.querySelectorAll("td")[4].innerHTML = data.skin_color;
    document.querySelectorAll("td")[5].innerHTML = data.eye_color;
    document.querySelectorAll("td")[6].innerHTML = data.birth_year;
    document.querySelectorAll("td")[7].innerHTML = data.gender;
    
  });
});
});

