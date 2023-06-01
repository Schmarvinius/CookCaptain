const { sUser } = require('../../model/user-model');
const { errorHandler } = require('../errorHandler');

const login = (req, res) => {
    if (!req.body.email) { 
        return res.status(400).send(`No body is passed.`);
    }

    const rEmail = req.body.email;
    const rPassword = req.body.password;

    sUser.find({email: rEmail})
    .then((fetchedUser) => {
        if (!fetchedUser[0].email) {
            return res.status(400).send(`${rEmail} doesn't exist`);
        }

        if (fetchedUser[0].password === rPassword) {
            return res.status(200).send("");
        } else {
            return res.status(400).send(`Password for ${rEmail} don't match.`);
        }
    })
    .catch((err) => {
        errorHandler(err,res);
    })
}

module.exports = {
    login
}