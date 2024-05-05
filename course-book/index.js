const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { authMiddleware } = require('./middlewares/authMiddleware');

const app = express();

// middleware configured
app.use(express.static('public'));
// ne ni tre razwirenoto api na pro4itane na po nestnati tipove
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(authMiddleware());

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
//app.engine('hbs', handlebars.engine());

app.use(routes);

//optional
mongoose.connection.on('connected', () => console.log('DB is connected'));
mongoose.connection.on('disconnected', () => console.log('DB is disconnected'));
mongoose.connection.on('error', (err) => console.log(err));

//TODO: change db name
mongoose.connect('mongodb://localhost:27017/course-book');

app.listen(5000, () => console.log('App is listening on http://localhost:5000'));