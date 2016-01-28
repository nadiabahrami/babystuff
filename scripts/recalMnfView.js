(function(module){
  function DisplayRecall(data) {
    // this.thumbnailImage = data.Images[0].URL,
    this.name = data.Title,
    this.shortDescription = data.Description
    // this.customerRatingImage = data.Retailers[0].Name
  };
  DisplayRecall.prototype.recallMnfDisplay = function(result){
    var template = $('#searches').html();  
    var compiled = Handlebars.compile(template);  
    var data = {
        "thumbnailImage": this.thumbnailImage,
        "name": this.name,
        "shortDescription": this.shortDescription,
        "customerRatingImage": this.customerRatingImage
      };
      var renderedHTML = compiled(data);
      return renderedHTML;
      // $('#bottom').empty();
      // $('#bottom').html(renderedHTML);

  };
  module.DisplayRecall = DisplayRecall;
})(window);
