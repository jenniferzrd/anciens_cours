/*jshint esversion : 6*/
const https = require("https");
const util = require('util');

var url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms_2004_a_2012&rows=1000&facet=prenoms&facet=sexe&facet=annee";

function usingCallback(clbk) {
    var data;

    https.get(url, function(res) {

        res.on('data', (chunk) => {
            data += chunk.toString();
        });

        res.on('end', () => {
            clbk(data);
        });
    });

}

var monres;

var monCallback = function(data) {
    console.log(util.inspect(data , {depth: null, colors: true}));
};

usingCallback(monCallback);
