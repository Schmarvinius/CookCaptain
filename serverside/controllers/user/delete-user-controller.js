const { sUser } = require('../../model/user-model');
const { errorHandler, bodyerror } = require('../errorHandler');

const deleteUser = (req,res) => {
    if (!bodyerror(["userID"],req.body)) {
        return res.status(400).send(`Some required data wasn't passed`);
    }

    userID = req.body.userID
    console.log(userID);
    sUser.findByIdAndRemove(userID)
    .then((deletedUser) => {
        if (deleteUser) {
            return res.status(200).send(`User with ID: ${userID} found and removed`);
        } else {
            return res.status(404).send(`User with ID: ${userID} doesn't exist`);
        } 
    })
    .catch((err) => {
        errorHandler(err,res);
    });
}

module.exports = {
    deleteUser
}