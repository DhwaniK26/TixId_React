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
exports.comingsoonMovies = exports.bookmovies = void 0;
const moviedata_1 = require("../entities/moviedata");
const db_1 = require("../db");
const comingsoon_1 = require("../entities/comingsoon");
const bookmovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = db_1.AppDataSource.getRepository(moviedata_1.Moviedata);
    const getmoviedata = yield userRepository.find();
    res.json({
        movielist: getmoviedata
    });
});
exports.bookmovies = bookmovies;
const comingsoonMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = db_1.AppDataSource.getRepository(comingsoon_1.Comingsoon);
    const comingsoonMovies = yield userRepository.find();
    res.json({
        comingsoonlist: comingsoonMovies
    });
});
exports.comingsoonMovies = comingsoonMovies;
