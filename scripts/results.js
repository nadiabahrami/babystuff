(function(module) {

var resultArray = {};

resultArray.flagProduction = function(result){
  console.log(result);
  $('#img').empty();
  if(result === false){
    $('#top').empty();
    var template = $("#rsltPic").html();
    var compile = Handlebars.compile(template);
    var data = {
      "imgresponse":"/images/Green.png",
      "searchUPC":objData.active,
      "recommendation": "<p>not a known recalled item.</p>"
    };
    var render = compile(data);
    $('#img').append(render);
  }else{
    var template = $("#rsltPic").html();
    var compile = Handlebars.compile(template);
    var data = {
      "imgresponse":"/images/Red.png",
    };
    var render = compile(data);
    $('#img').html(render);
    $('#clause').empty()
    resultsView.handleDisplay(result);
  }
};

module.resultArray = resultArray;

})(window);
