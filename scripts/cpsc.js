(function(module){// search recalls

  var cpsc = {};
  cpsc.all = [];
  cpsc.recallMnfData = [];

  cpsc.getRecalls = function() {
    $('.form-button').hide();
    $('.form-spinner').fadeIn();
    $('.result-spinner').hide();
    $.get('http://www.saferproducts.gov/RestWebServices/Recall?format=json', function(data){
      if (data != null) {
        cpsc.all = data;
        $('.form-button').fadeIn();
        $('.form-spinner').hide();
      }else{
        alert('Recall database unavailable!');
      }
    });
  };

  cpsc.productUPC = function(dataAll){
    var upcObjects = dataAll.filter(function(dataEntry){
      return dataEntry.ProductUPCs.length !== 0;
    });
    return upcObjects;
  };

  cpsc.sort = function(upcData, upc){
    var replies = upcData.filter(function(entry){
      var upcObjs = entry.ProductUPCs.filter(function(upcObj){
        return upc === upcObj.UPC;
      });
      if (upcObjs.length > 0) {
        return entry;
      }
    });
    if (replies.length > 0) {
      return replies;
    } else {
      return false;
    }
  };

  cpsc.mfgrSearch = function(mfgrName, dataAll){
    var replies = dataAll.filter(function(entry){
      var mfgrs = entry.Manufacturers.filter(function(mfgr){
        return mfgrName === mfgr.Name;
      });
      if (mfgrs.length > 0) {
        return entry;
      } else {
        return false;
      }
    });
    walmart.showMnfRecall(replies);
  };

  cpsc.controller = function(upc){
    var upcResult = cpsc.productUPC(cpsc.all);
    var cpscSearch = cpsc.sort(upcResult, upc);
    resultArray.flagProduction(cpscSearch);
    var productInfo = walmart.upcRequest(upc);
  };

  cpsc.getMfgr = function (item){
    cpsc.mfgrSearch(item.name.split(/\s+/).slice(0,2).join(' '), cpsc.all);
    cpsc.mfgrSearch(item.name.split(/\s+/).slice(0,1).join(' '), cpsc.all);
  };

  module.cpsc = cpsc;
})(window);
