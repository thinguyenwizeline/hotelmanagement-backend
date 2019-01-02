const express = require('express');
const app = express();

const roomRouters = require('./api/routes/rooms');
const customerRouters = require('./api/routes/customers');

app.use('/rooms',roomRouters);
app.use('/customers',customerRouters);

module.exports = app;