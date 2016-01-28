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
  };

//this function filters for ProductUPC proerties
  cpsc.productUPC = function(dataAll){
    var upcFilter = dataAll.filter(function(dataEntry){
      return dataEntry.ProductUPCs.length !== 0;
    });
    return upcFilter;
  };

  cpsc.sort = function(entries){
    var upcArray = [];
    entries.forEach(function(entry){
      upcArray.push(entry.ProductUPCs[0].UPC.replace(/\s/g,''));
    });
    // console.log(upcArray);
    return upcArray;
  };

// this function takes the upc from user and compare against the array fed into it
  cpsc.userCompare = function(entriesWithUPC, userUPC){
    var upcArr = [];
    upcArr = cpsc.sort(entriesWithUPC);
    var check = upcArr.indexOf(userUPC);
    if(check === -1) {
      console.log(userUPC);
      console.log('notfound');
      return false;
    }else{
      console.log('found');
      console.log(userUPC);
      console.log(entriesWithUPC[check]);
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


  cpsc.controller = function(upc){
    var upcResult = cpsc.productUPC(cpsc.all);
    var cpscSearch = cpsc.userCompare(upcResult, upc);
    resultArray.flagProduction(cpscSearch);
    var productInfo = walmart.upcRequest(upc);



  };

  cpsc.getMfgr = function (item){
    console.log(item.name.split(/\s+/).slice(0,2).join(' '));
    console.log(item.name.split(/\s+/).slice(0,1).join(' '));
    cpsc.mfgrSearch(item.name.split(/\s+/).slice(0,2).join(' '), cpsc.all);
    cpsc.mfgrSearch(item.name.split(/\s+/).slice(0,1).join(' '), cpsc.all);
  }

  module.cpsc = cpsc;
})(window);
