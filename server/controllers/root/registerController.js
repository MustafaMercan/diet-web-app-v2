const rootModel = require('../../models/rootModel');
const bcrypt = require('bcrypt');

const registerController = async(req,res) => {

    try{

        console.log('test');

        const {
            firstName,
            lastName,
            phoneNumber,
            email,
            password
        } = req.body;

        if(!firstName || !lastName || !phoneNumber || !email || !password) return res.status(400).json({message:'All fields are required...'});

        let root = await rootModel.findOne({email});
        if(root) return res.status(400).json({message:'User With The Given Email Already Exist...'});

        root = new rootModel({
            firstName,
            lastName,
            phoneNumber,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        root.password = await bcrypt.hash(root.password, salt);

        await root.save()
        res.status(200).json({message:'The Root created.'})
    } catch(err){

        console.log(err);
        res.status(500).json({ message: 'Error On Server. Please Contact To System Administrator' });


    }

}


module.exports = {
    registerController
}