module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      dev: {
        script: 'app.js'
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'app/**/*.js',
        'spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    jasmine_node: {
      options: {
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec'
      },
      all: ['spec/']
    },
    watch: {
      files: ['app.js', 'app/**/*.js', 'config/*.js', 'spec/**/*.js'],
      tasks: ['spec']
    }
  });

  // Loading modules
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('spec', ['jshint', 'jasmine_node']);

  grunt.registerTask('default', ['nodemon']);
};
