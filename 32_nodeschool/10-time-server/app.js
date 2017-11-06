/*jshint esversion: 6*/

const net = require("net");

const getNow = () => {
    const date = new Date();
    let month = date.getMonth() + 1;
    month = month >= 9 ? month : "0" + month;
    const day = date.getDate() >= 10 ? date.getDate() : "O" + date.getMonth();
    const min = date.getMinutes() >= 10 ? date.getMinutes() : "O" + date.getMinutes();

    return date.getFullYear() + "-" + month + "-" + day + " " + date.getHours() + ":" + min + "\n";
};

const server = net.createServer((socket) => {
    socket.write(getNow());
    socket.end();
});

server.listen(process.argv[2]);
