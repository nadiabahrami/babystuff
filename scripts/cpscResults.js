function CPSC (data) {
  data.thumbnailImage = this.Images[0].URL,
  data.name = data.Products[0].Name,
  data.repair = this.Remedies[0].Name,
  data.retailers = this.Retailers[0].name
};

CPSC.prototype.recallDisplay = function(result){
  if (result === false) {
      console.log('not found');
  } else {
    var template = $('#searches').html();  
    var compiled = Handlebars.compile(template);  
    var data = {
        'thumbnailImage': this.thumbnailImage,
        'name': this.name,
        'repair': data.repair,
        'retailers': data.retailers

      };
    var renderedHTML = compiled(data);
    return renderedHTML;
  }
};
