(function(module) {

  var walmart = {};
  walmart.all = [];
  var walmartDataArray=[];
  var textarr=[];
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
        walmartDataArray.push(data.items[0]);
        showWalmartInfo(walmartDataArray);
      } else {
        console.log('This item does not exist in the WalMart database');
      }
    });
  };



  function showWalmartInfo() {
    walmartDataArray.forEach(function(ele) {
      textarr.push(new Display(ele));
    });
    textarr.forEach(function(a){
      $('#bottom').append(a.recallDisplay(1)); // Force "else" to run
    });
  }


  module.walmart = walmart;
})(window);
