"use strict";
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "postgre",
    host: "localhost",
    port: 5432,
    database: "TIXID"
});
module.exports = pool;