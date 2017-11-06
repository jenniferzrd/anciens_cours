/*jshint esversion: 6 */

let sum = 0;

for (let i = 2; i < process.argv.length; i += 1) {
    sum += Number(process.argv[i]);
}

// let sum = process.argv.reduce(function add(a, b, i) {
//     if (i >= 2) {
//         return a + b;
//     }
// }, 0);

console.log(sum);
