'use strict';

const http = require('http');
const url = require('url');

function unixtime(time) {
  return {
    unixtime: timestamp(time)
  };
}

function timestamp(time) {
  return Date.parse(time);
}

function timeObj(time) {
  var date = new Date(timestamp(time));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true),
      pathname = urlObj.pathname,
      time = urlObj.query.iso,
      result;

  if (pathname === '/api/unixtime') {
     result = unixtime(time);
  }
  else if (pathname === '/api/parsetime') {
    result = timeObj(time);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  }
  else {
    res.writeHead(404);
    res.end();
  }

}).listen(process.argv[2]);
