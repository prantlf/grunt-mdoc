# grunt-mdoc [![Build Status](https://travis-ci.org/prantlf/grunt-mdoc.png)](https://travis-ci.org/prantlf/grunt-mdoc) [![NPM version](https://badge.fury.io/js/grunt-mdoc.png)](http://badge.fury.io/js/grunt-mdoc) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![NPM Downloads](https://nodei.co/npm/grunt-mdoc.png?downloads=true&stars=true)](https://nodei.co/npm/grunt-mdoc.png?downloads=true&stars=true)

This module provides a grunt multi-task generating HTML documentation from
Markdown sources using [mdoc].

## Installation

You need [node >= 0.10][node], [npm] and [grunt >= 0.4][grunt] installed
and your project build managed by a [Gruntfile][getting_started] with the
necessary modules listed in [package.json].

Install the grunt-mdoc module and add it to the development dependencies:

```bash
npm install grunt-mdoc --save-dev
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

```bash
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

## License

Copyright (c) 2015 Ferdinand Prantl
Licensed under the MIT license.

[node]: http://nodejs.org
[npm]: http://npmjs.org
[grunt]: https://gruntjs.com
[getting_started]: https://github.com/gruntjs/grunt/wiki/Getting-started
[mdoc]: https://github.com/millermedeiros/mdoc
