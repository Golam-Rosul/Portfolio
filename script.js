// JavaScript code as shown previously
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in, .slide-up");
  fadeEls.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease, transform 1s ease";
  });

  const reveal = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal(); // Trigger once at load
});
