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
        return res.status(400).send(`${rEmail} doesn't exist`);
      }

      const isPasswordCorrect = await bcrypt.compare(
        rPassword,
        fetchedUser[0].password
      );

      const email = req.body.email;
      if (isPasswordCorrect) {
        // Generate JWT token
        const fetchedToken = jwt.sign(
          { user_id: fetchedUser[0]._id, email },
          "187",
          {
            expiresIn: "2h",
          }
        );

        // Return the token and user data in the response
        res.status(200).json({ user: fetchedUser[0], token: fetchedToken });
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
