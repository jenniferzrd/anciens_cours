/*jshint esversion: 6 */

const http = require("http");
let str = "";

http.get(process.argv[2], function(stream) {

    stream.on("data", (chunk) => {
        str += chunk.toString();
        // console.log(chunk);
    });

    stream.on("end", (d) => {
        // console.log("d -->");
        console.log(Number(str.length));
        console.log(str);
    });
});
