/**
 * main.js
 * Core interactions: navbar background-on-scroll, active-link highlighting
 * via scroll position, mobile hamburger menu, and the custom paintbrush
 * cursor that appears over art-related zones.
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var navLinks = document.getElementById("navLinks");
    var hamburger = document.getElementById("hamburger");
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    var sections = links
      .map(function (l) { return document.querySelector(l.getAttribute("href")); })
      .filter(Boolean);

    /* === NAVBAR: solid background after scrolling past the hero top === */
    function onScroll() {
      if (window.scrollY > 40) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
      highlightActive();
    }

    /* === ACTIVE LINK: highlight the nav item for the section in view === */
    function highlightActive() {
      var pos = window.scrollY + window.innerHeight * 0.32;
      var currentId = sections.length ? sections[0].id : "";
      sections.forEach(function (sec) {
        if (sec.offsetTop <= pos) currentId = sec.id;
      });
      links.forEach(function (l) {
        l.classList.toggle("active", l.getAttribute("href") === "#" + currentId);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* === MOBILE MENU: toggle the slide-in nav === */
    function toggleMenu() {
      var open = navLinks.classList.toggle("open");
      hamburger.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
      hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    if (hamburger) hamburger.addEventListener("click", toggleMenu);

    // Close the mobile menu whenever a link is tapped.
    links.forEach(function (l) {
      l.addEventListener("click", function () {
        if (navLinks.classList.contains("open")) toggleMenu();
      });
    });

    /* === CUSTOM PAINTBRUSH CURSOR over .art-zone elements (desktop only) === */
    var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (finePointer) {
      var brush = document.getElementById("cursorBrush");
      var artZones = document.querySelectorAll(".art-zone");

      // Follow the cursor.
      window.addEventListener("mousemove", function (e) {
        if (brush) {
          brush.style.left = e.clientX + "px";
          brush.style.top = e.clientY + "px";
        }
      }, { passive: true });

      // Switch to brush mode while hovering an art zone.
      artZones.forEach(function (zone) {
        zone.addEventListener("mouseenter", function () { document.body.classList.add("brush-active"); });
        zone.addEventListener("mouseleave", function () { document.body.classList.remove("brush-active"); });
      });
    }
  });
})();
