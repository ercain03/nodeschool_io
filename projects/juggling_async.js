'use strict';

const http = require('http');
const bl = require('bl');
var urls = [];
var count = 0;

function readUrls() {
  for (var i = 0; i < 3; i++) {
    console.log(urls[i]);
  }
}

function urlReader(index) {
  http.get(process.argv[2 + index], (res) => {
    res.pipe(bl((err, data) => {
      if (err) return err;

        urls[index] = data.toString();
        count++;

      if (count === 3) {
        readUrls();
      }
    }));
  });
}

for (var i = 0; i < 3; i++) {
  urlReader(i);
}
