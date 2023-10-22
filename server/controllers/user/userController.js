const userModel = require('../../models/userModel.js');

const getAllUser = async (req, res) => {
    try {
        const users = await userModel.find({}, {features: 0, password: 0 });
        if (users) {
            return res.status(200).json({
                users
            });
        }
        
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Error On Server. Please Contact To System Administrator' });
    }
}

const getUser = async(req,res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findById(id, {password: 0 });
        if (user) {
            return res.status(200).json({
                user
            });
        }
        
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Error On Server. Please Contact To System Administrator' });
    }
}
module.exports = {
    getAllUser,
    getUser
}