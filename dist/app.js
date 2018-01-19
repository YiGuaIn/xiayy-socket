"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./config/server");
const service_1 = require("./utils/socket/service");
let koaStatic = require('koa-static');
let Koa = require('koa');
let app = new Koa();
var server = require('http').Server(app.callback());
service_1.default(server);
app.use(koaStatic('./views'));
server.listen(server_1.HTTP_PORT);
app.on('error', (err, ctx) => {
    console.log('connect server error...');
});
//# sourceMappingURL=app.js.map