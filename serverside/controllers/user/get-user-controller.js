const { sUser } = require("../../model/user-model");
const { errorHandler, bodyerror } = require("../errorHandler");

const getUserByID = (req, res) => {
  if (!bodyerror(["id"], req.body)) {
    return res.status(400).send(`Some required data wasn't passed`);
  }

  const userID = req.body.user;
  sUser
    .find({ _id: userID })
    .then((fetchedUser) => {
      if (fetchedUser) {
        return res.status(200).json(fetchedUser);
      } else {
        return res.status(404).send(`User with ID: ${userID} doesn't exist`);
      }
    })
    .catch((err) => {
      errorHandler(err, res);
    });
};

const getUserByEmail = (req, res) => {
  if (!req.user.email) {
    return res.status(400).send(`Some required data wasn't passed`);
  }

  userEmail = req.user.email;
  sUser
    .find({ email: userEmail })
    .then((fetchedUser) => {
      if (fetchedUser[0]) {
        return res.status(200).json(fetchedUser[0]);
      } else {
        return res
          .status(404)
          .send(`User with Email: ${userEmail} doesn't exist`);
      }
    })
    .catch((err) => {
      errorHandler(err, res);
    });
};

module.exports = {
  getUserByID,
  getUserByEmail,
};
