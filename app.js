const express = require('express');
const app = express();
const morgan = require('morgan');

const roomRouters = require('./api/routes/rooms');
const customerRouters = require('./api/routes/customers');

app.use(morgan('dev'));

app.use('/rooms',roomRouters);
app.use('/customers',customerRouters);

app.use((req,res,next) =>{
    const error = new Error('Not found');
    error.status(404);
    next(error);
});

module.exports = app;