(function(module){// search recalls
  var cpsc = {};
  cpsc.all = [];

  cpsc.getRecalls = function() {
    $.get('http://www.saferproducts.gov/RestWebServices/Recall?format=json', function(data){
      if (data != null) {
        console.log(data);
        cpsc.all = data;
        console.log(cpsc.all.length);
      }else{
        alert('Recall database unavailable!');
      }
    });
    // .done(function(){
    //   var test = [];
    //   var missing = [];
    //   for(var i=0; i<cpsc.all.length; i++){
    //     if(cpsc.all[i].Products.length !==0){
    //       if(cpsc.all[i].Products[0].Type === 'Babies and Kids'){
    //       console.log('man exists');
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
    // });
  };

//this function filters for ProductUPC proerties
  cpsc.productUPC = function(dataAll){
    var entriesWithUPC = [];
    dataAll.filter(function(dataEntry){
      if(dataEntry.ProductUPCs.length !== 0){
        entriesWithUPC.push(dataEntry);
      }
    });
    return entriesWithUPC;
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

  cpsc.sort = function(entriesWithUPC){
    console.log(entriesWithUPC);
    var upcArray = [];
    entriesWithUPC.forEach(function(entry){
      upcArray.push(entry.ProductUPCs[0].UPC.replace(/\s/g,''));
    });
    console.log(upcArray);
    return upcArray;
  };

// this function takes the upc from user and compare against the array fed into it
  cpsc.userCompare = function(entriesWithUPC, userUPC){
    console.log(entriesWithUPC);
    var upcArr = [];
    upcArr = cpsc.sort(entriesWithUPC);
    var check = upcArr.indexOf(userUPC);
    if(check === -1) {
      console.log(userUPC);
      console.log('notfound');
      return 'not found';
    }else{
      console.log('found');
      console.log(userUPC);
      return entriesWithUPC[check];
    }
  };

  cpsc.mfgrSearch = function(mfgrName, dataAll){
    var recallsArray = [];
    var replies = dataAll.map(function(entry){
      entry.Manufacturers.filter(function(mfgr){
        if (mfgrName === mfgr.Name){
          recallsArray.push(entry);
        }
      });
    });
    return recallsArray;
  };

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
