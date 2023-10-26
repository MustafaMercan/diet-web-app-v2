const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    content:{
        type:String,
    },
    image:{
        type:String
    },
    sender:{
        type:String,
        required:true
    },
    chatID:{
        type:String,
        required:true
    }
},{timestamps:true})

const messageModel = mongoose.model('message',messageSchema);

module.exports = messageModel;