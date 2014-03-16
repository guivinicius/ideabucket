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
      ]
    },
    jasmine: {
      src: ['app.js', 'app/**/*.js'],
      options: {
        specs: 'spec/**/*.js'
      }
    }
  });

  // Loading modules
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('spec', ['jshint', 'jasmine']);

  grunt.registerTask('default', ['nodemon']);
};
