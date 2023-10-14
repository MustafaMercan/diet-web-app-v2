const express = require('express');
const { registerController } = require('../../controllers/user/registerController');
const router = express.Router();


//base url = localhost:3000/api/user
router.get('/',(req,res) => {
    res.send('Welcome users api');
})

router.post('/register',registerController)


module.exports = {
    userRoute:router
}