const express = require('express');
const {
    createChat,
    getAllChat

} = require('../../controllers/chat/chatController');


const router = express.Router();


router.post('/create',createChat);
router.get('/get/all',getAllChat);


module.exports = {
    chatRoute: router
}