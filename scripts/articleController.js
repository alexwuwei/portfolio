(function(module) {
  var articleController = {};

  articleController.loadAll = function(ctx, next) {
    $('#projects').empty();
    var articleData = function(allArticles) {
      ctx.articles = Project.all;
      next();
    };
    if (Project.all.length) {
      ctx.articles = Project.all;
      next();
    } else {
      // Project.fetchAll(articleData);
      $('#projects').empty();
      next();
    }
  };

  articleController.index = function(ctx, next){
    Project.fetchAll(ctx.articles);
    $('#about').hide();
    $('#projects').show();
  };

  module.articleController = articleController;
})(window);
