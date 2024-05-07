const mongoose = require('mongoose');

exports.getErrorMessage = (err) => {
    if (err instanceof mongoose.MongooseError) {
        console.log(Object.values(err.errors).at(0));
        return 'asdasd';
    } else if (err instanceof Error) {
        return err.message;
    }
}
