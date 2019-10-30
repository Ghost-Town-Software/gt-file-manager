
'use strict';

module.exports = function(app) {
  const gtFile = require('../controllers/gt-file.controller');

  app.route('/file/**')
    .delete(gtFile.deleteFile);

  app.route('/stat/**')
    .get(gtFile.statFile);

  app.route('/search/**')
    .get(gtFile.search);

  app.route('/upload/**')
    .post(gtFile.uploadFile);

  app.route('/**')
    .get(gtFile.listDirectory);
};
