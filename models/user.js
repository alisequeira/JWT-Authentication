const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

function setPassword(value) {
    return bcrypt.hashSync(value, 10);
}

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        set: setPassword
    }
});

const model = mongoose.model('User', UserSchema);

module.exports = model;