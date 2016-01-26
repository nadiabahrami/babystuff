var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var proxyWalMart = function(request, response) {
  
  console.log('Routing Walmart request for', request.params[0]);
  (requestProxy({
    type: 'GET',
    url: 'http://api.walmartlabs.com/v1/' + request.params[0] + process.env.WALMART_KEY,
    jsonp: 'callback',
    dataType: 'jsonp',
    success: function(data){
      walmart.all = data;
      console.log(data);
    }
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
