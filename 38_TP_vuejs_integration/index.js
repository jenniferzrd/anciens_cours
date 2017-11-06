/*jshint esversion: 6*/

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
import { deleteTestimony, getTestimonies, getPublishedTestimonies, postTestimony, updateTestimonyStatus } from "./src/database/mysql";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// autoriser le CORS (Cross Origin Ressource Sharing)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.send("hello from server @index.js");
});

app.get('/get/testimonies', (req, res) => {
    try {
        getTestimonies((dbRes) => {
            res.send({error: false, data: dbRes});
        });
    } catch (err) {
        res.send({error: true, data: err});
    }
});

app.get('/get/published-testimonies', (req, res) => {
    try {
        getPublishedTestimonies((dbRes) => {
            res.send({error: false, data: dbRes});
        });
    } catch (err) {
        res.send({error: true, data: err});
    }
});

app.put('/put/testimony/:id', (req, res) => {
    try {
        updateTestimonyStatus((dbRes) => {
                res.send({error: false, data: dbRes});
            },
            req.params.id
        );
    } catch (err) {
        res.send({error: true, data: err});
    }
});

app.delete('/delete/testimony/:id', (req, res) => {
    try {
        deleteTestimony((dbRes) => {
                res.send({error: false, data: dbRes});
            },
            req.params.id
        );
    } catch (err) {
        res.send({error: true, data: err});
    }
});

app.post('/post/testimony', (req, res) => {
    try {
        postTestimony((dbRes) => {
                res.send({error: false, data: dbRes});
            },
            req.body.name_client,
            req.body.name_project,
            req.body.message,
            req.body.published
        );
    } catch (err) {
        res.send({error: true, data: err});
    }
});

app.listen(3333, () => {
    console.log('Node server listening on port 3333, check http://localhost:3333');
});
