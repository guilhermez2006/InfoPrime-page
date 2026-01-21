/**
 * tsParticles - CONFIGURAÇÃO FINAL EQUILIBRADA
 * Base robusta, tamanho médio visível e descarte de cliques para poupar RAM.
 */
tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 180, // Densidade alta para preencher a tela
      limit: 250, // Teto máximo para não travar o PC
      density: { enable: true, area: 800 }
    },
    color: { value: "#009eff" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: {
      value: { min: 1.5, max: 4 } // TAMANHO IDEAL: Nem invisível, nem gigante
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
            outModes: "destroy" // Morrem ao tocar a borda
          },
          opacity: {
            value: { min: 0, max: 0.7 },
            animation: {
              enable: true,
              speed: 1, // Desaparecem suavemente
              minimumValue: 0,
              sync: true,
              startValue: "max",
              destroy: "min" // OBRIGA A SAIR DA MEMÓRIA RAM
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

/**
 * GESTÃO DE MODAIS
 */
document.querySelectorAll(".servico-parte").forEach(parte => {
  parte.addEventListener("click", function() {
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  });
});

document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", function() {
    const modal = this.closest(".modal-overlay");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

document.querySelectorAll(".modal-overlay").forEach(modal => {
  modal.addEventListener("click", function(e) {
    if (e.target === this) {
      this.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});