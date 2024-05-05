// modular route, controller to be include here and not in index.js
const router = require('express').Router();

const homeController = require('./controllers/homeController');

router.use(homeController);

module.exports = router;