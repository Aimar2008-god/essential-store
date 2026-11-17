const translations = {
  en: {
    announcement: "FIVE DIGITAL STARTING POINTS · MADE TO MAKE YOUR OWN", navCollection: "Collection", navAbout: "About", navContact: "Contact", navExplore: "Explore templates",
    heroEyebrow: "INDEPENDENT DIGITAL DESIGN STUDIO", heroTitle: "Less noise.<br><span>More meaning.</span>", heroDescription: "Thoughtful website templates, made for brands with something to say.", heroButton: "Discover the collection", heroNote: "DESIGNED WITH INTENTION. BUILT TO LAST.", heroBottom: "DESIGN THAT MATTERS.",
    aboutEyebrow: "THE ESSENTIAL APPROACH", aboutStatement: "Good design isn't about adding more. It's about making <em>every detail count.</em>", aboutText: "We create considered digital foundations that help independent businesses and creative people show up with confidence.",
    collectionEyebrow: "THE COLLECTION", collectionTitle: "Made to make<br><span>your mark.</span>", collectionNote: "Five responsive starting points. Explore the visual preview, then make a template your own.", filterAll: "All templates", filterBusiness: "Business", filterWellness: "Wellness", filterHospitality: "Hospitality", productCount: "TEMPLATES",
    previewTemplate: "View preview", buyTemplate: "Buy now", purchaseSoon: "Checkout coming soon", requestTemplate: "Ask a question", checkoutNote: "When a checkout link is configured with the ZIP, the provider handles secure payment and instant delivery. Questions? Email us.",
    manifestoEyebrow: "A BETTER STARTING POINT", manifestoTitle: "Your next idea<br>deserves a <em>better</em><br>beginning.", manifestoText: "No unnecessary complexity. Just purposeful details and a flexible foundation for what comes next.", manifestoLink: "Find your starting point",
    footerTagline: "Thoughtful digital design for what matters.", footerExplore: "EXPLORE", footerSayHello: "SAY HELLO", footerMade: "MADE WITH INTENTION.", photoCredits: "Photo credits & licences", backToTop: "BACK TO TOP ↑", menuOpen: "Open menu", menuClose: "Close menu", questionSubject: "ESSENTIAL template question"
  },
  es: {
    announcement: "CINCO PUNTOS DE PARTIDA DIGITALES · LISTOS PARA PERSONALIZAR", navCollection: "Colección", navAbout: "Nosotros", navContact: "Contacto", navExplore: "Ver plantillas",
    heroEyebrow: "ESTUDIO INDEPENDIENTE DE DISEÑO DIGITAL", heroTitle: "Menos ruido.<br><span>Más significado.</span>", heroDescription: "Plantillas web cuidadas, creadas para marcas que tienen algo que contar.", heroButton: "Descubrir la colección", heroNote: "DISEÑADAS CON INTENCIÓN. CREADAS PARA DURAR.", heroBottom: "DISEÑO CON SENTIDO.",
    aboutEyebrow: "LA FILOSOFÍA ESSENTIAL", aboutStatement: "El buen diseño no consiste en añadir más. Consiste en hacer que <em>cada detalle importe.</em>", aboutText: "Creamos bases digitales bien pensadas para que pequeños negocios y profesionales creativos se presenten con confianza.",
    collectionEyebrow: "LA COLECCIÓN", collectionTitle: "Diseñadas para<br><span>dejar huella.</span>", collectionNote: "Cinco puntos de partida adaptables. Mira la vista previa y elige tu plantilla.", filterAll: "Todas", filterBusiness: "Negocios", filterWellness: "Bienestar", filterHospitality: "Hostelería", productCount: "PLANTILLAS",
    previewTemplate: "Ver vista previa", buyTemplate: "Comprar ahora", purchaseSoon: "Compra próximamente", requestTemplate: "Hacer una consulta", checkoutNote: "Al conectar el enlace y el ZIP, el proveedor gestionará el cobro y el envío instantáneo. ¿Tienes preguntas? Escríbenos.",
    manifestoEyebrow: "UN MEJOR PUNTO DE PARTIDA", manifestoTitle: "Tu próxima idea<br>merece un <em>mejor</em><br>comienzo.", manifestoText: "Sin complejidad innecesaria. Solo detalles con intención y una base flexible para lo que viene.", manifestoLink: "Encuentra tu punto de partida",
    footerTagline: "Diseño digital pensado para lo que importa.", footerExplore: "EXPLORAR", footerSayHello: "HABLEMOS", footerMade: "HECHO CON INTENCIÓN.", photoCredits: "Créditos de fotos y licencias", backToTop: "VOLVER ARRIBA ↑", menuOpen: "Abrir menú", menuClose: "Cerrar menú", questionSubject: "Consulta sobre plantilla ESSENTIAL"
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
const browserLanguage = navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
let language = requestedLanguage === "es" || requestedLanguage === "en" ? requestedLanguage : browserLanguage;
try {
  const storedLanguage = localStorage.getItem("essential-language");
  if (!requestedLanguage && (storedLanguage === "es" || storedLanguage === "en")) language = storedLanguage;
} catch { /* Use the query or browser language. */ }
let activeFilter = "all";

function applyLanguage() {
  document.documentElement.lang = language;
  $$('[data-i18n]').forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  $("#languageEN").setAttribute("aria-pressed", String(language === "en"));
  $("#languageES").setAttribute("aria-pressed", String(language === "es"));
  const supportEmail = $("#supportEmail");
  supportEmail.href = `mailto:${SUPPORT_EMAIL}`;
  supportEmail.textContent = `${SUPPORT_EMAIL} ↗`;
  updateMenuLabel();
  renderProducts();
}

function renderProducts() {
  const filtered = PRODUCTS.filter((product) => activeFilter === "all" || product.category === activeFilter);
  $("#productGrid").innerHTML = filtered.map((product) => `
    <article class="product-card">
      <a class="product-visual visual-${product.id}" href="${product.href}?product=${product.id}&amp;lang=${language}" aria-label="${translations[language].previewTemplate}: ${product.name}">
        ${renderSitePreview(product, language)}
        <span class="product-tag">${product.tag[language]}</span>
        <span class="product-open" aria-hidden="true">↗</span>
      </a>
      <div class="product-details">
        <div class="product-heading"><div><h3 class="product-name">${product.name}</h3><p class="product-category">${product.tag[language]}</p></div><p class="product-price">€${product.price}</p></div>
        <p class="product-description">${product.description[language]}</p>
        <div class="product-actions"><a class="preview-action" href="${product.href}?product=${product.id}&amp;lang=${language}">${translations[language].previewTemplate}<span aria-hidden="true">↗</span></a>${buildCheckoutAction(product, language, translations)}<a class="question-action" href="${buildQuestionLink(product, language, translations)}">${translations[language].requestTemplate}</a></div>
      </div>
    </article>`).join("");
  $("#resultCount").textContent = `${String(filtered.length).padStart(2, "0")} ${translations[language].productCount}`;
}

function updateMenuLabel() {
  const button = $("#menuToggle");
  const open = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-label", open ? translations[language].menuClose : translations[language].menuOpen);
}

function changeLanguage(nextLanguage) {
  language = nextLanguage;
  try { localStorage.setItem("essential-language", language); } catch { /* Language still works for this page view. */ }
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    history.replaceState(null, "", url);
  } catch { /* Language switching still works without a shareable URL. */ }
  applyLanguage();
}

$("#languageEN").addEventListener("click", () => changeLanguage("en"));
$("#languageES").addEventListener("click", () => changeLanguage("es"));

$("#filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  $$(".filter-button").forEach((item) => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  renderProducts();
});

$("#menuToggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const open = button.getAttribute("aria-expanded") !== "true";
  button.setAttribute("aria-expanded", String(open));
  $("#mainNav").classList.toggle("open", open);
  updateMenuLabel();
});

$("#mainNav").querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  $("#mainNav").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
  updateMenuLabel();
}));

applyLanguage();
