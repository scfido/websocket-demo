var app = require('express')();
var server = require('http').Server(app);
var expressWs = require('express-ws')(app);

//var wss = new WebSocket.Server({ port: 8080 });

// wss.on('connection', function connection(ws) {
//     console.log('server: receive connection.');
    
//     ws.on('message', function incoming(message) {
//         console.log('server: received: %s', message);
//     });

//     ws.send('world');
// });

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.ws('/', function(ws, req) {
    ws.on('message', function(message) {
        console.log('server: received: %s', message);
    });

    ws.send('world');

  });

app.listen(3000);