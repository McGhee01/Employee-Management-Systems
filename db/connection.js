// const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    //Username
    user: "root",
    //Password
    password: "null",
    database: "employees"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;