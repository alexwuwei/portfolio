var projectView = {};

projectView.handleMainNavBar = function () {
  $('.main-nav-bar').on('click', 'li', function (event) {
    event.preventDefault();
    $('.nav-content').hide();
    var $dataType = $(this).data('content');
    console.log($dataType);
    console.log(this);
    $('#' + $dataType).show();
  });
};

projectView.handleMainNavBar();
