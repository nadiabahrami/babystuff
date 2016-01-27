(function(module) {
  var walmart = {};
  walmart.all = [];
  walmart.upc = {};

  // walmart.similarRequest = function(query) {
  //   $.ajax({
  //     type: 'GET',
  //     url: 'http://api.walmartlabs.com/v1/search?' +
  //       'query=' + query + '&format=json&categoryId=5427' +
  //       '&apiKey=nzqhwruahscwc5ra9kb5uzb6',
  //     jsonp: 'callback',
  //     dataType: 'jsonp',
  //     success: function(data){
  //       walmart.all = data;
  //       console.log(walmart.all);
  //     }
  //   });
  // };
  //
  // walmart.upcRequest = function(upc) {
  //   $.ajax({
  //     type: 'GET',
  //     url: 'http://api.walmartlabs.com/v1/search?' +
  //     'apiKey=nzqhwruahscwc5ra9kb5uzb6&query=' + upc,
  //     jsonp: 'callback',
  //     dataType: 'jsonp',
  //     success: function(data){
  //       console.log(data);
  //     }
  //   });
  // };

  walmart.similarRequest = function(query, callback) {
    $.get('/walmart/query=' + query + '&format=json&categoryId=5427')
    .done(function(data) {
      console.log(data);
    })
    .done(callback);
  };

  walmart.upcRequest = function(upc, callback) {
    $.get('/walmart/apiKey=nzqhwruahscwc5ra9kb5uzb6&query=' + upc)
    .done(function(data) {
      console.log(data);
    })
    .done(callback);
  };

  module.walmart = walmart;
})(window);
