const graphModel = require('../../models/graphModel');
const userModel = require('../../models/userModel');

const createGraph = async(req,res) => {

    const {graphInformations} = req.body;
    const userID = req.params.id;

    if(!userID || !graphInformations) return res.status(400).json({ message: 'All fields are required.' });

    const user = await userModel.findById(userID);

    if(!user) return res.status(400).json({ message: 'User cannot found' });

    console.log(graphInformations)
    const graph = await graphModel.create({
        title:{
            text:graphInformations.title
        },
        xAxis:{
            name:graphInformations.xAxis,
        },
        yAxis:{
            name:graphInformations.yAxis,
        },
        userID:user?._id
    })

    if(graph) await graph.save();
    res.status(200).json({message:'The graph created.'})
}
const getGraph = async(req,res) => {

    const userID = req.params.id;
    
    if(!userID) return res.status(400).json({ message: 'All fields are required.' });

    const user = await userModel.findById(userID);
    
    if(!user) return res.status(400).json({ message: 'User cannot found' });

    const graphs = await graphModel.find({userID:userID});

    if(graphs) res.status(200).json({data:graphs})

    //console.log(graphs);
}

const updateGraph = async(req,res) => {

    const {updateGraph} = req.body;
    


    if(!updateGraph)return res.status(400).json({ message: 'All fields are required.' });
    const graphID = updateGraph?._id;

    console.log(graphID,updateGraph)

    const updatedGraph = await graphModel.findByIdAndUpdate(graphID,updateGraph,{new:true});
    if(!updatedGraph) return res.status(500).json({ message: 'Error On Server. Please Contact To System Administrator' });
    res.status(200).json({response:"Booking Updated"});
}

const deleteGraph = async(req,res) => {

    console.log('test');
    const id = req.params.id;

    if(!id) return res.status(400).json({ message: 'All fields are required.' });

    const deletedGraph = await graphModel.findByIdAndDelete(id);
    if(!deletedGraph) return res.status(400).json({ message: 'Graph there is no' });

    res.status(200).json({message:'Graph was deleted.'});

}




module.exports = {
    createGraph,
    getGraph,
    updateGraph,
    deleteGraph
}












