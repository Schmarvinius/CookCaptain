const { sUser } = require('../../model/user-model');
const { errorHandler, bodyerror } = require('../errorHandler');

const updateUser = async (req,res) => { 
    if (!bodyerror(["id", "password", "email"],req.body)) {
        return res.status(400).send(`Some required data wasn't passed`);
    }

    const { id, ...updateData } = req.body;
    
    await sUser.findByIdAndUpdate({_id: id}, updateData, { new: true})
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