var fs = require("fs");

var buffer = fs.readFile(process.argv[2], "utf-8", function (err, data) {
    if (err) {
        console.error(err);
    } else {
        var lines = data.split('\n').length - 1;
        console.log(lines);
    }
});
