// (function(module) {
//   var walmartView = {};
//
//   var toScreen = function() {
//     var $results = $('#walmart');
//
//     $results.find('ul').empty();
//     $results.show().siblings().hide();
//   };
//
//   var render = function(pull) {
//     console.log(pull);
//     return $('<li>').html('walmart');
//   };
//
//   walmartView = function() {
//     console.log(walmart);
//     toScreen();
//
//     $('#walmart ul').append(
//       walmart.with('name').map(render)
//     );
//     console.log(walmart);
//   };
//
//   module.walmartView = walmartView;
// })(window);
