/**
 * animations.js
 * Scroll-triggered fade-in reveals using the Intersection Observer API
 * (no external libraries). Each .reveal section fades up once it enters view.
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;

    // Fallback: if IntersectionObserver is unavailable, just show everything.
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("visible"); });
      return;
    }

    /** Reveal a section the first time it crosses the viewport threshold. */
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // reveal once, then stop watching
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    targets.forEach(function (t) { observer.observe(t); });
  });
})();
