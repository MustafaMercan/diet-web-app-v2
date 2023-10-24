const { Server } = require('socket.io');


module.exports = (server) => {



    const io = new Server(server, {
      cors: {
        origin: "http://localhost:5173",
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
      }
    });



  
    io.on('connection', (socket) => {
      console.log(socket.id);
      // Diğer socket işlemleri burada eklenebilir
      require('./chatSocket')(socket);
    });





  };
