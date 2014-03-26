// Basic chat server
// Third iteration	


var net = require('net')
var chatServer = net.createServer(), clientList = []
chatServer.on('connection', function(client) { client.write('Hi!\n');
clientList.push(client)
client.on('data', function(data) { for(var i=0;i<clientList.length;i+=1) {
//write this data to all clients
clientList[i].write(data) }
}) })
chatServer.listen(9000)

console.log('Server running at http://127.0.0.1:9000/');
