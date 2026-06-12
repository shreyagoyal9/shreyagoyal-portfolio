/**
 * parallax.js
 * Subtle mouse-move parallax for the floating hero doodles.
 * Each doodle moves by its data-depth factor, capped at ~20px, so the
 * effect stays gentle. Disabled for touch devices and reduced-motion users.
 */

(function () {
  "use strict";

  var MAX_SHIFT = 20; // px — hard cap on movement

  document.addEventListener("DOMContentLoaded", function () {
    var hero = document.getElementById("home");
    var layer = document.getElementById("heroDoodles");
    if (!hero || !layer) return;

    // Respect reduced-motion and skip on touch-only devices.
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !finePointer) return;

    var doodles = layer.querySelectorAll(".doodle");

    /** Shift each doodle relative to cursor distance from hero centre. */
    function onMove(e) {
      var rect = hero.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var nx = (e.clientX - cx) / rect.width;   // -0.5 .. 0.5
      var ny = (e.clientY - cy) / rect.height;

      doodles.forEach(function (d) {
        var depth = parseFloat(d.getAttribute("data-depth")) || 0.5;
        var x = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, nx * depth * MAX_SHIFT * 2));
        var y = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, ny * depth * MAX_SHIFT * 2));
        d.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px)";
      });
    }

    window.addEventListener("mousemove", onMove, { passive: true });
  });
})();
