'use strict';

var mdoc = require('mdoc');

module.exports = function (grunt) {

  grunt.registerMultiTask('mdoc',
    'Produce HTML output from Markdown input using mdoc',
    function () {
      var data = this.data,
          options = this.options({
            inputDir:  data.src,
            outputDir: data.dest
          });

      grunt.verbose.writeflags(options, 'Options');
      try {
        mdoc.run(options);
      } catch (error) {
        grunt.log.error();
        grunt.fail.warn('Unable to generate the documentation (' +
                        error.message + ').', error);
      }
    });

};
