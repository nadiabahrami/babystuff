(function(module){

  var resultsView= {};

  resultsView.handleDisplay = function(result){
    console.log(result);
    console.log(result.Images[0].URL);
    console.log(result.Title);
    console.log('handleDisplay');
    $('#top').empty();
      var template = $('#recallHit').html();  
      var compile = Handlebars.compile(template);        var data = {
          'thumbnail': result.Images[0].URL,
          'title': result.Title,
          'searchUPC': objData.active,
          'repair': result.Remedies[0].Name
        };
      var render = compile(data);
    $('#top').html(render);
    console.log("done");
  };



  module.resultsView = resultsView;
})(window);
