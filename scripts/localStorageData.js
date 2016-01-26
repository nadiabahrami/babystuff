(function(module){
  var dataArray = [];
    $('#btn_search').on('click',function(){
      if (localStorage.searchResult) {
        dataArray = JSON.parse(localStorage.getItem('searchResult'));
        dataArray.push($('#searchText').val());
        localStorage.setItem('searchResult', JSON.stringify(dataArray));
      }else {
        dataArray.push($('#searchText').val());
        localStorage.setItem('searchResult', JSON.stringify(dataArray));
      }
    });
  module.dataArray = dataArray;
})(window);
