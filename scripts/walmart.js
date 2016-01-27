(function(module) {
  var walmart = {};
  walmart.all = [];
  walmart.upc = {};

  walmart.similarRequest = function(query) {
    $.ajax({
      type: 'GET',
      url: 'http://api.walmartlabs.com/v1/search?' +
        'query=' + query + '&format=json&categoryId=5427' +
        '&apiKey=nzqhwruahscwc5ra9kb5uzb6',
      jsonp: 'callback',
      dataType: 'jsonp',
      success: function(data){
        walmart.all = data;
        console.log(walmart.all);
      }
    });
  };

  walmart.upcRequest = function(upc) {
    $.ajax({
      type: 'GET',
      url: 'http://api.walmartlabs.com/v1/search?' +
      'apiKey=nzqhwruahscwc5ra9kb5uzb6&query=' + upc,
      jsonp: 'callback',
      dataType: 'jsonp',
      success: function(data){
        console.log(data);
      }
    });
  };

  module.walmart = walmart;
})(window);
