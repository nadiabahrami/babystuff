(function(module) {
  $('#errorMsg').hide()
  var walmart = {};
  walmart.all = [];
  walmartDataArray = [];
  walmartUpcData = [];
  walmart.upc = {};
  var recallMnfData=[];
  var checkData = false;
  walmart.similarRequest = function(query, callback) {
    $.get('/walmart/search?query=' + query + '&format=json&categoryId=5427')
    .done(function(data) {
    })
    .done(function(data){
      walmart.all = data.items;
    });
  };

  walmart.upcRequest = function(upc, callback) {
    $.get('/walmart/search?query=' + upc)
    .done(function(data){
      if (data.items) {
        walmart.showWalmartInfo(data.items[0]);
        cpsc.getMfgr(data.items[0]);
        checkData = true;
        $('#result-header').show();
      } else {
        $('#result-header').hide();
        $('#errorMsg').show();
        $('.result-spinner').hide();
        $('#result').fadeIn();
      }
    });
  };

  walmart.showWalmartInfo = function(data) {
    walmartUpcData.length = 0;
    walmartUpcData.push(new Display(data));
    walmartUpcData.forEach(function(a){
      $('#review').append(a.recallDisplay(1));
    });
    $('.result-spinner').hide();
    $('#result').fadeIn();
  }

  walmart.showMnfRecall = function(replies) {
    recallMnfData.length = 0;
    replies.forEach(function(ele) {
      recallMnfData.push(new DisplayRecall(ele));
    });
    recallMnfData.forEach(function(a){
      $('#recalls').append(a.recallMnfDisplay(1));
      Display.setTeasers();
    });
  }

  module.walmart = walmart;
})(window);
