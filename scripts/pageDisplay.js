(function (module) {
$('.sections').hide();

var webpage = {};

webpage.pageDisplay = function(content) {
  console.log(content);
  $('.sections').hide();
  $('#' + content).fadeIn()
}



module.webpage = webpage;

})(window);
