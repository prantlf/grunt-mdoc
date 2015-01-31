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

      mdoc.run(options);
    });

};
