/* Page Interro semaine 40 : thème, menu, section courante dans le sommaire */
(function () {
  "use strict";
  var LS_THEME = "atp_theme";

  /* ---------- thème (même clé que le reste du site) ---------- */
  var root = document.documentElement, thBtn = document.getElementById("themeBtn"), thIcon = document.getElementById("thIcon");
  var SUN = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
  var MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';
  function curTheme() {
    if (root.getAttribute("data-theme")) return root.getAttribute("data-theme");
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function paintIcon() { if (thIcon) thIcon.innerHTML = curTheme() === "dark" ? SUN : MOON; }
  try { var st = localStorage.getItem(LS_THEME); if (st) root.setAttribute("data-theme", st); } catch (e) {}
  paintIcon();
  if (thBtn) thBtn.addEventListener("click", function () {
    var next = curTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(LS_THEME, next); } catch (e) {}
    paintIcon();
  });
  var burger = document.getElementById("burger"), nav = document.getElementById("nav");
  if (burger && nav) burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* ---------- sommaire : surligner la section lue ---------- */
  var liens = Array.prototype.slice.call(document.querySelectorAll(".s4-toc a"));
  var secs = liens.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  function suivre() {
    var y = window.scrollY + 140, k = 0;
    secs.forEach(function (s, i) { if (s && s.offsetTop <= y) k = i; });
    liens.forEach(function (a, i) {
      var on = i === k;
      a.classList.toggle("on", on);
      if (on && a.parentNode.scrollWidth > a.parentNode.clientWidth) {
        var p = a.parentNode, g = a.offsetLeft - 16;
        if (g < p.scrollLeft || a.offsetLeft + a.offsetWidth > p.scrollLeft + p.clientWidth) p.scrollLeft = g;
      }
    });
  }
  var t = null;
  window.addEventListener("scroll", function () { if (!t) t = setTimeout(function () { t = null; suivre(); }, 120); }, { passive: true });
  suivre();

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
})();
