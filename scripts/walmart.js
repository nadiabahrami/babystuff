(function(module) {

  console.log('Inside walmart IFFE.')
  var walmart = {};
  walmart.all = [];
  walmart.upc = {};

  var testarray=[];
  var textarr=[];

  walmart.similarRequest = function(query) {
    $.ajax({
      type: 'GET',
      url: 'http://api.walmartlabs.com/v1/search?' +
        'query=' + query + '&format=json&categoryId=5427' +
        '&apiKey=nzqhwruahscwc5ra9kb5uzb6',
      jsonp: 'callback',
      dataType: 'jsonp',
      success: function(data){
        walmart.all = data.items;
        console.log(walmart.all);
      }
    });
  };

    function foo(x) {
      testarray.forEach(function(ele) {
        textarr.push(new Display(ele));
        console.log('textarr = ' + textarr);
      });

      textarr.forEach(function(a){
        $('#bottom').append(a.recallDisplay(1)); // Force "else" to run
      });
    } // foo()

  walmart.upcRequest = function(upc) {
    $.ajax({
      type: 'GET',
      url: 'http://api.walmartlabs.com/v1/search?' +
      'apiKey=nzqhwruahscwc5ra9kb5uzb6&query=' + upc,
      jsonp: 'callback',
      dataType: 'jsonp',
      success: function(data){
        console.log('data.items');
        console.log(data.items[0]);
        cpsc.getMfgr(data.items[0]);
        console.log('back');
        console.log(data.items[0]);
        testarray.push(data.items[0]);
        console.log('this is text array: + ' + testarray);
        console.log(testarray);
        foo(data.items[0]);
      }
    });
  };

  // walmart.similarRequest = function(query, callback) {
  //   $.get('/walmart/query=' + query + '&format=json&categoryId=5427')
  //   .done(function(data) {
  //     console.log(data);
  //   })
  //   .done(function(data){
  //     walmart.all = data.items;
  //     console.log(walmart.all);
  //   });
  // };
  //
  // walmart.upcRequest = function(upc, callback) {
  //   $.get('/walmart/&query=' + upc)
  //   .done(function(data) {
  //     console.log(data);
  //   })
  //   .done(function(data){
  //     if(data.items[0]){
  //       walmart.upc = data.items[0];
  //     } else {
  //       walmart.upc = {};
  //     }
  //     return walmart.upc;
  //   });
  // };

  module.walmart = walmart;
})(window);
