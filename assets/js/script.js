/*
   INFOPRIME - JAVASCRIPT
*/

document.addEventListener('DOMContentLoaded', function() {
  // ==========================================
  // MENU MOBILE - HAMBURGER
  // ==========================================
  
  const menuHamburger = document.getElementById('menuHamburger');
  const menuClose = document.getElementById('menuClose');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
  const body = document.body;

  // Função para abrir menu
  function openMenu() {
    mobileMenuOverlay.classList.add('active');
    menuHamburger.classList.add('active');
    menuHamburger.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  }

  // Função para fechar menu
  function closeMenu() {
    mobileMenuOverlay.classList.remove('active');
    menuHamburger.classList.remove('active');
    menuHamburger.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }

  // Event Listeners para menu
  if (menuHamburger) {
    menuHamburger.addEventListener('click', function(e) {
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
    menuClose.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }

  // Fechar menu ao clicar em link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });

  // Fechar menu ao clicar fora (no overlay)
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', function(e) {
      if (e.target === mobileMenuOverlay) {
        closeMenu();
      }
    });
  }

  // Fechar menu com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
      closeMenu();
    }
  });

  // ==========================================
  // MODAIS
  // ==========================================
  
  const servicoParts = document.querySelectorAll('.servico-parte[data-modal]');
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const modalCloses = document.querySelectorAll('.modal-close');

  // Abrir modal
  servicoParts.forEach(part => {
    part.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
        body.style.overflow = 'hidden';
      }
    });
  });

  // Fechar modal pelo X
  modalCloses.forEach(close => {
    close.addEventListener('click', function() {
      const modal = this.closest('.modal-overlay');
      if (modal) {
        modal.style.display = 'none';
        body.style.overflow = '';
      }
    });
  });

  // Fechar modal ao clicar fora
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.style.display = 'none';
        body.style.overflow = '';
      }
    });
  });

  // Fechar modal com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modalOverlays.forEach(modal => {
        if (modal.style.display === 'flex') {
          modal.style.display = 'none';
          body.style.overflow = '';
        }
      });
    }
  });

  // ==========================================
  // SMOOTH SCROLL
  // ==========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ==========================================
  // PARTICLES.JS CONFIG
  // ==========================================
  
  if (typeof tsParticles !== 'undefined') {
    tsParticles.load("particles-js", {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#012a5a"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.15,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.05,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
            sync: false
          }
        },
        links: {
          enable: true,
          distance: 150,
          color: "#012a5a",
          opacity: 0.1,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out"
          }
        }
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "grab"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.3
            }
          }
        }
      },
      detectRetina: true,
      background: {
        color: "transparent"
      }
    });
  }

  // ==========================================
  // HEADER SCROLL EFFECT
  // ==========================================
  
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.boxShadow = 'var(--shadow-sm)';
    }
    
    lastScrollY = currentScrollY;
  });
});
