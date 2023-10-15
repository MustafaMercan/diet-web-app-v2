const userModel = require('../../models/userModel');
const bcrypt = require('bcrypt');

// error -> message
// success -> data

//route -> /user/login
const loginController = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: 'All fields are required.' });

    console.log(`Email -> ${email}  Password -> ${password}`);

    //const user = await userModel.findOne({email});


    userModel.findOne({ email })
        .then((user) => {
            if (user) {
                try {
                    bcrypt.compare(password, user.password)
                        .then((result) => {
                            console.log('31'); 
                            if (result) res.status(200).json({
                                user: {
                                    _id: user._id,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    phoneNumber: user.phoneNumber,
                                    email: user.email,
                                    features:user.features,
                                }
                            })
                            else 
                            {
                                res.status(400).json({ message: "Email or Password is Wrong" });
                            }
                        })
                } catch (err) {
                    res.status(500).json({ message: 'Error On Server. Please Contact To System Administrator' });
                }
            }
            else res.status(400).json({ message: "Email or Password is Wrong" });
        })
}
module.exports = {
    loginController
}