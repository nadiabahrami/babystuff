(function(module){
  function DisplayRecall(data) {
    // this.thumbnailImage = data.Manufacturers[0].Name,
    this.Manufacturers = data.Manufacturers[0].Name,
    this.name = data.Title,
    this.shortDescription = data.Description,
    this.URL = data.URL
  };
  DisplayRecall.prototype.recallMnfDisplay = function(result){
    var template = $('#searches').html();  
    var compiled = Handlebars.compile(template);  
    var data = {
        "thumbnailImage": this.thumbnailImage,
        "name": this.name,
        "shortDescription": this.shortDescription,
        "customerRatingImage": this.customerRatingImage,
        "Manufacturers":this.Manufacturers,
        "URL":this.URL
      };
      var renderedHTML = compiled(data);
      return renderedHTML;
  };
  module.DisplayRecall = DisplayRecall;
})(window);
