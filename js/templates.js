Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"masthead\">\r\n	<h1><a href=\"/\">Bookmarks</a></h1>\r\n</div>\r\n<div class=\"container\">\r\n	");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("			\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div clas=\"row\">\r\n	<div class=\"col-lg-6\">\r\n		<h2>Your Bookmark Files</h2>\r\n		<ul class=\"list-group\">\r\n			<li class=\"list-group-item\">My Bookmarks | <a href=\"\">Edit</a> | <a href=\"\">Delete</a>\r\n				<p>dfsadfsdf</p>\r\n			</li>\r\n			<li class=\"list-group-item\">Sample Bookmarks | <a href=\"\">Edit</a> | <a href=\"\">Delete</a>\r\n				<p>ndf  sdfdfsd sdflksdjfwoefsd</p>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<div class=\"col-lg-6\">\r\n		<h2>Create New Bookmark File</h2>\r\n		<form role=\"form\">\r\n			<div class=\"form-group\">\r\n				<label class=\"control-label\">Title</label>\r\n				<input type=\"text\" id=\"btitle\" class=\"form-control\" placeholder=\"Bookmark file\" />\r\n			</div>\r\n			<div class=\"form-group\">\r\n				<label>Description</label>\r\n				<textarea class=\"form-control\" id=\"bdesc\" placeholder=\"Enter a short description\"></textarea>\r\n			</div>\r\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Create Bookmark</button>	\r\n		</form>\r\n	</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["link/add"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"row\">\r\n	<div class=\"col-lg-12\">\r\n		<h2>Edit ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\r\n		<form role=\"form\">\r\n			<div class=\"form-group\">\r\n				<input type=\"text\" class=\"form-control col-lg-12\" placeholder=\"Copy the url to add here: http://bookmark-url\" />\r\n			</div>\r\n		</form>\r\n	</div>\r\n</div>\r\n<hr />\r\n<div class=\"row\">\r\n	<div class=\"col-lg-12\">\r\n		<ul>\r\n			<li>Link Name</li>\r\n		</ul>\r\n	</div>\r\n</div>");
  return buffer;
  
});