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
  }

  initStat() {
    let sync = fs.statSync(path.join(config.basePath, this.path));

    this.directory = sync.isDirectory();
    this.createdAt = sync.ctime;
    this.modifiedAt = sync.mtime;

    return this;
  }

  readContents() {
    let contents = {
      content: null,
      contentType: null,
      encoding: null
    };
    let contentType = mime.contentType(path.extname(this.path)).split('; ');
    contents.contentType = contentType[0];
    switch(contents.contentType) {
      case 'text/plain':
        contents.encoding = contentType[1].replace('charset=', '');
        contents.content = fs.readFileSync(path.join(config.basePath, this.path)).toString(contents.encoding);
        break;
      case 'image/png':
      case 'image/jpg':
      case 'image/jpeg':
         contents.content = fs.readFileSync(path.join(config.basePath, this.path)).toString('binary');
        break;
      default:
        console.error('Unsupported content type', contentType);
    }

    return contents;
  }
}
module.exports = GtFile;
