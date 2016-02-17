(function(module) {

  var projects = [];

  function Project (opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
  }

  Project.all = [];

  Project.prototype.toHtml = function () {
    var template = Handlebars.compile($('#project-template').text());
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published' + this.daysAgo + ' days ago' : '(draft)';
    var html = template(rawData);
    return template(this);

  };

  Project.loadAll = function () {
    rawData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    Project.all = rawData.map(function(ele) {
      return new Project(ele);
    });
  };


  Project.fetchAll = function(next) {
    if (localStorage.rawData) {
      $.ajax ({
        type: 'HEAD',
        url: 'data/projectArticles.json',
        success: function (data, message, xhr) {
          console.log(xhr);
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || localStorage.eTag !== eTag) {
            localStorage.eTag = eTag;
            Project.handleLocalJson();
          } else {
            Project.loadAll(JSON.parse(localStorage.rawData));
            console.log('all projects: ' + Project.all);
            viewRender.initIndexPage(); //revisit
          }
        }
      });
      next();
    } else {
      Project.handleLocalJson();
      next();
    };
  };

  Project.handleLocalJson = function () {
    $.getJSON('data/projectArticles.json', function (data) {
      console.log(data);
      Project.loadAll(data);
      projectView.initIndexPage(); //revisit
      localStorage.setItem('data', JSON.stringify(data));
    });
  };
  module.Project = Project;
})(window);
