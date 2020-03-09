
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
