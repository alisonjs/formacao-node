const http = require('http');

http
  .createServer(function (req, res) {
    res.end('Welcome to my website');
  })
  .listen(3000);
