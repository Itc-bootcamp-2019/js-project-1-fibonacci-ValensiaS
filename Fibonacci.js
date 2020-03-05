


function fibonacci(n) {
    let a = 0, b = 1, f = 1;
    if (n<=1) {
    return n;
    }
    for (let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
   };

   function getInputValue(){
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("x").value;
    return inputVal;
        // Displaying the value
}
function buttonClicked() {
    const n = getInputValue();
    console.log(n);
    document.getElementById("y").innerText = fibonacci(n);
    console.log(fibonacci(n));
}