/*jshint esversion : 6*/
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@mysql',
    database: 'test_node_js'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting database : ' + err.stack);
        return;
    }

    console.log('Connected to database as id ' + db.threadId);
});

const selection = (clbk) => {
    const query = "SELECT * FROM users";

    db.query(query, (error, results, fields) => {

        if (error) {
            throw new Error(error);
        }

        clbk(results);
    });
};

const insertion = null;

export {selection, insertion};
