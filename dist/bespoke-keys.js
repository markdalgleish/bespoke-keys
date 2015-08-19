/*!
 * bespoke-keys v1.1.0
 *
 * Copyright 2015, Mark Dalgleish
 * This content is released under the MIT license
 * http://mit-license.org/markdalgleish
 */

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var o=n;o=o.bespoke||(o.bespoke={}),o=o.plugins||(o.plugins={}),o.keys=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = function(options) {
  return function(deck) {
    var isHorizontal = options !== 'vertical',
      KEYCODE = { SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40 },
      isModifierKeyDown = function(e) {
        return !!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey);
      },
      keydownHandler = function(e) {
        if (e.which === KEYCODE.SPACE) {
          if (!e.ctrlKey && !e.altKey && !e.metaKey) {
            return e.shiftKey ? deck.prev() : deck.next();
          }
        }
        else if (e.which === KEYCODE.PAGE_DOWN ||
            (isHorizontal && e.which === KEYCODE.RIGHT) ||
            (!isHorizontal && e.which === KEYCODE.DOWN)) {
          if (!isModifierKeyDown(e)) { deck.next(); }
        }
        else if (e.which === KEYCODE.PAGE_UP ||
            (isHorizontal && e.which === KEYCODE.LEFT) ||
            (!isHorizontal && e.which === KEYCODE.UP)) {
          if (!isModifierKeyDown(e)) { deck.prev(); }
        }
      };

    document.addEventListener('keydown', keydownHandler, false);
  };
};

},{}]},{},[1])
(1)
});