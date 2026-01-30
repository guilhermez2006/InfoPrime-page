document.addEventListener('DOMContentLoaded', function () {

  // Menu Mobile
  const menuHamburger = document.getElementById('menuHamburger');
  const menuClose = document.getElementById('menuClose');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
  const body = document.body;
  function openMenu() {
    mobileMenuOverlay.classList.add('active');
    menuHamburger.classList.add('active');
    menuHamburger.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenuOverlay.classList.remove('active');
    menuHamburger.classList.remove('active');
    menuHamburger.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }
  if (menuHamburger) {
    menuHamburger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (mobileMenuOverlay.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
  if (menuClose) {
    menuClose.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', function (e) {
      if (e.target === mobileMenuOverlay) closeMenu();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
      closeMenu();
    }
  });

  // Modais
  const servicoParts = document.querySelectorAll('.servico-parte[data-modal]');
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const modalCloses = document.querySelectorAll('.modal-close');
  servicoParts.forEach(part => {
    part.addEventListener('click', function () {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
        body.style.overflow = 'hidden';
      }
    });
  });
  modalCloses.forEach(close => {
    close.addEventListener('click', function () {
      const modal = this.closest('.modal-overlay');
      if (modal) {
        modal.style.display = 'none';
        body.style.overflow = '';
      }
    });
  });
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        overlay.style.display = 'none';
        body.style.overflow = '';
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modalOverlays.forEach(modal => {
        if (modal.style.display === 'flex') {
          modal.style.display = 'none';
          body.style.overflow = '';
        }
      });
    }
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Particles.js
  tsParticles.load("particles-js", {
    fpsLimit: 60,
    particles: {
      number: { value: 180, limit: 120, density: { enable: true, area: 800 } },
      color: { value: "#009eff" },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: { min: 1.5, max: 4 } },
      links: { enable: true, distance: 150, color: "#009eff", opacity: 0.4, width: 1.2 },
      move: { enable: true, speed: 1.5, outModes: "out" }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 200, links: { opacity: 1 } },
        push: { quantity: 10 }
      }
    },
    responsive: [
      { maxWidth: 1024, options: { particles: { number: { value: 80, limit: 120 } } } },
      { maxWidth: 768, options: { particles: { number: { value: 40, limit: 60 } } } }
    ],
    detectRetina: true
  });
  // Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.boxShadow = 'var(--shadow-sm)';
    }
  });
});