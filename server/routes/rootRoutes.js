const {userRoute} = require('./Users/userRoute');

const router = require('express').Router();



router.use('/api/user',userRoute)


module.exports.router = router