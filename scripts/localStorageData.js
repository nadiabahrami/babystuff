(function(module){
  var objData = {};
  objData.dataArray = [];
  objData.active;
  $('#btn_search').on('click',function(){
    if (localStorage.searchResult) {
      objData.dataArray = JSON.parse(localStorage.getItem('searchResult'));
      objData.dataArray.push($('#searchText').val());
      localStorage.setItem('searchResult', JSON.stringify(objData.dataArray));
    }else {
      objData.dataArray.push($('#searchText').val());
      localStorage.setItem('searchResult', JSON.stringify(objData.dataArray));
    }
    autoCompleteTextBox();

    objData.active =$('#searchText').val();
    console.log(objData.active);

    // if(isNaN($('#searchText').val())){}

    $('#searchText').val('');
  });

  // for autoComplete in search textbox
  function autoCompleteTextBox() {
    var autoCompleteData = JSON.parse(localStorage.getItem('searchResult'));
    if (autoCompleteData) {
      $('#searchText').autocomplete({
        source: autoCompleteData,
        multiple: true,
        mustMatch: true,
        autoFill: true,
        minLength: 1
      });
    }
  }
  autoCompleteTextBox();


  module.objData = objData;
})(window);
