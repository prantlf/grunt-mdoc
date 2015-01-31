'use strict';

module.exports = function (grunt) {

  var coverage = process.env.GRUNT_MDOC_COVERAGE;

  require('time-grunt')(grunt);

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
      tests:   ['test/*_test.js'],
      options: {
        reporter: coverage ? 'lcov' : 'verbose',
        reporterOutput: coverage ? 'coverage/tests.lcov' : undefined
      }
    },

    clean: {
      tests:    ['test/**/output'],
      coverage: ['coverage']
    },

    jscoverage: {
      tasks: {
        expand: true,
        cwd:    'tasks/',
        src:    '*.js',
        dest:   'coverage/tasks/'
      }
    },

    coveralls: {
      tests: {
        src: 'coverage/tests.lcov'
      }
    },

    sonarRunner: {
      analysis: {
        options: {
          debug: true,
          separator: '\n',
          sonar: {
            host: {
              url: 'http://localhost:9000'
            },
            jdbc: {
              url: 'jdbc:mysql://localhost:3306/sonar',
              username: 'sonar',
              password: 'sonar'
            },
            projectKey: 'sonar:grunt-sonar-runner:0.1.0',
            projectName: 'grunt-mdoc',
            projectVersion: '0.1.3',
            sources: 'tasks',
            language: 'js',
            sourceEncoding: 'UTF-8'
          }
        }
      }
    }

  });

  grunt.loadTasks(coverage ? 'coverage/tasks' : 'tasks');

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['jshint', 'clean:tests', 'mdoc', 'nodeunit']);
  grunt.registerTask('instrument', ['jshint', 'clean', 'jscoverage']);
  grunt.registerTask('post_coverage', ['test', 'coveralls']);
  grunt.registerTask('analyze', ['sonarRunner']);
  grunt.registerTask('default', ['test']);

};
