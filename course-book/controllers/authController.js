const router = require('express').Router();

const authService = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        const token = await authService.register(userData);

        res.cookie('auth', token);
        res.redirect('/');
    } catch(err) {
        res.render('auth/register', {error: getErrorMessage(err)});
    }    
});
function getErrorMessage(err) {
    console.log(err);
    
    if (err.errors) {
        let errorsArr = Object.keys(err.errors);
        if (errorsArr.length > 0) {
            return err.errors[errorsArr[0]];
        }
    }
    
    return err.message;
}


router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const loginData = req.body;

    const token = await authService.login(loginData);

    res.cookie('auth', token);
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    // at the moment we cant invalidate token
    res.redirect('/');
});

module.exports = router;