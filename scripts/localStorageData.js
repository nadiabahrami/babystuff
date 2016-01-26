(function(module){

  var retrieveData = [];
  var objData = {};
  objData.all = [];
  objData.request = function(){
    $('#btn_search').on('click',function(){
      if (localStorage.searchResult) {
        retrieveData = JSON.parse(localStorage.getItem('searchResult'));
        retrieveData.push= $('#searchText').val();
        localStorage.setItem('searchResult', JSON.stringify(retrieveData));
    }else {
      localStorage.setItem('searchResult', JSON.stringify($('#searchText').val()));
    }
  });
}
module.objData = objData;
})(window);
