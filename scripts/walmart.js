(function(module) {
  $('#errorMsg').hide()
  var walmart = {};
  walmart.all = [];
  walmartDataArray = [];
  walmartUpcData = [];
  walmart.upc = {};
  var recallMnfData=[];

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
      if (data.items) {
        cpsc.getMfgr(data.items[0]);
        console.log('data is base on UPC search');
        console.log(data.items[0]);
        // walmartDataArray.push(data.items[0]);
        walmart.showWalmartInfo(data.items[0]);
      } else {
        console.log('This item does not exist in the WalMart database');
        $('#errorMsg').show();
      }
    });
  };

  walmart.showWalmartInfo = function (data) {
    walmartUpcData.length = 0;
    walmartUpcData.push(new Display(data));
    walmartUpcData.forEach(function(a){
      $('#bottom').append(a.recallDisplay(1));
    });
  }

  walmart.showMnfRecall = function(replies) {
    recallMnfData.length = 0;
    replies.forEach(function(ele) {
      recallMnfData.push(new DisplayRecall(ele));
    });
    recallMnfData.forEach(function(a){
      $('#bottom').append(a.recallMnfDisplay(1));
    });
  }

  module.walmart = walmart;
})(window);
