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

// ABRIR MODAL PELOS CARDS DIVIDIDOS
document.querySelectorAll(".servico-parte").forEach(parte => {
  parte.addEventListener("click", () => {
    const modalId = parte.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "flex";
  });
});

// FECHAR MODAL PELO X
document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal-overlay").style.display = "none";
  });
});

// FECHAR MODAL CLICANDO FORA
document.querySelectorAll(".modal-overlay").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});


