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

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({
            
        });
    }
});

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