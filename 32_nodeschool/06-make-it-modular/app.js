/*jshint esversion: 6 */

const tool = require("./my-module");

tool(process.argv[2], process.argv[3], function (err, res) {
    if (err) {
        console.error(res);
    } else {
        res.forEach(function(file) {
            console.log(file);
        });
    }

});
