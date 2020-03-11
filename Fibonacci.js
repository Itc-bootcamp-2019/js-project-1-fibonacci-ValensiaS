
function getResult() {
  document.getElementById("timer").style.visibility = "visible";
  document.getElementById("alarm").style.visibility = "hidden";
  document.getElementById("errorId").style.visibility = "hidden";
  document.getElementById("y").style.visibility = "hidden";
 
  let inputVal = document.getElementById("x").value;
  let n = inputVal;

  if (inputVal > 50) {
    // document.getElementById("alarm").style.visibility = "hidden";
    document.getElementById("timer").style.visibility = "hidden";
    document.getElementById("errorId").style.visibility = "visible";
    document.getElementById("xButton").style.border = "1px solid #A94442";
    document.getElementById("x").style.color = "#A94442";
    return inputVal;
    }else{  
        
  fetch("http://localhost:5050/fibonacci/" + n)
  .then(res => {
    if (res.ok) {
      console.log(res);
      return res.json()
      .then(function(data) {
        let answer = data.result;
        console.log(data);      
        document.getElementById("xButton").style.border = "1px solid black";
        document.getElementById("x").style.color = "black";
        document.getElementById("timer").style.visibility = "hidden";
        document.getElementById("alarm").style.visibility = "hidden";
        document.getElementById("errorId").style.visibility = "hidden";
        document.getElementById("y").style.visibility = "visible";
        document.getElementById("y").innerText = answer;
 
        console.log(answer);
        getAllResults ();
      });
    } else {
      res.text().then(text => {
        console.log(text);
        document.getElementById("timer").style.visibility = "hidden";
        document.getElementById("alarm").style.visibility = "visible";
        document.getElementById("alarm").innerHTML = "Server error: " + text;
      });
    }
});
}
}

const button = document.getElementById("in");
button.addEventListener("click", getResult);


// function addElement(fibData) { 
//     // create a new div element 
//     for (let i = 0; i < 10; i++){
//     let expandingList = document.createElement("div");
//     let expandingLine = document.createElement("hr");
//     expandingList.innerText = "The Fibonachi of " + fibData.results[i].number 
//     +" is "+ fibData.results[i].result+". Calculated at "+fibData.results[i].createdDate; 
//     document.getElementById("resultAll").appendChild(expandingList);
//     document.getElementById("resultAll").appendChild(expandingLine);
//     expandingList.classList.add("resultAll-next");
//     expandingLine.classList.add("resultAll-next-line");
//   } 
// }

 
 
function getAllResults (){

  fetch("http://localhost:5050/getFibonacciResults")
  .then(res =>res.json())
  .then(function(data){ 
   console.log(data);
   console.log(data.results.length);
 
    let expandingListWrapper = document.createElement("div");//create wrapper for result
    expandingListWrapper.classList.add("expandingListWrapper");//line class

   for (let i = 0; i < data.results.length; i++){
      

    let expandingLine = document.createElement("hr");//create line
    expandingLine.classList.add("resultAll-next-line");//

    let expandingList = document.createElement("div");//create string of result
    expandingList.classList.add("resultAll-next");

    let expandingList1 = document.createElement("div");
    expandingList1.classList.add("expendingList1");
    expandingList1.innerText = "The Fibonachi of  ";

    let expandingList2 = document.createElement("div");
    expandingList2.classList.add("expendingList2");
    expandingList2.innerText = data.results[i].number;

    let expandingList3 = document.createElement("div");
    expandingList3.classList.add("expendingList1");
    expandingList3.innerText = " is ";

    let expandingList4 = document.createElement("div");
    expandingList4.classList.add("expendingList2");
    expandingList4.innerHTML = data.results[i].result;

    let expandingList5 = document.createElement("div");
    expandingList5.classList.add("expendingList1");
    expandingList5.innerText = " . Calculated at ";

    let expandingList6 = document.createElement("div");
    expandingList6.classList.add("expendingList2");
    expandingList6.innerHTML = new Date(data.results[i].createdDate);


    document.getElementById("resultAll").appendChild(expandingListWrapper);
    // document.getElementById("resultAll").appendChild(expandingLine);
    // document.getElementById("resultAll").appendChild(expandingList);
    
    expandingListWrapper.append(expandingLine, expandingList);
    expandingList.append(expandingList1,expandingList2,expandingList3,expandingList4,expandingList5,expandingList6);
    
   }
  })
};
   