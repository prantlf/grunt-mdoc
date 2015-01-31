'use strict';

var grunt = require('grunt'),
    fs    = require('fs');

exports.mdoc = {

  basic: function (test) {
    test.expect(1);

    var expected = [
          'array.html',
          'assets_',
          'index.html',
          'math.html',
          'number.html',
          'sidebar_.html'
        ],
        actual = fs.readdirSync('test/basic/output').sort();

    test.deepEqual(expected, actual, 'should generate output files');

    test.done();
  }

};
