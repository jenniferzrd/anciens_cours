/*jshint esversion: 6 */

const http = require("http");

http.get(process.argv[2], (response) => {
    // response is a node object of type stream
    response.setEncoding("utf8");

    response.on("data", (data) => {
        console.log(data);
    });

}).on("error", (error) => {
    console.log("event@error");
    console.log(error);

}).on("end", (end) => {
    console.log("event@end");
    console.log(end);
});
