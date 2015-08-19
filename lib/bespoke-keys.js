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
