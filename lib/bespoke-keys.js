module.exports = function(options) {
  return function(deck) {
    var KEYCODE = { SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 },
      isHorizontal = options !== 'vertical',
      indexOfLastSlide = deck.slides.length - 1,
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
        else if (e.which === KEYCODE.END) {
          if (deck.slide() !== indexOfLastSlide && !isModifierKeyDown(e)) { deck.slide(indexOfLastSlide); }
        }
        else if (e.which === KEYCODE.HOME) {
          if (deck.slide() !== 0 && !isModifierKeyDown(e)) { deck.slide(0); }
        }
      };

    document.addEventListener('keydown', keydownHandler, false);
  };
};
