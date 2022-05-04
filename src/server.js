const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const mysql = require('mysql2/promise');
const app = express();
const { PORT } = require('./config');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', async (req, res) => {
  res.json('Hello');
});

app.all('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

app.listen(PORT, () => console.log('server is running', PORT));
