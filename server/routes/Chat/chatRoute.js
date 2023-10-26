const express = require('express');
const {
    createChat,
    getAllChat,
    getChat

} = require('../../controllers/chat/chatController');


const router = express.Router();


router.post('/create',createChat);
router.get('/get/all',getAllChat);
router.get('/get/:id',getChat);


module.exports = {
    chatRoute: router
}