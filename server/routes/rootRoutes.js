const {userRoute} = require('./User/userRoute');
const {rootRoute} = require('./Root/rootRoute');

const router = require('express').Router();



router.use('/api/user',userRoute)
router.use('/api/root',rootRoute);


module.exports.router = router