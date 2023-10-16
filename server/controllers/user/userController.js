const userModel = require('../../models/userModel.js');

const getAllUser = async (req, res) => {
    console.log('sa')
    const users = await userModel.find({}, { _id: 0 , features: 0, password: 0});
    res.status(200).json({
        users
    })
}
module.exports = {
    getAllUser
}