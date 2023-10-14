const mongoose = require('mongoose')


const dbConnect = () => {
    const dbURL = process.env.MONGODB_URL;
    console.log(dbURL)
    try{
        mongoose.connect(dbURL)
        .then(() => console.log('mongodb connected...'));

    }catch(err){
        console.log(err);
    }
}

module.exports = dbConnect;

