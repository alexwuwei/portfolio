(function(module) {
  var articlesController = {};

  articlesController.index = function(){
    Project.fetchAll(projectView.initIndexPage);
    $('#projects #about').hide();
    $('#projects').show();
  };

})(window);
