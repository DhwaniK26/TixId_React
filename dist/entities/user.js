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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)() // Automatically generates a unique primary key
    ,
    __metadata("design:type", Number)
], User.prototype, "userid", void 0);
__decorate([
    (0, typeorm_1.Column)() // Maps to a column in the database
    ,
    (0, class_validator_1.MinLength)(2, { message: 'Username must be at least 2 characters long.' }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, class_validator_1.MinLength)(10, { message: 'Phone number should contain at least 10 digits.' }),
    (0, class_validator_1.MaxLength)(10, { message: 'Phone number should contain at most 10 digits.' }),
    __metadata("design:type", String)
], User.prototype, "phonenumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Email is not valid.' }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
