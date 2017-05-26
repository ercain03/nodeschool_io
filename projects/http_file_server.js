'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200,
      {'content-type' : 'text/plain'}
    );

    fs.createReadStream(process.argv[3]).pipe(res);
}).listen(process.argv[2]);
