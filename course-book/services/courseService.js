const Course = require('../models/Course');
const User = require('../models/User')

exports.create = async (userId, courseData) => {
    const createdCourse = await Course.create({
        owner: userId,
        ...courseData
    });

    await User.findByIdAndUpdate(userId, { $push: { createdCourses: createdCourese._id } })
}

