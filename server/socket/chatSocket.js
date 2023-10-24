module.exports = (socket) => {
    socket.on('user', (data) => {
      console.log(data);
    });

    socket.on('test',(data) => {
        console.log(data)
    })
  
    socket.on('disconnect', () => {
      console.log('disconnect');
    });
  };