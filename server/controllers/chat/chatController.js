const chatModel = require('../../models/chatModel');

const createChat = async(req,res) => {

    const {members} = req.body;
    try{
        const newChat = new chatModel({members});
        console.log(newChat);
        if(!newChat) return res.status(400).json({message:'Contact with system administor...'});
         
        await newChat.save();
        
        res.status(200).json({message:'The chat created'})

    }catch(err){
        console.log(err);
        return res.status(400).json({message:'Contact with system administor...'});
    }
}
const getAllChat = async(req,res) => {
    try{
        const chats = await chatModel.find({});
        if(!chats) return res.status(400).json({message:'There is no chat.'});

        res.status(200).json({chats})

    }catch(err){
        console.log(err);
        return res.status(400).json({message:'Contact with system administor...'});

    }

}
module.exports = {
    createChat,
    getAllChat
}