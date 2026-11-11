const translations = {
  en: { announcement: "INTRODUCING OUR FIRST COLLECTION — 05 DIGITAL TEMPLATES", navCollection: "Collection", navAbout: "About", navContact: "Contact", navExplore: "Explore templates", heroEyebrow: "INDEPENDENT DIGITAL DESIGN STUDIO", heroTitle: 'Less noise.<br><span>More meaning.</span>', heroDescription: "Thoughtful website templates, made for brands with something to say.", heroButton: "Discover the collection", heroNote: "DESIGNED WITH INTENTION. BUILT TO LAST.", heroBottom: "DESIGN THAT MATTERS.", aboutEyebrow: "THE ESSENTIAL APPROACH", aboutStatement: 'Good design isn’t about adding more. It’s about making <em>every detail count.</em>', aboutText: "We create considered digital foundations that help independent businesses and creative people show up with confidence.", collectionEyebrow: "THE COLLECTION", collectionTitle: 'Made to make<br><span>your mark.</span>', collectionNote: "A growing selection of carefully crafted website templates. Built to be customised, ready to make your own.", filterAll: "All templates", filterBusiness: "Business", filterCreative: "Creative", filterHospitality: "Hospitality", manifestoEyebrow: "A BETTER STARTING POINT", manifestoTitle: 'Your next idea<br>deserves a <em>better</em><br>beginning.', manifestoText: "No unnecessary complexity. No design for design's sake. Just considered layouts, purposeful details and a flexible foundation for what comes next.", manifestoLink: "Find your starting point", footerTagline: "Thoughtful digital design for what matters.", footerExplore: "EXPLORE", footerSayHello: "SAY HELLO", footerMade: "MADE WITH INTENTION.", notifyMe: "Register interest", comingSoon: "Purchases will be enabled when the store launches. This preview does not process payments.", toast: "Thanks for your interest. Checkout is coming soon.", productCount: "PRODUCTS" },
  es: { announcement: "PRESENTAMOS NUESTRA PRIMERA COLECCIÓN — 05 PLANTILLAS DIGITALES", navCollection: "Colección", navAbout: "Nosotros", navContact: "Contacto", navExplore: "Ver plantillas", heroEyebrow: "ESTUDIO INDEPENDIENTE DE DISEÑO DIGITAL", heroTitle: 'Menos ruido.<br><span>Más significado.</span>', heroDescription: "Plantillas web cuidadas, creadas para marcas que tienen algo que contar.", heroButton: "Descubrir la colección", heroNote: "DISEÑADAS CON INTENCIÓN. CREADAS PARA DURAR.", heroBottom: "DISEÑO CON SENTIDO.", aboutEyebrow: "LA FILOSOFÍA ESSENTIAL", aboutStatement: 'El buen diseño no consiste en añadir más. Consiste en hacer que <em>cada detalle importe.</em>', aboutText: "Creamos bases digitales bien pensadas para que pequeños negocios y profesionales creativos se presenten con confianza.", collectionEyebrow: "LA COLECCIÓN", collectionTitle: 'Diseñadas para<br><span>dejar huella.</span>', collectionNote: "Una selección creciente de plantillas web diseñadas al detalle. Preparadas para personalizarlas y hacerlas tuyas.", filterAll: "Todas", filterBusiness: "Negocios", filterCreative: "Creatividad", filterHospitality: "Hostelería", manifestoEyebrow: "UN MEJOR PUNTO DE PARTIDA", manifestoTitle: 'Tu próxima idea<br>merece un <em>mejor</em><br>comienzo.', manifestoText: "Sin complejidad innecesaria. Sin diseño por diseñar. Solo estructuras cuidadas, detalles con intención y una base flexible para lo que viene.", manifestoLink: "Encuentra tu punto de partida", footerTagline: "Diseño digital pensado para lo que importa.", footerExplore: "EXPLORAR", footerSayHello: "HABLEMOS", footerMade: "HECHO CON INTENCIÓN.", notifyMe: "Mostrar interés", comingSoon: "Las compras estarán disponibles cuando lancemos la tienda. Esta demo no procesa pagos.", toast: "Gracias por tu interés. La tienda estará disponible próximamente.", productCount: "PRODUCTOS" }
};
let language = localStorage.getItem("essential-language") || "en";
let activeFilter = "all";
const $ = (s) => document.querySelector(s);
function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el => { const key = el.dataset.i18n; if (translations[language][key]) el.innerHTML = translations[language][key] });
  $("#languageToggle").textContent = language === "en" ? "ES" : "EN";
  renderProducts();
}
function renderProducts() {
  const filtered = PRODUCTS.filter(p => activeFilter === "all" || p.category === activeFilter);
  $("#productGrid").innerHTML = filtered.map(p => `
    <article class="product-card" data-product="${p.id}" tabindex="0" role="button" aria-label="${p.name}">
      <div class="product-visual visual-${p.id}">
        <span class="product-tag">${p.tag}</span>
        <div class="mock-window"><div class="mock-browser"><i></i><i></i><i></i></div><div class="mock-site"><div class="mock-nav"><b>${p.name.toUpperCase()}</b><span>MENU&nbsp; +</span></div><div class="mock-headline">${p.headline}</div><div class="mock-sub">A considered digital experience. Made to be yours.</div><div class="mock-shape"></div></div></div>
        <span class="product-open">↗</span>
      </div>
      <div class="product-details"><div><div class="product-name">${p.name}</div><div class="product-category">${p.categoryLabel}</div></div><div class="product-price">€${p.price}</div></div>
    </article>`).join("");
  $("#resultCount").textContent = `${String(filtered.length).padStart(2, "0")} ${translations[language].productCount}`;
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => openProduct(card.dataset.product));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProduct(card.dataset.product) } });
  });
}
function openProduct(id) {
  const p = PRODUCTS.find(item => item.id === id); if (!p) return;
  $("#dialogCategory").textContent = p.categoryLabel;
  $("#dialogTitle").textContent = p.name;
  $("#dialogDescription").textContent = p.description[language];
  $("#dialogPrice").textContent = `€${p.price}`;
  $("#dialogPreview").className = `dialog-preview visual-${p.id}`;
  $("#productDialog").showModal();
}
$("#languageToggle").addEventListener("click", () => { language = language === "en" ? "es" : "en"; localStorage.setItem("essential-language", language); applyLanguage() });
$("#filters").addEventListener("click", e => {
  const button = e.target.closest("[data-filter]"); if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach(b => b.classList.toggle("active", b === button));
  renderProducts();
});
$("#dialogClose").addEventListener("click", () => $("#productDialog").close());
$("#productDialog").addEventListener("click", e => { if (e.target === $("#productDialog")) $("#productDialog").close() });
$("#interestButton").addEventListener("click", () => { const toast = $("#toast"); toast.textContent = translations[language].toast; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2600) });
$("#menuToggle").addEventListener("click", () => { const nav = $(".main-nav"); const open = nav.classList.toggle("open"); $("#menuToggle").setAttribute("aria-expanded", String(open)) });
document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", () => { $(".main-nav").classList.remove("open"); $("#menuToggle").setAttribute("aria-expanded", "false") }));
applyLanguage();
