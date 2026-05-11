/**
 * Benevia Grupo Consultor — Script principal
 * Menú hamburguesa, navegación accesible, sin dependencias.
 * Tamaño objetivo: < 5KB minificado.
 */

(function() {
  'use strict';

  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = mainNav ? mainNav.querySelectorAll('a') : [];

  /**
   * Alternar menú móvil
   */
  function toggleMenu() {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    // Prevenir scroll del body cuando el menú está abierto
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  /**
   * Cerrar menú móvil
   */
  function closeMenu() {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Evento del botón hamburguesa
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  // Cerrar menú al hacer click en cualquier link de navegación
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (mainNav.classList.contains('open')) {
        closeMenu();
      }
    });
  });

  // Cerrar menú al presionar Escape (accesibilidad)
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && mainNav.classList.contains('open')) {
      closeMenu();
      menuToggle.focus();
    }
  });

  // Cerrar menú al hacer click fuera de él
  document.addEventListener('click', function(event) {
    if (
      mainNav.classList.contains('open') &&
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Ajustar al cambiar tamaño de ventana: si pasa a desktop, cerrar menú móvil
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1200 && mainNav.classList.contains('open')) {
      closeMenu();
    }
  });

})();
