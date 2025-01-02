"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Showtime = void 0;
const typeorm_1 = require("typeorm");
const moviedata_1 = require("./moviedata");
const screendata_1 = require("./screendata");
let Showtime = class Showtime {
};
exports.Showtime = Showtime;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Showtime.prototype, "showtimeid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.ManyToOne)(() => screendata_1.Screendata, (screen) => screen.showtimes),
    (0, typeorm_1.JoinColumn)({ name: "screenid" }),
    __metadata("design:type", String)
], Showtime.prototype, "screenid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.ManyToOne)(() => moviedata_1.Moviedata, (movie) => movie.showtimes),
    (0, typeorm_1.JoinColumn)({ name: "movieid" }) // Explicitly define the column name for the foreign key
    ,
    __metadata("design:type", String)
], Showtime.prototype, "movieid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Showtime.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Showtime.prototype, "time", void 0);
exports.Showtime = Showtime = __decorate([
    (0, typeorm_1.Entity)('movieshowtime')
], Showtime);
