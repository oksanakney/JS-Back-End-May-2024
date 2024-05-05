// modular route, controller to be include here and not in index.js
const router = require('express').Router();

//Add controllers here:
router.get('/', (req, res) => {
    res.send('Hello world');
});

module.exports = router;