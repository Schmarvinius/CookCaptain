const { sUser } = require('../../model/user-model');
const { errorHandler, bodyerror } = require('../errorHandler');

const login = (req, res) => {
    if (!bodyerror(["email", "password"],req.body)) {
        return res.status(400).send(`Some required data wasn't passed`);
    }

    const rEmail = req.body.email;
    const rPassword = req.body.password;

    sUser.find({email: rEmail})
    .then((fetchedUser) => {
        if (!fetchedUser[0].email) {
            return res.status(400).send(`${rEmail} doesn't exist`);
        }

        if (fetchedUser[0].password === rPassword) {
            return res.status(200).json(fetchedUser); 
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