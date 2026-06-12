/**
 * typewriter.js
 * Cycles the hero role text with a type-on / erase typewriter effect:
 * "Full-Stack Developer" → "AI/ML Engineer" → "Artist & Creator" → repeat.
 */

(function () {
  "use strict";

  var ROLES = ["Full-Stack Developer", "AI/ML Engineer", "Artist & Creator"];
  var TYPE_SPEED = 75;    // ms per character typed
  var ERASE_SPEED = 40;   // ms per character erased
  var HOLD_TIME = 1400;   // ms to pause on a full word

  /** Drive the typewriter loop over the target element. */
  function runTypewriter(el) {
    var roleIndex = 0;
    var charIndex = 0;
    var erasing = false;

    function tick() {
      var word = ROLES[roleIndex];

      if (!erasing) {
        // Typing forward.
        el.textContent = word.slice(0, ++charIndex);
        if (charIndex === word.length) {
          erasing = true;
          return setTimeout(tick, HOLD_TIME);
        }
        return setTimeout(tick, TYPE_SPEED);
      }

      // Erasing back to empty.
      el.textContent = word.slice(0, --charIndex);
      if (charIndex === 0) {
        erasing = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
        return setTimeout(tick, TYPE_SPEED);
      }
      return setTimeout(tick, ERASE_SPEED);
    }

    tick();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById("typewriter");
    if (el) runTypewriter(el);
  });
})();
