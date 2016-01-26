(function(module){
  var retrieveData = [];
  var objData = {};
  objData.all = [];
    $('#btn_search').on('click',function(){
      if (localStorage.searchResult) {
        var getData = JSON.parse(localStorage.getItem('searchResult'));
        retrieveData.push($('#searchText').val());
        localStorage.setItem('searchResult', JSON.stringify(retrieveData));
      }else {
        localStorage.setItem('searchResult', JSON.stringify($('#searchText').val()));
      }
    });
  module.objData = objData;
})(window);
