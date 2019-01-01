const express = require('express');
const app = express();


app.use((res, req, next) => {
    res.status(200).json({
        message: 'It works!'
    });
});

module.exports = app;