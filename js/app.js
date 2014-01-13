var App = Ember.Application.create();

App.Router.map(function(){
	this.resource('link', function(){
		this.route("show", {path: '/show/:name'});
		this.route("add", {path: '/add/:name'});
	});
});

App.BookmarkFile = Ember.Object.extend({
	
});
App.BookmarkFile.reopenClass({
	newFile: function(){
		var bfile;
		return $.post('/create/new', function(data){
			return App.BookmarkFile.create(data);
		});
	},

	get: function(name){
		return $.get('/bookmark/' + name, function(data){
			return App.BookmarkFile.create(data);
		});
	}
});


App.LinkShowRoute = Ember.Route.extend({
	serialize: function(model){
		return {'name': model.name}
	}
});

App.LinkAddRoute = Ember.Route.extend({
	serialize: function(model){
		return {'name': model.name}
	},

	model: function(params){
		return App.BookmarkFile.get(params.name);
	},

	setupController: function(controller, model){
		controller.set('content', model);
	}
});

App.IndexController = Ember.Controller.extend({
	actions:{
		create: function(){
			var bfile = App.BookmarkFile.newFile($('#btitle').val(), $('#bdesc').val());			
			this.transitionToRoute('link.add', bfile);
		}
	}
});
