"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const bodyParser = require('body-parser');
const auth_routes = require('./routes/authRoute');
const cors = require('cors');
const db_1 = require("./db");
const PORT = 4000;
db_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    // Start the server after database initialization
    app.listen(8000, () => {
        console.log("Server is running on port ", 8000);
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/testing', auth_routes);
app.listen(PORT, () => {
    console.log("listen to", PORT);
});
