const {sUser} = require('../../model/user-model');
const {errorHandler} = require('../errorHandler');

const login = (req, res) => {
    const rEmail = req.body.email;
    const rPassword = req.body.password;
    console.log(rPassword);

    sUser.find({email: rEmail})
    .then((fetchedUser) => {
        console.log(fetchedUser);
        if (fetchedUser[0].password === rPassword) {
            return res.status(200).send("");
        } else {
            return res.status(400).send(`Password for ${rEmail} don't match.`)
        }
    })
    .catch((err) => {
        errorHandler(err,res);
    })
}

module.exports = {
    login
}