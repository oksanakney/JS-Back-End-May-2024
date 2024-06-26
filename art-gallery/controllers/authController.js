const router = require('express').Router();

const authService = require('../services/authService');

router.get('/login', (req, res) => {
    res.render('auth/login')
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    
    if(password !== repeatPassword) {
        return res.render('auth/register', {error: 'Password missmatch!'})
    }

    try {
        await authService.create({username, password});
        res.redirect('/login');

    } catch (error) {
        // Add mongoose error mapper
        return res.render('auth/register', {error: 'db error'})
    }  
});

module.exports = router;