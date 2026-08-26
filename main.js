// SRATECH — shared enhancements
(function () {
  // Header: add subtle glass background once scrolled
  var header = document.querySelector('header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 24); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Scroll reveal for content blocks
  var sel = '.card, .feature-card, .ai-feature, .stat, .contact-row, .cta, .tech-strip, .section-head, .form-card,' +
            '.pstep, .tst, .price-card, .faq details, .cta-banner, .stack-cloud, .director-card';
  var els = Array.prototype.slice.call(document.querySelectorAll(sel));
  els.forEach(function (el) { el.classList.add('reveal'); });

  // Stagger siblings inside a group so rows cascade instead of popping at once
  ['.process-line', '.tst-grid', '.price-grid', '.faq', '.stats', '.grid'].forEach(function (g) {
    document.querySelectorAll(g).forEach(function (group) {
      Array.prototype.slice.call(group.children).forEach(function (child, i) {
        if (child.classList.contains('reveal')) {
          child.style.transitionDelay = Math.min(i, 7) * 70 + 'ms';
        }
      });
    });
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }
})();

// Fullscreen circular-reveal (bubble) menu
(function () {
  var btn = document.querySelector('.menu-btn');
  if (!btn) return;
  btn.innerHTML = '<span></span><span></span>';
  btn.setAttribute('aria-label', 'Open menu');
  btn.onclick = null;

  var links = [
    ['Home', '/index.html'],
    ['Services', '/services.html'],
    ['Pricing', '/pricing/'],
    ['Portfolio', '/portfolio.html'],
    ['About', '/about.html'],
    ['Contact', '/contact.html']
  ];
  var ov = document.createElement('div');
  ov.className = 'menu-overlay';

  // Snaking crest: 4 periods across the 1200-wide viewBox. The first half
  // (0-600) is identical to the second, so a -50% shift loops seamlessly.
  var wavePath = 'M0,60';
  for (var w = 0; w < 4; w++) {
    var x = w * 300;
    wavePath += ' C' + (x + 38) + ',18 ' + (x + 112) + ',18 ' + (x + 150) + ',60' +
                ' C' + (x + 188) + ',102 ' + (x + 262) + ',102 ' + (x + 300) + ',60';
  }
  wavePath += ' L1200,100 L0,100 Z';

  var html = '<div class="menu-wave">' +
    '<svg class="wave-edge" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden="true">' +
      '<path d="' + wavePath + '"/></svg>' +
    '<div class="menu-wave-inner"><nav>';
  links.forEach(function (l) { html += '<a href="' + l[1] + '"><span>' + l[0] + '</span></a>'; });
  html += '</nav><div class="menu-foot">contact@sratech.net &nbsp;·&nbsp; +91 85889 30331</div>' +
    '</div></div>';
  ov.innerHTML = html;
  document.body.appendChild(ov);

  function open() { ov.classList.add('open'); btn.classList.add('active'); document.body.classList.add('menu-open'); btn.setAttribute('aria-label', 'Close menu'); }
  function close() { ov.classList.remove('open'); btn.classList.remove('active'); document.body.classList.remove('menu-open'); btn.setAttribute('aria-label', 'Open menu'); }
  btn.addEventListener('click', function () { ov.classList.contains('open') ? close() : open(); });
  ov.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();

// Portfolio category filter
(function () {
  var bar = document.getElementById('workFilter');
  if (!bar) return;
  var cards = document.querySelectorAll('#workGrid .work-card');
  bar.addEventListener('click', function (e) {
    var chip = e.target.closest('.filter-chip');
    if (!chip) return;
    bar.querySelectorAll('.filter-chip').forEach(function (c) { c.classList.remove('active'); });
    chip.classList.add('active');
    var f = chip.getAttribute('data-filter');
    cards.forEach(function (card) {
      var show = f === 'all' || card.getAttribute('data-cat') === f;
      card.classList.toggle('hide', !show);
    });
  });
})();

// Chatbot speech-bubble typewriter
(function () {
  var el = document.querySelector('.chat-type-text');
  if (!el) return;
  var t = "Of course! I'm here to help you anytime.";
  var i = 0;
  function tick() {
    if (i <= t.length) { el.textContent = t.slice(0, i); i++; setTimeout(tick, 55); }
    else { setTimeout(function () { i = 0; tick(); }, 2500); }
  }
  tick();
})();

// Form guide robot — points at the first step still waiting to be filled.
// Steps are declared in the markup: [data-step="<id of the value input>"],
// with an optional data-msg and data-optional. Works on any form on the page.
(function () {
  var aside = document.getElementById('botAside');
  var guide = document.getElementById('botGuide');
  var tip   = document.getElementById('botTip');
  var form  = document.querySelector('.start-layout form');
  if (!aside || !guide || !form) return;

  var steps = Array.prototype.slice.call(form.querySelectorAll('[data-step]')).map(function (el) {
    return {
      anchor: el,
      input: document.getElementById(el.getAttribute('data-step')),
      msg: el.getAttribute('data-msg') || '',
      optional: el.hasAttribute('data-optional')
    };
  });
  if (!steps.length) return;
  var submit = form.querySelector('[type="submit"]');

  // The fingertip sits ~38% down the artwork; align that with the target's centre.
  var FINGER = 0.38;

  function nextTarget() {
    for (var i = 0; i < steps.length; i++) {
      var s = steps[i];
      if (!s.input || s.input.disabled || s.optional) continue;
      if (!s.input.value.trim()) return { el: s.anchor, msg: s.msg };
    }
    return { el: submit, msg: 'All set — send it over!' };
  }

  function place() {
    var t = nextTarget();
    if (!t.el) return;
    if (tip) tip.textContent = t.msg;
    var bot = guide.querySelector('.bot');
    var a = aside.getBoundingClientRect();
    var r = t.el.getBoundingClientRect();
    var y = (r.top + r.height / 2) - a.top - bot.offsetHeight * FINGER;
    guide.style.transform = 'translateY(' + Math.max(0, Math.round(y)) + 'px)';
  }

  form.addEventListener('input', place);
  form.addEventListener('change', place);
  window.addEventListener('resize', place);
  if (document.readyState === 'complete') place();
  else window.addEventListener('load', place);
  setTimeout(place, 60);
})();

// "What we do" — sticky scroll: swap the pinned image to the block nearest
// the viewport centre. Scroll-driven (rAF-throttled) for reliable behaviour.
(function () {
  var wwd = document.querySelector('.wwd');
  if (!wwd) return;
  var frames = wwd.querySelectorAll('.wwd-frame');
  var blocks = Array.prototype.slice.call(wwd.querySelectorAll('.wwd-block'));
  var cur = -1, ticking = false;
  function update() {
    ticking = false;
    var mid = window.innerHeight / 2, best = 0, bestDist = Infinity;
    blocks.forEach(function (b, i) {
      var r = b.getBoundingClientRect();
      var d = Math.abs((r.top + r.height / 2) - mid);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    if (best !== cur) {
      cur = best;
      frames.forEach(function (f, idx) { f.classList.toggle('on', idx === best); });
    }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();

// ============================================================
// FESTIVE MODE — auto seasonal 15% offer, 2 days before → festival day.
// ⚠️ Indian festival dates shift yearly (lunar calendar). VERIFY & UPDATE
//    the dates below each year. Preview any festival with ?festive=diwali
// ============================================================
(function () {
  var FESTIVALS = [
    // 2026
    { name: 'New Year',            date: '2026-01-01', em: '🎉', c1: '#7c3aed', c2: '#2563eb', fx: 'confetti' },
    { name: 'Holi',                date: '2026-03-04', em: '🎨', c1: '#db2777', c2: '#16a34a', fx: 'color' },
    { name: 'Eid',                 date: '2026-03-20', em: '🌙', c1: '#0e7490', c2: '#15803d', fx: 'sparkle' },
    { name: 'Raksha Bandhan',      date: '2026-08-28', em: '🪢', c1: '#b91c1c', c2: '#b45309', fx: 'petal' , banner: 'festive-rakhi.jpg?v=3' },
    { name: 'Ganesh Chaturthi',    date: '2026-09-14', em: '🕉', c1: '#c2410c', c2: '#b91c1c', fx: 'petal' },
    { name: 'Navratri & Dussehra', date: '2026-10-20', em: '🪔', c1: '#c026d3', c2: '#ea580c', fx: 'color' },
    { name: 'Diwali',              date: '2026-11-08', em: '🪔', c1: '#b45309', c2: '#b91c1c', fx: 'diya' },
    { name: 'Christmas',           date: '2026-12-25', em: '🎄', c1: '#166534', c2: '#b91c1c', fx: 'snow' },
    // 2027 (please verify)
    { name: 'New Year',            date: '2027-01-01', em: '🎉', c1: '#7c3aed', c2: '#2563eb', fx: 'confetti' },
    { name: 'Holi',                date: '2027-03-22', em: '🎨', c1: '#db2777', c2: '#16a34a', fx: 'color' },
    { name: 'Eid',                 date: '2027-03-10', em: '🌙', c1: '#0e7490', c2: '#15803d', fx: 'sparkle' },
    { name: 'Raksha Bandhan',      date: '2027-08-17', em: '🪢', c1: '#b91c1c', c2: '#b45309', fx: 'petal' , banner: 'festive-rakhi.jpg?v=3' },
    { name: 'Ganesh Chaturthi',    date: '2027-09-04', em: '🕉', c1: '#c2410c', c2: '#b91c1c', fx: 'petal' },
    { name: 'Navratri & Dussehra', date: '2027-10-09', em: '🪔', c1: '#c026d3', c2: '#ea580c', fx: 'color' },
    { name: 'Diwali',              date: '2027-10-29', em: '🪔', c1: '#b45309', c2: '#b91c1c', fx: 'diya' },
    { name: 'Christmas',           date: '2027-12-25', em: '🎄', c1: '#166534', c2: '#b91c1c', fx: 'snow' }
  ];
  var DISCOUNT = '15%', LEAD_DAYS = 2;

  function ymd(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function activeFestival() {
    var now = new Date(); now.setHours(0, 0, 0, 0);
    for (var i = 0; i < FESTIVALS.length; i++) {
      var d = ymd(FESTIVALS[i].date), start = new Date(d); start.setDate(d.getDate() - LEAD_DAYS);
      if (now >= start && now <= d) return FESTIVALS[i];
    }
    return null;
  }
  var norm = function (s) { return s.toLowerCase().replace(/[^a-z]/g, ''); };
  var override = (new URLSearchParams(location.search)).get('festive');
  var fest = override
    ? FESTIVALS.filter(function (f) { return norm(f.name).indexOf(norm(override)) === 0; })[0]
    : activeFestival();
  if (!fest) return;

  document.documentElement.style.setProperty('--fc1', fest.c1);
  document.documentElement.style.setProperty('--fc2', fest.c2);

  // Promo bar / banner (dismissible for the session)
  if (sessionStorage.getItem('festHide') !== fest.name) {
    var top = document.createElement('div');
    if (fest.banner) {
      top.className = 'festive-banner';
      top.innerHTML = '<a href="/contact.html" aria-label="' + fest.name + ' offer — ' + DISCOUNT + ' off on every service">' +
        '<img src="/' + fest.banner + '" alt="Happy ' + fest.name + ' — enjoy ' + DISCOUNT + ' off on every service"></a>' +
        '<button class="fb-x" aria-label="Dismiss offer">✕</button>';
    } else {
      top.className = 'festive-bar';
      top.innerHTML = '<span class="em">' + fest.em + '</span><span><strong>' + fest.name +
        ' Special</strong> — flat ' + DISCOUNT + ' OFF on every service</span>' +
        '<a class="fb-cta" href="/contact.html">Claim offer</a><button class="fb-x" aria-label="Dismiss offer">✕</button>';
    }
    document.body.insertBefore(top, document.body.firstChild);
    top.querySelector('.fb-x').addEventListener('click', function () {
      top.remove(); sessionStorage.setItem('festHide', fest.name);
    });
  }

  // Offer note in the hero of pricing / contact / start / schedule
  if (/pricing|contact\.html|start\.html|schedule\.html/.test(location.pathname)) {
    var host = document.querySelector('.hero .container');
    if (host) {
      var ps = host.querySelectorAll('p'), anchor = ps[ps.length - 1];
      var note = document.createElement('div');
      note.className = 'festive-note';
      note.innerHTML = '<span class="em">' + fest.em + '</span> ' + fest.name +
        ' offer — flat ' + DISCOUNT + ' OFF on every service';
      if (anchor) anchor.parentNode.insertBefore(note, anchor.nextSibling); else host.appendChild(note);
    }
  }

  // Subtle particle overlay
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var cv = document.createElement('canvas'); cv.className = 'festive-fx'; document.body.appendChild(cv);
  var ctx = cv.getContext('2d'), W, H, parts = [];
  var PAL = {
    diya: ['#fbbf24', '#f59e0b', '#fb923c'], color: ['#ec4899', '#22c55e', '#3b82f6', '#eab308', '#a855f7'],
    snow: ['#ffffff', '#e0f2fe'], confetti: ['#ec4899', '#22c55e', '#3b82f6', '#eab308', '#f97316', '#a855f7'],
    sparkle: ['#fde68a', '#fbbf24', '#ffffff'], petal: ['#fb923c', '#f59e0b', '#fca5a5', '#fbbf24']
  };
  var pal = PAL[fest.fx] || PAL.snow, conf = fest.fx === 'confetti', glow = (fest.fx === 'diya' || fest.fx === 'sparkle');
  function resize() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
  resize(); window.addEventListener('resize', resize, { passive: true });
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function spawn() { return { x: rnd(0, W), y: rnd(-H, 0), r: rnd(2.5, 6), s: rnd(.4, 1.4), d: rnd(-.4, .4), a: rnd(.22, .62), c: pal[(Math.random() * pal.length) | 0], rot: rnd(0, 6.28), vr: rnd(-.05, .05) }; }
  var N = Math.min(46, Math.round(innerWidth / 26));
  for (var i = 0; i < N; i++) { var p0 = spawn(); p0.y = rnd(0, H); parts.push(p0); }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i]; p.y += p.s; p.x += p.d + Math.sin(p.y / 40) * .3; p.rot += p.vr;
      if (p.y > H + 12) { parts[i] = spawn(); continue; }
      ctx.globalAlpha = p.a; ctx.fillStyle = p.c;
      if (conf) { ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillRect(-p.r, -p.r * .5, p.r * 2, p.r); ctx.restore(); }
      else { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.28); ctx.fill(); if (glow) { ctx.globalAlpha = p.a * .35; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 2.3, 0, 6.28); ctx.fill(); } }
    }
    ctx.globalAlpha = 1; requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();
