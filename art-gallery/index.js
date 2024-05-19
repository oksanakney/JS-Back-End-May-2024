const express = require('express');
const hbs = require('express-handlebars');

const { PORT } = require('./config/env');

const app = express();

//app.engine();

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));