/*
  NEIGHBORHOOD — Configuração de Links, Menu Mobile e Traduções
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

// Controle correto do menu mobile
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* ==========================================
   SISTEMA DE TRADUÇÃO (PT / EN / ES)
   ========================================== */
const translations = {
  pt: {
    navInicio: "Início",
    navServicos: "Serviços",
    navFotos: "Fotos",
    navUnidades: "Unidades",
    navAvaliacoes: "Avaliações",
    navAgendar: "Agendar",
    heroEyebrow: "— Tailor Made Barber Shop —",
    heroTitle: "Seu estilo.<br><em>Sua vizinhança.</em>",
    heroCopy: "Um espaço feito para cuidar do visual, trocar ideia e se sentir em casa.",
    heroMotto: "Haircuts and Shaves • Cultura não se corta, se compartilha.",
    btnAgendarHero: "Escolha sua unidade e agende",
    btnInsta: "Siga no Instagram ↗",
    servicosEyebrow: "— Cuidado no Detalhe —",
    servicosTitle: "Escolha seu <em>estilo</em>",
    servicosSub: "Os mesmos serviços e valores nas duas unidades.",
    corteTitulo: "Corte",
    corteDesc: "Do clássico ao atual, com acabamento impecável.",
    barbaTitulo: "Barba",
    barbaDesc: "Modelagem e alinhamento para valorizar seu estilo.",
    comboTitulo: "Combo Neighborhood",
    comboBadge: "MAIS PEDIDO",
    comboDesc: "Corte + barba. A experiência completa.",
    acabamentoTitulo: "Acabamento",
    acabamentoDesc: "Pezinho, contorno e detalhes que fazem a diferença.",
    sobrancelhaTitulo: "Sobrancelha",
    sobrancelhaDesc: "Alinhamento para complementar o visual.",
    femTitulo: "Corte feminino",
    femDesc: "Estilo, cuidado e corte sob medida.",
    verMaisServicios: "Agende seu serviço →",
    fotosEyebrow: "— Por Dentro da Neighborhood —",
    fotosTitle: "Nossos <em>espaços</em>",
    fotosSub: "Ambiente, equipe e cuidado em cada detalhe nas unidades Botafogo e Leme.",
    foto4: "A experiência",
    unidadesEyebrow: "— Pertinho de Você —",
    unidadesTitle: "Duas vizinhanças.<br><em>Uma identidade.</em>",
    segSexta: "Segunda a sexta",
    sabado: "Sábado",
    feriados: "Feriados",
    comoChegar: "Como chegar ↗",
    agendarBotafogo: "Agendar Botafogo",
    agendarLeme: "Agendar Leme",
    bookingEyebrow: "— Seu Próximo Corte Começa Aqui —",
    bookingTitle: "Onde vamos<br><em>te encontrar?</em>",
    bookingSub: "Escolha a unidade para continuar seu agendamento online pelo Trinks.",
    bookingNote: "O agendamento abre em uma nova página do Trinks.",
    avaliacoesEyebrow: "— Quem é da Vizinhança Sabe —",
    avaliacoesTitle: "O que diz a <em>vizinhança</em>",
    footerMotto: "“Cultura não se corta, se compartilha.”",
    footerLinkAgendar: "Agendamento online",
    direitos: "Todos os direitos reservados."
  },
  en: {
    navInicio: "Home",
    navServicos: "Services",
    navFotos: "Photos",
    navUnidades: "Locations",
    navAvaliacoes: "Reviews",
    navAgendar: "Book Now",
    heroEyebrow: "— Tailor Made Barber Shop —",
    heroTitle: "Your style.<br><em>Your neighborhood.</em>",
    heroCopy: "A space designed to take care of your look, hang out, and feel at home.",
    heroMotto: "Haircuts and Shaves • Culture isn't cut, it's shared.",
    btnAgendarHero: "Choose your location and book",
    btnInsta: "Follow on Instagram ↗",
    servicosEyebrow: "— Attention to Detail —",
    servicosTitle: "Choose your <em>style</em>",
    servicosSub: "Same services and prices at both locations.",
    corteTitulo: "Haircut",
    corteDesc: "From classic to modern, with an impeccable finish.",
    barbaTitulo: "Beard",
    barbaDesc: "Styling and alignment to enhance your look.",
    comboTitulo: "Neighborhood Combo",
    comboBadge: "MOST POPULAR",
    comboDesc: "Haircut + beard. The complete experience.",
    acabamentoTitulo: "Trimming",
    acabamentoDesc: "Neckline, contour, and details that make a difference.",
    sobrancelhaTitulo: "Eyebrow",
    sobrancelhaDesc: "Alignment to complete your look.",
    femTitulo: "Women's Haircut",
    femDesc: "Style, care, and custom cut.",
    verMaisServicios: "Book your service →",
    fotosEyebrow: "— Inside Neighborhood —",
    fotosTitle: "Our <em>spaces</em>",
    fotosSub: "Atmosphere, team, and care in every detail at Botafogo and Leme locations.",
    foto4: "The experience",
    unidadesEyebrow: "— Close to You —",
    unidadesTitle: "Two neighborhoods.<br><em>One identity.</em>",
    segSexta: "Monday to Friday",
    sabado: "Saturday",
    feriados: "Holidays",
    comoChegar: "Get directions ↗",
    agendarBotafogo: "Book Botafogo",
    agendarLeme: "Book Leme",
    bookingEyebrow: "— Your Next Cut Starts Here —",
    bookingTitle: "Where are we<br><em>meeting you?</em>",
    bookingSub: "Choose the location to continue your online booking via Trinks.",
    bookingNote: "Booking opens in a new Trinks page.",
    avaliacoesEyebrow: "— The Neighborhood Knows —",
    avaliacoesTitle: "What the <em>neighborhood</em> says",
    footerMotto: "\"Culture isn't cut, it's shared.\"",
    footerLinkAgendar: "Online booking",
    direitos: "All rights reserved."
  },
  es: {
    navInicio: "Inicio",
    navServicos: "Servicios",
    navFotos: "Fotos",
    navUnidades: "Sucursales",
    navAvaliacoes: "Reseñas",
    navAgendar: "Reservar",
    heroEyebrow: "— Tailor Made Barber Shop —",
    heroTitle: "Tu estilo.<br><em>Tu vecindario.</em>",
    heroCopy: "Un espacio diseñado para cuidar tu imagen, charlar y sentirte como en casa.",
    heroMotto: "Haircuts and Shaves • La cultura no se corta, se comparte.",
    btnAgendarHero: "Elige tu sucursal y reserva",
    btnInsta: "Síguenos en Instagram ↗",
    servicosEyebrow: "— Cuidado en el Detalle —",
    servicosTitle: "Elige tu <em>estilo</em>",
    servicosSub: "Los mismos servicios y precios en ambas sucursales.",
    corteTitulo: "Corte",
    corteDesc: "Desde lo clásico hasta lo actual, con un acabado impecable.",
    barbaTitulo: "Barba",
    barbaDesc: "Modelado y alineación para realzar tu estilo.",
    comboTitulo: "Combo Neighborhood",
    comboBadge: "MÁS PEDIDO",
    comboDesc: "Corte + barba. La experiencia completa.",
    acabamentoTitulo: "Acabado",
    acabamentoDesc: "Contornos y detalles que hacen la diferencia.",
    sobrancelhaTitulo: "Cejas",
    sobrancelhaDesc: "Alineación para complementar tu imagen.",
    femTitulo: "Corte femenino",
    femDesc: "Estilo, cuidado y corte a medida.",
    verMaisServicios: "Reserva tu servicio →",
    fotosEyebrow: "— Por Dentro de Neighborhood —",
    fotosTitle: "Nuestros <em>espacios</em>",
    fotosSub: "Ambiente, equipo y cuidado en cada detalle en las sucursales de Botafogo y Leme.",
    foto4: "La experiencia",
    unidadesEyebrow: "— Cerca de Ti —",
    unidadesTitle: "Dos vecindarios.<br><em>Una identidad.</em>",
    segSexta: "Lunes a viernes",
    sabado: "Sábado",
    feriados: "Feriados",
    comoChegar: "Cómo llegar ↗",
    agendarBotafogo: "Reservar Botafogo",
    agendarLeme: "Reservar Leme",
    bookingEyebrow: "— Tu Próximo Corte Empieza Aquí —",
    bookingTitle: "Dónde vamos<br><em>a encontrarte?</em>",
    bookingSub: "Elige la sucursal para continuar tu reserva online a través de Trinks.",
    bookingNote: "La reserva se abre en una nueva página de Trinks.",
    avaliacoesEyebrow: "— Quien es del Vecindario Sabe —",
    avaliacoesTitle: "Lo que dice el <em>vecindario</em>",
    footerMotto: "“La cultura no se corta, se comparte.”",
    footerLinkAgendar: "Reserva online",
    direitos: "Todos los derechos reservados."
  }
};

function changeLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  localStorage.setItem("neighborhood_lang", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    changeLanguage(lang);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("neighborhood_lang") || "pt";
  changeLanguage(savedLang);
});
