(function(module){// search recalls
  var cpsc = {};
  cpsc.all = [];
  cpsc.newUPC = [];

  cpsc.editted = [];

  cpsc.getRecalls = function() {
    console.log("between funtions");
    $.get('http://www.saferproducts.gov/RestWebServices/Recall?format=json', function(data){
      if (data != null) {
        console.log(data);
        cpsc.all = data;
        cpsc.editted =data;
        console.log(cpsc.all.length);
      }else{
        alert('Recall database unavailable!');
      }
    });
  };


  cpsc.ProductUPC = function(x){
    x.forEach(function(y){
      if(y.ProductUPCs.length !== 0){
        console.log("found ProductUPC");
        cpsc.newUPC.push(y);
        x.splice(x.indexOf(y), 1);
      }
    });
    console.log(cpsc.newUPC.length);
    console.log(cpsc.newUPC);
    console.log(x.length);
    console.log(x);
    cpsc.all = x;
  };

//   .done(function(){
//
// var newUPC = [];
//
// for(i=0; i<returned.length; i++){
//   if(returned[i].ProductUPCs.length !==0){
//     newUPC.push(returned[i]);
//     returned.splice(returned[i], 1);
//     i--;
//   }
// };
// console.log(newUPC.length);
// console.log(returned.length);
// }).done(function (){
//   var descriptionUPC = [];
//   for(i=0; i<returned.length; i++){
//     if(returned[i].Description.match(/\b\d{12}\b/g) && returned[i].Description.match(/UPC/)){
//       //store REGEX search for others and store into object
//       descriptionUPC.push(returned[i]);
//       returned.splice(returned[i], 1);
//       i--;
//     }
//   };
// console.log(descriptionUPC.length);
// console.log(returned.length);
// console.log(descriptionUPC);
// console.log(returned);
// })

 module.cpsc = cpsc;
})(window);
