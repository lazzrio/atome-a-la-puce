/* Pages Partiel et Évaluations : thème, menu, sommaire, cases à cocher mémorisées,
   compte à rebours et banque de questions (entraînement + épreuve blanche chronométrée). */
(function () {
  "use strict";
  var BS = String.fromCharCode(92);
  var LS_THEME = "atp_theme";

  /* ---------- thème, menu (même clé que le reste du site) ---------- */
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
  var tScroll = null;
  window.addEventListener("scroll", function () { if (!tScroll) tScroll = setTimeout(function () { tScroll = null; suivre(); }, 120); }, { passive: true });
  if (liens.length) suivre();

  /* ---------- cases à cocher mémorisées (liste de contrôle) ---------- */
  var LS_CHK = "atp_chk_" + (document.body.getAttribute("data-page") || "page");
  var chk = {};
  try { chk = JSON.parse(localStorage.getItem(LS_CHK) || "{}"); } catch (e) { chk = {}; }
  var boxes = Array.prototype.slice.call(document.querySelectorAll("input[data-ck]"));
  function majCompteurs() {
    var groupes = {};
    boxes.forEach(function (b) {
      var g = b.getAttribute("data-grp") || "all";
      groupes[g] = groupes[g] || { n: 0, ok: 0 };
      groupes[g].n++; if (b.checked) groupes[g].ok++;
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-ckcount]"), function (el) {
      var g = groupes[el.getAttribute("data-ckcount")];
      if (g) el.textContent = g.ok + " / " + g.n;
    });
  }
  boxes.forEach(function (b) {
    var id = b.getAttribute("data-ck");
    b.checked = !!chk[id];
    b.addEventListener("change", function () {
      chk[id] = b.checked;
      try { localStorage.setItem(LS_CHK, JSON.stringify(chk)); } catch (e) {}
      majCompteurs();
    });
  });
  majCompteurs();

  /* ---------- compte à rebours (data-date="2026-11-07T08:45") ---------- */
  Array.prototype.forEach.call(document.querySelectorAll("[data-countdown]"), function (el) {
    var d = new Date(el.getAttribute("data-countdown"));
    var now = new Date();
    var jours = Math.ceil((d - now) / 86400000);
    el.textContent = jours > 0 ? String(jours) : (jours === 0 ? "J" : "✓");
  });

  /* ---------- KaTeX sur du contenu injecté ---------- */
  function rm(el) {
    if (window.renderMathInElement) {
      window.renderMathInElement(el, {
        delimiters: [{ left: BS + "[", right: BS + "]", display: true }, { left: BS + "(", right: BS + ")", display: false }],
        throwOnError: false, strict: false
      });
    }
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var s = {}; a.forEach(function (x) { s[x] = 1; });
    return b.every(function (x) { return s[x]; });
  }
  var LETTRES = ["a", "b", "c", "d", "e", "f"];

  /* =====================================================================
     Banque de questions
     cfg : { root, bank, themes:{clé:"libellé"}, storage, examMinutes, examCount,
             examLabel, shuffleOptions }
     question : { id, th, src, q, o:[…], a:[indices justes], e }
     ===================================================================== */
  function mount(cfg) {
    var host = cfg.root, bank = cfg.bank, themes = cfg.themes;
    var keys = Object.keys(themes);
    var sel = {}; keys.forEach(function (k) { sel[k] = true; });
    var mode = "train", hideDone = false;
    var done = {};
    var LS = "atp_bank_" + cfg.storage;
    try { done = JSON.parse(localStorage.getItem(LS) || "{}"); } catch (e) { done = {}; }
    function saveDone() { try { localStorage.setItem(LS, JSON.stringify(done)); } catch (e) {} }

    host.innerHTML = "";
    var bar = el("div", "rv-bar");
    var chips = el("div", "chapchips rv-chips");
    var tools = el("div", "rv-tools");
    var seg = el("div", "seg", '<button class="on" data-m="train">Entraînement</button><button data-m="exam">' + (cfg.examLabel || "Épreuve blanche") + "</button>");
    var stat = el("span", "rv-stat");
    var hideBtn = el("button", "qs-mini", "Masquer les réussies");
    var resetBtn = el("button", "qs-mini", "Remettre à zéro");
    var allBtn = el("button", "qs-mini", "Tout cocher");
    var noneBtn = el("button", "qs-mini", "Tout décocher");
    tools.appendChild(seg); tools.appendChild(stat);
    bar.appendChild(chips);
    var row = el("div", "qs-row rv-row"); row.appendChild(allBtn); row.appendChild(noneBtn); row.appendChild(hideBtn); row.appendChild(resetBtn);
    bar.appendChild(row); bar.appendChild(tools);
    var examBar = el("div", "rv-exambar"); examBar.style.display = "none";
    var body = el("div", "rv-body");
    host.appendChild(bar); host.appendChild(examBar); host.appendChild(body);

    keys.forEach(function (k) {
      var b = el("button", "chapchip on");
      b.setAttribute("data-k", k);
      var n = bank.filter(function (q) { return q.th === k; }).length;
      b.innerHTML = themes[k] + ' <span class="rv-n">' + n + "</span>";
      b.addEventListener("click", function () { sel[k] = !sel[k]; b.classList.toggle("on", sel[k]); refresh(); });
      chips.appendChild(b);
    });
    allBtn.addEventListener("click", function () { keys.forEach(function (k) { sel[k] = true; }); syncChips(); refresh(); });
    noneBtn.addEventListener("click", function () { keys.forEach(function (k) { sel[k] = false; }); syncChips(); refresh(); });
    function refresh() {
      if (mode === "train") renderTrain();
      else if (body.querySelector(".rv-setup")) renderExamSetup();
    }
    function syncChips() { Array.prototype.forEach.call(chips.children, function (b) { b.classList.toggle("on", !!sel[b.getAttribute("data-k")]); }); }
    hideBtn.addEventListener("click", function () { hideDone = !hideDone; hideBtn.classList.toggle("on", hideDone); if (mode === "train") renderTrain(); });
    resetBtn.addEventListener("click", function () {
      if (!window.confirm("Effacer la liste des questions réussies sur cet appareil ?")) return;
      done = {}; saveDone(); if (mode === "train") renderTrain(); else majStat();
    });
    Array.prototype.forEach.call(seg.children, function (b) {
      b.addEventListener("click", function () {
        Array.prototype.forEach.call(seg.children, function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        mode = b.getAttribute("data-m");
        if (mode === "train") { examBar.style.display = "none"; row.style.display = ""; renderTrain(); }
        else { row.style.display = "none"; renderExamSetup(); }
      });
    });

    function majStat() {
      var ok = bank.filter(function (q) { return done[q.id]; }).length;
      stat.textContent = "Réussies : " + ok + " / " + bank.length;
    }

    /* --- une carte de question --- */
    function carte(q, opts) {
      var shuf = opts && opts.shuffle;
      var ordre = q.o.map(function (_, i) { return i; });
      if (shuf) shuffle(ordre);
      var multi = q.a.length !== 1;
      var c = el("article", "rv-card");
      var meta = '<div class="rv-meta"><span class="rv-th">' + themes[q.th] + "</span>" +
        (opts && opts.showSrc === false ? "" : '<span class="rv-src">' + q.src + "</span>") +
        (multi ? '<span class="rv-multi">' + (q.a.length ? "plusieurs réponses possibles" : "il peut n'y avoir aucune bonne réponse") + "</span>" : "") + "</div>";
      var h = meta + '<div class="rv-q">' + q.q + '</div><div class="rv-opts">';
      ordre.forEach(function (oi, k) {
        h += '<label class="rv-opt" data-oi="' + oi + '"><input type="' + (multi ? "checkbox" : "radio") + '" name="q_' + q.id + '" value="' + oi + '"><span class="rv-mk">' +
          LETTRES[k] + '</span><span class="rv-tx">' + q.o[oi] + "</span></label>";
      });
      h += "</div>";
      c.innerHTML = h;
      c._q = q;
      return c;
    }
    function choisis(c) {
      var r = [];
      Array.prototype.forEach.call(c.querySelectorAll("input"), function (i) { if (i.checked) r.push(+i.value); });
      return r;
    }
    function corrige(c, avecReponse) {
      var q = c._q, ch = choisis(c), ok = sameSet(ch, q.a);
      Array.prototype.forEach.call(c.querySelectorAll(".rv-opt"), function (lab) {
        var oi = +lab.getAttribute("data-oi"), bon = q.a.indexOf(oi) >= 0, pris = ch.indexOf(oi) >= 0;
        lab.classList.toggle("correct", bon);
        lab.classList.toggle("wrong", pris && !bon);
        lab.querySelector("input").disabled = true;
      });
      var fb = c.querySelector(".rv-fb");
      if (!fb) { fb = el("div", "rv-fb"); c.appendChild(fb); }
      var lettres = [];
      Array.prototype.forEach.call(c.querySelectorAll(".rv-opt"), function (lab) {
        if (q.a.indexOf(+lab.getAttribute("data-oi")) >= 0) lettres.push("(" + lab.querySelector(".rv-mk").textContent + ")");
      });
      var verdict = avecReponse ? "Réponse : " + lettres.join(" et ") : (ok ? "✓ Juste" : "✗ Pas tout à fait — réponse : " + lettres.join(" et "));
      fb.className = "rv-fb show " + (avecReponse ? "see" : (ok ? "ok" : "no"));
      fb.innerHTML = '<div class="verdict">' + verdict + '</div><div class="expl">' + q.e + "</div>";
      var act = c.querySelector(".rv-act"); if (act) act.style.display = "none";
      rm(fb);
      return ok;
    }

    /* --- mode entraînement --- */
    function renderTrain() {
      body.innerHTML = "";
      var liste = bank.filter(function (q) { return sel[q.th] && !(hideDone && done[q.id]); });
      majStat();
      if (!liste.length) { body.appendChild(el("p", "cx-empty", "Aucune question avec ces réglages.")); return; }
      body.appendChild(el("p", "s4-small", liste.length + " question" + (liste.length > 1 ? "s" : "") + ". Coche ta réponse puis « Vérifier » (le sujet d'origine est indiqué sous la question)."));
      liste.forEach(function (q) {
        var c = carte(q, {});
        if (done[q.id]) c.classList.add("done");
        var act = el("div", "rv-act", '<button class="btn btn-primary rv-check">Vérifier</button><button class="btn btn-ghost rv-see">Voir la réponse</button>');
        c.appendChild(act);
        act.querySelector(".rv-check").addEventListener("click", function () {
          if (q.a.length && !choisis(c).length) { act.querySelector(".rv-check").textContent = "Coche d'abord une réponse"; return; }
          var ok = corrige(c, false);
          if (ok) { done[q.id] = 1; c.classList.add("done"); saveDone(); majStat(); }
        });
        act.querySelector(".rv-see").addEventListener("click", function () { corrige(c, true); });
        body.appendChild(c);
      });
      rm(body);
    }

    /* --- épreuve blanche --- */
    var timer = null;
    function renderExamSetup() {
      clearInterval(timer);
      body.innerHTML = "";
      examBar.style.display = "none";
      var dispo = bank.filter(function (q) { return sel[q.th]; });
      var defN = Math.min(cfg.examCount || 20, dispo.length);
      var box = el("div", "rv-setup");
      box.innerHTML =
        '<p>Tirage au sort parmi les <b>' + dispo.length + "</b> questions des thèmes cochés ci-dessus. " +
        (cfg.shuffleOptions === false ? "" : "Les questions <b>et les réponses sont mélangées</b>") +
        ". Aucune correction avant la fin, comme à l'épreuve.</p>" +
        '<div class="rv-form"><label>Nombre de questions <input type="number" id="rvN" min="1" max="' + dispo.length + '" value="' + defN + '"></label>' +
        '<label>Durée (minutes) <input type="number" id="rvT" min="1" max="180" value="' + (cfg.examMinutes || 60) + '"></label></div>' +
        '<button class="btn btn-primary" id="rvGo">Commencer →</button>' +
        '<div class="warnmsg" id="rvWarn" style="display:none">Coche au moins un thème.</div>';
      body.appendChild(box);
      box.querySelector("#rvGo").addEventListener("click", function () {
        var dispo2 = bank.filter(function (q) { return sel[q.th]; });
        if (!dispo2.length) { box.querySelector("#rvWarn").style.display = "block"; return; }
        var n = Math.max(1, Math.min(dispo2.length, +box.querySelector("#rvN").value || defN));
        var t = Math.max(1, +box.querySelector("#rvT").value || cfg.examMinutes || 60);
        demarre(shuffle(dispo2.slice()).slice(0, n), t);
      });
    }
    function fmt(s) { var m = Math.floor(s / 60), r = s % 60; return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r; }
    function demarre(qs, minutes) {
      body.innerHTML = "";
      var cartes = qs.map(function (q) {
        var c = carte(q, { shuffle: cfg.shuffleOptions !== false, showSrc: false });
        c.insertBefore(el("span", "rv-num", "Q" + (qs.indexOf(q) + 1) + " / " + qs.length), c.firstChild);
        body.appendChild(c); return c;
      });
      rm(body);
      var reste = minutes * 60, fini = false;
      examBar.style.display = "flex";
      examBar.innerHTML = '<span class="rv-clock" id="rvClock">' + fmt(reste) + '</span><span class="rv-answered" id="rvAns">0 / ' + qs.length + ' répondues</span><button class="btn btn-primary" id="rvEnd">Terminer et corriger</button>';
      var clock = examBar.querySelector("#rvClock"), ans = examBar.querySelector("#rvAns");
      function maj() {
        var n = cartes.filter(function (c) { return choisis(c).length; }).length;
        ans.textContent = n + " / " + qs.length + " répondues";
      }
      body.addEventListener("change", maj);
      function terminer() {
        if (fini) return; fini = true; clearInterval(timer);
        body.removeEventListener("change", maj);
        var bons = 0, parTh = {};
        cartes.forEach(function (c) {
          var q = c._q, ok = corrige(c, false);
          parTh[q.th] = parTh[q.th] || { n: 0, ok: 0 };
          parTh[q.th].n++; if (ok) { parTh[q.th].ok++; bons++; }
          c.classList.add(ok ? "res-ok" : "res-no");
        });
        var pct = Math.round(bons / qs.length * 100);
        var h = '<div class="rv-result"><div class="qs-label">Résultat</div><div class="big">' + bons + " / " + qs.length + '</div><div class="rmsg">' + pct + " % — " +
          (pct >= 80 ? "très bien, tu es prêt·e." : pct >= 60 ? "correct, reprends les thèmes faibles ci-dessous." : "à retravailler : refais l'entraînement thème par thème.") +
          '</div><div class="tbl-wrap"><table><tr><th>Thème</th><th>Juste</th></tr>';
        Object.keys(parTh).forEach(function (k) { h += "<tr><td>" + themes[k] + "</td><td>" + parTh[k].ok + " / " + parTh[k].n + "</td></tr>"; });
        h += '</table></div><div class="rbtns"><button class="btn btn-primary" id="rvAgain">Nouveau tirage</button><button class="btn btn-ghost" id="rvTrain">Retour à l\'entraînement</button></div></div>';
        var r = el("div", null, h);
        body.insertBefore(r.firstChild, body.firstChild);
        examBar.style.display = "none";
        body.querySelector("#rvAgain").addEventListener("click", renderExamSetup);
        body.querySelector("#rvTrain").addEventListener("click", function () { seg.children[0].click(); });
        window.scrollTo({ top: Math.max(0, host.offsetTop - 80), behavior: "smooth" });
      }
      examBar.querySelector("#rvEnd").addEventListener("click", function () {
        var vides = cartes.filter(function (c) { return !choisis(c).length; }).length;
        if (vides && !window.confirm(vides + " question(s) sans réponse. Terminer quand même ?")) return;
        terminer();
      });
      clearInterval(timer);
      timer = setInterval(function () {
        reste--; clock.textContent = fmt(Math.max(0, reste));
        clock.classList.toggle("urgent", reste <= 300);
        if (reste <= 0) terminer();
      }, 1000);
    }

    renderTrain();
  }

  window.RevisionBank = { mount: mount };
})();
