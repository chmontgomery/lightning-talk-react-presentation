var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('.', {'index': ['index.html']}));

app.use('/_health', function(req, res, next) {
  res.end('OK');
});

var port = process.env.PORT || 8000;
app.listen(port);