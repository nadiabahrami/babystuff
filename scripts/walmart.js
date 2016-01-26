(function(module) {
  var walmart = {};

  walmart.all = [];

  walmart.request = function(query) {
    $.ajax({
      type: 'GET',
      url: 'http://api.walmartlabs.com/v1/search?' +
        'query=' + query + '&format=json&categoryId=5427' +
        '&apiKey=' + process.env.WALMART_KEY,
      jsonp: 'callback',
      dataType: 'jsonp',
      success: function(data){
        walmart.all = data;
        console.log(data);
      }
    });
  };

  module.walmart = walmart;
})(window);
