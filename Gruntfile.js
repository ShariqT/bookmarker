module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.initConfig({
		emberTemplates:{
			options:{
				templateBasePath: "js/templates/"
			},
			compile:{
				files:{
					"js/templates.js": "js/templates/**/*.hbs"
				}
			}
		},

		watch:{
			scripts:{
				files:["js/templates/**/*.hbs"],
				tasks:['emberTemplates']
			}
		}
	});

	grunt.registerTask('default', ['watch:scripts']);
}