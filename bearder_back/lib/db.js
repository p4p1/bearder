const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "mysql",
    user: "admin",
    password: "admin",
    database: "users"
});

connection.connect();
module.exports = connection;
