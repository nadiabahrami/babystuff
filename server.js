var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var proxyWalMart = function(request, response) {
  var urlString = 'http://api.walmartlabs.com/v1/search?' + request.params[0];
  console.log(urlString);
  console.log('Routing Walmart request for', request.params[0]);
  (requestProxy({
    url: urlString
    // headers: { Authorization: 'token ' + process.env.WALMART_KEY }
  }))(request, response);
};

app.get('/walmart/*', proxyWalMart);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
