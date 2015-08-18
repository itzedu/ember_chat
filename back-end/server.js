var io = require('socket.io')(8080);
var messages = [];
io.on('connection', function(socket) {
  socket.on('getLog', function() {
    socket.emit('chatLog', { chatLog: messages });
  })
  socket.on('message', function(data) {
    var length = messages.length;
    var new_message = {id: length + 1, message: data.message};
    messages.push(new_message);
    io.emit('incomingMessage', new_message);
  })
})