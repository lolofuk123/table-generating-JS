
 //get modal
 let modal = document.getElementById("myModal"); 
 let btn = document.getElementById("openModal"); 
 let clsBtn = document.getElementById("close"); 
 let xError = document.getElementById("xError"); 
 let yError = document.getElementById("yError"); 
 let table = document.getElementById("table");
 

 function showModal(){
  var x = parseInt(document.getElementById("num1").value); 
  let y = parseInt(document.getElementById("num2").value);

  if(xError.style.display == "block" || yError.style.display == "block"){
    return;
  }

  generateTable(x, y);
  modal.style.display = "block";
 }

 let num1 = document.querySelector("#num1"); 

 num1.addEventListener("change", ()=>{
   let x = parseInt(num1.value);

   if(isNaN(x)){
    xError.style.display="block";
    return; 
  }
   if(x > 9 || x < 1){
    xError.style.display="block"; 
    return; 
  }
  xError.style.display="none"; 
 })

 let num2 = document.querySelector("#num2"); 
 
 num2.addEventListener("change", ()=>{
   let y = parseInt(num2.value);

   if(isNaN(y)){
    yError.style.display="block";
    return; 
  }
   if(y > 9 || y < 1){
    yError.style.display="block"; 
    return; 
  }
  yError.style.display="none"; 
 })



function closeModal(){
  modal.style.display = "none";
  for (const row in table) {
    console.log(row);
    if (object.hasOwnProperty(row)) {
      const element = object[row];
      row.delete(); 
    }
  }
}

function generateTable(x, y){  
  let body = document.getElementById("tbody"); 
  body.innerHTML = ""; 
  let title = document.getElementById("tableTitle"); 
  title.innerHTML="";
  let msg = document.createElement("h2")
  msg.append(`Nasobilka cisiel ${x} a ${y}`); 
  title.prepend(msg);
  

  for (let i = 0; i < y + 1; i++){
    let row = document.createElement("TR"); 
    for(let j = 0; j < x + 1; j++){
      if(i == 0){
        let tHead  = document.createElement("TH");
        
        if(j == 0){
          tHead.innerHTML = "0"; 
        }else{
          tHead.innerHTML = `x = ${j}`; 
        }
        row.appendChild(tHead);
        body.appendChild(row); 
      }else{
        if(j == 0){
          let tHead  = document.createElement("TH");
          tHead.innerHTML = `y = ${i}`;
          row.appendChild(tHead);
          body.appendChild(row); 
        }else{
          let tData = document.createElement("TD"); 
          tData.innerHTML = `${i * j}`;
          row.appendChild(tData); 
          body.appendChild(row); 
        }
      }
    }
  }
  
}