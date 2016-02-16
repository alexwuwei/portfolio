(function(module) {
  var aboutController = {};

  aboutController.index = function () {
    $('#projects').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(window);
