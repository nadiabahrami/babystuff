(function(module) {

var resultArray = [];

function Result (data) {
  this.thumbnailImage = data.thumbnailImage,
  this.name = data.name,
  this.modelNumber = data.modelNumber,
  this.shortDescription = data.shortDescription,
  this.customerRatingImage = data.customerRatingImage
};

Result.prototype.recallDisplay = function(result) {
  if (cpsc.userCompare === "found") {
    var template = $("#searches").html();  
    var compiled = Handlebars.compile(template);  
    var data = {
        "thumbnailImage": this.thumbnailImage,
        "name": this.name,
        "modelNumber": this.modelNumber,
        "shortDescription": this.shortDescription,
        "customerRatingImage": this.customerRatingImage
      };
    var renderedHTML = compiled(data);
    return renderedHTML;
} else {
  console.log("not found");
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
