
'use strict';

const fs = require('fs');
const glob = require('glob');
const GtFile = require('../models/gt-file');
const config = require('../config/variables');

function extractPath(params) {
  if(params.length === 0) {
    return null;
  }

  let route = params[0].replace(/\.\./g, '');

  return config.basePath + '/' + route;
}

exports.listDirectory = function(req, res) {

  let path = extractPath(req.params);
  if(!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
    res.status(404);
    res.json({ error: 'Directory ' + path + ' does not exist.'});
    return;
  }

  let files = glob.sync(path + '/*').map(file => new GtFile(file).initStat());
  res.json(files);
};

exports.getFile = function(req, res) {
  let gtFile = new GtFile(extractPath(req.params));
  let contents = gtFile.readContents();

  res.writeHead(200, {
    'Content-Type': contents.contentType,
    'Content-Length': contents.content.length
  });
  res.end(Buffer.from(contents.content, 'binary'));
};

exports.statFile = function(req, res) {
  let gtFile = new GtFile(extractPath(req.params));
  gtFile.initStat();
  res.json(gtFile);
};

exports.uploadFile = function(req, res) {
  res.json({upload: req.params});
};

exports.deleteFile = function(req, res) {
  res.json({delete: req.params});
};

exports.search = function(req, res) {
  res.json({search: req.params});
};
