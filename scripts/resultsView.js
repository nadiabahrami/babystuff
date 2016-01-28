(function(module){

  var resultsView= {};

  resultsView.handleDisplay = function(result){
    $('#top').empty();
    console.log(result);
    console.log(result[0].Title);
    console.log(result[0].Images[0].URL);
      var template = $('#recallHit').html();  
      var compile = Handlebars.compile(template);  
      var data = {
          'thumbnail': result[0].Images[0].URL,
          'title': result[0].Title,
          'searchUPC': objData.active,
          'repair': result[0].Remedies[0].Name
        };
      var render = compile(data);
    $('#top').html(render);
  };

  module.resultsView = resultsView;
})(window);
