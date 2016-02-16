(function(module){
  var repoView = {};

  var ui = function() {
    var $about = $('#about');
    var $aboutRepos = $('#aboutRepos');
    var $projects = $('#projects');

    $aboutRepos.find('ul').empty();
    $projects.hide();
    $about.show();
  };

  var render = function(repo) {
    return $('<li>').html('<a href="' + repo.html_url + '">' + repo.name +'</a>');
  };

  repoView.index = function () {
    ui();
    $('#aboutRepos ul').append(
      repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(window);
