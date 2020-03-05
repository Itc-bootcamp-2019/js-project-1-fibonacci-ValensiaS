
//milestone 4
// //fibonacci function
// function fibonacci(n) {
//     let a = 0, b = 1, f = 1;
//     if (n<=1) {
//     return n;
//     }
//     for (let i = 2; i <= n; i++) {
//         f = a + b;
//         a = b;
//         b = f;
//     }
//     return f;
//    };

// //getting the data from the user input
//    function getInputValue(){
//     // Selecting the input element and get its value 
//     let inputVal = document.getElementById("x").value;
//     return inputVal;
//         // Displaying the value
// }
// //putting fibonacci function into action
// function buttonClicked() {
//     const n = getInputValue();
//     console.log(n);
//     document.getElementById("y").innerText = fibonacci(n);
//     console.log(fibonacci(n));
// }


//milestone 5
// getting the data from the user input
function getInputValue(){
    let inputVal = document.getElementById("x").value;
        return inputVal;
        }
 
       
    //sending data and getting response
    function buttonClicked() {
        const n = getInputValue();
        fetch ("http://localhost:5050/fibonacci/" + n)
        .then (res=>res.json())
        .then (function(data) {
         let answer = data.result;
        document.getElementById("y").innerText = answer;
        console.log(answer);
         })       
           
          
        }
    