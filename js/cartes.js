/* Flashcards QCM : formules et constantes, chapitres au choix, ordre aléatoire. */
(function () {
  "use strict";
  var BS = String.fromCharCode(92), LS = "atp_cartes";
  var root = document.documentElement, thBtn = document.getElementById("themeBtn"), thIcon = document.getElementById("thIcon");
  var SUN = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
  var MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';
  function cur() { if (root.getAttribute("data-theme")) return root.getAttribute("data-theme"); return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; }
  function paint() { if (thIcon) thIcon.innerHTML = cur() === "dark" ? SUN : MOON; }
  try { var st = localStorage.getItem("atp_theme"); if (st) root.setAttribute("data-theme", st); } catch (e) {}
  paint();
  if (thBtn) thBtn.addEventListener("click", function () { var n = cur() === "dark" ? "light" : "dark"; root.setAttribute("data-theme", n); try { localStorage.setItem("atp_theme", n); } catch (e) {} paint(); });
  var burger = document.getElementById("burger"), nav = document.getElementById("nav");
  if (burger && nav) burger.addEventListener("click", function () { var o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o ? "true" : "false"); });

  function rm(el) {
    if (window.renderMathInElement) window.renderMathInElement(el, { delimiters: [{ left: BS + "(", right: BS + ")", display: false }], throwOnError: false, strict: false });
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var $ = function (id) { return document.getElementById(id); };

  var ALL = window.CARTES, NAMES = window.CARTES_CH;
  var sel = {}, type = "all", count = 20, pool = [], idx = 0, score = 0, wrong = [], answered = false;
  NAMES.forEach(function (_, i) { sel[i] = true; });
  try { var s = JSON.parse(localStorage.getItem(LS) || "null"); if (s) { if (s.sel) sel = s.sel; if (s.type) type = s.type; if (s.count != null) count = s.count; } } catch (e) {}
  function save() { try { localStorage.setItem(LS, JSON.stringify({ sel: sel, type: type, count: count })); } catch (e) {} }

  var chips = $("cChips"), setup = $("cSetup"), run = $("cRun"), result = $("cResult"), cont = $("cContainer");

  function dispo() { return ALL.filter(function (q) { return sel[q.c] && (type === "all" || q.t === type); }); }
  function majInfo() { $("cInfo").textContent = dispo().length + " carte" + (dispo().length > 1 ? "s" : "") + " disponible" + (dispo().length > 1 ? "s" : "") + " avec ces réglages."; }
  function build() {
    chips.innerHTML = "";
    NAMES.forEach(function (name, i) {
      var n = ALL.filter(function (q) { return q.c === i; }).length;
      var b = document.createElement("button");
      b.className = "chapchip" + (sel[i] ? " on" : "");
      b.innerHTML = name + ' <span class="rv-n">' + n + "</span>";
      b.addEventListener("click", function () { sel[i] = !sel[i]; b.classList.toggle("on", sel[i]); save(); majInfo(); });
      chips.appendChild(b);
    });
    majInfo();
  }
  function setAll(v) { NAMES.forEach(function (_, i) { sel[i] = v; }); save(); build(); }
  $("cAll").addEventListener("click", function () { setAll(true); });
  $("cNone").addEventListener("click", function () { setAll(false); });
  function seg(id, attr, cb, cur) {
    var box = $(id);
    Array.prototype.forEach.call(box.children, function (b) {
      b.classList.toggle("on", b.getAttribute(attr) === String(cur));
      b.addEventListener("click", function () {
        Array.prototype.forEach.call(box.children, function (x) { x.classList.remove("on"); });
        b.classList.add("on"); cb(b.getAttribute(attr)); save(); majInfo();
      });
    });
  }
  seg("cType", "data-t", function (v) { type = v; }, type);
  seg("cCount", "data-n", function (v) { count = +v; }, count);
  build();

  function show(which) {
    setup.style.display = which === "setup" ? "" : "none";
    run.classList.toggle("active", which === "run");
    result.classList.toggle("show", which === "result");
    window.scrollTo({ top: Math.max(0, $("cTop").offsetTop - 70), behavior: "smooth" });
  }
  $("cStart").addEventListener("click", function () {
    var d = dispo();
    if (!d.length) { $("cWarn").style.display = "block"; return; }
    $("cWarn").style.display = "none";
    pool = shuffle(d.slice());
    if (count > 0) pool = pool.slice(0, count);
    idx = 0; score = 0; wrong = []; render(); show("run");
  });

  function render() {
    answered = false;
    var q = pool[idx];
    $("cCount2").textContent = (idx + 1) + " / " + pool.length;
    $("cProg").style.width = Math.round(idx / pool.length * 100) + "%";
    $("cScore").textContent = "Score : " + score;
    $("cNext").style.display = "none";
    var opts = shuffle([{ t: q.a, ok: true }].concat(q.d.map(function (x) { return { t: x, ok: false }; })));
    var letters = ["A", "B", "C", "D"];
    var card = document.createElement("div"); card.className = "qcard";
    var h = '<div class="qtag">' + NAMES[q.c] + " · " + (q.t === "f" ? "formule" : q.t === "k" ? "constante / valeur" : "poly de TD (hors cours)") + '</div><div class="qtext">' + q.q + '</div><div class="opts">';
    opts.forEach(function (o, k) { h += '<button class="opt" data-ok="' + (o.ok ? 1 : 0) + '"><span class="mk">' + letters[k] + '</span><span>' + o.t + "</span></button>"; });
    h += '</div><div class="qfeed"><div class="verdict"></div><div class="expl"></div></div>';
    card.innerHTML = h; cont.innerHTML = ""; cont.appendChild(card); rm(card);
    Array.prototype.forEach.call(card.querySelectorAll(".opt"), function (b) {
      b.addEventListener("click", function () {
        if (answered) return; answered = true;
        var good = b.getAttribute("data-ok") === "1";
        if (good) score++; else wrong.push(q);
        Array.prototype.forEach.call(card.querySelectorAll(".opt"), function (x) { x.disabled = true; if (x.getAttribute("data-ok") === "1") x.classList.add("correct"); });
        if (!good) b.classList.add("wrong");
        var fb = card.querySelector(".qfeed"); fb.classList.add("show", good ? "ok" : "no");
        fb.querySelector(".verdict").textContent = good ? "✓ Correct" : "✗ Incorrect";
        fb.querySelector(".expl").innerHTML = (good ? "" : "Réponse : " + q.a + ". ") + q.e; rm(fb);
        $("cScore").textContent = "Score : " + score;
        $("cNext").style.display = "";
        $("cNext").textContent = idx + 1 >= pool.length ? "Voir le résultat →" : "Suivant →";
        $("cNext").focus();
      });
    });
  }
  $("cNext").addEventListener("click", function () { idx++; if (idx >= pool.length) finish(); else render(); });
  $("cQuit").addEventListener("click", function () { show("setup"); });
  function finish() {
    var pct = Math.round(score / pool.length * 100);
    $("cRScore").textContent = pct + "%";
    $("cRMsg").textContent = score + " bonnes réponses sur " + pool.length + " — " + (pct >= 80 ? "excellent, tu maîtrises." : pct >= 50 ? "correct, refais les erreurs." : "à retravailler : refais les erreurs puis relance.");
    $("cRetryWrong").style.display = wrong.length ? "" : "none";
    show("result");
  }
  $("cRetry").addEventListener("click", function () { var d = dispo(); pool = shuffle(d.slice()); if (count > 0) pool = pool.slice(0, count); idx = 0; score = 0; wrong = []; render(); show("run"); });
  $("cRetryWrong").addEventListener("click", function () { pool = shuffle(wrong.slice()); idx = 0; score = 0; wrong = []; render(); show("run"); });
  $("cBack").addEventListener("click", function () { show("setup"); });
})();
