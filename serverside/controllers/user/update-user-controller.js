const { sUser } = require('../../model/user-model');
const { errorHandler } = require('../errorHandler');

const updateUser = async (req,res) => { 
    const { userID, ...updateData } = req.body;
    console.log(userID);
    console.log(updateData);
    await sUser.findByIdAndUpdate({_id: userID}, updateData, { new: true})
    .then((updatedUser) => {
        if (updatedUser) {
            console.log('User updated:', updatedUser);
            res.status(200).json(updatedUser);
        } else {
            console.log('User not found.');
            res.status(404).json({ error: 'User not found' });
        }
    })
    .catch((err) => {
        errorHandler(err,res);
    });
}

module.exports = {
    updateUser
}