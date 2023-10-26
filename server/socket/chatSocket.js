module.exports = (io,socket,users) => {

  socket.on('join',(data) => {
    const {user} = data;
    if(user?._id){
      users[socket.id] = user;
      socket.join(user?._id)
    }
  })

  socket.on('private',({roomId,messageInput}) => {

    io.to(roomId).emit('private',messageInput)


  })


 


  socket.on('disconnect', () => {

    const disconnectedUserId = Object.keys(users).find((socketId => 
      socketId == socket.id))
      

      if (disconnectedUserId) {
        // Kullanıcıyı users nesnesinden kaldır
        const deletedUser = users[disconnectedUserId];
        delete users[disconnectedUserId];
        console.log(`Kullanıcı ${deletedUser.firstName} bağlantısı koptu.`);
      }
  });






};