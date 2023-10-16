const rootModel = require('../../models/rootModel');
const bcrypt = require('bcrypt');


const loginController = async(req,res) => {

    console.log('Root Login Controller was Worked')

    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({message:'All fields are required.'})


    rootModel.findOne({email})
    .then((root) => {
        if(root) {
            try{
                bcrypt.compare(password, root.password)
                .then((result) => {
                    if(result) res.status(200).json({
                        _id:root._id,
                        firstName:root.firstName,
                        lastName: root.lastName,
                        phoneNumber: root.phoneNumber,
                        email: root.email
                    })
                    else res.status(400).json({ message: "Email or Password is Wrong" });
                })

            }catch(err){
                console.log(err);
                res.status(500).json({ message: 'Error On Server. Please Contact To System Administrator' });
            }

        }
        else res.status(400).json({ message: "Email or Password is Wrong" });
    })
}


module.exports = {
    loginController
}