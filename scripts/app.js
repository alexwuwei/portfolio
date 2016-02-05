var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
  this.image = opts.image;
}

Project.prototype.toHtml = function () {
  // var $newProject = $('article.template').clone();
  // $newProject.attr('data-category', this.category);
  // $newProject.find('h2').text(this.title);
  // $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  // $newProject.find('.project-body').append(this.image);
  // $newProject.find('.project-body').append(this.body);
  // $newProject.append('<hr>');
  // $newProject.removeClass();
  // return $newProject;
  var template = Handlebars.compile($('#project-template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published' + this.daysAgo + ' days ago' : '(draft)';
  var html = template(rawData);
  return template(this);

};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});

$('.template').hide();
