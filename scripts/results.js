(function(module) {

  var resultArray = {};

  resultArray.flagProduction = function(result){
    $('#img').empty();
    if(result === false){
      $('#top').empty();
      var template = $('#rsltPic').html();
      var compile = Handlebars.compile(template);
      var data = {
        'imgresponse':'/images/Green.png',
        'searchUPC':objData.active,
        'recommendation': 'not a known recalled item.'
      };
      var render = compile(data);
      $('#img').append(render);
    }else{
      var template = $('#rsltPic').html();
      var compile = Handlebars.compile(template);
      var data = {
        'imgresponse':'/images/Red.png',
      };
      var render = compile(data);
      $('#img').html(render);
      $('#clause').empty()
      resultsView.handleDisplay(result);
      $('#result-header').hide();
    }
  };

  module.resultArray = resultArray;
})(window);
