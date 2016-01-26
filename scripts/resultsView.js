(function(){
  var resultsView= {};

  resultsView.recallDisplay = function(result){
    if(result === "found"){
      var template = $("#searches").html();  
      var compiled = Handlebars.compile(template);  

      var data = {
          "thumbnailImage": this.thumbnailImage;
          "name": this.name;
          "modelNumber": this.modelNumber;
          "shortDescription": this.shortDescription;
          "customerRatingImage": this.customerRatingImage;
        }
      var renderedHTML = cmpiled(data);
      return renderedHTML;

    walmart.data


      //display to user item has been recalled and should not be purchased
      //Run function to display alternates
    }else{
      //display to user item is safe and can be purchsed
  };


  module.resultsView = resultsView;
})(window);
