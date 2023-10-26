const express = require('express');

const {
    createMessage,
    getMessages
} = require('../../controllers/message/messageController');


const router = express.Router();

router.get('/',(req,res) => {
    res.send('sa')
})

router.post('/create/:id',createMessage);
router.get('/get/:id',getMessages);



module.exports ={
    messageRoute: router
}