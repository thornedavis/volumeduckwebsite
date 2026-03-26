const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -5% 0px"
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll(".js-download").forEach((link) => {
  const label = link.querySelector(".button-label");
  const defaultText = label ? label.textContent : "";

  link.addEventListener("click", () => {
    link.classList.add("is-downloading");

    if (label) {
      label.textContent = "Download starting...";
    }

    window.setTimeout(() => {
      link.classList.remove("is-downloading");

      if (label) {
        label.textContent = defaultText;
      }
    }, 1800);
  });
});

const tiltCard = document.querySelector("[data-tilt-card]");
const finePointer = window.matchMedia("(pointer: fine)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (tiltCard && finePointer && !reducedMotion) {
  const resetTilt = () => {
    tiltCard.style.transform = "";
  };

  tiltCard.addEventListener("pointermove", (event) => {
    const bounds = tiltCard.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;

    tiltCard.style.transform =
      "perspective(1200px) rotateX(" +
      rotateX.toFixed(2) +
      "deg) rotateY(" +
      rotateY.toFixed(2) +
      "deg) translateY(-4px)";
  });

  tiltCard.addEventListener("pointerleave", resetTilt);
  tiltCard.addEventListener("pointercancel", resetTilt);
}
