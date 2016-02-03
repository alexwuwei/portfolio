var projectView = {};

projectView.handleMainNavBar = function () {
  $('.main-nav-bar').on('click', 'li', function (event) {
    event.preventDefault();
    $('.nav-content').hide();
  });
};

projectView.handleMainNavBar();
