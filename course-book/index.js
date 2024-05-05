const express = require('express');

const app = express();

// middleware configured
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(5000, () => console.log('App is listening on http://localhost:5000'));