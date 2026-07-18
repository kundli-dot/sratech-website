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
    ['Home', 'index.html'],
    ['Services', 'services.html'],
    ['Portfolio', 'portfolio.html'],
    ['About', 'about.html'],
    ['Contact', 'contact.html']
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
