"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const showtime_1 = require("../entities/showtime");
const moviedata_1 = require("../entities/moviedata");
const choosesch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userlocation, usermoviename, userdate } = req.body;
    const movie = yield db_1.AppDataSource.getRepository(moviedata_1.Moviedata).findOne({
        where: {
            moviename: usermoviename
        }
    });
    if (!movie) {
        // If the movie is not found, return an error
        return res.status(404).json({ message: 'Movie not found' });
    }
    const getdate = yield db_1.AppDataSource.getRepository(showtime_1.Showtime)
        .createQueryBuilder("showtime")
        .innerJoin("showtime.screenid", "screen") // Join the Screendata entity
        .innerJoin("screen.theatreid", "theatre") // Join the Theatre entity using the foreign key
        .innerJoin("showtime.movieid", "movie") // Join the Moviedata entity
        .where("movie.moviename = :usermoviename", { usermoviename })
        .andWhere("theatre.location = :userlocation", { userlocation })
        .andWhere("showtime.date = :userdate", { userdate })
        .select([
        "screen.screenname", // Select screenname from Screendata
        "showtime.time", // Select time from Showtime
        "screen.price", // Select price from Screendata
        "theatre.theatrename", // Select theatrename from Theatre
        "showtime.date"
    ])
        .getMany();
    console.log('Hello: ' + getdate);
    res.json({
        answer: getdate
    });
});
module.exports = { choosesch };
