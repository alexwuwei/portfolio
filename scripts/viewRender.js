(function(module) {

  var projectView = {};

  // projectView.handleMainNavBar = function () {
  //   $('.main-nav-bar').on('click', 'li', function (event) {
  //     event.preventDefault();
  //     $('.nav-content').hide();
  //     var $dataType = $(this).data('content');
  //     console.log($dataType);
  //     console.log(this);
  //     $('#' + $dataType).fadeIn('slow');
  //   });
  // };

  projectView.initIndexPage = function () {
    Project.all.forEach(function (a) {
      $('#projects').append(a.toHtml());
      $('.template').hide();
    });
  };


  // projectView.handleMainNavBar();
  module.projectView = projectView;
})(window);
