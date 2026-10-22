/*
  NEIGHBORHOOD — configuração rápida
  Links de agendamento do Trinks para cada unidade.
*/
const BOOKING_URLS = {
  botafogo: "https://www.trinks.com/neighborhoodbarbershop",
  leme: "https://www.trinks.com/neighborhood-barbershop-leme"
};

document.querySelectorAll(".booking-link").forEach((link) => {
  const unit = link.dataset.unit;
  if (unit && BOOKING_URLS[unit]) {
    link.href = BOOKING_URLS[unit];
    link.target = "_blank";
    link.rel = "noopener";
  }
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });
  mainNav.querySelectorAll("a").forEach((item) => item.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
