describe("bespoke-keys", function() {

  Function.prototype.bind = Function.prototype.bind || require('function-bind');

  var simulant = require('simulant'),
    bespoke = require('bespoke'),
    keys = require('../../lib-instrumented/bespoke-keys.js'),
    forms = require('bespoke-forms');

  var deck,
    inputBox = null,
    createDeck = function(optionValue) {
      var parent = document.createElement('article');
      parent.innerHTML = '<section><input type="text"></section><section></section>';
      inputBox = parent.querySelector('input');

      deck = bespoke.from(parent, [
        keys(optionValue),
        forms(optionValue)
      ]);
    },

    pressKey = function(which, isShift, element) {
      simulant.fire((element || document), 'keydown', { which: which, shiftKey: !!isShift });
    };

  describe("horizontal deck", function() {

    [undefined, 'horizontal'].forEach(function (optionValue) {

      describe("with an option value of '" + optionValue + "'", function() {

        beforeEach(createDeck.bind(null, optionValue));

        describe("next slide", function() {

          it("should go to the next slide when pressing the space bar", function() {
            pressKey(32);
            expect(deck.slide()).toBe(1);
          });

          it("should go to the next slide when pressing the right arrow", function() {
            pressKey(39);
            expect(deck.slide()).toBe(1);
          });

          it("should go to the next slide when pressing page down", function() {
            pressKey(34);
            expect(deck.slide()).toBe(1);
          });

          it("should not go to the next slide when pressing the right arrow with shift pressed", function() {
            pressKey(39, true);
            expect(deck.slide()).toBe(0);
          });

          it("should not go to the next slide when pressing the space bar in an input field", function() {
            pressKey(32, false, inputBox);
            expect(deck.slide()).toBe(0);
          });

        });

        describe("previous slide", function() {

          beforeEach(function() {
            deck.slide(1);
          });

          it("should go to the previous slide when pressing the left arrow", function() {
            pressKey(37);
            expect(deck.slide()).toBe(0);
          });

          it("should go to the previous slide when pressing page up", function() {
            pressKey(33);
            expect(deck.slide()).toBe(0);
          });

          it("should go to the previous slide when pressing the shift and space bar", function() {
            pressKey(32, true);
            expect(deck.slide()).toBe(0);
          });

          it("should not go to the previous slide when pressing the left arrow with shift pressed", function() {
            pressKey(37, true);
            expect(deck.slide()).toBe(1);
          });

          it("should not go to the previous slide when pressing the shift and space bar in an input field", function() {
            pressKey(32, true, inputBox);
            expect(deck.slide()).toBe(1);
          });

        });

      });

    });

  });

  describe("vertical deck", function() {

    beforeEach(createDeck.bind(null, 'vertical'));

    describe("next slide", function() {

      it("should go to the next slide when pressing the space bar", function() {
        pressKey(32);
        expect(deck.slide()).toBe(1);
      });

      it("should go to the next slide when pressing the down arrow", function() {
        pressKey(40);
        expect(deck.slide()).toBe(1);
      });

      it("should go to the next slide when pressing page down", function() {
        pressKey(34);
        expect(deck.slide()).toBe(1);
      });

    });

    describe("previous slide", function() {

      beforeEach(function() {
        deck.slide(1);
      });

      it("should go to the previous slide when pressing the up arrow", function() {
        pressKey(38);
        expect(deck.slide()).toBe(0);
      });

      it("should go to the previous slide when pressing page up", function() {
        pressKey(33);
        expect(deck.slide()).toBe(0);
      });

      it("should go to the previous slide when pressing the shift and space bar", function() {
        pressKey(32, true);
        expect(deck.slide()).toBe(0);
      });

    });

  });

});
