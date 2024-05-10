const Course = require("../models/Course");

exports.create = (userId, courseData) => {
    return Course.create({
        owner: userId,
        ...courseData
    });
}