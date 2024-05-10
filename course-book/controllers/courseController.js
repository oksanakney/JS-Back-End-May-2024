const router = require('express').Router();

const courseService = require('../services/courseService')

router.get('/create', (req, res) => {
    res.render('courses/create');
});

router.post('/create', (req, res) => {
    const courseData = req.body;

    try {
        await courseService.create(req.user._id, courseData);

        res.redirect('/courses')

    } catch(err) {
        res.render('courses/create', { ...courseData, error:getErrorMessage(err)});
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

module.exports = router;