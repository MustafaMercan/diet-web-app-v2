const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({

    userID:{
        type:String,
        required:true
    },
    bookingTime:{
        type: Date,
        required: true,
    },
    completed:{
        type:Boolean,
        required:true
    }
},{
    timestamps:true
});


const bookingModel = mongoose.model('bookings',bookingSchema);

module.exports = bookingModel;