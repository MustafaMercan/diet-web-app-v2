const bookingModel = require('../../models/bookingModel');
const userModel = require('../../models/userModel');

const getAllBookingController = async(req,res) => {
    try{
        const bookings = await bookingModel.find({});
        if(bookings){
            return res.status(200).json({
                bookings
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Error On Server. Please Contact To System Administrator'})
    }
}


const createBookingController = async(req,res) => {

    try{

        const{
            bookingTime,
            _id
        } = req.body;

        let booking = await bookingModel.findOne({bookingTime});
        if(!bookingTime || !_id) return res.status(400).json({message:'All fields are required...'});
        if(booking) return res.status(400).json({message:'The selected day is full. Please choose a different day...'});

        const user = await userModel.findById(_id);
        if(!user) return res.status(400).json({message:'Please Login The System.'});



        booking = new bookingModel({
            userID : _id,
            completed:false,
            bookingTime
        });

        await booking.save();
        res.status(200).json({message:'Reservation was created.'});

    }catch(err){
        console.log(err);
        res.status(500).json({message:'Error On Server. Please Contact To System Administrator'})
    }

}

const getUsersBooking = async(req,res) => {

    try{
        const {userID} = req.body;
        if(!userID) return res.status(400).json({message:"User Cannot Find."});

        console.log(userID)
        const user = await userModel.findById(userID);
        if(!user) return res.status(400).json({message:"User Cannot Find."})

        const bookings = await bookingModel.find({
            userID
        });

        res.status(200).json({bookings});

    }catch(err){

        console.log(err);
        res.status(500).json({ message: 'Error On Server. Please Contact To System Administrator' });
    }

}

module.exports = {
    getUsersBooking,
}

module.exports = {
    getAllBooking:getAllBookingController,
    createBooking:createBookingController,
    getUsersBooking
    
}