(function(module){// search recalls
  var cpsc = {};
 cpsc.SearchRecalls = function () {
 //   // CPSCDomain
 //    var CPSCDomain = "http://www.saferproducts.gov/RestWebServices";
 //    // recalls URL
 //    var URL = CPSCDomain + "/Recall" + "?format=json";
 //    // add filters
 //
 //    var fieldNames = "Products";
 //    for (var i = 0; i < fieldNames.length; i++) {
 //    fieldValue = GetFieldValue(fieldNames[i]);
 //    if (fieldValue != null && fieldValue.trim() != "")
 //    URL += "&" + fieldNames[i] + "=" + fieldValue.trim();
 //    }
var returned;
 // get recalls
 console.log("between funtions");
 $.get('http://www.saferproducts.gov/RestWebServices/Recall?format=json', function (data) {
   if (data != null) {
    console.log(data);
    returned = data;
    console.log(returned.length);
   }else{
     alert('null!');
   }
 }).done(function(){

var newUPC = [];

for(i=0; i<returned.length; i++){
  if(returned[i].ProductUPCs.length !==0){
    newUPC.push(returned[i]);
    returned.splice(returned[i], 1);
    i--;
  }
};
console.log(newUPC.length);
console.log(returned.length);
}).done(function (){
  var descriptionUPC = [];
  for(i=0; i<returned.length; i++){
    if(returned[i].Description.match(/\b\d{12}\b/g) && returned[i].Description.match(/UPC/)){
      //store REGEX search for others and store into object
      descriptionUPC.push(returned[i]);
      returned.splice(returned[i], 1);
      i--;
    }
  };
console.log(descriptionUPC.length);
console.log(returned.length);
console.log(descriptionUPC);
console.log(returned);
})

};
//  $.ajax({
//  url: 'http://www.saferproducts.gov/RestWebServices/Recall?ProductName=Toddler&format=json',
//  type: 'GET',
//  datatype: 'json',
//  headers: { 'Access-Control-Allow-Origin': 'ddcde1b6-ebca-4bdd-bdb8-d8a2d9f40f17' },
//  error:
//  function (jqXHR, textStatus, errorThrown) {
//  var whatError = errorThrown;
// alert(whatError);
//  },
//  success: function (data) {
//    if (data != null) {
//      displayRecallsTable(data);
//    }else{
//      alert('null!');
//    }
// }});

 module.cpsc = cpsc;
})(window);
