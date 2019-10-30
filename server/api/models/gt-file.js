const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const config = require('../config/variables');

class GtFile {
  constructor(path) {
    this.path = path.replace(config.basePath, '');
    this.directory = false;
    this.createdAt = null;
    this.modifiedAt = null;
    this.content = null;
  }

  initStat() {
    let sync = fs.statSync(path.join(config.basePath, this.path));

    this.directory = sync.isDirectory();
    this.createdAt = sync.ctime;
    this.modifiedAt = sync.mtime;

    return this;
  }

  readContents() {
    let contentType = mime.contentType(path.extname(this.path)).split('; ');
    switch(contentType[0]) {
      case 'text/plain':
        let encoding = contentType[1].replace('charset=', '');
        this.content = fs.readFileSync(path.join(config.basePath, this.path)).toString(encoding);
        break;
      case 'image/png':
      case 'image/jpg':
      case 'image/jpeg':
        this.content = fs.readFileSync(path.join(config.basePath, this.path)).toString('binary');
        break;
      default:
        console.error('Unsupported content type', contentType);
    }
  }
}
module.exports = GtFile;
