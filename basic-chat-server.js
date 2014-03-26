// Basic chat server
//Second iteration	


var net = require('net')
var chatServer = net.createServer()

chatServer.on('connection', function(client) { client.write('Hi!\n');
client.on('data', function(data) {
console.log(data) })
})
chatServer.listen(9000)

console.log('Server running at http://127.0.0.1:9000/');
