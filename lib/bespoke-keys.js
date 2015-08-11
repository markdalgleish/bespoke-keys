module.exports = function(options) {
  return function(deck) {
    var isHorizontal = options !== 'vertical',
      elementIsReadOnly = function(element) {
        return !(element.readOnly === false || element.isContentEditable);
      };

    document.addEventListener('keydown', function(e) {
      if (elementIsReadOnly(e.target)) {
        if (e.which == 34 || // PAGE DOWN
          (e.which == 32 && !e.shiftKey) || // SPACE WITHOUT SHIFT
          (isHorizontal && e.which == 39) || // RIGHT
          (!isHorizontal && e.which == 40) // DOWN
        ) { deck.next(); }

        if (e.which == 33 || // PAGE UP
          (e.which == 32 && e.shiftKey) || // SPACE + SHIFT
          (isHorizontal && e.which == 37) || // LEFT
          (!isHorizontal && e.which == 38) // UP
        ) { deck.prev(); }
      }
    });
  };
};
