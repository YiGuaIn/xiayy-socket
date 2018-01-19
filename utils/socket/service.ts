let socket = require('socket.io')

enum ChatType {
    GET = 1 << 0, // 接收到
    CHAR = 1 << 1, // 聊天
    SINGLE = 1 << 2 // 私聊
}

function runSocket (app : any) {
    if(!app) return;
    let io = new socket(app);
    io.on('connection', (socket:any) => {
        socket.on('user add', (m:any) => {
            socket.emit('user join', {username: 'yi', msg: 'wo lai liao'})
        })
        socket.on('new message', (m:any) => {
            socket.broadcast.emit('new message', {username: 'yi', msg: m})
        })
        socket.on(ChatType.SINGLE, (m:any) => {
            console.log(m)
        })
    })
    io.on('disconnect', (socket:any) => {
        console.log('disconnect....')
    })
    io.on('connect_error', (socket:any) => {
        console.log(socket)
    })
}

export default runSocket;