(function(module) {
  var walmart = {};

  walmart.all = [];

  walmart.request = function(callback) {
    $.ajax({
      type: 'GET',
      url: 'http://api.walmartlabs.com/v1/search?query=stroller&format=json&categoryId=5427&apiKey=nzqhwruahscwc5ra9kb5uzb6',
      jsonp: 'callback',
      dataType: 'jsonp',
      data: {
        categoryId: '5427',
      },
      success: function(data){
        walmart.all = data;
        console.log(data);
      }
    });
  };

  module.walmart = walmart;
})(window);
