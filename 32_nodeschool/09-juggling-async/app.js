/*jshint esversion: 6*/

const http = require("http");
const results = [];
let count = 0;

const urls = process.argv.filter((arg, i) => {
    return i > 1 && arg;
});

const readData = () => {
    results.forEach((str) => {
        console.log(str);
    });
};

const getData = (clbk, url, i) => {

    results[i] = null;

    http.get(url, (res) => {

        let data = "";

        res.on("data", (chunk) => {
            // console.log(chunk);
            data += chunk.toString();
        });

        res.on("end", () => {
            results[i] = data;
            count += 1;
            if (count === urls.length) {
                clbk();
            }
        });

        res.on("error", (err) => {
            throw new Error(err);
        });
    });
};


urls.forEach((url, i) => {
    getData(readData, url, i);
});
