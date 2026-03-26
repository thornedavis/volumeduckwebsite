document.querySelectorAll(".js-download").forEach((link) => {
  const label = link.querySelector("span");
  const defaultText = label ? label.textContent : "";

  link.addEventListener("click", () => {
    if (label) {
      label.textContent = "Download starting...";
    }

    setTimeout(() => {
      if (label) {
        label.textContent = defaultText;
      }
    }, 1800);
  });
});
