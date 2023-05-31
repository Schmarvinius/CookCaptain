const express = require('express');
const { addUser} = require('../controllers/user/create-user-controller');
const { getUserByID, getUserByEmail } = require('../controllers/user/get-user-controller');
const { deleteUser } = require('../controllers/user/delete-user-controller');
const { updateUser } = require('../controllers/user/update-user-controller')

const router = express.Router();
router.post('/create', addUser);
router.get('/Id',getUserByID);
router.get('/Email',getUserByEmail);
router.delete('/',deleteUser);
router.post('/update',updateUser);


module.exports = router;
