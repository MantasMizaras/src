const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('./dbsetup');

const petsRoutes = express.Router();

module.exports = petsRoutes;
