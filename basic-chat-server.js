// Basic chat server

var net = require('net')
var chatServer = net.createServer()
chatServer.on('connection', function(client) { client.write('Hi!\n'); client.write('Bye!\n');
client.end() })
chatServer.listen(9000)

console.log('Server running at http://127.0.0.1:9000/');

