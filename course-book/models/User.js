const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    createdCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }],
    signedUpCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }]
});

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

// userSchema.virtual('rePassword')
// //slu4va se pri sazdavane na samata instancia, ne e validacia na mongoose, 
// //we izgarmi po-rano otkolkoto validacia na modela -> ako pravim rali4en register
// //we polzvam userSchema.virtual('errors');
//     .set(function(value) {
//         if (value !== this.password) {
//             throw new Error('Password missmatch');
//         }
//     });

const User = mongoose.model('User', userSchema);

module.exports = User;