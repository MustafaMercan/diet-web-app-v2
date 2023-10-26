const {userRoute} = require('./User/userRoute');
const {rootRoute} = require('./Root/rootRoute');
const {bookingRoute} = require('./Booking/bookingRoute')
const {graphRoute} = require('./Graph/graphRoute');
const {chatRoute} = require('./Chat/chatRoute');
const {messageRoute} = require('./Message/messageRoute');
const router = require('express').Router();



router.use('/api/graph',graphRoute)
router.use('/api/user',userRoute)
router.use('/api/root',rootRoute);
router.use('/api/booking',bookingRoute);
router.use('/api/chat',chatRoute);
router.use('/api/message',messageRoute);

module.exports.router = router