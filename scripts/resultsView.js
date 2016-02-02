(function(module){

  var resultsView= {};

  resultsView.handleDisplay = function(result){
    $('#top').empty();
    var template = $('#recallHit').html();  
    var compile = Handlebars.compile(template);  
    var data = {
      'thumbnail': result[0].Images[0].URL,
      'searchUPC': objData.active,
      'repair': result[0].Remedies[0].Name
    };
      var render = compile(data);
    $('#top').html(render);
  };

  module.resultsView = resultsView;
})(window);
