const rootModel = require('../../models/rootModel');
const getRoots = async(req,res) => {

    const roots = await rootModel.find({});
    if(!roots) return res.status(400).json({ message: "Contact with system admin." });
    res.status(200).json(roots);
}



module.exports = {
    getRoots
}