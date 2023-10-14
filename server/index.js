const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const {router} = require('./routes/rootRoutes.js')

dotenv.config();

const dbConnect = require('./db');
dbConnect();//connect atlasDB

    const PORT = process.env.PORT || 3000;


app.use(cors()); // cors config
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',router);











app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})