(function(module){
  var resultsView= {};

  function recalledItem (data) {
    this.thumbnailImage = data.thumbnailImage,
    this.name = data.name,
    this.shortDescription = data.shortDescription,
    this.customerRatingImage = data.customerRatingImage
  };

  recalledItem.prototype.handleDisplay = function(result){
    if (result === false) {
        console.log('not found');
    }else {
      var template = $('#top').html();  
      var compiled = Handlebars.compile(template);  
      var data = {
          'thumbnailImage': this.thumbnailImage,
          'name': this.name,
          'shortDescription': this.shortDescription,
          'customerRatingImage': this.customerRatingImage
        };
      var renderedHTML = compiled(data);
      return renderedHTML;
    }
  };



  module.resultsView = resultsView;
})(window);
