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
