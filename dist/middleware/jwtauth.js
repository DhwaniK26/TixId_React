"use strict";
const jwt = require("jsonwebtoken");
const SECRET_KEY = "HELLOWORLD";
const jwtverifyToken = (req, res, next) => {
    //if token does not exist
    const authorization = jwt.header.authorization;
    if (!authorization) {
        res.status(401).json({
            message: "Token not found, please Login"
        });
    }
    const token = jwt.header.authorization.split(" ")[1];
    if (!token) {
        res.status(401).json({
            message: "Unauthorized access"
        });
    }
    try {
        const decodedToken = jwt.verify(token, SECRET_KEY, { expiresIn: 30000 });
        //send this decoded data to server
        req.userpayload = decodedToken;
        next();
    }
    catch (error) {
        console.log("error is:", error);
        res.status(401).json({
            message: "Invalid Token"
        });
    }
};
const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY);
};
module.exports = { jwtverifyToken, generateToken };
