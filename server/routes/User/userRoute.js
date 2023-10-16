const express = require('express');
const { registerController } = require('../../controllers/user/registerController');
const { loginController } = require('../../controllers/user/loginController');
const { getAllUser } = require('../../controllers/user/userController');
const router = express.Router();


//base url = localhost:3000/api/user
router.get('/',(req,res) => {
    res.send('Welcome users api');
})

router.post('/register',registerController)
router.post('/login',loginController);


router.get('/all/get',getAllUser)


module.exports = {
    userRoute:router
}