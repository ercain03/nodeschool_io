'use strict';

const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (res) => {
  res.pipe(bl(function (err, data) {
    if (err) return err;
      console.log(data.length);
      console.log(data.toString());
  }));
});
