/*jshint esversion: 6 */
const fs = require("fs");
const path = require("path");

module.exports = function filterLs(route, ext, clbk) {
    fs.readdir(route, function(err, files) {
        const matched = [];
        if (err) {
            return clbk(err, null);
        }
        files.forEach(function(file) {
            if (path.extname(file) === "." + ext) {
                matched.push(file);
            }
        });
        clbk(null, matched);
    });
};
