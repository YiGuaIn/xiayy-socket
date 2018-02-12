"use strict";
let HTTP_PORT = require('./src/config/server').HTTP_PORT;
let runSocket = require('./src/utils/socket/service').runSocket;
let koaStatic = require('koa-static');
let Koa  = require('koa');
let app = new Koa();
var server = require('http').Server(app.callback());

runSocket(server);
app.use(koaStatic(__dirname + '/src/views'));

server.listen(HTTP_PORT, () => {
    console.log(HTTP_PORT);
});

app.on('error', (err, ctx) => {
    console.log('connect server error...');
});

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 返回 ‘ok’
            resolve('ok');
        }, time);
    })
};

var start = async function () {
    let result = await sleep(3000);
    console.log(result); // 收到 ‘ok’
};