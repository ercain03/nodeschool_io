const fs = require('fs');
const path = require('path');

module.exports = (dirName, extension, callback) => {
  let filteredArray = [];

  fs.readdir(dirName, (err, list) => {
      if (err) return callback(err);

      list.forEach((file) => {
        if (path.extname(file) === '.' + extension)
          filteredArray.push(file);
      });
      callback(null, filteredArray);
  });
};
