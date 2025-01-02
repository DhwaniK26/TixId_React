"use strict";
const express = require('express');
const router = express.Router();
const { signupHandler, loginHandler } = require("../controller/auth");
const { bookmovies } = require('../controller/home');
const { comingsoonMovies } = require('../controller/home');
const { choosesch } = require('../controller/choosesch');
const { displaySeats } = require('../controller/seatsselect');
router.route('/').post(signupHandler);
router.route('/login').post(loginHandler);
router.route('/home').get(bookmovies);
router.route('/home/csoon').get(comingsoonMovies);
router.route('/choosesch').post(choosesch);
router.route('/seats').post(displaySeats);
module.exports = router;