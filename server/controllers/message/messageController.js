const messageModel = require('../../models/messageModel');
const chatModel = require('../../models/chatModel')

const createMessage = async(req,res) => {

    const {content,image,sender} = req.body;
    const chatID = req.params.id;
    

    if(!content && !image) return res.status(400).json({ message: 'Plese contact system admin' });
    if(!chatID) return res.status(400).json({ message: 'Plese contact system admin' });
    if(!sender) return res.status(400).json({ message: 'Plese contact system admin' }); 
    
    const chat = await chatModel.findById(chatID);
    
    if(!chat) return res.status(400).json({ message: 'Plese contact system admin' });


    
    const newMessage = await messageModel.create({
        content,
        image,
        chatID,
        sender
    });
    if(!newMessage) return res.status(400).json({ message: 'Plese contact system admin' });
    await newMessage.save();
    res.status(200).json({message:'The Message was created.'})
    
}


const getMessages = async(req,res) => {
    const chatID = req.params.id; 
    
    if(!chatID ) return res.status(400).json({ message: 'Plese contact system admin' });
    
    const chat = await chatModel.findById(chatID);
    
    if(!chat) return res.status(400).json({ message: 'Plese contact system admin' });

    const messages = await messageModel.find({chatID})
    
    if(!messages) return res.status(400).json({ message: 'Plese contact system admin' });
    res.status(200).json(messages);
}

module.exports = {
    createMessage,
    getMessages

}