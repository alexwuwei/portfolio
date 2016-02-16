(function(module){
  var repoView = {};

  var ui = function() {
    var $about = $('#about');

    $about.find('section').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    return $('<li>').html('<a href="' + repo.html_url + '">' + repo.name +'</a>');
  };

  repoView.index = function () {
    ui();
    $('#about').append(
      repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(window);
