const express = require('express');
const {
    createGraph,
    getGraph,
    updateGraph,
    deleteGraph } = require('../../controllers/graph/graphController')




const router = express.Router();


router.post('/create/:id', createGraph)
router.get('/get/:id', getGraph);
router.put('/update', updateGraph)
router.delete('/delete/:id',deleteGraph);


module.exports = {
    graphRoute: router
}