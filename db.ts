// const Pool = require("pg").Pool

// const pool = new Pool({
//     user: "postgres",
//     password: "postgre",
//     host:"localhost",
//     port:5432,
//     database:"TIXID"
// });

// module.exports = pool;

import "reflect-metadata";
import { DataSource } from "typeorm";
import { User} from "./entities/user"
import { Moviedata } from "./entities/moviedata";
import { Comingsoon } from "./entities/comingsoon";
import { Showtime } from "./entities/showtime";
import { Theatredata } from "./entities/theatredata";
import { Screendata } from "./entities/screendata";
import { Seats } from "./entities/seats";
import { SeatStatus } from "./entities/seatsStatus";
import { Movienews } from "./entities/newsdata";
import { NewsDesc } from "./entities/newsdesc";

// Data source setup for PostgreSQL
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",           // Database host
    port: 5432,                  // Default PostgreSQL port
    username: "postgres",   // Your database username
    password: "postgre",   // Your database password
    database: "TIXID",   // Your database name
    synchronize: false,           // Set to false in production, use migrations
    logging: true,               // Enable query logging
    entities: [User, Moviedata, Comingsoon, Showtime,Theatredata, Screendata, Seats, SeatStatus, Movienews,NewsDesc],            // Array of your entities
});
