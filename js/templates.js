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
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n		<ul class=\"list-group\">\r\n			");
  stack1 = helpers.each.call(depth0, "b", "in", "bmarks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</ul>\r\n		");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n			<li class=\"list-group-item\">");
  stack1 = helpers._triageMustache.call(depth0, "b.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" | ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "link.add", "b", options) : helperMissing.call(depth0, "link-to", "link.add", "b", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" | <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", "b", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Delete</a> | <a href=\"/export/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "b.slug", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">Download</a>\r\n				<p>");
  stack1 = helpers._triageMustache.call(depth0, "b.desc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n			</li>\r\n			\r\n			");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("Edit");
  }

  data.buffer.push("<div clas=\"row\">\r\n	<div class=\"col-lg-6\">\r\n		<h2>Your Bookmark Files</h2>\r\n		<div class=\"alert alert-info\"></div>\r\n		");
  stack1 = helpers['if'].call(depth0, "bmarks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</div>\r\n	<div class=\"col-lg-6\">\r\n		<h2>Create New Bookmark File</h2>\r\n		<form role=\"form\">\r\n			<div class=\"form-group\">\r\n				<label class=\"control-label\">Title</label>\r\n				<input type=\"text\" id=\"btitle\" class=\"form-control\" placeholder=\"Bookmark file\" />\r\n			</div>\r\n			<div class=\"form-group\">\r\n				<label>Description</label>\r\n				<textarea class=\"form-control\" id=\"bdesc\" placeholder=\"Enter a short description\"></textarea>\r\n			</div>\r\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Create Bookmark</button>	\r\n		</form>\r\n	</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"confirm\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Confirm Delete</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this bookmark file?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirmDelete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" id=\"confirmDelete\">Delete</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->");
  return buffer;
  
});

Ember.TEMPLATES["link/add"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n		<form role=\"form\" class=\"form-inline\">\r\n			<div class=\"form-group col-lg-8\">\r\n			\r\n				<input type=\"text\" id=\"url\" class=\"form-control\" placeholder=\"Copy the url to add here: http://bookmark-url\" />\r\n			</div>\r\n			<button class=\"btn btn-default\" type=\"submit\">Add</button>\r\n		</form>\r\n		");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n		<ul>\r\n			");
  stack1 = helpers.each.call(depth0, "l", "in", "links", {hash:{
    'itemController': ("url")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</ul>\r\n		");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n\r\n				");
  stack1 = helpers['if'].call(depth0, "editing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			\r\n			");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n					<li>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.UrlEditView", {hash:{
    'value': ("content"),
    'class': ("form-control col-xs-1"),
    'action': ("updateUrl")
  },hashTypes:{'value': "ID",'class': "STRING",'action': "STRING"},hashContexts:{'value': depth0,'class': depth0,'action': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</li>\r\n				");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("	\r\n					<li><p ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editlink", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p> <a class='dellink' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteLink", "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Delete</a>\r\n					\r\n					</li>\r\n				");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push(" \r\n			<p>No links yet!</p>\r\n		");
  }

  data.buffer.push("<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveChanges", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save Changes</a> <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearChanges", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Clear Changes</a>\r\n<div class=\"row\">\r\n	<div class=\"col-lg-12\">\r\n		<h2>Edit ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\r\n		");
  stack1 = helpers.view.call(depth0, "App.AddALinkView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</div>\r\n</div>\r\n<hr />\r\n<div class=\"row\">\r\n	<div class=\"col-lg-12\">\r\n		");
  stack1 = helpers['if'].call(depth0, "links", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		");
  stack1 = helpers.unless.call(depth0, "links", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["link/error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("There was an error");
  
});