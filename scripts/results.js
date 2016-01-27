(function(module) {

var resultArray = [];

function Result (data) {
  this.thumbnailImage = data.thumbnailImage,
  this.name = data.name,
  this.modelNumber = data.modelNumber,
  this.shortDescription = data.shortDescription,
  this.customerRatingImage = data.customerRatingImage
};

resultArray.flagProduction = function(result){
  console.log(result);
  if(result === false){
    var template = $("#rsltPic").html();
    var compile = Handlebars.compile(template);
    var data = {
        "imgresponse":"/images/Green.png",
        "searchUPC":objData.active,
        "recommendation": "<p>Not a known recalled item.  We would not recommend purchasing this object.</p>"
      };
    var render = compile(data);
    $('#img').append(render);
  }else{
    var template = $("#rsltPic").html();
    var compile = Handlebars.compile(template);
    var data = {
        "imgresponse":"/images/Red.png",
        "searchUPC":objData.active,
        "recommendation": "<p>RECALLED.  We would not recommend purchasing this object.</p>"
      };
    var render = compile(data);
    $('#img').append(render);
  }
};

Result.prototype.recallDisplay = function(result){
  if (cpsc.userCompare === entrieswithUPC(check) {
    var template = $('#searches').html();  
    var compiled = Handlebars.compile(template);  
    var data = {
        'thumbnailImage': this.thumbnailImage,
        'name': this.name,
        'modelNumber': this.modelNumber,
        'shortDescription': this.shortDescription,
        'customerRatingImage': this.customerRatingImage
      };
    var renderedHTML = compiled(data);
    return renderedHTML;
  }else {
    console.log('not found');
  }
};

walmart.all.forEach(function(element) {
  return resultArray.push(new Result(element))
});

resultArray.forEach(function(a) {
  $('#result').append(a.recallDisplay());
});

module.resultArray = resultArray;

})(window);
