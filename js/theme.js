/**
 * theme.js
 * Handles light/dark mode: reads the saved preference (or the OS setting)
 * on load, applies it, toggles on button click, and persists to localStorage.
 */

(function () {
  "use strict";

  var STORAGE_KEY = "shreya-theme";
  var root = document.documentElement;

  /** Apply a theme ("dark" or "light") to the <html> element. */
  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  /** Work out which theme to start with: saved choice > OS preference > light. */
  function initialTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
    var prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  // Apply the starting theme immediately.
  applyTheme(initialTheme());

  /** Flip the current theme and remember the choice. */
  function toggleTheme() {
    var isDark = root.getAttribute("data-theme") === "dark";
    var next = isDark ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  // Wire the toggle button once the DOM is ready.
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("themeToggle");
    if (btn) btn.addEventListener("click", toggleTheme);
  });
})();
