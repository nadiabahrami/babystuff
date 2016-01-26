(function(module) {


var templateData = walmart.all;
​
 var template = $("#searches").html();  

 var compiled = Handlebars.compile (template);  

 $(document.body).append(compiled(templateData));


})(window);
