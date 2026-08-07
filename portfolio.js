// SRATECH — Portfolio sample gallery + slide-over live previews.
// Each sample is a self-contained mini-website (its own theme, fonts and
// working page navigation) rendered inside an isolated iframe. These are
// design concepts that showcase range — not claims about specific clients.
(function () {

  // ---- Builder: turns a theme + pages into one self-contained HTML doc ----
  function buildSite(o) {
    var nav = o.nav.map(function (n, i) {
      return '<a data-go="' + n.id + '"' + (i === 0 ? ' class="active"' : '') + '>' + n.label + '</a>';
    }).join('');
    var main = o.nav.map(function (n, i) {
      return '<section class="pageX' + (i === 0 ? ' on' : '') + '" id="' + n.id + '">' + o.pages[n.id] + '</section>';
    }).join('');
    return '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<link rel="preconnect" href="https://fonts.googleapis.com">' +
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
      o.font +
      '<style>*{margin:0;padding:0;box-sizing:border-box}img{max-width:100%;display:block}' +
      'a{text-decoration:none;color:inherit;cursor:pointer}button{font:inherit;cursor:pointer}' +
      '.pageX{display:none}.pageX.on{display:block;animation:fade .4s ease}' +
      '@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}' +
      o.css + '</style></head><body>' +
      o.header.replace('%NAV%', nav) + '<main>' + main + '</main>' +
      '<script>(function(){var L=[].slice.call(document.querySelectorAll("[data-go]"));' +
      'var P=[].slice.call(document.querySelectorAll(".pageX"));' +
      'function go(id){P.forEach(function(p){p.classList.toggle("on",p.id===id)});' +
      'L.forEach(function(l){l.classList.toggle("active",l.getAttribute("data-go")===id)});' +
      'var m=document.querySelector("#mnav");if(m)m.classList.remove("open");window.scrollTo(0,0);}' +
      'L.forEach(function(l){l.addEventListener("click",function(e){e.preventDefault();go(l.getAttribute("data-go"));});});' +
      'var b=document.querySelector("#burger");if(b)b.addEventListener("click",function(){document.querySelector("#mnav").classList.toggle("open");});' +
      '})();<\/script></body></html>';
  }

  // ============================================================
  // SAMPLE 1 — NEXA · AI SaaS landing (dark, indigo→violet)
  // ============================================================
  var nexa = buildSite({
    font: '<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">',
    css: 'body{font-family:Inter,sans-serif;background:#0b0b12;color:#e9e9f2;line-height:1.6}' +
      '.wrap{max-width:940px;margin:0 auto;padding:0 24px}' +
      'header{position:sticky;top:0;z-index:10;background:rgba(11,11,18,.8);backdrop-filter:blur(12px);border-bottom:1px solid #1e1e2c}' +
      '.nav{display:flex;align-items:center;justify-content:space-between;height:62px}' +
      '.logo{font-family:Space Grotesk;font-weight:700;font-size:1.2rem}.logo b{background:linear-gradient(120deg,#818cf8,#c084fc);-webkit-background-clip:text;background-clip:text;color:transparent}' +
      '.links{display:flex;gap:26px}.links a{color:#a3a3b8;font-size:.92rem}.links a.active,.links a:hover{color:#fff}' +
      '.cta{background:linear-gradient(120deg,#6366f1,#a855f7);color:#fff;padding:9px 18px;border-radius:10px;font-weight:600;font-size:.9rem}' +
      'h1{font-family:Space Grotesk;font-size:clamp(2.2rem,6vw,3.4rem);line-height:1.08;letter-spacing:-.02em;margin:18px 0}' +
      'h1 span{background:linear-gradient(120deg,#818cf8,#c084fc);-webkit-background-clip:text;background-clip:text;color:transparent}' +
      '.pill{display:inline-flex;align-items:center;gap:8px;border:1px solid #2a2a3c;background:#14141f;color:#b7b7cc;font-size:.8rem;padding:6px 14px;border-radius:30px;margin-top:34px}' +
      '.pill i{width:7px;height:7px;border-radius:50%;background:#a855f7}' +
      '.sub{color:#a3a3b8;font-size:1.05rem;max-width:520px}' +
      '.btns{display:flex;gap:12px;margin:26px 0 40px;flex-wrap:wrap}' +
      '.b1{background:linear-gradient(120deg,#6366f1,#a855f7);color:#fff;padding:13px 24px;border-radius:12px;font-weight:600;border:0}' +
      '.b2{background:#15151f;border:1px solid #2a2a3c;color:#e9e9f2;padding:13px 24px;border-radius:12px;font-weight:600}' +
      '.dash{background:linear-gradient(180deg,#15151f,#101018);border:1px solid #24243400;border:1px solid #24243a;border-radius:16px;padding:20px;box-shadow:0 30px 70px -30px rgba(99,102,241,.6);margin-bottom:60px}' +
      '.dash .top{display:flex;gap:8px;margin-bottom:16px}.dash .top i{width:10px;height:10px;border-radius:50%;background:#2c2c40}' +
      '.stat{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px}' +
      '.stat div{background:#101018;border:1px solid #22223400;border:1px solid #222234;border-radius:12px;padding:14px}' +
      '.stat b{font-family:Space Grotesk;font-size:1.5rem;display:block;background:linear-gradient(120deg,#818cf8,#c084fc);-webkit-background-clip:text;background-clip:text;color:transparent}' +
      '.stat small{color:#8a8aa0;font-size:.75rem}' +
      '.bars{display:flex;align-items:flex-end;gap:8px;height:90px}.bars span{flex:1;border-radius:6px 6px 0 0;background:linear-gradient(180deg,#6366f1,#a855f7)}' +
      'section{padding:44px 0}h2{font-family:Space Grotesk;font-size:1.9rem;letter-spacing:-.02em;margin-bottom:8px}.lead{color:#a3a3b8;margin-bottom:28px}' +
      '.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}' +
      '.fc{background:#14141f;border:1px solid #22223400;border:1px solid #222234;border-radius:16px;padding:22px}' +
      '.fc .ic{width:42px;height:42px;border-radius:11px;background:linear-gradient(120deg,#6366f1,#a855f7);margin-bottom:14px}' +
      '.fc h3{font-family:Space Grotesk;font-size:1.05rem;margin-bottom:8px}.fc p{color:#9a9ab0;font-size:.9rem}' +
      '.plans{display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:640px}' +
      '.plan{background:#14141f;border:1px solid #222234;border-radius:18px;padding:26px}.plan.pro{background:linear-gradient(160deg,#312e81,#6d28d9);border:0}' +
      '.plan .pr{font-family:Space Grotesk;font-size:2rem;margin:6px 0 16px}.plan ul{list-style:none;color:#b7b7cc;font-size:.9rem}.plan li{padding:6px 0;border-top:1px solid #ffffff14}' +
      '.plan .pick{display:block;text-align:center;margin-top:18px;padding:11px;border-radius:10px;background:#6366f1;color:#fff;font-weight:600}.plan.pro .pick{background:#fff;color:#4c1d95}' +
      '.form{max-width:460px}.form input,.form textarea{width:100%;background:#101018;border:1px solid #222234;border-radius:10px;padding:13px;color:#fff;margin-bottom:12px;font-family:inherit}' +
      '.grid3,.plans,.stat{}' +
      '@media(max-width:640px){.nav{flex-wrap:wrap;height:auto;padding:9px 0;gap:4px 12px}.grid3,.plans,.stat{grid-template-columns:1fr}.links{gap:16px;font-size:.74rem;flex-basis:100%;order:3;justify-content:center;margin-top:2px}}',
    header: '<header><div class="wrap nav"><div class="logo">Nex<b>a</b></div><nav class="links">%NAV%</nav><a class="cta" data-go="pricing">Get started</a></div></header>',
    nav: [{ id: 'home', label: 'Home' }, { id: 'product', label: 'Product' }, { id: 'pricing', label: 'Pricing' }, { id: 'contact', label: 'Contact' }],
    pages: {
      home: '<div class="wrap"><div class="pill"><i></i> New — AI copilot v2 is live</div>' +
        '<h1>Ship products<br><span>ten times faster.</span></h1>' +
        '<p class="sub">Nexa is the AI workspace that turns your ideas into shipped features — planning, code and docs in one flow.</p>' +
        '<div class="btns"><button class="b1">Start free</button><button class="b2">Watch demo</button></div>' +
        '<div class="dash"><div class="top"><i></i><i></i><i></i></div>' +
        '<div class="stat"><div><b>128k</b><small>Tasks automated</small></div><div><b>4.2×</b><small>Faster delivery</small></div><div><b>99.9%</b><small>Uptime</small></div></div>' +
        '<div class="bars"><span style="height:40%"></span><span style="height:65%"></span><span style="height:50%"></span><span style="height:82%"></span><span style="height:70%"></span><span style="height:95%"></span><span style="height:60%"></span></div></div></div>',
      product: '<div class="wrap"><h2>Everything in one workspace</h2><p class="lead">Replace five tools with one AI-native platform.</p>' +
        '<div class="grid3"><div class="fc"><div class="ic"></div><h3>AI Planning</h3><p>Turn a prompt into a full roadmap with tasks and estimates.</p></div>' +
        '<div class="fc"><div class="ic"></div><h3>Code Copilot</h3><p>Context-aware suggestions across your entire repository.</p></div>' +
        '<div class="fc"><div class="ic"></div><h3>Auto Docs</h3><p>Documentation that writes and updates itself as you build.</p></div></div></div>',
      pricing: '<div class="wrap"><h2>Simple pricing</h2><p class="lead">Start free. Upgrade when you scale.</p>' +
        '<div class="plans"><div class="plan"><h3>Starter</h3><div class="pr">₹0</div><ul><li>Up to 3 projects</li><li>Community support</li><li>Core AI tools</li></ul><a class="pick">Choose</a></div>' +
        '<div class="plan pro"><h3>Pro</h3><div class="pr">₹2,499</div><ul><li>Unlimited projects</li><li>Priority AI compute</li><li>Team collaboration</li></ul><a class="pick">Choose Pro</a></div></div></div>',
      contact: '<div class="wrap"><h2>Talk to us</h2><p class="lead">Tell us what you\'re building.</p>' +
        '<div class="form"><input placeholder="Work email"><input placeholder="Company"><textarea rows="4" placeholder="What do you want to automate?"></textarea><button class="b1">Send message</button></div></div>'
    }
  });

  // ============================================================
  // SAMPLE 2 — SAVEUR · Fine-dining restaurant (cream, serif)
  // ============================================================
  var saveur = buildSite({
    font: '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Inter:wght@400;500&display=swap" rel="stylesheet">',
    css: 'body{font-family:Inter,sans-serif;background:#f7f2ea;color:#26221c;line-height:1.7}' +
      '.wrap{max-width:880px;margin:0 auto;padding:0 28px}' +
      'header{border-bottom:1px solid #e6ddce}.nav{display:flex;align-items:center;justify-content:space-between;height:74px}' +
      '.logo{font-family:Playfair Display;font-size:1.5rem;letter-spacing:.02em}' +
      '.links{display:flex;gap:30px}.links a{font-size:.86rem;letter-spacing:.08em;text-transform:uppercase;color:#8a7f6e}.links a.active,.links a:hover{color:#b06a3b}' +
      '.ey{font-size:.8rem;letter-spacing:.28em;text-transform:uppercase;color:#b06a3b;margin-top:56px}' +
      'h1{font-family:Playfair Display;font-weight:700;font-size:clamp(2.6rem,7vw,4rem);line-height:1.05;margin:14px 0 18px}' +
      '.sub{max-width:480px;color:#5c5344;font-size:1.05rem}' +
      '.rsv{display:inline-block;margin:28px 0 60px;background:#26221c;color:#f7f2ea;padding:14px 30px;border-radius:2px;letter-spacing:.06em;font-size:.9rem}' +
      '.hero-img{height:230px;border-radius:4px;background:linear-gradient(135deg,#c98a54,#7a4a26);margin-bottom:60px;position:relative;overflow:hidden}' +
      '.hero-img::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 70% 20%,rgba(255,255,255,.25),transparent 55%)}' +
      'section{padding:36px 0}h2{font-family:Playfair Display;font-size:2.2rem;margin-bottom:6px}.lead{color:#8a7f6e;margin-bottom:30px}' +
      '.dish{display:flex;align-items:baseline;gap:14px;padding:16px 0;border-bottom:1px dashed #d8cdba}' +
      '.dish .n{font-family:Playfair Display;font-size:1.15rem}.dish .d{flex:1;border-bottom:1px dotted #cbbfa8;transform:translateY(-4px)}.dish .p{font-family:Playfair Display;color:#b06a3b}' +
      '.dish small{display:block;color:#8a7f6e;font-size:.85rem;font-weight:400}' +
      '.story{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}' +
      '.story .im{height:220px;border-radius:4px;background:linear-gradient(135deg,#a9884f,#5c4327)}' +
      '.story p{color:#5c5344;margin-bottom:14px}.st{display:flex;gap:30px;margin-top:10px}.st b{font-family:Playfair Display;font-size:1.8rem;color:#b06a3b;display:block}.st small{color:#8a7f6e;font-size:.8rem}' +
      '.rform{max-width:440px}.rrow{display:grid;grid-template-columns:1fr 1fr;gap:12px}' +
      '.rform input,.rform select{width:100%;background:#fff;border:1px solid #e0d6c5;border-radius:3px;padding:13px;margin-bottom:12px;font-family:inherit;color:#26221c}' +
      '@media(max-width:640px){.nav{flex-wrap:wrap;height:auto;padding:9px 0;gap:4px 12px}.links{gap:16px;font-size:.74rem;flex-basis:100%;order:3;justify-content:center;margin-top:2px}.story{grid-template-columns:1fr}.rrow{grid-template-columns:1fr}}',
    header: '<header><div class="wrap nav"><div class="logo">Saveur</div><nav class="links">%NAV%</nav></div></header>',
    nav: [{ id: 'home', label: 'Home' }, { id: 'menu', label: 'Menu' }, { id: 'story', label: 'Story' }, { id: 'reserve', label: 'Reserve' }],
    pages: {
      home: '<div class="wrap"><p class="ey">Modern French · Est. 2011</p><h1>An evening<br>to remember.</h1>' +
        '<p class="sub">Seasonal tasting menus crafted from the day\'s finest produce, served in the heart of the old quarter.</p>' +
        '<a class="rsv" data-go="reserve">Reserve a table</a><div class="hero-img"></div></div>',
      menu: '<div class="wrap"><h2>Tasting Menu</h2><p class="lead">Five courses · paired wines available</p>' +
        '<div class="dish"><div class="n">Heirloom Beetroot<small>goat curd, walnut, aged balsamic</small></div><div class="d"></div><div class="p">₹650</div></div>' +
        '<div class="dish"><div class="n">Hand-rolled Agnolotti<small>brown butter, sage, parmigiano</small></div><div class="d"></div><div class="p">₹850</div></div>' +
        '<div class="dish"><div class="n">Line-caught Sea Bass<small>fennel, saffron, citrus beurre blanc</small></div><div class="d"></div><div class="p">₹1,200</div></div>' +
        '<div class="dish"><div class="n">Dry-aged Duck<small>cherry, endive, juniper jus</small></div><div class="d"></div><div class="p">₹1,350</div></div>' +
        '<div class="dish"><div class="n">Dark Chocolate Délice<small>hazelnut praline, sea salt</small></div><div class="d"></div><div class="p">₹500</div></div></div>',
      story: '<div class="wrap"><h2>Our story</h2><p class="lead">Rooted in craft and season.</p>' +
        '<div class="story"><div><p>Saveur began as a six-table room with a single wood oven. A decade on, our philosophy is unchanged — respect the produce, cook with restraint, and let every plate speak of its season.</p>' +
        '<p>Everything is made in-house, from the sourdough to the petit fours.</p>' +
        '<div class="st"><div><b>13</b><small>Years serving</small></div><div><b>1</b><small>Michelin star</small></div><div><b>100%</b><small>Local produce</small></div></div></div><div class="im"></div></div></div>',
      reserve: '<div class="wrap"><h2>Reserve</h2><p class="lead">We\'ll confirm within the hour.</p>' +
        '<div class="rform"><div class="rrow"><input placeholder="Name"><input placeholder="Guests"></div><div class="rrow"><input placeholder="Date"><input placeholder="Time"></div><input placeholder="Phone"><a class="rsv" style="margin:6px 0 0">Request table</a></div></div>'
    }
  });

  // ============================================================
  // SAMPLE 3 — PULSE · Fitness studio (black + lime, condensed)
  // ============================================================
  var pulse = buildSite({
    font: '<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">',
    css: 'body{font-family:Inter,sans-serif;background:#0c0c0c;color:#fff;line-height:1.6}' +
      '.wrap{max-width:940px;margin:0 auto;padding:0 26px}' +
      'header{border-bottom:1px solid #1c1c1c}.nav{display:flex;align-items:center;justify-content:space-between;height:66px}' +
      '.logo{font-family:Oswald;font-weight:700;font-size:1.4rem;letter-spacing:.06em;text-transform:uppercase}.logo b{color:#c6ff2e}' +
      '.links{display:flex;gap:26px}.links a{font-family:Oswald;text-transform:uppercase;letter-spacing:.05em;font-size:.9rem;color:#9a9a9a}.links a.active,.links a:hover{color:#c6ff2e}' +
      '.join{background:#c6ff2e;color:#0c0c0c;font-family:Oswald;text-transform:uppercase;padding:9px 18px;border-radius:4px;font-weight:700;letter-spacing:.04em}' +
      'h1{font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:clamp(3rem,10vw,6rem);line-height:.92;letter-spacing:-.01em;margin:40px 0 16px}' +
      'h1 span{color:#c6ff2e}.sub{color:#b0b0b0;max-width:460px;font-size:1.05rem}' +
      '.btns{display:flex;gap:12px;margin:26px 0 54px;flex-wrap:wrap}' +
      '.b1{background:#c6ff2e;color:#0c0c0c;font-family:Oswald;text-transform:uppercase;letter-spacing:.04em;font-weight:700;padding:14px 28px;border-radius:4px;border:0}' +
      '.b2{background:transparent;border:1px solid #333;color:#fff;font-family:Oswald;text-transform:uppercase;padding:14px 28px;border-radius:4px}' +
      '.strip{display:flex;gap:0;border-top:1px solid #1c1c1c;border-bottom:1px solid #1c1c1c;margin-bottom:54px}' +
      '.strip div{flex:1;padding:22px 0;text-align:center;border-right:1px solid #1c1c1c}.strip div:last-child{border:0}' +
      '.strip b{font-family:Oswald;font-size:2rem;color:#c6ff2e;display:block}.strip small{color:#8a8a8a;text-transform:uppercase;font-size:.72rem;letter-spacing:.08em}' +
      'section{padding:38px 0}h2{font-family:Oswald;text-transform:uppercase;font-size:2.4rem;letter-spacing:.01em;margin-bottom:6px}.lead{color:#9a9a9a;margin-bottom:26px}' +
      '.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}' +
      '.cc{border:1px solid #1f1f1f;border-radius:8px;overflow:hidden;background:#131313}' +
      '.cc .im{height:120px;background:linear-gradient(135deg,#2a2a2a,#0c0c0c);position:relative}.cc .im::after{content:"";position:absolute;left:0;bottom:0;width:100%;height:4px;background:#c6ff2e}' +
      '.cc .bd{padding:16px}.cc h3{font-family:Oswald;text-transform:uppercase;font-size:1.1rem;margin-bottom:4px}.cc p{color:#9a9a9a;font-size:.85rem}' +
      '.tr{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.tr .p{height:150px;border-radius:8px;background:linear-gradient(135deg,#c6ff2e33,#0c0c0c);border:1px solid #1f1f1f;display:flex;align-items:flex-end;padding:14px;font-family:Oswald;text-transform:uppercase}' +
      '.plan{border:1px solid #1f1f1f;border-radius:10px;padding:26px;max-width:340px;background:#131313}.plan.hot{border-color:#c6ff2e}' +
      '.plan .pr{font-family:Oswald;font-size:2.6rem;color:#c6ff2e;margin:6px 0 14px}.plan ul{list-style:none;color:#b0b0b0;font-size:.9rem}.plan li{padding:6px 0;border-top:1px solid #1f1f1f}' +
      '@media(max-width:640px){.nav{flex-wrap:wrap;height:auto;padding:9px 0;gap:4px 12px}.links{gap:16px;font-size:.74rem;flex-basis:100%;order:3;justify-content:center;margin-top:2px}.grid3,.tr{grid-template-columns:1fr}}',
    header: '<header><div class="wrap nav"><div class="logo">PUL<b>SE</b></div><nav class="links">%NAV%</nav><a class="join" data-go="join">Join now</a></div></header>',
    nav: [{ id: 'home', label: 'Home' }, { id: 'classes', label: 'Classes' }, { id: 'trainers', label: 'Trainers' }, { id: 'join', label: 'Join' }],
    pages: {
      home: '<div class="wrap"><h1>Train<br><span>like a beast.</span></h1><p class="sub">Strength, HIIT and conditioning classes built to push your limits — seven days a week.</p>' +
        '<div class="btns"><button class="b1">Start today</button><button class="b2">View classes</button></div>' +
        '<div class="strip"><div><b>24/7</b><small>Access</small></div><div><b>40+</b><small>Classes / week</small></div><div><b>12</b><small>Coaches</small></div><div><b>2k+</b><small>Members</small></div></div></div>',
      classes: '<div class="wrap"><h2>Our classes</h2><p class="lead">Find your intensity.</p>' +
        '<div class="grid3"><div class="cc"><div class="im"></div><div class="bd"><h3>Power HIIT</h3><p>45 min · full-body burn</p></div></div>' +
        '<div class="cc"><div class="im"></div><div class="bd"><h3>Iron Strength</h3><p>60 min · heavy lifting</p></div></div>' +
        '<div class="cc"><div class="im"></div><div class="bd"><h3>Combat Fit</h3><p>50 min · boxing cardio</p></div></div></div></div>',
      trainers: '<div class="wrap"><h2>Meet the coaches</h2><p class="lead">Certified. Relentless.</p>' +
        '<div class="tr"><div class="p">Marcus</div><div class="p">Elena</div><div class="p">Deshawn</div></div></div>',
      join: '<div class="wrap"><h2>Membership</h2><p class="lead">No contracts. Cancel anytime.</p>' +
        '<div class="plan hot"><h3 style="font-family:Oswald;text-transform:uppercase">Unlimited</h3><div class="pr">₹1,999<span style="font-size:1rem;color:#9a9a9a">/mo</span></div><ul><li>All classes included</li><li>24/7 gym access</li><li>Free intro session</li><li>Nutrition guide</li></ul><a class="b1" style="display:block;text-align:center;margin-top:18px">Join now</a></div></div>'
    }
  });

  // ============================================================
  // SAMPLE 4 — LUMEN · Fashion e-commerce (minimal, editorial)
  // ============================================================
  var lumen = buildSite({
    font: '<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500&display=swap" rel="stylesheet">',
    css: 'body{font-family:Inter,sans-serif;background:#fff;color:#1a1a1a;line-height:1.6}' +
      '.wrap{max-width:960px;margin:0 auto;padding:0 28px}' +
      'header{border-bottom:1px solid #eee}.nav{display:flex;align-items:center;justify-content:space-between;height:70px}' +
      '.logo{font-family:Cormorant Garamond;font-size:1.8rem;letter-spacing:.14em;text-transform:uppercase}' +
      '.links{display:flex;gap:30px}.links a{font-size:.82rem;letter-spacing:.1em;text-transform:uppercase;color:#8a8a8a}.links a.active,.links a:hover{color:#1a1a1a}' +
      '.hero{display:grid;grid-template-columns:1.1fr 1fr;gap:36px;align-items:center;padding:54px 0}' +
      '.hero h1{font-family:Cormorant Garamond;font-weight:500;font-size:clamp(2.6rem,7vw,4.4rem);line-height:1;margin-bottom:18px}' +
      '.hero p{color:#666;max-width:340px;margin-bottom:24px}' +
      '.shop{display:inline-block;border:1px solid #1a1a1a;padding:13px 32px;font-size:.82rem;letter-spacing:.14em;text-transform:uppercase}' +
      '.hero .im{height:360px;background:linear-gradient(160deg,#e7d8cf,#cbb3a4)}' +
      'section{padding:34px 0}h2{font-family:Cormorant Garamond;font-weight:500;font-size:2.6rem;margin-bottom:4px}.lead{color:#8a8a8a;margin-bottom:26px;letter-spacing:.02em}' +
      '.pg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}' +
      '.pc .im{height:230px;margin-bottom:12px}.pc:nth-child(1) .im{background:linear-gradient(160deg,#e9ded5,#c9b4a4)}.pc:nth-child(2) .im{background:linear-gradient(160deg,#dfe3e6,#b9c1c7)}.pc:nth-child(3) .im{background:linear-gradient(160deg,#e8e2d6,#c7bda6)}' +
      '.pc:nth-child(4) .im{background:linear-gradient(160deg,#efe0e0,#d3b8b8)}.pc:nth-child(5) .im{background:linear-gradient(160deg,#dde6df,#b3c4b8)}.pc:nth-child(6) .im{background:linear-gradient(160deg,#e6e0ea,#c2b4cf)}' +
      '.pc h3{font-family:Cormorant Garamond;font-size:1.3rem}.pc .pr{color:#8a8a8a;font-size:.9rem}' +
      '.mosaic{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:120px;gap:12px}' +
      '.mosaic div:nth-child(1){grid-row:span 2;background:linear-gradient(160deg,#e3d5cb,#c3a996)}.mosaic div:nth-child(2){background:linear-gradient(160deg,#dfe3e6,#b9c1c7)}.mosaic div:nth-child(3){grid-column:span 2;background:linear-gradient(160deg,#efe0e0,#d3b8b8)}' +
      '.mosaic div:nth-child(4){background:linear-gradient(160deg,#e8e2d6,#c7bda6)}.mosaic div:nth-child(5){grid-column:span 2;background:linear-gradient(160deg,#dde6df,#b3c4b8)}.mosaic div{border-radius:2px}' +
      '.cform{max-width:420px}.cform input,.cform textarea{width:100%;border:1px solid #ddd;border-radius:2px;padding:13px;margin-bottom:12px;font-family:inherit}' +
      '@media(max-width:640px){.nav{flex-wrap:wrap;height:auto;padding:9px 0;gap:4px 12px}.links{gap:16px;font-size:.74rem;flex-basis:100%;order:3;justify-content:center;margin-top:2px}.hero{grid-template-columns:1fr}.hero .im{height:260px}.pg{grid-template-columns:1fr 1fr}.mosaic{grid-template-columns:1fr 1fr}}',
    header: '<header><div class="wrap nav"><div class="logo">Lumen</div><nav class="links">%NAV%</nav></div></header>',
    nav: [{ id: 'home', label: 'Home' }, { id: 'shop', label: 'Shop' }, { id: 'lookbook', label: 'Lookbook' }, { id: 'contact', label: 'Contact' }],
    pages: {
      home: '<div class="wrap"><div class="hero"><div><h1>The quiet<br>edit.</h1><p>Considered essentials in natural fibres — made to last, designed to layer.</p><a class="shop" data-go="shop">Shop the collection</a></div><div class="im"></div></div></div>',
      shop: '<div class="wrap"><h2>New arrivals</h2><p class="lead">Autumn / Winter</p>' +
        '<div class="pg"><div class="pc"><div class="im"></div><h3>Wool Overcoat</h3><div class="pr">₹18,000</div></div>' +
        '<div class="pc"><div class="im"></div><h3>Silk Blouse</h3><div class="pr">₹8,900</div></div>' +
        '<div class="pc"><div class="im"></div><h3>Tailored Trouser</h3><div class="pr">₹10,500</div></div>' +
        '<div class="pc"><div class="im"></div><h3>Cashmere Knit</h3><div class="pr">₹13,500</div></div>' +
        '<div class="pc"><div class="im"></div><h3>Linen Shirt</h3><div class="pr">₹6,500</div></div>' +
        '<div class="pc"><div class="im"></div><h3>Leather Tote</h3><div class="pr">₹19,500</div></div></div></div>',
      lookbook: '<div class="wrap"><h2>Lookbook</h2><p class="lead">A/W campaign</p><div class="mosaic"><div></div><div></div><div></div><div></div><div></div></div></div>',
      contact: '<div class="wrap"><h2>Contact</h2><p class="lead">Client care · Mon–Sat</p><div class="cform"><input placeholder="Name"><input placeholder="Email"><textarea rows="4" placeholder="How can we help?"></textarea><a class="shop" style="border:0;background:#1a1a1a;color:#fff">Send</a></div></div>'
    }
  });

  // ============================================================
  // SAMPLE 5 — MERIDIAN · Medical clinic (calm teal, friendly)
  // ============================================================
  var meridian = buildSite({
    font: '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">',
    css: 'body{font-family:Poppins,sans-serif;background:#f3fbfb;color:#123433;line-height:1.65}' +
      '.wrap{max-width:940px;margin:0 auto;padding:0 26px}' +
      'header{background:#fff;border-bottom:1px solid #e0f0ef}.nav{display:flex;align-items:center;justify-content:space-between;height:68px}' +
      '.logo{font-weight:700;font-size:1.25rem;color:#0ea5a5;display:flex;align-items:center;gap:8px}.logo b{width:24px;height:24px;border-radius:8px;background:#0ea5a5;display:inline-block}' +
      '.links{display:flex;gap:26px}.links a{font-size:.9rem;font-weight:500;color:#5a726f}.links a.active,.links a:hover{color:#0ea5a5}' +
      '.book{background:#0ea5a5;color:#fff;padding:10px 18px;border-radius:10px;font-weight:600;font-size:.88rem}' +
      '.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:34px;align-items:center;padding:50px 0}' +
      '.hero h1{font-size:clamp(2.1rem,5.5vw,3.2rem);font-weight:700;line-height:1.1;margin-bottom:16px}.hero h1 span{color:#0ea5a5}' +
      '.hero p{color:#5a726f;margin-bottom:22px}.hero .im{height:280px;border-radius:20px;background:linear-gradient(160deg,#67e8e8,#0e8a8a);position:relative;overflow:hidden}' +
      '.hero .im::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 75% 15%,rgba(255,255,255,.4),transparent 55%)}' +
      '.b1{background:#0ea5a5;color:#fff;border:0;padding:13px 26px;border-radius:12px;font-weight:600;font-family:inherit}' +
      '.trust{display:flex;gap:26px;margin-top:22px}.trust b{font-size:1.5rem;color:#0ea5a5;display:block}.trust small{color:#5a726f;font-size:.78rem}' +
      'section{padding:36px 0}h2{font-size:1.9rem;font-weight:700;margin-bottom:6px}.lead{color:#5a726f;margin-bottom:26px}' +
      '.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}' +
      '.sc{background:#fff;border:1px solid #e0f0ef;border-radius:16px;padding:22px}.sc .ic{width:44px;height:44px;border-radius:12px;background:#d7f5f4;display:flex;align-items:center;justify-content:center;margin-bottom:14px}.sc .ic b{width:18px;height:18px;border-radius:6px;background:#0ea5a5;display:inline-block}' +
      '.sc h3{font-size:1.05rem;margin-bottom:6px}.sc p{color:#5a726f;font-size:.88rem}' +
      '.docs{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.dc{background:#fff;border:1px solid #e0f0ef;border-radius:16px;overflow:hidden;text-align:center;padding-bottom:16px}' +
      '.dc .im{height:130px;background:linear-gradient(160deg,#a7ecec,#0ea5a5)}.dc h3{font-size:1rem;margin-top:14px}.dc p{color:#5a726f;font-size:.82rem}' +
      '.aform{max-width:460px;background:#fff;border:1px solid #e0f0ef;border-radius:18px;padding:24px}.arow{display:grid;grid-template-columns:1fr 1fr;gap:12px}' +
      '.aform input,.aform select{width:100%;border:1px solid #d5e8e7;border-radius:10px;padding:13px;margin-bottom:12px;font-family:inherit;color:#123433;background:#f8fdfd}' +
      '@media(max-width:640px){.nav{flex-wrap:wrap;height:auto;padding:9px 0;gap:4px 12px}.links{gap:16px;font-size:.74rem;flex-basis:100%;order:3;justify-content:center;margin-top:2px}.hero{grid-template-columns:1fr}.grid3,.docs{grid-template-columns:1fr}.arow{grid-template-columns:1fr}}',
    header: '<header><div class="wrap nav"><div class="logo"><b></b>Meridian</div><nav class="links">%NAV%</nav><a class="book" data-go="appointment">Book now</a></div></header>',
    nav: [{ id: 'home', label: 'Home' }, { id: 'services', label: 'Services' }, { id: 'doctors', label: 'Doctors' }, { id: 'appointment', label: 'Appointment' }],
    pages: {
      home: '<div class="wrap"><div class="hero"><div><h1>Care that puts <span>you first.</span></h1><p>Modern family healthcare with same-day appointments, friendly doctors and a calm, welcoming clinic.</p><button class="b1" data-go="appointment">Book an appointment</button>' +
        '<div class="trust"><div><b>25+</b><small>Specialists</small></div><div><b>15k</b><small>Patients cared for</small></div><div><b>4.9★</b><small>Patient rating</small></div></div></div><div class="im"></div></div></div>',
      services: '<div class="wrap"><h2>Our services</h2><p class="lead">Comprehensive care under one roof.</p>' +
        '<div class="grid3"><div class="sc"><div class="ic"><b></b></div><h3>General Medicine</h3><p>Routine check-ups, diagnosis and preventive care for all ages.</p></div>' +
        '<div class="sc"><div class="ic"><b></b></div><h3>Cardiology</h3><p>Heart health screening, ECG and specialist consultations.</p></div>' +
        '<div class="sc"><div class="ic"><b></b></div><h3>Pediatrics</h3><p>Gentle, expert care for infants, children and teens.</p></div></div></div>',
      doctors: '<div class="wrap"><h2>Meet our doctors</h2><p class="lead">Experienced and caring.</p>' +
        '<div class="docs"><div class="dc"><div class="im"></div><h3>Dr. Anaya Rao</h3><p>General Physician</p></div>' +
        '<div class="dc"><div class="im"></div><h3>Dr. Iman Khalil</h3><p>Cardiologist</p></div>' +
        '<div class="dc"><div class="im"></div><h3>Dr. Leo Park</h3><p>Pediatrician</p></div></div></div>',
      appointment: '<div class="wrap"><h2>Book an appointment</h2><p class="lead">We\'ll confirm by phone.</p>' +
        '<div class="aform"><div class="arow"><input placeholder="Full name"><input placeholder="Phone"></div><div class="arow"><input placeholder="Preferred date"><select><option>General Medicine</option><option>Cardiology</option><option>Pediatrics</option></select></div><textarea rows="3" placeholder="Reason for visit" style="width:100%;border:1px solid #d5e8e7;border-radius:10px;padding:13px;font-family:inherit;margin-bottom:12px;background:#f8fdfd"></textarea><button class="b1" style="width:100%">Confirm booking</button></div></div>'
    }
  });

  // ---- Sample metadata for the gallery cards ----
  var SAMPLES = [
    { name: 'Nexa', cat: 'SaaS / AI Startup', domain: 'nexa.app', c1: '#6366f1', c2: '#a855f7',
      desc: 'A bold, dark landing page for an AI product — gradient accents and a live dashboard feel.',
      tags: ['Landing page', 'Dark UI', 'SaaS'], doc: nexa },
    { name: 'Saveur', cat: 'Restaurant / Hospitality', domain: 'saveur-dining.com', c1: '#c98a54', c2: '#7a4a26',
      desc: 'An elegant fine-dining site with editorial serif type, a tasting menu and table booking.',
      tags: ['Editorial', 'Serif', 'Booking'], doc: saveur },
    { name: 'Pulse', cat: 'Fitness / Gym', domain: 'pulse-fit.com', c1: '#1a1a1a', c2: '#c6ff2e',
      desc: 'A high-energy fitness studio — condensed type, neon accents and membership plans.',
      tags: ['Bold', 'Condensed', 'Membership'], doc: pulse },
    { name: 'Lumen', cat: 'Fashion / E-commerce', domain: 'lumen-studio.com', c1: '#cbb3a4', c2: '#8a6f5e',
      desc: 'A minimal, editorial fashion store with a product grid and lookbook mosaic.',
      tags: ['Minimal', 'E-commerce', 'Editorial'], doc: lumen },
    { name: 'Meridian', cat: 'Healthcare / Clinic', domain: 'meridian-health.com', c1: '#0ea5a5', c2: '#0e8a8a',
      desc: 'A calm, trustworthy clinic site with services, doctors and an appointment flow.',
      tags: ['Healthcare', 'Clean', 'Booking'], doc: meridian }
  ];

  // ---- Build the gallery grid ----
  var grid = document.getElementById('pfGrid');
  if (!grid) return;
  SAMPLES.forEach(function (s, i) {
    var card = document.createElement('button');
    card.className = 'pf-card';
    card.type = 'button';
    card.setAttribute('aria-label', 'Preview the ' + s.name + ' sample website');
    card.innerHTML =
      '<div class="pf-cover" style="--c1:' + s.c1 + ';--c2:' + s.c2 + '">' +
        '<span class="pf-cat">' + s.cat + '</span>' +
        '<div class="pf-mock"><div class="bar"><i></i><i></i><i></i></div><div class="body"><div class="h"></div><div class="h2"></div><div class="h3"></div><div class="row"><span></span><span></span><span></span></div></div></div>' +
      '</div>' +
      '<div class="pf-body"><h3>' + s.name + '</h3><p>' + s.desc + '</p>' +
        '<div class="pf-tags">' + s.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
        '<span class="pf-open">Open live preview <span class="arw">→</span></span></div>';
    card.addEventListener('click', function () { openDrawer(s); });
    grid.appendChild(card);
  });

  // ---- Slide-over drawer ----
  var scrim = document.createElement('div');
  scrim.className = 'pf-scrim';
  var drawer = document.createElement('aside');
  drawer.className = 'pf-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('aria-label', 'Website sample preview');
  drawer.innerHTML =
    '<div class="pf-drawer-head"><div><h3 id="pfName"></h3><div class="sub" id="pfCat"></div></div>' +
      '<button class="pf-close" id="pfClose" aria-label="Close preview">✕</button></div>' +
    '<div class="pf-chrome"><div class="dots"><i></i><i></i><i></i></div><div class="url" id="pfUrl"></div></div>' +
    '<iframe class="pf-frame" id="pfFrame" title="Sample website preview" loading="lazy"></iframe>' +
    '<div class="pf-hint">Concept design — use the menu inside to browse the pages. We build these bespoke for each client.</div>';
  document.body.appendChild(scrim);
  document.body.appendChild(drawer);

  var frame = document.getElementById('pfFrame');
  var lastFocus = null;

  function openDrawer(s) {
    lastFocus = document.activeElement;
    document.getElementById('pfName').textContent = s.name;
    document.getElementById('pfCat').textContent = s.cat;
    document.getElementById('pfUrl').textContent = 'https://' + s.domain;
    frame.srcdoc = s.doc;
    scrim.classList.add('open');
    drawer.classList.add('open');
    document.body.classList.add('pf-lock');
    setTimeout(function () { document.getElementById('pfClose').focus(); }, 60);
  }
  function closeDrawer() {
    scrim.classList.remove('open');
    drawer.classList.remove('open');
    document.body.classList.remove('pf-lock');
    setTimeout(function () { frame.srcdoc = ''; }, 420);
    if (lastFocus) lastFocus.focus();
  }
  document.getElementById('pfClose').addEventListener('click', closeDrawer);
  scrim.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer(); });
})();
