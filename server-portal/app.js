// app.js
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

const app = express();

app.use(cors({
  origin: [
    'https://portalnetwork.netlify.app', // твой фронтовый домен
    'http://localhost:3000',             // для разработки
  ],
  credentials: true, // если используешь куки/авторизацию
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Раздавать статические файлы из папки 'uploads'
app.use('/uploads', express.static('uploads'));

app.use('/api', require('./routes'));

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(500).json({ error: 'Internal Server Error' }); // <-- Заменили render на json
});


module.exports = app;
