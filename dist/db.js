"use strict";
// const Pool = require("pg").Pool
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
// const pool = new Pool({
//     user: "postgres",
//     password: "postgre",
//     host:"localhost",
//     port:5432,
//     database:"TIXID"
// });
// module.exports = pool;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_1 = require("./entities/user");
const moviedata_1 = require("./entities/moviedata");
const comingsoon_1 = require("./entities/comingsoon");
const showtime_1 = require("./entities/showtime");
const theatredata_1 = require("./entities/theatredata");
const screendata_1 = require("./entities/screendata");
const seats_1 = require("./entities/seats");
const seatsStatus_1 = require("./entities/seatsStatus");
// Data source setup for PostgreSQL
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost", // Database host
    port: 5432, // Default PostgreSQL port
    username: "postgres", // Your database username
    password: "postgre", // Your database password
    database: "TIXID", // Your database name
    synchronize: false, // Set to false in production, use migrations
    logging: true, // Enable query logging
    entities: [user_1.User, moviedata_1.Moviedata, comingsoon_1.Comingsoon, showtime_1.Showtime, theatredata_1.Theatredata, screendata_1.Screendata, seats_1.Seats, seatsStatus_1.SeatStatus], // Array of your entities
});
