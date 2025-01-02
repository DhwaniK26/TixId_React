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
exports.Screendata = void 0;
const typeorm_1 = require("typeorm");
const theatredata_1 = require("./theatredata");
const showtime_1 = require("./showtime");
const seats_1 = require("./seats");
let Screendata = class Screendata {
};
exports.Screendata = Screendata;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Screendata.prototype, "screenid", void 0);
__decorate([
    (0, typeorm_1.Column)() // Maps to a column in the database
    ,
    (0, typeorm_1.ManyToOne)(() => theatredata_1.Theatredata, (screen) => screen.screen),
    (0, typeorm_1.JoinColumn)({ name: "theatreid" }),
    __metadata("design:type", String)
], Screendata.prototype, "theatreid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Screendata.prototype, "screenname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Screendata.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => showtime_1.Showtime, (showtime) => showtime.screenid),
    __metadata("design:type", Array)
], Screendata.prototype, "showtimes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => seats_1.Seats, (seat) => seat.screenid),
    __metadata("design:type", Array)
], Screendata.prototype, "seats", void 0);
exports.Screendata = Screendata = __decorate([
    (0, typeorm_1.Entity)('screendata')
], Screendata);
