(function(module) {

var resultArray = {};

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


//
// walmart.all.forEach(function(element) {
//   return resultArray.push(new Display(element))
// });
//
// resultArray.forEach(function(a) {
//   $('#result').append(a.recallDisplay());
// });

module.resultArray = resultArray;

})(window);
