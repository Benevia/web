(() => {
  const anclasAnteriores = {
    '#dueno': 'duenos-fundadores.html',
    '#dueno-fundador': 'duenos-fundadores.html',
    '#familia': 'empresas-familiares.html',
    '#empresa-familiar': 'empresas-familiares.html',
    '#operacion': 'directivos-gerentes.html',
    '#empresas': 'para-quien.html',
    '#es-para-usted': 'para-quien.html',
    '#que-hacemos': 'como-trabajamos.html',
    '#metodologia': 'como-trabajamos.html'
  };
  const enPortada = /(^\/$|\/index\.html$)/.test(window.location.pathname);
  const destino = anclasAnteriores[window.location.hash];
  if (enPortada && destino) {
    window.location.replace(destino);
    return;
  }

  const header = document.querySelector('.site-header');
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  const updateScroll = () => {
    const top = window.scrollY || document.documentElement.scrollTop;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress.style.width = `${Math.min(100, (top / max) * 100)}%`;
    if (header) header.classList.toggle('scrolled', top > 24);
  };
  updateScroll();
  window.addEventListener('scroll', updateScroll, {passive:true});
  window.addEventListener('resize', updateScroll, {passive:true});

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    const cerrarMenu = () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
    };
    toggle.addEventListener('click', () => {
      const abierto = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(abierto));
      toggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', cerrarMenu));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        cerrarMenu();
        toggle.focus();
      }
    });
  }



  // Portada V3: revelación progresiva sin alterar el contenido editorial.
  const openingDetails = [...document.querySelectorAll('.opening-disclosure')];
  openingDetails.forEach(detail => {
    detail.addEventListener('toggle', () => {
      const cue = detail.querySelector('.reveal-cue');
      if (cue) cue.textContent = detail.open ? 'Cerrar' : 'Leer';
      if (detail.open) {
        openingDetails.forEach(other => {
          if (other !== detail && other.open) other.open = false;
        });
      }
    });
  });

  document.querySelectorAll('.story-reveal').forEach(detail => {
    detail.addEventListener('toggle', () => {
      const label = detail.querySelector('.story-reveal-label');
      if (label) label.textContent = detail.open ? 'Cerrar' : 'Leer completo';
    });
  });

  const botones = [...document.querySelectorAll('.filter-btn')];
  const articulos = [...document.querySelectorAll('.article-list-item')];
  const vacio = document.getElementById('emptyFilter');
  if (botones.length && articulos.length) {
    botones.forEach(btn => btn.addEventListener('click', () => {
      botones.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      const filtro = btn.dataset.filter;
      let visibles = 0;
      articulos.forEach(a => {
        const coincide = filtro === 'todos' || a.dataset.category === filtro;
        a.hidden = !coincide;
        if (coincide) visibles++;
      });
      if (vacio) vacio.hidden = visibles !== 0;
    }));
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-motion');
    const targets = document.querySelectorAll('.story-section, section.block, .page-hero, .article-hero');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {rootMargin:'0px 0px -8% 0px', threshold:0.08});
    targets.forEach(el => observer.observe(el));
  }
})();
