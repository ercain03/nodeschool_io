'use strict';

const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') return res.end('You need to send a post');
  req.pipe(map((chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(res);
}).listen(process.argv[2]);
