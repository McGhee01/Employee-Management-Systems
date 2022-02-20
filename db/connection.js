const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    //Username
    user: "root",
    //Password
    password: "Buttocks1123",
    database: "employees"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;