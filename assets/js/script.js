/*
   INFOPRIME - JAVASCRIPT PRINCIPAL
*/

/* Configuração tsParticles */
tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 180,
      limit: 250,
      density: { enable: true, area: 800 }
    },
    color: { value: "#009eff" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: {
      value: { min: 1.5, max: 4 }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#009eff",
      opacity: 0.4,
      width: 1.2
    },
    move: {
      enable: true,
      speed: 1.5,
      outModes: "out"
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 200, links: { opacity: 1 } },
      push: {
        quantity: 10,
        particles: {
          size: { value: { min: 2, max: 5 } },
          move: {
            speed: 10,
            outModes: "destroy"
          },
          opacity: {
            value: { min: 0, max: 0.7 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
              sync: true,
              startValue: "max",
              destroy: "min"
            }
          }
        }
      }
    }
  },
  responsive: [
    {
      maxWidth: 1024,
      options: { particles: { number: { value: 80, limit: 120 } } }
    },
    {
      maxWidth: 768,
      options: { particles: { number: { value: 40, limit: 60 } } }
    }
  ],
  detectRetina: true
});

/*
   MENU MOBILE HAMBURGER
*/

const menuHamburger = document.getElementById("menuHamburger");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
const menuClose = document.getElementById("menuClose");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

function openMobileMenu() {
  mobileMenuOverlay.classList.add("active");
  menuHamburger.classList.add("active");
  menuHamburger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenuOverlay.classList.remove("active");
  menuHamburger.classList.remove("active");
  menuHamburger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "auto";
}

menuHamburger.addEventListener("click", openMobileMenu);
menuClose.addEventListener("click", closeMobileMenu);

mobileNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

mobileMenuOverlay.addEventListener("click", (e) => {
  if (e.target === mobileMenuOverlay) {
    closeMobileMenu();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenuOverlay.classList.contains("active")) {
    closeMobileMenu();
  }
});

/* 
   GESTÃO DE MODAIS
*/

document.querySelectorAll(".servico-parte").forEach(parte => {
  parte.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  });
});

document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", function () {
    const modal = this.closest(".modal-overlay");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

document.querySelectorAll(".modal-overlay").forEach(modal => {
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      this.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay").forEach(modal => {
      if (modal.style.display === "flex") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }
});