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

// ! 11-masala
// let N = 7;
// function isPrime() {
//     if (N % 2 == 0) {
//         console.log(true);
//     } else {
//         console.log(false)
//     }
// }
// isPrime()

// ! 12-masala
// function isPrime(n) {
//   if (n <= 1) 
//     return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) 
//     return false;
//   }
//   return true;
// }
// function numberOfPrime(N) {
//   let count = 0;
//   for (let i = 2; i <= N; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(numberOfPrime(15)); 

// ! 13-masala
//! let N = 12349;
//! let onMingliklar = Math.floor(N / 10000);
//! let mingliklar = Math.floor (N / 1000) % 10;
//! let yuzliklar = Math.floor (N / 100) % 10;
//! let onliklar = Math.floor (N / 10) % 10
//! let birliklar = Math.floor (N % 100) % 10;
//! function inverseNumber() {

// ! 16 - masala
// let N = 4;
// function factorial(){
//     let count = 0;
//     if (N  % 2 == 0){
//         for (let i = 1; i < N; i++) {
//         count++;
//         count *= i;
//         console.log(count);
//         }
//     } else {
//         console.log(1);
//     }

// }
// factorial()

//! 17-masala
// const getSum3 = N => {
//   let sum = 0;
//   for (let i = 3; i <= N; i += 3) sum += i;
//   return sum;
// };

//! 18-masala
// const sumOddEven = N => {
//   let sumEven = 0, sumOdd = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0) sumEven += i;
//     else sumOdd += i;
//   }
//   return [sumEven, sumOdd];
// };

//! 19-masala
// const invertTime = (H, M, S) => H * 3600 + M * 60 + S;

//! 21-masala
// const decTime = (H, M, S) => {
//   let total = invertTime(H, M, S) - 1;
//   if (total < 0) total = 0;
//   const h = Math.floor(total / 3600);
//   const m = Math.floor((total % 3600) / 60);
//   const s = total % 60;
//   return ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')};
// };

// Func21
// const isLeapYear = Y => (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);

// 22-masala
// const monthDays = (M, Y) => {
//   const daysInMonth = [31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   return daysInMonth[M - 1];
// };

// 23-masala
// const prevDate = (D, M, Y) => {
//   D--;
//   if (D === 0) {
//     M--;
//     if (M === 0) {
//       M = 12;
//       Y--;
//     }
//     D = monthDays(M, Y);
//   }
//   return ${D.toString().padStart(2, '0')}.${M.toString().padStart(2, '0')}.${Y};
// };

// 24-masala
// const nextDate = (D, M, Y) => {
//   D++;
//   if (D > monthDays(M, Y)) {
//     D = 1;
//     M++;
//     if (M > 12) {
//       M = 1;
//       Y++;
//     }
//   }
//   return ${D.toString().padStart(2, '0')}.${M.toString().padStart(2, '0')}.${Y};
// };

// 25-masala
// const getDividersNumberAndSum = N => {
//   let count = 0, sum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (N % i === 0) {
//       count++;
//       sum += i;
//     }
//   }
//   return [count, sum];
// };