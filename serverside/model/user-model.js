const { ServerDescription } = require('mongodb');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date
    },
    updateDate: {
        type: Date
    },
    likedRecipes: [{
        unique: false,
        type: String,
    }],
    createdRecipes: [{
        type: String
    }]
}, {collection: 'User'});

const sUser = mongoose.model('User', userSchema);
module.exports = {sUser};