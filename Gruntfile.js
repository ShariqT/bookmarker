module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-ember-templates');
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
		}
	});

	grunt.registerTask('default', ['emberTemplates']);
}