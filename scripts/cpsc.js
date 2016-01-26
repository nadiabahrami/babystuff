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
    })
    // .done(function(){
    //   var test = [];
    //   var missing = [];
    //   for(var i=0; i<cpsc.all.length; i++){
    //     if(cpsc.all[i].Products.length !==0){
    //       if(cpsc.all[i].Products[0].Type === "Babies and Kids"){
    //       console.log("man exists");
    //       test.push(cpsc.all[i]);
    //       }
    //     }else{
    //         missing.push(cpsc.all[i]);
    //       }
    //   };
    //   console.log(test.length);
    //   console.log(test);
    //   console.log(missing.length);
    //   console.log(missing);
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
cpsc.findItem = function(searchUPC){
  //run against ProductUPC array dirrect UPC to searchUPC
  //if not found:
  //run against decriptionUPC array dirrect UPC to search UPC
  //if not found:
  //Walmart ajax query specific searchUPC bring back
  //run productName against Wallmart
  //if not found:
  //WAlmart(searchUPC) manufacturer name against cpsc manufacturer name
  //if not found:
  //cpcs description against Wallmart productName
  //if not found:
  //Success!  Item is not recalled
};
 module.cpsc = cpsc;
})(window);
