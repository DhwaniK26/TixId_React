"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 4000;
const bodyParser = require('body-parser');
const auth_routes = require('./routes/authRoute');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/testing', auth_routes);
app.listen(PORT, () => {
    console.log("listen to", PORT);
});
