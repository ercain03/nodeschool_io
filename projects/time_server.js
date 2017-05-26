'use strict';

const net = require('net');
const date = new Date();

function addZero(i) {
  return (i < 10 ? '0' : '') + i;
}

const server = net.createServer((socket) => {
  socket.end(
    date.getFullYear() + '-'
    + addZero(date.getMonth() + 1) + '-'
    + addZero(date.getDate()) + ' '
    + addZero(date.getHours()) + ':'
    + addZero(date.getMinutes()) + '\n'
  );
});

server.listen(Number(process.argv[2]));
