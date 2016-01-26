(function(module) {
  var sears = {};
  sears.all = [];
  sears.request = function(callback) {
    $.ajax({
      type: 'GET',
      url: 'http://api.walmartlabs.com/v1/search?query=crib&format=json&categoryId=5427&apiKey=nzqhwruahscwc5ra9kb5uzb6',
      jsonp: 'callback',
      dataType: 'jsonp',
      data: {
        categoryId: '5427',
      },
      success: function(data){
        sears.all = data;
        console.log(data);
      }
      })
    }
  module.sears = sears;
})(window);
