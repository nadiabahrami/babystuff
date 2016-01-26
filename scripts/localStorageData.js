(function(module){

  var retrieveData = [];
  var objData = {};
  objData.all = [];
  objData.request = function(){
    console.log('click');
    $('#btn_search').on('click',function(){
      if (localStorage.searchResult) {
        retrieveData = JSON.parse(localStorage.getItem('searchResult'));
        console.log(retrieveData);

        retrieveData.push = $('#searchText').val();
        console.log(retrieveData);

        localStorage.setItem('searchResult', JSON.stringify(retrieveData));
    }else {
      localStorage.setItem('searchResult', JSON.stringify($('#searchText').val()));
    }
  });
}
module.objData = objData;
})(window);
