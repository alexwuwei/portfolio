(function(module) {

  var projectView = {};


  projectView.initIndexPage = function () {
    Project.all.forEach(function (a) {
      $('#projects').append(a.toHtml());
      $('.template').hide();
    });
  };



  module.projectView = projectView;
})(window);
