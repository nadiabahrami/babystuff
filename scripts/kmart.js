(function(module) {
  var kmart = {};
  kmart.all = [];
  kmart.request = function(callback) {
    $.ajax({
      type: 'GET',
      url: 'http://api.developer.sears.com/v2.1/products/browse/categories/Kmart/jsonp?apikey=iNblsdTu60wkgEJZAiqqJGTIQflrGVAW',
      jsonp: 'callback',
      dataType: 'jsonp',
      success: function(data){
        kmart.all = data;
        console.log(data);
      }
    })
  }
  module.kmart = kmart;
})(window);
