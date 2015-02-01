# grunt-mdoc [![NPM version](https://badge.fury.io/js/grunt-mdoc.png)](http://badge.fury.io/js/grunt-mdoc) [![Build Status](https://travis-ci.org/prantlf/grunt-mdoc.png)](https://travis-ci.org/prantlf/grunt-mdoc) [![Coverage Status](https://coveralls.io/repos/prantlf/grunt-mdoc/badge.svg)](https://coveralls.io/r/prantlf/grunt-mdoc) [![Dependency Status](https://david-dm.org/prantlf/grunt-mdoc.svg)](https://david-dm.org/prantlf/grunt-mdoc) [![devDependency Status](https://david-dm.org/prantlf/grunt-mdoc/dev-status.svg)](https://david-dm.org/prantlf/grunt-mdoc#info=devDependencies) [![devDependency Status](https://david-dm.org/prantlf/grunt-mdoc/peer-status.svg)](https://david-dm.org/prantlf/grunt-mdoc#info=peerDependencies) [![Code Climate](https://codeclimate.com/github/prantlf/grunt-mdoc/badges/gpa.svg)](https://codeclimate.com/github/prantlf/grunt-mdoc) [![Codacy Badge](https://www.codacy.com/project/badge/f3896e8dfa5342b8add12d50390edfcd)](https://www.codacy.com/public/prantlf/grunt-mdoc) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![NPM Downloads](https://nodei.co/npm/grunt-mdoc.png?downloads=true&stars=true)](https://www.npmjs.com/package/grunt-mdoc)

This module provides a grunt multi-task generating HTML documentation from
Markdown sources using [mdoc].

## Installation

You need [node >= 0.8][node], [npm] and [grunt >= 0.4][Grunt] installed
and your project build managed by a [Gruntfile] with the necessary modules
listed in [package.json].  If you haven't used Grunt before, be sure to
check out the [Getting Started] guide, as it explains how to create a
Gruntfile as well as install and use Grunt plugins.  Once you're familiar
with that process, you may install this plugin with this command:

```shell
$ npm install grunt-mdoc --save-dev
```

## Input

Store your written articles in to a folder (input), specify a target folder
for the generated HTML pages and optionally a title page (index.md):

```text
input/
  overview.md
  ...
output/
 assets_/
 index.html
 overview.html
 ...
index.md
Gruntfile.js
```

## Configuration

Add the `mdoc` entry with the mdoc task configuration to the options of the
`grunt.initConfig` method:

```js
grunt.initConfig({
  mdoc: {
    dist: {
      src: 'input',
      dest: 'output',
      options: {
        indexContentPath: 'index.md',
        baseTitle: 'My Project Documentation'
      }
    }
  }
});
```

The supported options are:

 * `src` : (required) the source folder with files in the Markdown
           format; sub-folders will be searched recursively
 * `dest` : (required) the target folder for the HTML files
 * `indexContent`: (optional) HTML markup to put to the top of the index
                   page; it takes precedence over `indexContentPath`
 * `indexContentPath` : (optional) Markdown source file for the index page
 * `baseTitle` : (optional) the title text for the HTML page head
 * ... refer to the [mdoc] documentation for all the available options

Then, load the plugin:

```javascript
grunt.loadNpmTasks('grunt-mdoc');
```

## Build

Call the `mdoc` task:

```shell
$ grunt mdoc
```

or integrate it to your build sequence in `Gruntfile.js`:

```js
grunt.registerTask('default', ['mdoc', ...]);
```

## Notes

The generated `index.html` file should be opened from a HTTP server.  The
sidebar that shows the documentation index is loaded by AJAX, which does
not work when the HTML page is opened from the `file://` scheme.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding
style.  Add unit tests for any new or changed functionality. Lint and test
your code using Grunt.

## License

Copyright (c) 2015 Ferdinand Prantl

Licensed under the MIT license.

[node]: http://nodejs.org
[npm]: http://npmjs.org
[package.json]: https://docs.npmjs.com/files/package.json
[Grunt]: https://gruntjs.com
[Gruntfile]: http://gruntjs.com/sample-gruntfile
[Getting Gtarted]: https://github.com/gruntjs/grunt/wiki/Getting-started
[mdoc]: https://github.com/millermedeiros/mdoc
