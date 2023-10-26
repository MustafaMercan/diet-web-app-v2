const express = require('express')
const {loginController} = require('../../controllers/root/loginController');
const { registerController } = require('../../controllers/root/registerController');
const {getRoots} = require('../../controllers/root/rootController')

const router = express.Router();

//base url = localhost:3000/api/root 

router.get('/',(req,res) => {
    res.send('welcome root api')
})


router.post('/login',loginController)  
router.post('/register',registerController)
router.get('/get/all',getRoots);
module.exports = {
    rootRoute:router
}