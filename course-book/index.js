const express = require('express');
const handlebars = require('express-handlebars');

const routes = require('./routes');

const app = express();

// middleware configured
app.use(express.static('public'));
// ne ni tre razwirenoto api na pro4itane na po nestnati tipove
app.use(express.urlencoded({extended: false}));

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
//app.engine('hbs', handlebars.engine());

app.use(routes);

app.listen(5000, () => console.log('App is listening on http://localhost:5000'));