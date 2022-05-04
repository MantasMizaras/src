const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const mysql = require('mysql2/promise');
const app = express();
const { PORT } = require('./config');

app.use(morgan('dev'));
app.listen(PORT, () => console.log('server is running'));
