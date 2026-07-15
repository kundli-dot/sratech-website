// SRATECH — shared enhancements
(function () {
  // Header: add subtle glass background once scrolled
  var header = document.querySelector('header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 24); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Scroll reveal for content blocks
  var sel = '.card, .feature-card, .ai-feature, .stat, .contact-row, .cta, .tech-strip, .section-head, .form-card';
  var els = Array.prototype.slice.call(document.querySelectorAll(sel));
  els.forEach(function (el) { el.classList.add('reveal'); });
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
    ['Contact', 'index.html#contact']
  ];
  var ov = document.createElement('div');
  ov.className = 'menu-overlay';
  var html = '<nav>';
  links.forEach(function (l) { html += '<a href="' + l[1] + '"><span>' + l[0] + '</span></a>'; });
  html += '</nav><div class="menu-foot">contact@sratech.net &nbsp;·&nbsp; +91 85889 30331</div>';
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
