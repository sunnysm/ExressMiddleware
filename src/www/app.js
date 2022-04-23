const express = require('express');
const logger = require('morgan');
const userRouter = require('../routes/users');
const serverHealthRouter = require('../routes/serverHealth');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', serverHealthRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.info(`App listening on port ${PORT}`);
});

module.exports = app;
