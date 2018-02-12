"use strict";
let socket = require('socket.io');
const ChatType = {
    GET: 1, // 接收到
    CHAR: 2, // 聊天
    SINGLE: 3 // 私聊
};

function runSocket (app) {
    if(!app) {return;}
    let io = new socket(app);
    io.on('connection', socket => {
        socket.on('user add', m => {
            socket.emit('user join', {username: 'yi', msg: 'wo lai liao'});
            let arr = [];
            arr.push(m);
            // console.log(io.sockets)
        });
        socket.on('new message', m => {
            socket.broadcast.emit('new message', {username: 'yi', msg: m});
            socket.emit('new message', {username: 'yi', msg: m});
        });
        socket.on(ChatType.SINGLE, m => {
            console.log(m);
        });
    });
    io.on('disconnect', () => {
        console.log('disconnect....');
    });
    io.on('connect_error', socket => {
        console.log(socket);
    });
}

exports.runSocket = runSocket;