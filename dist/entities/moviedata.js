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
exports.Moviedata = void 0;
const typeorm_1 = require("typeorm");
const showtime_1 = require("./showtime");
let Moviedata = class Moviedata {
};
exports.Moviedata = Moviedata;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Moviedata.prototype, "movieid", void 0);
__decorate([
    (0, typeorm_1.Column)() // Maps to a column in the database
    ,
    __metadata("design:type", String)
], Moviedata.prototype, "moviename", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Moviedata.prototype, "director", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Moviedata.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Moviedata.prototype, "agerating", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Moviedata.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Moviedata.prototype, "movieposter", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => showtime_1.Showtime, (showtime) => showtime.movieid),
    __metadata("design:type", Array)
], Moviedata.prototype, "showtimes", void 0);
exports.Moviedata = Moviedata = __decorate([
    (0, typeorm_1.Entity)('moviedata')
], Moviedata);
