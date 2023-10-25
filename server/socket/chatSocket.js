module.exports = (socket) => {

  socket.on('userInformation',(data) => {
    console.log('connect',data.user._id);
  })

  socket.on('disconnect',(socket) => {
    console.log('disconnect process.');
  })


};