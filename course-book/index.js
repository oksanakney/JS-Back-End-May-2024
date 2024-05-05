const express = require('express');

const routes = require('./routes');

const app = express();

// middleware configured
app.use(express.static('public'));
// ne ni tre razwirenoto api na pro4itane na po nestnati tipove
app.use(express.urlencoded({extended: false}));

app.use(routes);

app.listen(5000, () => console.log('App is listening on http://localhost:5000'));