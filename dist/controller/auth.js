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
exports.loginHandler = exports.signupHandler = void 0;
const { jwtverifyToken, generateToken } = require("../middleware/jwtauth");
const db_1 = require("../db");
const user_1 = require("../entities/user");
const class_validator_1 = require("class-validator");
const signupHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, phonenumber, email } = req.body;
    const userRepository = db_1.AppDataSource.getRepository(user_1.User);
    try {
        const user = new user_1.User();
        user.email = email;
        user.phonenumber = phonenumber;
        user.username = username;
        const errors = yield (0, class_validator_1.validate)(user);
        if (errors.length > 0) {
            return res.status(400).json({
                status: 0,
                message: "Validation failed",
                errors: errors.map(error => ({
                    property: error.property,
                    constraints: error.constraints,
                })),
            });
        }
        const findData = yield userRepository.findOneBy({ phonenumber });
        if (findData) {
            res.status(400).json({
                status: 0,
                message: "Phone number already exists."
            });
        }
        const users = yield userRepository.insert({ username, phonenumber, email });
        if (users) {
            const data = yield userRepository.findOneBy({ userid: users.identifiers[0].userid });
            const payload = {
                userid: data === null || data === void 0 ? void 0 : data.userid,
                phonenumber: data === null || data === void 0 ? void 0 : data.phonenumber
            };
            const token = generateToken(payload);
            res.status(200).json({
                allusers: data,
                status: 1,
                message: "Signup Successfull",
                token: token
            });
        }
        else {
            res.status(400).json({
                status: 0,
                message: "Signup Failed"
            });
        }
    }
    catch (error) {
        res.status(500).json({
            status: 0,
            message: 'something went wrong'
        });
    }
});
exports.signupHandler = signupHandler;
const loginHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phonenumber } = req.body;
    const userRepository = db_1.AppDataSource.getRepository(user_1.User);
    try {
        if (phonenumber == " ") {
            return res.status(500).json({
                status: 0,
                message: 'Enter Phone number'
            });
        }
        const checkuser = yield userRepository.findOneBy({ phonenumber });
        if (checkuser) {
            const payload = {
                userid: checkuser === null || checkuser === void 0 ? void 0 : checkuser.userid,
                phonenumber: checkuser === null || checkuser === void 0 ? void 0 : checkuser.phonenumber
            };
            const token = generateToken(payload);
            return res.status(500).json({
                status: 1,
                message: "Login Sucessfull",
                token: token
            });
        }
        else {
            res.status(500).json({
                status: 0,
                message: 'Login Failed'
            });
        }
    }
    catch (error) {
        console.log("we got error: ", error);
    }
});
exports.loginHandler = loginHandler;
