// SRATECH — Portfolio: real, shipped projects.
// Cards open a slide-over: live sites embed the actual page (+ "Open live site"),
// image-only projects show a screenshot. Covers: image collage, single shot, or mock.
(function () {

  var PROJECTS = [
    {
      name: 'Jairoop Textiles',
      cat: 'Company Website',
      domain: 'www.jairoop.com',
      url: 'https://www.jairoop.com',
      desc: 'The official website for Jai Roop Textile Pvt Ltd — an elastic and satin-ribbon manufacturer in Gurugram. Product showcase, catalogue and enquiry, designed and developed by SRATECH.',
      tags: ['Company Website', 'Responsive', 'SEO'],
      shots: ['shots/jairoop-1.jpg', 'shots/jairoop-2.jpg', 'shots/jairoop-3.jpg']
    },
    {
      name: 'JRT-CRM',
      cat: 'Manufacturing IMS + CRM',
      domain: 'jairoop.web.app',
      url: 'https://jairoop.web.app',
      desc: 'A complete manufacturing IMS + CRM built for Jai Roop Textile Pvt Ltd — orders, production, dispatch, inventory, WhatsApp automation, HR and reporting in one live platform. Opens a secure sign-in screen.',
      tags: ['Firebase', 'Node.js', 'Automation', 'CRM'],
      shots: ['shots/jrt-1.jpg', 'shots/jrt-2.jpg'],
      c1: '#2f7bf0', c2: '#153a86'
    },
    {
      name: 'Mistro',
      cat: 'Home-Services Marketplace',
      domain: 'mymistro.com',
      url: 'https://mymistro.com',
      desc: 'An Urban Company-style marketplace that connects customers with local home-service professionals — booking, profiles and service discovery in a clean, modern interface.',
      tags: ['React', 'Supabase', 'Marketplace'],
      shots: ['shots/mistro-1.jpg', 'shots/mistro-2.jpg', 'shots/mistro-3.jpg'],
      c1: '#8b5cf6', c2: '#4c1d95'
    },
    {
      name: 'Sky Force',
      cat: 'Arcade Game',
      domain: 'sky-heros.web.app',
      url: 'https://sky-heros.web.app',
      desc: 'A fast, colourful sky-shooter arcade game for kids — custom characters, smooth controls and levels, running entirely in the browser.',
      tags: ['HTML5 Game', 'Canvas', 'PWA'],
      img: 'shots/skyforce.jpg',
      c1: '#0ea5e9', c2: '#0b3b6b'
    },
    {
      name: 'SRA Health Checkup',
      cat: 'Health Web App',
      domain: 'sra-health-checkup.web.app',
      url: 'https://sra-health-checkup.web.app',
      desc: 'An offline-friendly app that reads early health signals from photos of the eye, tongue and face — designed as helpful guidance, not a medical diagnosis.',
      tags: ['Health', 'AI', 'PWA'],
      shots: ['shots/srahealth-1.jpg', 'shots/srahealth-2.jpg'],
      c1: '#10b981', c2: '#0e7a5f'
    },
    {
      name: 'Crosia Lace Software',
      cat: 'Design Software',
      domain: 'Desktop application',
      desc: 'A specialised design tool for Crosia (crochet lace) machines — lay out spindle-by-spindle dot patterns with Dot1/Dot2 and mirror, then export machine-ready designs. Built for a real lace-manufacturing workflow.',
      tags: ['Desktop App', 'Design Tool', 'Manufacturing'],
      img: 'crosia-design.jpg'
    }
  ];

  var grid = document.getElementById('pfGrid');
  if (!grid) return;

  function coverHTML(p) {
    if (p.shots) {
      return '<div class="pf-cover has-media"><span class="pf-cat">' + p.cat + '</span>' +
        '<div class="pf-strips">' + p.shots.map(function (s) {
          return '<img src="' + s + '" alt="" loading="lazy">';
        }).join('') + '</div></div>';
    }
    if (p.images) {
      return '<div class="pf-cover has-media"><span class="pf-cat">' + p.cat + '</span>' +
        '<div class="pf-collage">' + p.images.map(function (s) {
          return '<img src="' + s + '" alt="" loading="lazy">';
        }).join('') + '</div></div>';
    }
    if (p.img) {
      return '<div class="pf-cover has-media"><span class="pf-cat">' + p.cat + '</span>' +
        '<img class="pf-single" src="' + p.img + '" alt="' + p.name + ' screenshot" loading="lazy"></div>';
    }
    return '<div class="pf-cover" style="--c1:' + p.c1 + ';--c2:' + p.c2 + '"><span class="pf-cat">' + p.cat + '</span>' +
      '<div class="pf-mock"><div class="bar"><i></i><i></i><i></i></div><div class="body"><div class="h"></div><div class="h2"></div><div class="h3"></div><div class="row"><span></span><span></span><span></span></div></div></div></div>';
  }

  PROJECTS.forEach(function (p) {
    var card = document.createElement('button');
    card.className = 'pf-card';
    card.type = 'button';
    card.setAttribute('aria-label', 'Preview the ' + p.name + ' project');
    card.innerHTML = coverHTML(p) +
      '<div class="pf-body"><h3>' + p.name + '</h3><p>' + p.desc + '</p>' +
        '<div class="pf-tags">' + p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
        '<span class="pf-open">' + (p.url ? 'Open live preview' : 'View project') + ' <span class="arw">→</span></span></div>';
    card.addEventListener('click', function () { openDrawer(p); });
    grid.appendChild(card);
  });

  // ---- Slide-over drawer (live iframe OR screenshot) ----
  var scrim = document.createElement('div');
  scrim.className = 'pf-scrim';
  var drawer = document.createElement('aside');
  drawer.className = 'pf-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('aria-label', 'Project preview');
  drawer.innerHTML =
    '<div class="pf-drawer-head"><div><h3 id="pfName"></h3><div class="sub" id="pfCat"></div></div>' +
      '<button class="pf-close" id="pfClose" aria-label="Close preview">✕</button></div>' +
    '<div class="pf-chrome"><div class="dots"><i></i><i></i><i></i></div><div class="url" id="pfUrl"></div>' +
      '<a class="pf-visit" id="pfOpen" target="_blank" rel="noopener">Open ↗</a></div>' +
    '<iframe class="pf-frame" id="pfFrame" title="Live project preview" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
    '<img class="pf-shot" id="pfShot" alt="" style="display:none">' +
    '<div class="pf-strip"><p id="pfDesc"></p><div class="tags" id="pfTags"></div>' +
      '<a class="btn btn-primary no-swipe" id="pfVisit" target="_blank" rel="noopener">Visit live site ↗</a></div>';
  document.body.appendChild(scrim);
  document.body.appendChild(drawer);

  var frame = document.getElementById('pfFrame');
  var shot = document.getElementById('pfShot');
  var elOpen = document.getElementById('pfOpen');
  var elVisit = document.getElementById('pfVisit');
  var lastFocus = null;

  function openDrawer(p) {
    lastFocus = document.activeElement;
    document.getElementById('pfName').textContent = p.name;
    document.getElementById('pfCat').textContent = p.cat;
    document.getElementById('pfUrl').textContent = p.url ? p.url : p.domain;
    document.getElementById('pfDesc').textContent = p.desc;
    document.getElementById('pfTags').innerHTML = p.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');

    if (p.url) {
      frame.src = p.url; frame.style.display = '';
      shot.style.display = 'none'; shot.removeAttribute('src');
      elOpen.href = p.url; elOpen.style.display = '';
      elVisit.href = p.url; elVisit.style.display = '';
    } else {
      frame.removeAttribute('src'); frame.style.display = 'none';
      shot.src = p.img; shot.style.display = '';
      elOpen.style.display = 'none'; elVisit.style.display = 'none';
    }
    scrim.classList.add('open');
    drawer.classList.add('open');
    document.body.classList.add('pf-lock');
    setTimeout(function () { document.getElementById('pfClose').focus(); }, 60);
  }
  function closeDrawer() {
    scrim.classList.remove('open');
    drawer.classList.remove('open');
    document.body.classList.remove('pf-lock');
    setTimeout(function () { frame.src = 'about:blank'; shot.removeAttribute('src'); }, 420);
    if (lastFocus) lastFocus.focus();
  }
  document.getElementById('pfClose').addEventListener('click', closeDrawer);
  scrim.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer(); });
})();
