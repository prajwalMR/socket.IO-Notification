var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 5000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});



io.on('connection', function(socket){
	socket.join('user1:user2');
  	socket.on('chat message', function(msg){
	  	console.log(msg);
	  	io.to('user1:user2').emit('chat message' , msg);
  	});

  	socket.on('notif' , function(msg){
  		io.to('user1:user2').emit('notif' , msg);
  	});
});


http.listen(port, function(){
  console.log('listening on *:' + port );
});
    