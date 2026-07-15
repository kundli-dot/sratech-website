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
