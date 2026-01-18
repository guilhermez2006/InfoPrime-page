tsParticles.load("particles-js", {
  particles: {
    number: { value: 100 },
    color: { value: "#009eff" },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: { min: 1, max: 5 } },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: "bounce"
    },
    links: {
      enable: true,
      distance: 150,
      color: "#009eff",
      opacity: 0.6,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 200 },
      push: { quantity: 4 }
    }
  }
});

// ABRIR MODAL PELOS CARDS DIVIDIDOS - VERSÃO CORRIGIDA
document.querySelectorAll(".servico-parte").forEach(parte => {
  parte.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal"); // Usar getAttribute
    console.log("Abrindo modal:", modalId); // Para debug

    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden"; // Impede rolagem
    } else {
      console.error("Modal não encontrado com ID:", modalId);
    }
  });
});

// FECHAR MODAL PELO X - VERSÃO CORRIGIDA
document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", function () {
    const modal = this.closest(".modal-overlay");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Restaura rolagem
    }
  });
});

// FECHAR MODAL CLICANDO FORA - VERSÃO CORRIGIDA
document.querySelectorAll(".modal-overlay").forEach(modal => {
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      this.style.display = "none";
      document.body.style.overflow = "auto"; // Restaura rolagem
    }
  });
});