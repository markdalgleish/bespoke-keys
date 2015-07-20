[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-keys.png?branch=master)](https://travis-ci.org/markdalgleish/bespoke-keys) [![Coverage Status](https://coveralls.io/repos/markdalgleish/bespoke-keys/badge.png)](https://coveralls.io/r/markdalgleish/bespoke-keys) ![](https://david-dm.org/markdalgleish/bespoke-keys.svg)

# bespoke-keys

Keyboard Support for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/markdalgleish/bespoke-keys/master/dist/bespoke-keys.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-keys/master/dist/bespoke-keys.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  keys = require('bespoke-keys');

bespoke.from('article', [
  keys()
}];
```

When using browser globals:

```js
bespoke.from('article', [
  bespoke.plugins.keys()
}];
```

By default, bespoke-keys uses the spacebar, left/right and page up/down keys to navigate the slides.

If your presentation is laid out vertically, you can allow navigation with up/down instead of left/right with the `vertical` option:

```js
bespoke.from('article', [
  keys('vertical')
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-keys
```

### Bower

```bash
$ bower install bespoke-keys
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
