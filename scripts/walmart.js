(function(module) {
  var walmart = {};

  walmart.all = [];


  // walmart.request = function(callback) {
  // $.getJSON('http://api.walmartlabs.com/v1/search?query=crib&format=json&categoryId=5427&apiKey=nzqhwruahscwc5ra9kb5uzb6',
  // function(data) {
  //   walmart.all = data;
  //   console.log(data);
  // })

  walmart.request = function(callback) {
    $.ajax({
      type: 'GET',
      url: 'http://api.walmartlabs.com/v1/search?format=json&categoryId=5427&apiKey=nzqhwruahscwc5ra9kb5uzb6',
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

 // .done(callback);
// };
  //
  // walmart.with = function(attr) {
  //   return walmart.all.filter(function(repo) {
  //     return repo[attr];
  //   });
  // };

  module.walmart = walmart;
})(window);
