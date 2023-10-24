const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const {createServer} = require('node:http');
const {Server} = require('socket.io');
const dbConnect = require('./db');




const { router } = require('./routes/rootRoutes.js')

dotenv.config();

dbConnect();//connect atlasDB

const PORT = process.env.PORT || 3000;


app.use(cors({
    origin:"http://localhost:5173",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
})); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);


const server = createServer(app);
require('./socket')(server);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})