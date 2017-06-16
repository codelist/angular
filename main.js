var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
	res.rander('index.html');
});

app.listen(80, function(){
	console.log("Server started");
});

app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/close.png">')
})
app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});