(() => {
  const anclasAnteriores={
    '#dueno':'/duenos-fundadores','#dueno-fundador':'/duenos-fundadores','#familia':'/empresas-familiares','#empresa-familiar':'/empresas-familiares','#operacion':'/directivos-gerentes','#empresas':'/para-quien','#es-para-usted':'/para-quien','#que-hacemos':'/como-trabajamos','#metodologia':'/como-trabajamos'
  };
  const enPortada=/(^\/$|\/index(?:\.html)?$)/.test(window.location.pathname);
  const destino=anclasAnteriores[window.location.hash];
  if(enPortada&&destino){window.location.replace(destino);return;}
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.site-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const abierto=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(abierto));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
  const botones=[...document.querySelectorAll('.filter-btn')];
  const articulos=[...document.querySelectorAll('.article-list-item')];
  const vacio=document.getElementById('emptyFilter');
  if(botones.length&&articulos.length){botones.forEach(btn=>btn.addEventListener('click',()=>{botones.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});btn.classList.add('active');btn.setAttribute('aria-pressed','true');const filtro=btn.dataset.filter;let visibles=0;articulos.forEach(a=>{const coincide=filtro==='todos'||a.dataset.category===filtro;a.hidden=!coincide;if(coincide)visibles++;});if(vacio)vacio.hidden=visibles!==0;}));}
})();