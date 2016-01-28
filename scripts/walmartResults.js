
(function(module){
//  var Display = {};

  function Display(data) {
    this.thumbnailImage = data.thumbnailImage,
    this.name = data.name,
    this.shortDescription = data.shortDescription,
    this.customerRatingImage = data.customerRatingImage
  };

  Display.prototype.recallDisplay = function(result){
    console.log(result);
  if (! result) {
      console.log('Display.prototype.recallDisplay: result is falsey (not found).');
  }else {
    console.log('Result valid. Calling handlebars...');
    var template = $('#searches').html();  
    console.log('  template = ' + template);
    var compiled = Handlebars.compile(template);  
    console.log('  compiled = ' + compiled);
    var data = {
        "thumbnailImage": this.thumbnailImage,
        "name": this.name,
        "shortDescription": this.shortDescription,
        "customerRatingImage": this.customerRatingImage
      };
    var renderedHTML = compiled(data);
console.log('  renderedHTML = ' + renderedHTML);
    return renderedHTML;
    $('#bottom').empty();
    $('#bottom').html(renderedHTML);
  }
  };

  module.Display = Display;
})(window);
