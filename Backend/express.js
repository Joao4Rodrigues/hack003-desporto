const express = require('express');
 const {
     insereUser,
     obtemUser,
     closeConnection
} = require('./data/db');

const server = express();
const PORT = 3333;
