const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./post_schema');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required.'],
        validate: {
            validator: (name) => name.length > 2,
            message: 'User name must be longer that two characters.'
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        validate: {
            validator: (email) => email.includes('@'), 
            message: 'Must be a valid email address'
        }
    }
});

UserSchema.virtual('postCount').get(function() {
    return this.posts.length
})

const User = mongoose.model('user', UserSchema);

module.exports = User;