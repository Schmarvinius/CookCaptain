const { ServerDescription } = require('mongodb');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
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
        type: String,
    }],
    createdRecipes: [{
        type: String
    }]
}, {collection: 'User'});

const sUser = mongoose.model('User', userSchema);
module.exports = {sUser};