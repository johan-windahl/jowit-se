// Update year in footer
const updateYear = () => {
  const yearElement = document.querySelector(".footer-copyright p");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} Jowit AB. Alla rättigheter förbehållna.`;
  }
};

updateYear();

// Console greeting
console.log(
  "%cJowit",
  "font-size: 3rem; font-weight: bold; background: linear-gradient(135deg, #6366f1, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
);
console.log(
  "%cInnovationsstudio - Vi bygger framtidens digitala företag",
  "font-size: 1rem; color: #a0a0a0;"
);
