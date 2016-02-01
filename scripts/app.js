var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Project.prototype.toHtml = function () {
  var $newProject = $('article.template').clone();
  $newProject.attr('data-category', this.category);
  $newProject.find('h2').text(this.title);
  $newProject.find('time').html('about' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + 'days ago');
  $newProject.find('.project-body').html(this.body);
  $newProject.append('<hr>');
  $newProject.removeClass();
  return $newProject;
};
