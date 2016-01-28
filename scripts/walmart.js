(function(module) {
  var walmart = {};
  walmart.all = [];
  walmart.upc = {};

  walmart.similarRequest = function(query, callback) {
    $.get('/walmart/search?query=' + query + '&format=json&categoryId=5427')
    .done(function(data) {
      console.log(data);
    })
    .done(function(data){
      walmart.all = data.items;
      console.log(walmart.all);
    });
  };

  walmart.upcRequest = function(upc, callback) {
    $.get('/walmart/search?query=' + upc)
    .done(function(data){
      console.log(data);
      if (data.items) {
        cpsc.getMfgr(data.items[0]);
      } else {
        console.log('This item does not exist in the WalMart database');
      }
    });
  };

  module.walmart = walmart;
})(window);
