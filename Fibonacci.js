function getResult() {
  document.getElementById("timer").classList.add("visible");
  document.getElementById("alarm").classList.add("hidden");
  document.getElementById("errorId").classList.add("hidden");
  document.getElementById("y").classList.add("hidden");

  let inputVal = document.getElementById("x").value;
  let n = inputVal;

  if (inputVal > 50) {
    document.getElementById("xButton").classList.add("input-button-error");
    document.getElementById("alarm").innerText = null;
    document.getElementById("errorId").classList.add("visible");
    document.getElementById("timer").classList.remove("visible");
    document.getElementById("x").classList.add("input-button-text-error");
    document.getElementById("y").innerText=null;
    
  } else {
    let s = document.getElementById("Save").checked;
    if (s === false) {
      fibonacci(n);
    } else {
      document.getElementById("timer").classList.add("boxLoading-new");
      document.getElementById("errorId").classList.remove("visible"); 
      document.getElementById("xButton").classList.remove("input-button-error");
      document.getElementById("x").classList.remove("input-button-text-error");
      document.getElementById("alarm").classList.remove("visible");
      fetch("http://localhost:5050/fibonacci/" + n).then(res => {
        if (res.ok) {
          
          console.log(res);
          return res.json().then(function(data) {
            let answer = data.result;
            console.log(data);
            document.getElementById("timer").classList.remove("visible");       
            document.getElementById("y").classList.add("visible");
            document.getElementById("y").innerText = answer;

            console.log(answer);
            getAllResults();
          });
        } else {
          res.text().then(text => {
            console.log(text);
            document.getElementById("timer").classList.remove("visible");
            document.getElementById("alarm").classList.add("visible");
            document.getElementById("errorId").classList.remove("visible");
            document.getElementById("y").innerText=null;
            document.getElementById("alarm").innerHTML =
              "Server error: " + text;
            
          });
        }
      });
    }
  } 
}
function getAllResults() {
  fetch("http://localhost:5050/getFibonacciResults")
    .then(res => res.json())
    .then(function(data) {
      console.log(data);
      console.log(data.results.length);

      let expandingListWrapper = document.createElement("div"); //create wrapper for result
      expandingListWrapper.classList.add("expandingListWrapper"); //line class

      for (let i = 0; i < 10; i++) {
        let expandingLine = document.createElement("hr"); //create line
        expandingLine.classList.add("resultAll-next-line"); //

        let expandingList = document.createElement("div"); //create string of result
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
        if (data.results[i].number>11){
        expandingList.classList.add("resultAll-next-height");
        expandingList4.innerHTML = data.results[i].result;
        } else{
        expandingList4.innerHTML = data.results[i].result;
        }

        let expandingList5 = document.createElement("div");
        expandingList5.classList.add("expendingList1");
        expandingList5.innerText = " . Calculated at ";

        let expandingList6 = document.createElement("div");
        expandingList6.classList.add("expendingList2");
        expandingList6.innerHTML = new Date(data.results[i].createdDate);

        document.getElementById("resultAll").appendChild(expandingListWrapper);
        expandingListWrapper.append(expandingLine, expandingList);
        expandingList.append(
          expandingList1,
          expandingList2,
          expandingList3,
          expandingList4,
          expandingList5,
          expandingList6
        );
      }
    });
}

function fibonacci(n) {
  document.getElementById("xButton").classList.remove("input-button-error");
  document.getElementById("x").classList.remove("input-button-text-error");
  document.getElementById("alarm").classList.remove("visible");
  let a = 0,
    b = 1,
    f = 1;
    
  if (n <= 1) {
    return n;
  }
  for (let i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  console.log(f); 
  document.getElementById("timer").classList.remove("visible"); 
  document.getElementById("y").classList.add("visible");
  document.getElementById("y").innerText = f;
}

const button = document.getElementById("in");
button.addEventListener("click", getResult);
