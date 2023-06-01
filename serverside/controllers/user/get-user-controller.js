const { sUser } = require('../../model/user-model');
const { errorHandler } = require('../errorHandler');

const getUserByID = (req,res) => { 
    userID = req.body.id;
    sUser.find({_id: userID})
    .then((fetchedUser) => {
        if (fetchedUser) {
            return res.status(200).json(fetchedUser);
        } else {
            return res.status(404).send(`User with ID: ${userID} doesn't exist`);
        }
    })
    .catch((err) => {
        errorHandler(err,res);
    });
}

const getUserByEmail = (req,res) => { 
    userEmail = req.body.email;
    sUser.find({email: userEmail})
    .then((fetchedUser) => {
        if (fetchedUser) {
            return res.status(200).json(fetchedUser);
        } else {
            return res.status(404).send(`User with Email: ${userEmail} doesn't exist`);
        }
    })
    .catch((err) => {
        errorHandler(err,res);
    });
}

module.exports = {
    getUserByID,
    getUserByEmail
}