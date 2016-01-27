(function(module){
  var objData = {};
  objData.dataArray = [];
  objData.active;
  $('#btn_search').on('click',function(){
    var textBoxValue = $('#searchText').val();
    if (localStorage.searchResult) {
      objData.dataArray = JSON.parse(localStorage.getItem('searchResult'));
        if(objData.dataArray.indexOf(textBoxValue) === -1){
          objData.dataArray.push(textBoxValue);
          localStorage.setItem('searchResult', JSON.stringify(objData.dataArray));
         }
    }else {
      objData.dataArray.push(textBoxValue);
      localStorage.setItem('searchResult', JSON.stringify(objData.dataArray));
    }
    autoCompleteTextBox();
    objData.active = textBoxValue;

    if(isNaN(textBoxValue)){
      console.log('it\'s not a number');
    }
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
