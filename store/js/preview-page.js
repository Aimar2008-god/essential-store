const previewCopy = {
  en: {
    back: "← Back to collection",
    collection: "COLLECTION",
    type: "TEMPLATE PREVIEW",
    question: "Ask a question",
    delivery: "Attach the ZIP in your payment provider and enable its automatic post-purchase email delivery.",
    footer: "Independent website templates",
    credits: "Photo credits",
    previewDescription: "Screenshot of the website's opening section.",
    previewLabel: "Website preview",
    sectionsEyebrow: "REAL SCREENSHOTS",
    sectionsTitle: "Explore the sections",
    sectionsDescription: "See each page section as it appears in the template.",
    askSubject: "ESSENTIAL template question"
  },
  es: {
    back: "← Volver a la colección",
    collection: "COLECCIÓN",
    type: "VISTA PREVIA",
    question: "Hacer una consulta",
    delivery: "Añade el ZIP a tu proveedor y activa el envío automático por correo tras la compra.",
    footer: "Plantillas web independientes",
    credits: "Créditos de fotos",
    previewDescription: "Captura de la portada de la web.",
    previewLabel: "Vista previa de la web",
    sectionsEyebrow: "CAPTURAS REALES",
    sectionsTitle: "Explora las secciones",
    sectionsDescription: "Mira cada sección tal como aparece en la plantilla.",
    askSubject: "Consulta sobre plantilla ESSENTIAL"
  }
};

const previewParams = new URLSearchParams(window.location.search);
const requestedProduct = previewParams.get("product");
const previewProduct = PRODUCTS.find((product) => product.id === requestedProduct);
const previewRequestedLanguage = previewParams.get("lang");
let previewLanguage = previewRequestedLanguage === "es" || previewRequestedLanguage === "en"
  ? previewRequestedLanguage
  : (navigator.language?.toLowerCase().startsWith("es") ? "es" : "en");
try {
  if (!previewRequestedLanguage && ["en", "es"].includes(localStorage.getItem("essential-language"))) {
    previewLanguage = localStorage.getItem("essential-language");
  }
} catch { /* Use the query or browser language. */ }

if (!previewProduct) {
  window.location.replace("index.html");
} else {
  function renderProductPreview() {
    const copy = previewCopy[previewLanguage];
    document.documentElement.lang = previewLanguage;
    document.querySelectorAll("[data-copy]").forEach((element) => {
      const value = copy[element.dataset.copy];
      if (value) element.textContent = value;
    });
    document.querySelector("#languageEN").setAttribute("aria-pressed", String(previewLanguage === "en"));
    document.querySelector("#languageES").setAttribute("aria-pressed", String(previewLanguage === "es"));

    const product = previewProduct;
    document.title = `${product.name} — ${copy.previewLabel} | ESSENTIAL`;
    const pageUrl = new URL("preview.html", window.location.href);
    pageUrl.searchParams.set("product", product.id);
    pageUrl.searchParams.set("lang", previewLanguage);
    const englishUrl = new URL(pageUrl);
    englishUrl.searchParams.set("lang", "en");
    const spanishUrl = new URL(pageUrl);
    spanishUrl.searchParams.set("lang", "es");
    document.querySelector('link[rel="canonical"]').href = pageUrl.href;
    document.querySelector('link[rel="alternate"][hreflang="en"]').href = englishUrl.href;
    document.querySelector('link[rel="alternate"][hreflang="es"]').href = spanishUrl.href;
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = product.description[previewLanguage];
    document.querySelector('meta[property="og:url"]').content = pageUrl.href;
    document.querySelector('meta[property="og:image"]').content = new URL(product.screenshots[0].src, window.location.href).href;
    document.querySelector('meta[name="description"]').content = product.description[previewLanguage];
    document.querySelector("#productType").textContent = copy.type;
    document.querySelector("#productTag").textContent = product.tag[previewLanguage];
    document.querySelector("#productTitle").textContent = product.name;
    document.querySelector("#productDescription").textContent = product.description[previewLanguage];
    document.querySelector("#productPrice").textContent = `€${product.price}`;
    document.querySelector("#previewDescription").textContent = `${copy.previewDescription} ${product.name}.`;
    document.querySelector("#previewArt").innerHTML = renderSitePreview(product, previewLanguage, "large");
    document.querySelector("#templateSections").innerHTML = renderTemplateSectionGallery(product, previewLanguage, copy);
    document.querySelector("#previewPurchase").innerHTML = buildCheckoutAction(product, previewLanguage, {
      [previewLanguage]: {
        buyTemplate: previewLanguage === "es" ? "Comprar ahora" : "Buy now",
        purchaseSoon: previewLanguage === "es" ? "Compra próximamente" : "Checkout coming soon"
      }
    });

    const question = document.querySelector("#previewQuestion");
    question.href = buildQuestionLink(product, previewLanguage, { [previewLanguage]: { questionSubject: copy.askSubject } });
    try { localStorage.setItem("essential-language", previewLanguage); } catch { /* Keep the selection for this page view. */ }
  }

  document.querySelector("#languageEN").addEventListener("click", () => {
    previewLanguage = "en";
    const url = new URL(window.location.href);
    url.searchParams.set("lang", previewLanguage);
    history.replaceState(null, "", url);
    renderProductPreview();
  });
  document.querySelector("#languageES").addEventListener("click", () => {
    previewLanguage = "es";
    const url = new URL(window.location.href);
    url.searchParams.set("lang", previewLanguage);
    history.replaceState(null, "", url);
    renderProductPreview();
  });
  renderProductPreview();
}
