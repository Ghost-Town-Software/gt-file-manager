
'use strict';

const fs = require('fs');
const glob = require('glob');

const basePath = fs.realpathSync('../.filesystem');

function extractPath(params) {
  if(params.length === 0) {
    return null;
  }

  let route = params[0].replace(/\.\./g, '');

  return basePath + '/' + route;
}

function relativePath(path) {
  if(path.constructor === Array) {
    return path.map(relativePath);
  }
  return path.replace(basePath.replace(/\\/g, '/'), '');
}

exports.listDirectory = function(req, res) {

  let path = extractPath(req.params);
  let stat = fs.statSync(path);
  if(!stat.isDirectory()) {
    res.status(404);
    res.render('error', { error: 'Directory ' + path + ' does not exist.'});
    return;
  }

  res.json(relativePath(glob.sync(path + '/*')));
};

exports.getFile = function(req, res) {
  let stat = fs.statSync(extractPath(req.params));
  res.json(stat);
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
