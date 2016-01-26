(function(module) {
  var sears = {};
  sears.all = [];
  sears.request = function(callback) {
    $.ajax({
      type: 'GET',
      url: 'http://api.developer.sears.com/v2.1/products/browse/categories/Sears/jsonp?apikey=iNblsdTu60wkgEJZAiqqJGTIQflrGVAW',
      jsonp: 'callback',
      dataType: 'jsonp',
      success: function(data){
        sears.all = data;
        console.log(data);
      }
    })
  }
  module.sears = sears;
})(window);
