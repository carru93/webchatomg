var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname,  "public")));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/chat', function(req, res){
	res.sendFile(path.join(__dirname, "chat.html"));
});

var server = http.listen(8000, function(req, res){
	var host = server.address().address;
	var port = server.address().port;
	console.log("server in ascolto su %s%s", host, port);
});

io.on('connection', function(){
	console.log('Nuovo utente connesso');
	io.on('disconnect', function(){
		console.log('Utente disconnesso');
	});
});
