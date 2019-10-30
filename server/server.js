
const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../.filesystem/'));

const routes = require('./api/routes/gt-file.routes');
routes(app);

app.listen(port);

console.log('gt-file-manager-server RESTful API started on: %d', port);
