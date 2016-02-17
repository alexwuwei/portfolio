(function(module) {
  var aboutController = {};

  aboutController.index = function () {
    $('#projects').hide();
    $('#about').show();
    repos.requestRepos(repoView.index);
  };
  module.aboutController = aboutController;
})(window);
