/*jshint esversion : 6*/

const express = require("express");
import {insertion, selection} from "./database";

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/get-data', (req, res) => {
    try {
        selection((dbRes) => {
            res.send({error: false, val: dbRes});
        });
    } catch (err) {
        res.send({error: true, val: err});
    }
});

app.listen(3333, () => {
    console.log('Node server listening on port 3333, check http://localhost:3333');
});
