(function (module) {
$('#video').hide();
$('#about').hide();

var webpage = {};

webpage.pageDisplay = function(content) {
  console.log(content);
  $('.page').hide();
  $('#' + content).show();
}



module.webpage = webpage;

})(window);
