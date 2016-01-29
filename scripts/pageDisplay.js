(function (module) {
$('.sections').hide();

var webpage = {};

webpage.pageDisplay = function(content) {
  console.log(content);
  $('.sections').hide();
  $('#' + content).show();
}



module.webpage = webpage;

})(window);
