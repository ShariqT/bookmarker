var App = Ember.Application.create();

App.Router.map(function(){
	this.resource('link', function(){
		this.route("show", {path: '/show/:slug'});
		this.route("add", {path: '/add/:slug'});
	});
});

App.BookmarkFile = Ember.Object.extend({
	save: function(){
		var data = {slug: this.slug, name: this.name, desc:this.desc, links: this.links};
		$.post('/bookmark/save',data, function(res){	
			if(res.err) console.log('no save');
		});
	}
});

App.BookmarkFile.reopenClass({
	newFile: function(btitle, bname, bdesc, cb){
		var bfile = App.BookmarkFile.create();
		$.post('/create/new',{slug: btitle, title: bname, desc: bdesc}, function(data){
			bfile.setProperties(data);
			cb(bfile);
		});
	},

	get: function(slug){
		var newObj = App.BookmarkFile.create();
		$.get('/bookmark/' + slug, function(data){
			console.log(App.BookmarkFile.create(data));
			return newObj.setProperties(data);

		});

		return newObj;
	},

	all: function(){
		var bookmarks = [];
		$.get('/bookmark/get/all', function(data){
			console.log(data);
			for(var i = 0; i < data.length; i++){
				bookmarks.pushObject(App.BookmarkFile.create(data[i]));
			}
		});

		return bookmarks;
	},

	delete: function(slug, cb){
		$.post('/bookmark/delete',{slug: slug}, function(data){
			if(data.err) console.log('no delete!');
			cb();
		});
	}
});


App.LinkShowRoute = Ember.Route.extend({
	serialize: function(model){
		return {'slug': model.slug}
	}
});



App.IndexRoute = Ember.Route.extend({
	model: function(params){
		return App.BookmarkFile.all();
	},

	setupController: function(controller, model){
		controller.set('bmarks', model);
	}
});

App.IndexController = Ember.Controller.extend({
	objToDelete: null,
	actions:{
		create: function(){
			var btitle = encodeURI($('#btitle').val()).replace(/%20/g, '-').replace(/'|[,]/g, '');
			var self = this;
			App.BookmarkFile.newFile(btitle, $('#btitle').val(), $('#bdesc').val(), function(bfile){
				self.transitionToRoute('link.add', bfile);
			});			
		},

		delete: function(bmark){
			this.set('objToDelete', bmark);
			$('#confirmDelete').data('slug', bmark.get('slug'));
			$('#confirm').modal('show');
		},

		confirmDelete: function(){
			var slug = $('#confirmDelete').data('slug');
			this.get('bmarks').removeObject(this.get('objToDelete'));
			var self = this;
			App.BookmarkFile.delete(slug, function(){
				$('#confirm').modal('hide');
				$('.alert').html(slug + ' was deleted!').show(500).delay(2000).hide(500);
				self.set('objToDelete', null);
			});
		}
	}
});

App.IndexView = Ember.View.extend({
	didInsertElement: function(){
		$('.alert').html('').hide();
		$('#confirm').modal({show:false});
	}
});




App.LinkAddRoute = Ember.Route.extend({
	serialize: function(model){
		return {'slug': model.slug}
	},

	model: function(params){
		console.log(App.BookmarkFile.get(params.slug));
		return App.BookmarkFile.get(params.slug);
	},

	setupController: function(controller, model){
		controller.set('content', model);
	}
});

App.LinkErrorRoute = Ember.Route.extend();

App.LinkAddController = Ember.ObjectController.extend({
	editing: false,

	actions:{
		error:function(){
			console.log('insideof err');
		},
		addLink: function(url){
			this.content.links.pushObject(url);
			$('#url').val('').focus();
		},

		saveChanges: function(){
			this.get('content').save();
		},

		clearChanges: function(){
			this.get('content').links.clear();
		}

		
	}
});

App.AddALinkView = Ember.View.extend({
	didInsertElement: function(){
		$('#url').focus();
	},

	submit: function(evt){
		evt.preventDefault();
		if( $('#url').val() !== ''){
			this.get('controller').send('addLink', $('#url').val());
		}
	}
});


App.UrlController = Ember.Controller.extend({
	init: function(){
		this.oldContent = this.get('content');
	},

	oldContent: "",

	editing: false,

	actions:{
		editlink: function(){
			this.set('editing', true);
		},

		deleteLink: function(){
			console.log('dfds');
			console.log(this.get('content'));
			var bmarks = this.parentController.get('content');
			bmarks.links.removeObject(this.get('content'));
		},

		updateUrl: function(){
			var bmarks = this.parentController.get('content');
			var pos = bmarks.links.indexOf(this.get('oldContent'));
			bmarks.links.splice(pos, 1, this.get('content'));
			this.set('editing', false);
			this.set('oldContent', this.get('content'));
		}
	}


});


App.UrlEditView = Ember.TextField.extend({
	didInsertElement: function(){
		this.$().focus();
	}
});