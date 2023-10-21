const express = require('express');
const {
    getAllBooking,
    createBooking,
    getUsersBooking,
    deleteUserBooking,
    updateBooking
} = require('../../controllers/booking/bookingController')


const router = express.Router();



router.get('/',(req,res) => {
    res.send('welcome to booking route');

})


router.delete('/delete/:id',deleteUserBooking);
router.post('/user/booking',getUsersBooking)
router.get('/get/all',getAllBooking);
router.post('/create/new', createBooking)


router.put('/update/:id',updateBooking)

module.exports = { 
    bookingRoute:router
}