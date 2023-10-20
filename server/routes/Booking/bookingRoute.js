const express = require('express');
const {
    getAllBooking,
    createBooking,
    getUsersBooking 
} = require('../../controllers/booking/bookingController')


const router = express.Router();



router.get('/',(req,res) => {
    res.send('welcome to booking route');

})


router.post('/user/booking',getUsersBooking)
router.get('/get/all',getAllBooking);
router.post('/create/new', createBooking)

module.exports = {
    bookingRoute:router
}