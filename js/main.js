/* ════════════════════════════════════════════════════════════════
   ITAKA TOURS — VENECIA
   js/main.js — Scripts compartidos para todas las páginas
════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Header: efecto al hacer scroll ── */
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 55);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // estado inicial por si la página carga con scroll
  }

  /* ── Hero: clase "loaded" para animar la escala del fondo ── */
  const heroFull = document.querySelector('.hero-full');
  if (heroFull) {
    requestAnimationFrame(() => heroFull.classList.add('loaded'));

    // Parallax ligero en el hero de inicio.
    // Usa requestAnimationFrame para ejecutarse una sola vez por frame
    // y no saturar el hilo principal en cada evento scroll.
    const heroBg = heroFull.querySelector('.hero-bg');
    if (heroBg) {
      let parallaxTicking = false;
      window.addEventListener('scroll', () => {
        if (!parallaxTicking) {
          requestAnimationFrame(() => {
            if (window.scrollY < window.innerHeight) {
              heroBg.style.transform = `scale(1) translateY(${window.scrollY * 0.22}px)`;
            }
            parallaxTicking = false;
          });
          parallaxTicking = true;
        }
      }, { passive: true });
    }
  }

  /* ── Menú hamburguesa ── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar al hacer clic en un enlace
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Marcar link activo en la navegación ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-desktop a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Scroll reveal con IntersectionObserver ── */
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

})();
