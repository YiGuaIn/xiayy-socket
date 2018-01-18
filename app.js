/* jshint esversion: 6 */

require('babel-register');
let {HTTP_PORT} = require('../../config/server.js');
let runSocket = require('./utils/socket.js');

let app = require('koa')();

app.use(async ctx => {
    ctx.body = 'Hello Xiayy'
});
app.listen(HTTP_PORT)