const { sUser } = require("../../model/user-model.js");
const { errorHandler, bodyerror } = require("../errorHandler.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addUser = async (req, res) => {
  if (!bodyerror(["name", "password", "email"], req.body)) {
    return res.status(400).send(`Some required data wasn't passed`);
  }

  const { name, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 8);

    // Create a new user
    const newUser = new sUser({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ user_id: newUser._id, email }, "187", {
      expiresIn: "2h",
    });

    // Return the token and user data in the response
    res.status(200).json({ token, user: newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addUser,
};
