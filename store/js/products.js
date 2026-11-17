const PRODUCTS = [
  {
    id: "skin", name: "Glow House", href: "preview.html", category: "wellness", price: 39,
    tag: { en: "SKIN & BEAUTY", es: "PIEL Y BELLEZA" },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/SPA_SKIN_CARE.jpg?width=1200",
    imageAlt: { en: "A calm facial treatment in a skincare studio", es: "Un tratamiento facial tranquilo en un estudio de piel" },
    description: { en: "A soft spa-editorial website with an arched photo opening and tactile treatment cards.", es: "Una web spa de estilo editorial, con portada fotográfica en arco y tarjetas de tratamientos." },
    preview: {
      brand: "GLOW HOUSE", theme: "skin",
      nav: { en: ["Treatments", "Studio", "Contact"], es: ["Tratamientos", "Estudio", "Contacto"] },
      eyebrow: { en: "SKIN STUDIO · SEVILLA", es: "ESTUDIO DE PIEL · SEVILLA" },
      headline: { en: "A softer kind<br>of <em>skin care.</em>", es: "Otra forma<br>de <em>cuidarte.</em>" },
      subline: { en: "Thoughtful treatments, considered products and a little time just for you.", es: "Tratamientos con intención, productos elegidos y un rato solo para ti." },
      action: { en: "Explore treatments", es: "Ver tratamientos" },
      caption: { en: "SLOW DOWN · TUNE IN · FEEL GOOD", es: "PARA · ESCUCHA · SIÉNTETE BIEN" }
    },
    sections: [
      { label: { en: "02 / TREATMENTS", es: "02 / TRATAMIENTOS" }, title: { en: "A little time for yourself", es: "Un rato para ti" }, description: { en: "An editorial treatment list with names, details and clear pricing.", es: "Una carta editorial de tratamientos, con detalles y precios claros." }, items: [{ en: "The Glow Facial · 50 min · €65", es: "Facial Glow · 50 min · 65 €" }, { en: "Deep Rest Ritual · 75 min · €88", es: "Ritual Descanso · 75 min · 88 €" }, { en: "Skin Reset · 60 min · €74", es: "Reset de Piel · 60 min · 74 €" }], art: "treatment-list" },
      { label: { en: "03 / THE STUDIO", es: "03 / EL ESTUDIO" }, title: { en: "A good routine should feel like you", es: "Una rutina que se siente como tú" }, description: { en: "A calm editorial story beside a real skincare photograph.", es: "Una historia editorial serena junto a una fotografía real de cuidado facial." }, image: "https://commons.wikimedia.org/wiki/Special:FilePath/SPA_SKIN_CARE.jpg?width=900", art: "image-story" },
      { label: { en: "BOOK YOUR VISIT", es: "RESERVA TU VISITA" }, title: { en: "Come as you are. Leave feeling softer.", es: "Ven tal como eres. Sal con más calma." }, description: { en: "A quiet booking section with one clear next step.", es: "Una sección de reservas serena y con un siguiente paso claro." }, items: [{ en: "Choose a treatment", es: "Elige un tratamiento" }, { en: "Pick a time that suits you", es: "Escoge el horario que te venga bien" }], art: "booking-card" }
    ]
  },
  {
    id: "table", name: "Table No. 01", href: "preview.html", category: "hospitality", price: 49,
    tag: { en: "FINE DINING", es: "COCINA DE AUTOR" },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rules_restaurant_interior.jpg?width=1200",
    imageAlt: { en: "A warmly lit dining room prepared for dinner service", es: "Un comedor cálido preparado para la cena" },
    description: { en: "A candlelit fine-dining website with a cinematic entrance and a printed-menu feel.", es: "Una web de cocina de autor con portada cinematográfica y una carta de aire editorial." },
    preview: {
      brand: "CASA OLIVA", theme: "table",
      nav: { en: ["Our story", "The menu", "Visit"], es: ["Nuestra historia", "La carta", "Visítanos"] },
      eyebrow: { en: "SEASONAL COOKING · SINCE 1998", es: "COCINA DE TEMPORADA · DESDE 1998" },
      headline: { en: "A place<br>at the <em>table.</em>", es: "Un lugar<br>para <em>compartir.</em>" },
      subline: { en: "Rooted in the Mediterranean. Guided by the seasons.", es: "Con raíces mediterráneas y al ritmo de las estaciones." },
      action: { en: "Reserve a table", es: "Reservar mesa" },
      caption: { en: "GOOD FOOD · GOOD COMPANY", es: "BUEN PRODUCTO · MEJOR COMPAÑÍA" }
    },
    sections: [
      { label: { en: "01 / OUR STORY", es: "01 / NUESTRA HISTORIA" }, title: { en: "The best things happen when we come together", es: "Lo mejor ocurre cuando nos reunimos" }, description: { en: "An editorial introduction to Casa Oliva and its Mediterranean approach.", es: "Una introducción editorial a Casa Oliva y su cocina mediterránea." }, items: [{ en: "Seasonal cooking", es: "Cocina de temporada" }, { en: "Local ingredients", es: "Producto local" }], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rules_restaurant_interior.jpg?width=900", art: "story" },
      { label: { en: "02 / FROM OUR KITCHEN", es: "02 / DE NUESTRA COCINA" }, title: { en: "A menu with the season", es: "Una carta al ritmo de la estación" }, description: { en: "A printed-menu feel with sample dishes, descriptions and prices.", es: "Una carta de aire editorial, con platos, descripciones y precios de muestra." }, items: [{ en: "Charred leeks · 14", es: "Puerros a la brasa · 14" }, { en: "Sea bream · 28", es: "Dorada · 28" }, { en: "Olive oil cake · 12", es: "Bizcocho de aceite · 12" }], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mediterranean_cuisine.jpg?width=900", art: "menu" },
      { label: { en: "03 / RESERVATIONS", es: "03 / RESERVAS" }, title: { en: "The table is better when you're here", es: "La mesa está mejor cuando vienes" }, description: { en: "A clear booking invitation beside opening hours and visit details.", es: "Una invitación clara para reservar, con horario e información para la visita." }, items: [{ en: "Tuesday–Sunday · 18:00–22:00", es: "Martes–domingo · 18:00–22:00" }, { en: "Call or book a table", es: "Llama o reserva mesa" }], art: "reservation" }
    ]
  },
  {
    id: "form", name: "Form Studio", href: "preview.html", category: "business", price: 39,
    tag: { en: "BUSINESS & SERVICES", es: "NEGOCIOS Y SERVICIOS" },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Minimalist_meeting_room_(Unsplash).jpg?width=1200",
    imageAlt: { en: "A bright, minimalist meeting room", es: "Una sala de reuniones luminosa y minimalista" },
    description: { en: "A precise, grid-led studio website with oversized typography and clear service cards.", es: "Una web de estudio basada en retícula, tipografía potente y tarjetas de servicios claras." },
    preview: {
      brand: "FORM STUDIO", theme: "form",
      nav: { en: ["Services", "Approach", "Contact"], es: ["Servicios", "Método", "Contacto"] },
      eyebrow: { en: "STRATEGY · BRAND · DIGITAL", es: "ESTRATEGIA · MARCA · DIGITAL" },
      headline: { en: "Clarity for<br>what's <em>next.</em>", es: "Claridad para<br>lo que <em>viene.</em>" },
      subline: { en: "Good questions. Clear decisions. Work that moves you forward.", es: "Buenas preguntas. Decisiones claras. Trabajo que te hace avanzar." },
      action: { en: "How we can help", es: "Cómo podemos ayudar" },
      caption: { en: "THOUGHTFUL WORK · MADE TO MOVE", es: "TRABAJO CON INTENCIÓN · PARA AVANZAR" }
    },
    sections: [
      { label: { en: "01 / OUR APPROACH", es: "01 / NUESTRO ENFOQUE" }, title: { en: "Good work begins with the right question", es: "El buen trabajo empieza con la pregunta adecuada" }, description: { en: "An editorial introduction to the studio's way of working.", es: "Una introducción editorial a la forma de trabajar del estudio." }, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Minimalist_meeting_room_(Unsplash).jpg?width=900", art: "approach" },
      { label: { en: "02 / WHAT WE DO", es: "02 / QUÉ HACEMOS" }, title: { en: "Make space to move", es: "Abrimos espacio para avanzar" }, description: { en: "Three clear service cards for strategy, identity and digital work.", es: "Tres servicios claros de estrategia, identidad y diseño digital." }, items: [{ en: "Find your position", es: "Define tu posición" }, { en: "Build your identity", es: "Construye tu identidad" }, { en: "Make it digital", es: "Llévalo al entorno digital" }], art: "service-list" },
      { label: { en: "03 / CONTACT", es: "03 / CONTACTO" }, title: { en: "Tell us where you want to go", es: "Cuéntanos hacia dónde quieres ir" }, description: { en: "A focused contact section with one direct project-enquiry link.", es: "Una sección de contacto directa para iniciar una consulta de proyecto." }, items: [{ en: "Share your idea", es: "Cuéntanos tu idea" }, { en: "Start a conversation", es: "Empezar a conversar" }], art: "contact" }
    ]
  },
  {
    id: "motion", name: "Motion Club", href: "preview.html", category: "wellness", price: 45,
    tag: { en: "FITNESS & WELLNESS", es: "FITNESS Y BIENESTAR" },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strake_interior_Gym_I.jpg?width=1200",
    imageAlt: { en: "An industrial-style gym floor with open space to train", es: "Un espacio de gimnasio de estilo industrial y despejado para entrenar" },
    description: { en: "A photo-led training-club website with electric-lime details, a session selector and a floor gallery.", es: "Una web de club de entrenamiento con fotografía inmersiva, detalles lima, selector de sesiones y galería del espacio." },
    preview: {
      brand: "MOTION CLUB", theme: "motion",
      nav: { en: ["Training", "The floor", "Find us"], es: ["Entrenamiento", "El espacio", "Visítanos"] },
      eyebrow: { en: "STRENGTH · CONDITIONING · COMMUNITY", es: "FUERZA · ACONDICIONAMIENTO · COMUNIDAD" },
      headline: { en: "Make room<br>to <em>move.</em>", es: "Haz sitio<br>para <em>moverte.</em>" },
      subline: { en: "Good people, thoughtful coaching and room to find your own pace.", es: "Buena gente, acompañamiento atento y espacio para encontrar tu propio ritmo." },
      action: { en: "Find your first session", es: "Encuentra tu primera sesión" },
      caption: { en: "ROOM TO MOVE · ROOM TO GROW", es: "ESPACIO PARA MOVERTE · ESPACIO PARA CRECER" }
    },
    sections: [
      { label: { en: "02 / CHOOSE YOUR SESSION", es: "02 / ELIGE TU SESIÓN" }, title: { en: "Find your kind of work", es: "Encuentra tu forma de entrenar" }, description: { en: "Three training paths with clear details on time, focus and level.", es: "Tres formas de entrenar, con duración, enfoque y nivel indicados." }, items: [{ en: "Strength · 45 min", es: "Fuerza · 45 min" }, { en: "Conditioning · 40 min", es: "Acondicionamiento · 40 min" }, { en: "Open floor · 60 min", es: "Espacio libre · 60 min" }], art: "training" },
      { label: { en: "04 / SPACE TO GET INTO IT", es: "04 / UN ESPACIO PARA DARLE" }, title: { en: "A floor built for good work", es: "Un espacio pensado para entrenar bien" }, description: { en: "A two-photo look at the strength area and open training floor.", es: "Dos imágenes de la zona de fuerza y el espacio abierto de entrenamiento." }, items: [{ en: "Strength area", es: "Zona de fuerza" }, { en: "Open training floor", es: "Espacio de entrenamiento" }], images: ["https://commons.wikimedia.org/wiki/Special:FilePath/Colorful_barbells_on_a_shelf.jpg?width=900", "https://commons.wikimedia.org/wiki/Special:FilePath/Machines_found_in_the_Gym_at_Kabojja.jpg?width=900"], art: "club" },
      { label: { en: "05 / START WHERE YOU ARE", es: "05 / EMPIEZA DONDE ESTÁS" }, title: { en: "Your first session starts here", es: "Tu primera sesión empieza aquí" }, description: { en: "A bright, direct invitation to try a session at your own pace.", es: "Una invitación clara para probar una sesión a tu ritmo." }, items: [{ en: "No pressure", es: "Sin compromiso" }], art: "join" }
    ]
  },
  {
    id: "still", name: "Still House", href: "preview.html", category: "hospitality", price: 49,
    tag: { en: "BOUTIQUE STAYS", es: "ALOJAMIENTOS BOUTIQUE" },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hotel_Room.jpg?width=1200",
    imageAlt: { en: "A soft, warmly lit guesthouse room", es: "Una habitación de huéspedes cálida y luminosa" },
    description: { en: "A photo-led boutique-stay website with an asymmetric room gallery and journal-like pacing.", es: "Una web visual para alojamientos boutique, con galería asimétrica y ritmo de diario de viaje." },
    preview: {
      brand: "STILL HOUSE", theme: "still",
      nav: { en: ["The rooms", "Our place", "Find us"], es: ["Habitaciones", "La casa", "Cómo llegar"] },
      eyebrow: { en: "A SMALL GUESTHOUSE · ALMERÍA", es: "UNA CASA DE HUÉSPEDES · ALMERÍA" },
      headline: { en: "Stay a little<br><em>longer.</em>", es: "Quédate un poco<br><em>más.</em>" },
      subline: { en: "Good light in the morning. Nothing urgent on the calendar.", es: "Buena luz por la mañana. Nada urgente en la agenda." },
      action: { en: "Find your room", es: "Encuentra tu habitación" },
      caption: { en: "SLOW MORNINGS · EASY DAYS", es: "MAÑANAS TRANQUILAS · DÍAS SIN PRISA" }
    },
    sections: [
      { label: { en: "02 / MAKE YOURSELF AT HOME", es: "02 / SIÉNTETE COMO EN CASA" }, title: { en: "Room for your own rhythm", es: "Una habitación a tu ritmo" }, description: { en: "Three room cards with their own photos, names and simple amenities.", es: "Tres tarjetas de habitación, cada una con foto, nombre y comodidades." }, items: [{ en: "The Garden Room", es: "Habitación Jardín" }, { en: "The Sun Room", es: "Habitación Sol" }, { en: "The Long Stay", es: "Estancia Larga" }], images: ["https://commons.wikimedia.org/wiki/Special:FilePath/Hotel_Room.jpg?width=900", "https://commons.wikimedia.org/wiki/Special:FilePath/Bed_in_a_guest_room.jpg?width=900", "https://commons.wikimedia.org/wiki/Special:FilePath/Hotel_Rooms.jpg?width=900"], art: "rooms" },
      { label: { en: "03 / THE LITTLE THINGS", es: "03 / LOS PEQUEÑOS DETALLES" }, title: { en: "A slower stay, made simple", es: "Una estancia tranquila, sin complicaciones" }, description: { en: "An amenities list that makes the stay feel considered.", es: "Una lista de comodidades que transmite una estancia cuidada." }, items: [{ en: "Breakfast when you're ready", es: "Desayuno cuando te apetezca" }, { en: "Local walks and places", es: "Paseos y lugares de la zona" }, { en: "Thoughtful room essentials", es: "Detalles cuidados en cada habitación" }], art: "details" },
      { label: { en: "04 / FIND YOUR WAY", es: "04 / CÓMO LLEGAR" }, title: { en: "Close to nature. Far from rush.", es: "Cerca de la naturaleza. Lejos de las prisas." }, description: { en: "A calm location panel with arrival details and directions.", es: "Un panel sereno de ubicación, con información para llegar e indicaciones." }, items: [{ en: "Alhama de Almería", es: "Alhama de Almería" }, { en: "20 minutes from the coast", es: "A 20 minutos de la costa" }], art: "location" }
    ]
  }
];

const templateScreenshots = {
  motion: [
    { src: "assets/previews/motion-01-home.png", label: { en: "Home · hero", es: "Inicio · portada" }, alt: { en: "Motion Club homepage with a dark navigation bar, lime accents, and a large gym-floor hero image.", es: "Portada de Motion Club con navegación oscura, detalles lima y una gran imagen del gimnasio." } },
    { src: "assets/previews/motion-02-club.png", label: { en: "01 · A different way to train", es: "01 · Otra forma de entrenar" }, alt: { en: "Motion Club introduction section with a bold strength-training headline and gym equipment photo.", es: "Presentación de Motion Club con un titular sobre fuerza y una foto del equipamiento." } },
    { src: "assets/previews/motion-03-training.png", label: { en: "02 · Choose your session", es: "02 · Elige tu sesión" }, alt: { en: "Three colored Motion Club cards for strength, conditioning, and open-floor training sessions.", es: "Tres tarjetas de Motion Club para fuerza, acondicionamiento y entrenamiento libre." } },
    { src: "assets/previews/motion-04-motivation.png", label: { en: "03 · Move with intention", es: "03 · Muévete con intención" }, alt: { en: "Bright lime statement section with oversized Motion Club typography.", es: "Sección lima con un mensaje destacado y tipografía grande de Motion Club." } },
    { src: "assets/previews/motion-05-space.png", label: { en: "04 · The training space", es: "04 · El espacio de entrenamiento" }, alt: { en: "Motion Club gallery with photographs of the weights area and gym floor.", es: "Galería de Motion Club con fotos de la zona de pesas y el espacio de entrenamiento." } },
    { src: "assets/previews/motion-06-visit.png", label: { en: "05–06 · First session and location", es: "05–06 · Primera sesión y ubicación" }, alt: { en: "Motion Club invitation to book a first session followed by the location and opening hours.", es: "Invitación a reservar una primera sesión, seguida de la ubicación y el horario de Motion Club." } }
  ],
  form: [
    { src: "assets/previews/form-01-home.png", label: { en: "Home · hero", es: "Inicio · portada" }, alt: { en: "Form Studio homepage with oversized clarity-focused typography and a bright meeting-room photograph.", es: "Portada de Form Studio con tipografía grande y una fotografía luminosa de una sala de reuniones." } },
    { src: "assets/previews/form-02-approach.png", label: { en: "01 · Our approach", es: "01 · Nuestro enfoque" }, alt: { en: "Blue Form Studio approach section with a large statement about asking the right question.", es: "Sección azul de Form Studio sobre empezar con la pregunta adecuada." } },
    { src: "assets/previews/form-03-services.png", label: { en: "02 · What we do", es: "02 · Qué hacemos" }, alt: { en: "Form Studio service section with three cards for positioning, identity, and digital work.", es: "Sección de servicios de Form Studio con tarjetas de estrategia, identidad y entorno digital." } },
    { src: "assets/previews/form-04-contact.png", label: { en: "03 · A simple promise", es: "03 · Una promesa sencilla" }, alt: { en: "Dark Form Studio contact section with a large closing statement and a short supporting line.", es: "Sección final oscura de Form Studio con un mensaje destacado y un texto breve." } }
  ],
  skin: [
    { src: "assets/previews/glow-01-home.png", label: { en: "Home · hero", es: "Inicio · portada" }, alt: { en: "Glow House homepage with a warm cream palette, a skincare treatment photograph, and a booking button.", es: "Portada de Glow House en tonos crema, con una foto de tratamiento facial y un botón de reserva." } },
    { src: "assets/previews/glow-02-story.png", label: { en: "01 · A calmer ritual", es: "01 · Un ritual con más calma" }, alt: { en: "Glow House story section with an editorial heading about taking time for skincare.", es: "Sección de Glow House con un titular editorial sobre cuidar la piel sin prisa." } },
    { src: "assets/previews/glow-03-treatments.png", label: { en: "02 · Find your ritual", es: "02 · Encuentra tu ritual" }, alt: { en: "Three Glow House treatment cards showing facial services, durations, and sample prices.", es: "Tres tarjetas de tratamientos Glow House con servicios faciales, duración y precios de muestra." } },
    { src: "assets/previews/glow-04-studio.png", label: { en: "03 · Simple, mindful, yours", es: "03 · Sencillo, consciente, tuyo" }, alt: { en: "Glow House skincare photograph beside a calm description of the studio's approach.", es: "Foto de tratamiento facial junto a una descripción serena del enfoque de Glow House." } },
    { src: "assets/previews/glow-05-booking.png", label: { en: "Book your visit", es: "Reserva tu visita" }, alt: { en: "Terracotta Glow House booking section with a centered appointment invitation.", es: "Sección de reservas de Glow House en terracota con una invitación centrada a pedir cita." } }
  ],
  still: [
    { src: "assets/previews/still-01-home.png", label: { en: "Home · hero", es: "Inicio · portada" }, alt: { en: "Still House homepage with an oversized editorial headline and a guest-room photograph.", es: "Portada de Still House con un titular editorial grande y una fotografía de una habitación." } },
    { src: "assets/previews/still-02-welcome.png", label: { en: "01 · Another way to stay", es: "01 · Otra forma de alojarse" }, alt: { en: "Still House welcome section with a short introduction to the guesthouse.", es: "Sección de bienvenida de Still House con una breve presentación de la casa de huéspedes." } },
    { src: "assets/previews/still-03-rooms.png", label: { en: "02 · Rooms at your pace", es: "02 · Habitaciones a tu ritmo" }, alt: { en: "Still House room gallery showing three guest-room cards with photographs.", es: "Galería de Still House con tres tarjetas de habitaciones y sus fotografías." } },
    { src: "assets/previews/still-04-details.png", label: { en: "03 · The little details", es: "03 · Los pequeños detalles" }, alt: { en: "Still House amenities section with a list of thoughtful guesthouse details.", es: "Sección de comodidades de Still House con una lista de detalles para huéspedes." } },
    { src: "assets/previews/still-05-booking.png", label: { en: "Find your room", es: "Encuentra tu habitación" }, alt: { en: "Warm taupe Still House booking section inviting guests to check room availability.", es: "Sección de reservas de Still House en tono topo, con una invitación a consultar disponibilidad." } },
    { src: "assets/previews/still-06-location.png", label: { en: "04 · Find your way", es: "04 · Cómo llegar" }, alt: { en: "Still House location details, travel notes, and footer on a deep green background.", es: "Ubicación de Still House, indicaciones y pie de página sobre fondo verde oscuro." } }
  ],
  table: [
    { src: "assets/previews/table-01-home.png", label: { en: "Home · hero", es: "Inicio · portada" }, alt: { en: "Casa Oliva restaurant homepage with a candlelit dining room, warm dark colors, and a menu link.", es: "Portada del restaurante Casa Oliva con un comedor iluminado, tonos oscuros cálidos y enlace a la carta." } },
    { src: "assets/previews/table-02-story.png", label: { en: "01 · Our philosophy", es: "01 · Nuestra filosofía" }, alt: { en: "Casa Oliva story section about seasonal cooking and gathering around the table.", es: "Sección de Casa Oliva sobre cocina de temporada y reunirse alrededor de la mesa." } },
    { src: "assets/previews/table-03-menu.png", label: { en: "02 · From our kitchen", es: "02 · De nuestra cocina" }, alt: { en: "Casa Oliva sample menu with seasonal dishes, descriptions, and prices.", es: "Carta de muestra de Casa Oliva con platos de temporada, descripciones y precios." } },
    { src: "assets/previews/table-04-visit.png", label: { en: "03 · Come visit", es: "03 · Ven a vernos" }, alt: { en: "Casa Oliva visit section with a plated seasonal dish and the restaurant address.", es: "Sección para visitar Casa Oliva con un plato de temporada y la dirección del restaurante." } },
    { src: "assets/previews/table-05-reservations.png", label: { en: "Reserve a table", es: "Reserva mesa" }, alt: { en: "Warm brown Casa Oliva reservation section with options to call or email the restaurant.", es: "Sección de reservas de Casa Oliva en marrón cálido, con opciones para llamar o escribir." } }
  ]
};

PRODUCTS.forEach((product) => {
  product.screenshots = templateScreenshots[product.id] || [];
});
