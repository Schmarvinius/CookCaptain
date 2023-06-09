const {sUser} = require('../../model/user-model.js');
const { errorHandler, bodyerror } = require('../errorHandler.js');

const addUser = async (req,res) => {
    if (!bodyerror(["name", "password", "email"],req.body)) {
        return res.status(400).send(`Some required data wasn't passed`);
    }
    const newUser = new sUser(req.body);
    newUser.save()
    .then((newUser) => {
        console.log('Document saved successfully:', newUser);
        return res.status(200).json(newUser);
    })
    .catch((error) => {
        errorHandler(error,res);
    })
}

module.exports = {
    addUser
};