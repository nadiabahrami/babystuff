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
    var upcFilter = dataAll.filter(function(dataEntry){
      return dataEntry.ProductUPCs.length !== 0;
    });
    return upcFilter;
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

  cpsc.sort = function(entries){
    console.log(entries);
    var upcArray = [];
    entries.forEach(function(entry){
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
    var replies = dataAll.filter(function(entry){
      var mfgrs = entry.Manufacturers.filter(function(mfgr){
        return mfgrName === mfgr.Name;
      });
      if (mfgrs.length > 0) return entry;
    });
    console.log(replies);
  };


  cpsc.controller = function(searchUPC){
    
  };
  module.cpsc = cpsc;
})(window);
