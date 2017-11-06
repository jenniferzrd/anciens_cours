// console.log(process.argv);
var usefulArray = process.argv.splice(2, process.argv.length - 1);

var sum = usefulArray.reduce(function(sum, val) {
    return sum + Number(val);
}, 0);

console.log(sum);
