"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let socket = require('socket.io');
var ChatType;
(function (ChatType) {
    ChatType[ChatType["GET"] = 1] = "GET";
    ChatType[ChatType["CHAR"] = 2] = "CHAR";
    ChatType[ChatType["SINGLE"] = 4] = "SINGLE"; // 私聊
})(ChatType || (ChatType = {}));
function runSocket(app) {
    if (!app)
        return;
    let io = new socket(app);
    io.on('connection', (socket) => {
        socket.on('user add', (m) => {
            socket.emit('user join', { username: 'yi', msg: 'wo lai liao' });
        });
        socket.on('new message', (m) => {
            socket.broadcast.emit('new message', { username: 'yi', msg: m });
        });
        socket.on(ChatType.SINGLE, (m) => {
            console.log(m);
        });
    });
    io.on('disconnect', (socket) => {
        console.log('disconnect....');
    });
    io.on('connect_error', (socket) => {
        console.log(socket);
    });
}
exports.default = runSocket;
//# sourceMappingURL=service.js.map