const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    // index.html에 값을 보내라(send 해라)
    res.sendFile(__dirname + '/index.html'); 
});

io.on('connection', function (socket) { 
    // connection 이라는 함수가 실행되면,
    // 해당 메소드를 실행해라
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
});

http.listen(3000, function () { // 3000 : 포트 번호
  console.log('listening on *:3000'); // 해당 메시지를 콘솔에 출력시켜라
});