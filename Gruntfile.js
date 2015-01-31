'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    jshint: {
      all:     [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      },
    },

    mdoc: {
      basic: {
        src:     'test/basic/input',
        dest:    'test/basic/output',
        options: {
          indexContentPath: 'test/basic/index.mdown',
          baseTitle:        'mdoc example'
        }
      }
    },

    nodeunit: {
      tests: ['test/*_test.js'],
    },

    clean: {
      tests: ['test/**/output']
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['jshint', 'clean', 'mdoc', 'nodeunit']);
  grunt.registerTask('default', ['test']);

};
