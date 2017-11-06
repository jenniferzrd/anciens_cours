/*jshint esversion : 6*/
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@mysql',
    database: 'tp_vue_integration'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting database : ' + err.stack);
        return;
    }

    console.log('Connected to database as id ' + db.threadId);
});

const deleteTestimony = (clbk, id) => {
    const sql = "DELETE FROM `testimony` WHERE `id` = ?";

    db.query(sql, [id], (error, results, fields) => {
        if (error) throw new Error(error);
        clbk(results);
    });
};

const getTestimonies = (clbk) => {
    const sql = "SELECT * FROM `testimony`";

    db.query(sql, (error, results, fields) => {
        if (error) throw new Error(error);
        clbk(results);
    });
};

const getPublishedTestimonies = (clbk) => {
    const sql = "SELECT * FROM `testimony` WHERE `published` = true";

    db.query(sql, (error, results, fields) => {
        if (error) throw new Error(error);
        clbk(results);
    });
};

const postTestimony = (clbk, name_client, name_project, message, published) => {

    const sql = "INSERT INTO `testimony` (`name_client`, `name_project`, `message`, `published`) VALUES (?, ?, ?, ?)";

    db.query(sql, [name_client, name_project, message, published], (error, results, fields) => {
        if (error) throw new Error(error);
        clbk(results);
    });
};

const updateTestimonyStatus = (clbk, id) => {
    const sql = "UPDATE `testimony` SET `published` = !published WHERE `id` = ?";

    db.query(sql, [id], (error, results, fields) => {
        if (error) throw new Error(error);
        clbk(results);
    });
};

export {
    getTestimonies,
    getPublishedTestimonies,
    deleteTestimony,
    postTestimony,
    updateTestimonyStatus
};
