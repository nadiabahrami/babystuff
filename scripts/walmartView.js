
(function(module){
  function Display(data) {
    this.thumbnailImage = data.thumbnailImage,
    this.name = data.name,
    this.shortDescription = data.shortDescription,
    this.customerRatingImage = data.customerRatingImage;
  }

  Display.prototype.recallDisplay = function(result){
    if (!result) {
    } else {
      var template = $('#searches').html();  
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

  Display.setTeasers = function() {
    $('.description').hide();
    $('#bottom').on('click', 'a.more-info', function(event) {
      event.preventDefault();
      $(this).parent().find('.description').fadeIn();
      $(this).hide();
    });
  };

  module.Display = Display;
})(window);
