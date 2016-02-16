(function(module) {
  var articleController = {};

  articleController.index = function(){
    Project.fetchAll(projectView.initIndexPage);
    $('#about').hide();
    $('#projects').show();
  };

  module.articleController = articleController;
})(window);
