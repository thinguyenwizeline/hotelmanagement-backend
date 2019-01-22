const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const roomRouters = require('./api/routes/rooms');
const customerRouters = require('./api/routes/customers');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/rooms',roomRouters);
app.use('/customers',customerRouters);

app.use((req,res,next) =>{
    const error = new Error('Not found');
    error.status(404);
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;