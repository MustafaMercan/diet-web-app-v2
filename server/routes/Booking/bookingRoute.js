const express = require('express');
const {getAllBooking,createBooking} = require('../../controllers/booking/bookingController')


const router = express.Router();



router.get('/',(req,res) => {
    res.send('welcome to booking route');

})


router.get('/get/all',getAllBooking);
router.post('/create/new', createBooking)

module.exports = {
    bookingRoute:router
}