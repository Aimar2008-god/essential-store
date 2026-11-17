function renderSitePreview(product, language, size = "card") {
  const screenshot = product.screenshots?.[0];
  if (!screenshot) return "";

  const isCard = size === "card";
  const caption = isCard
    ? ""
    : `<figcaption class="captured-screen-caption"><span>${screenshot.label[language]}</span><span>01 / ${String(product.screenshots.length).padStart(2, "0")}</span></figcaption>`;

  return `<figure class="site-preview site-preview--${size} preview-${product.id}"${isCard ? " aria-hidden=\"true\"" : ""}>
    <img src="${screenshot.src}" alt="${isCard ? "" : screenshot.alt[language]}" loading="${isCard ? "lazy" : "eager"}" decoding="async">
    ${caption}
  </figure>`;
}

function renderTemplateSectionGallery(product, language, copy) {
  const screenshots = product.screenshots || [];
  const cards = screenshots.slice(1).map((screenshot, index) => {
    const number = String(index + 2).padStart(2, "0");
    const total = String(screenshots.length).padStart(2, "0");
    return `<figure class="section-preview-card captured-screenshot-card">
      <a class="captured-screenshot-link" href="${screenshot.src}" target="_blank" rel="noopener noreferrer">
        <img src="${screenshot.src}" alt="${screenshot.alt[language]}" loading="lazy" decoding="async">
      </a>
      <figcaption class="section-preview-caption"><span>${screenshot.label[language]}</span><span>${number} / ${total}</span></figcaption>
    </figure>`;
  }).join("");

  return `<section class="template-section-gallery" aria-labelledby="sectionGalleryTitle">
    <div class="section-gallery-heading"><div><p class="preview-eyebrow">${copy.sectionsEyebrow}</p><h2 id="sectionGalleryTitle">${copy.sectionsTitle}</h2></div><p>${copy.sectionsDescription}</p></div>
    <div class="section-preview-grid">${cards}</div>
  </section>`;
}

function buildCheckoutAction(product, language, translations) {
  const url = PAYMENT_LINKS?.[product.id] || "";
  if (/^https:\/\//i.test(url)) {
    return `<a class="buy-action" href="${url}" target="_blank" rel="noopener noreferrer">${translations[language].buyTemplate}<span aria-hidden="true">↗</span></a>`;
  }
  return `<span class="buy-action is-disabled" aria-disabled="true">${translations[language].purchaseSoon}</span>`;
}

function buildQuestionLink(product, language, translations) {
  const subject = `${translations[language].questionSubject}: ${product.name}`;
  const body = language === "es"
    ? `Hola, tengo una pregunta sobre la plantilla ${product.name}.`
    : `Hello, I have a question about the ${product.name} template.`;
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
