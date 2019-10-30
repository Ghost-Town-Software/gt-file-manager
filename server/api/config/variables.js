const fs = require('fs');

console.log(__dirname);
const basePath = fs.realpathSync(__dirname + '/../../../.filesystem').replace(/\\/g, '/');

module.exports = {
  basePath
};
