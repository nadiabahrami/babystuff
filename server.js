var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.get('/walmart/*', requestProxy({
  url: 'http://api.walmartlabs.com/v1/*',
  query: {
    apiKey: process.env.WALMART_KEY,
  }
}));

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
