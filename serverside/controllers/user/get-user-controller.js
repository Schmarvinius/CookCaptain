const { sUser } = require('../../model/user-model');
const { errorHandler } = require('../errorHandler');

const getUserByID = (req,res) => { 
    userID = req.body.userID;
    console.log(userID);
    sUser.findById(userID)
    .then((fetchedUser) => {
        if (fetchedUser) {
            return res.status(200).json(fetchedUser);
        } else {
            return res.status(404).send(`USer with ID: ${userID} doesn't exist`);
        }
    })
    .catch((err) => {
        errorHandler(err,res);
    });
}

const getUserByEmail = (req,res) => { 
    userEmail = req.body.author;
    console.log(userEmail);
    sUser.findById(userEmail)
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