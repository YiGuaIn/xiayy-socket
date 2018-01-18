let socket = require('socket.io');

let chatType = {
    GET: 0, // 接收到
    CHAR : 1, // 聊天
    SINGLE: 2 // 私聊
}

module.exports = function runSocket(app) {
    if(!app) return;
    let io = socket(app);

    io.on('connection', (socket) => {
        [...Object.keys(chatType)].map(_ => {
            socket.on(chatType[_], (m) => {
                console.log(m)
            })
        })
    })
    io.on('disconnect', (socket) => {
        
    })
}