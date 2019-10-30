const fs = require('fs');
const config = require('../config/variables');

class GtFile {
  constructor(path) {
    this.path = path.replace(config.basePath, '');
    this.directory = false;
    this.createdAt = null;
    this.modifiedAt = null;
  }

  initStat() {
    let sync = fs.statSync(config.basePath + '/' + this.path);

    this.directory = sync.isDirectory();
    this.createdAt = sync.ctime;
    this.modifiedAt = sync.mtime;

    return this;
  }
}
module.exports = GtFile;
