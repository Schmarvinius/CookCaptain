const { sUser } = require("../../model/user-model");
const { errorHandler, bodyerror } = require("../errorHandler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = (req, res) => {
  if (!bodyerror(["email", "password"], req.body)) {
    return res.status(400).send(`Some required data wasn't passed`);
  }

  const rEmail = req.body.email;
  const rPassword = req.body.password;

  sUser
    .find({ email: rEmail })
    .then(async (fetchedUser) => {
      if (!fetchedUser[0].email) {
        jwt.sign({ name: fetchedUser.name }, { email: fetchedUser.email });
        return res.status(400).send(`${rEmail} doesn't exist`);
      }

      const isPasswordCorrect = await bcrypt.compare(
        rPassword,
        fetchedUser[0].password
      );
      if (isPasswordCorrect) {
        return res.status(200).json(fetchedUser);
      } else {
        return res.status(400).send(`Password for ${rEmail} don't match.`);
      }
    })
    .catch((err) => {
      errorHandler(err, res);
    });
};

module.exports = {
  login,
};
