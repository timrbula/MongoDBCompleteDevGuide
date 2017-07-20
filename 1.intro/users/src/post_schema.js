const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        validate: {
            validator: (title) => title.length < 40,
            message: 'Title must NOT be longer than 40 characters'
        }
    }
});

module.exports = PostSchema;
