const { sUser } = require('../../model/user-model');
const { errorHandler } = require('../errorHandler');

const deleteUser = (req,res) => {
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
    deleteRecipe
}