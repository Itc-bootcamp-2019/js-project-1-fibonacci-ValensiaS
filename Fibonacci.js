let loop = document.getElementById("x").innerHTML = 12;

// function fibonacci(num) {
//     let arr = [0, 1];
//     for (let i = 2; i < n + 1; i++){
//           arr.push(arr[i - 2] + arr[i -1])
//         }
//        return arr[num]
//       }
// let num=15;



function fibonacci (n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};
document.getElementById("y").innerText = fibonacci(loop);