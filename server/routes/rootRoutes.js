const {userRoute} = require('./User/userRoute');
const {rootRoute} = require('./Root/rootRoute');
const {bookingRoute} = require('./Booking/bookingRoute')
const router = require('express').Router();



router.use('/api/user',userRoute)
router.use('/api/root',rootRoute);
router.use('/api/booking',bookingRoute);


module.exports.router = router