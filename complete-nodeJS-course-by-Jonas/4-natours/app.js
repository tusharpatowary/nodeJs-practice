const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRouters');
const userRouter = require('./routes/userRouters');

// 1) Middlewares

const app = express();
app.use(express.json());

app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
