'use strict';

const filteredDir = require('./make_it_modular_one');

const dirName = process.argv[2];
const extension = process.argv[3];

filteredDir(dirName, extension, (err, list) => {
  if (err) return err;

  list.forEach((filename) => {
    console.log(filename);
  });
});
