// ! 1-masala
// function kv (a, n) {
//     console.log(a**n);
// }
// kv(2, 5)

// ! 2-masala
// function mean (a, b) {
//     let arifmetig = (a + b) / 2;
//     let geometrig = Math.sqrt(a*b);
//     console.log("Arifmetig = ", arifmetig);
//     console.log("Geometrig = ", geometrig)
//     return(arifmetig, geometrig)
// }
// mean(12, 48)

// ! 3-masala
// function sign(n) {
//     if (n > 0) {
//         console.log(1);
//     } else if (n < 0) {
//         console.log(-1);
//     } else {
//         console.log(0)
//     }
// }
// sign(0)

// ! 4-masala
// function numberOfRoots(A, B, C) {
//   if (A === 0) {
//      console.log("A 0 bo'lib qolgan");
//   }
//   const D = B * B - 4 * A * C;

//   if (D > 0) {
//     console.log(2)
//   } else if (D === 0) {
//     console.log(1);
//   } else {
//     console.log(0);
//   }
// }
// numberOfRoots(1, -6, 9)

// ! 5-masala
// const pi = 3.14;
// function Yuza(R) {
//     const S = pi * R**2;
//     console.log(S);
// }
// Yuza(20)

// ! 6-masala
// let sum = 0;
// function sumRange(a, b) {
//     if (a > b) {
//         return 0;
//     }
//     for (let i = a; i <= b; i++){
//         sum += i;
//     }
//     console.log(sum);
    
// }
// sumRange(8, 10)

// ! 7-masala
// function calc (a, b, s) {
//     if (s === "+") {
//         console.log(a + b);
//     } else if (s === "-") {
//         console.log(a - b);
//     } else if (s === "*") {
//         console.log(a * b);
//     } else if (s === "/") {
//         console.log(a / b);
//     } else {
//         console.log(0);
//     }
// }
// calc (10, 5, "*")
// calc (10, 5, "+")
// calc (10, 5, "/")

// ! 8-masala
// function isEven (K) {
//     if (K % 2 == 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// isEven(11)

// ! 9-masala
// function sortABC(a, b, c) {
//   const osish = [a, b, c];
//   osish.sort((x, y) => x - y);
//   console.log(`${osish[0]}, ${osish[1]}, ${osish[2]}`);
// //   console.log(osish);
// }
// sortABC(10, 7, 5)

// ! 10-masala
// function isPowerN(K, N) {
//   if (K <= 0 || N <= 1)
//      return false;
//   let kv = 1;
//   while (kv < K) {
//     kv *= N;
//   }

//   return kv === K;
// }
// console.log(isPowerN(8, 2));  