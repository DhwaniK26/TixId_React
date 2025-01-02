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
exports.displaySeats = void 0;
const db_1 = require("../db");
const seats_1 = require("../entities/seats");
const displaySeats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userscreenname, usertheatrename } = req.body;
        const seatdata = yield db_1.AppDataSource.getRepository(seats_1.Seats)
            .createQueryBuilder("seats")
            .innerJoin("seats.screenid", "screendata") // Join Seats with Screendata
            .where("screendata.screenname = :userscreenname", { userscreenname })
            .select([
            "seats.screenid",
            "seats.row",
            "seats.start_num",
            "seats.end_num"
        ])
            .getOne();
        if (!seatdata) {
            res.json({
                message: "no data!"
            });
        }
        res.json({
            seatkadata: seatdata
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
});
exports.displaySeats = displaySeats;
