const userModel = require('../../models/userModel.js');
const bcrypt = require('bcrypt')

const registerController = async(req,res) => {
    

    try{
        const {
            firstName,
            lastName,
            phoneNumber,
            email,
            password,
        } = req.body;

        let user = await userModel.findOne({email});
        console.log(user)
        if(user) return res.status(400).json({message:'User With The Given Email Already Exist...'});
        if(!firstName || !lastName || !phoneNumber || !email || !password) return res.status(400).json({message:'All fields are required...'});

        user = new userModel({
            firstName,
            lastName,
            phoneNumber,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt);

        await user.save();
        res.status(200).json({message:'The user created.'})
    }catch(err){
        console.log(err);
    }




}



module.exports = {
    registerController,
}