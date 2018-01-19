
import {HTTP_PORT} from  './config/server';
import runSocket from './utils/socket/service';
let koaStatic = require('koa-static');
let Koa  = require('koa');
let app = new Koa();
var server = require('http').Server(app.callback())

runSocket(server);

app.use(koaStatic('./views'));

server.listen(HTTP_PORT)

app.on('error', (err:any, ctx:any) => {
    console.log('connect server error...');
})

