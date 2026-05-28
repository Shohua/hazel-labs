/* ═══════════════════════════════════════════════════════════════
   HAZEL LABS — i18n.js
   Bilingual ES / EN content system
═══════════════════════════════════════════════════════════════ */

const CONTENT = {
  es: {
    /* NAV */
    'nav-problem':  'El Problema',
    'nav-piml':     'PIML',
    'nav-impact':   'Impacto',
    'nav-network':  'Red de Validación',
    'nav-clients':  'Clientes',
    'nav-team':     'Equipo',
    'nav-cta-btn':  'Contactar',

    /* HERO */
    'hero-badge-text': 'Physics-Informed Machine Learning · Materiales de Construcción',
    'hero-line1':  'Del ensayo y error',
    'hero-line2':  'al diseño inverso.',
    'hero-line3':  'Computacionalmente.',
    'hero-sub':    'Hazel Labs comprime años de I+D en materiales de construcción en semanas, mediante Physics-Informed Machine Learning. Partimos de las propiedades que necesitas y encontramos la formulación óptima.',
    'hero-cta1-text': 'Solicitar Demo',
    'hero-cta2-text': 'Ver la Tecnología',
    'ml1': 'REDUCCIÓN TIEMPO I+D',
    'ml2': 'MENOS COSTO DESARROLLO',
    'ml3': 'MENOS DATOS QUE ML PURO',
    'ml4': 'AHORRO POR M³ HORMIGÓN',
    'ml5': 'MERCADO GLOBAL IA 2030',

    /* PROBLEM */
    'prob-label': '01 — El Problema',
    'prob-title': 'La industria desarrolla materiales como hace 30 años.',
    'prob-body':  'Ensayo. Error. Validación tardía. Ciclos de semanas que se convierten en años. El proceso lineal de I+D en materiales de construcción tiene cuellos de botella estructurales que ningún consulting tradicional puede resolver.',
    's1t': 'Formulación empírica inicial',
    's1d': 'Se propone una mezcla de forma artesanal',
    's2t': 'Fabricación de probetas',
    's2d': 'Laboratorio: tiempo, costo, material',
    's3t': 'Ensayos térmicos, mecánicos y químicos',
    's3d': 'NCh146, NCh853, ASTM C-518 y otros',
    's4t': 'Corrección manual de formulación',
    's4d': 'Ciclo iterativo sin convergencia garantizada',
    's5t': 'Repetir hasta industrialización',
    's5d': 'Meses por validación → años por producto',
    'stage-result': '⚠ Semanas × iteración → meses × validación → 2+ años × producto',
    'prob-quote':  '"Hazeladd demoró aproximadamente 2 años desarrollando un aditivo EPS reciclado para yeso-cartón. Hazel Labs nace exactamente para que ningún fabricante tenga que pasar por esto."',

    /* COMPARISON */
    'comp-label': '02 — Por Qué el Modelo Actual Falla',
    'comp-title': 'Tres enfoques. Una sola respuesta correcta.',
    'comp-body':  'Una comparación que va más allá del tiempo: hablamos de garantías físicas, adaptación local y resultados desde el primer ensayo.',
    'meth-trad-label': 'MÉTODO TRADICIONAL',
    'meth-trad-name':  'Ensayo y Error Empírico',
    'meth-ml-label':   'ML TRADICIONAL',
    'meth-ml-name':    'Machine Learning de datos puros',
    'meth-piml-label': 'PIML HAZEL LABS',
    'meth-piml-name':  'Physics-Informed ML',
    'conv-title': 'CONVERGENCIA COMPARATIVA — iteraciones hasta solución válida',
    'conv-trad':  'Método Tradicional',
    'conv-ml':    'ML Tradicional',
    'conv-piml':  'PIML Hazel Labs',
    'phys-hero-label': 'DIFERENCIADOR ABSOLUTO',
    'phys-hero-text':  'Solo predice resultados <strong>físicamente posibles</strong>',
    'phys-hero-sub':   'Las leyes de la termodinámica actúan como filtro. El modelo no puede proponer una formulación que viole la física, eliminando el 80% de iteraciones inútiles.',

    /* PIML */
    'piml-label': '03 — La Tecnología',
    'piml-title': 'Physics-Informed Machine Learning.',
    'piml-sub':   'No es IA genérica. PIML integra leyes físicas directamente en la red neuronal, garantizando que cada predicción sea termodinámicamente posible.',
    'pf1-icon': 'FÍSICA INTEGRADA',
    'pf1t': 'Leyes físicas en el modelo',
    'pf1d': 'Integra transferencia de calor, hidratación y mecánica directamente como restricciones de la red neuronal. El modelo no puede proponer algo que viole la termodinámica.',
    'pf2-icon': 'DISEÑO INVERSO',
    'pf2t': 'De la propiedad a la fórmula',
    'pf2d': 'No iteras desde una fórmula empírica. Partes de las propiedades requeridas —térmica, mecánica, acústica— y el modelo busca hacia atrás en el espacio de millones de formulaciones posibles.',
    'pf3-icon': 'CONTEXTO LOCAL',
    'pf3t': 'Parametrizable por región',
    'pf3d': 'Cada región de Chile tiene áridos, puzolanas y residuos con propiedades distintas. El modelo aprende del contexto geográfico específico del cliente, una ventaja que ninguna plataforma global puede replicar.',

    /* IMPACT */
    'imp-label': '04 — Triple Impacto Cuantificable',
    'imp-title': 'Impacto medible en tres dimensiones.',
    'imp1t': 'Impacto Económico',
    'imp1d': 'Reducción potencial del tiempo de I+D. Menos iteraciones, menos desperdicio experimental, menor CAPEX por reformulación fallida.',
    'imp1m2k': 'Ahorro por m³ hormigón',
    'imp1m3k': 'Reducción costo I+D',
    'imp2t': 'Impacto Ambiental',
    'imp2d': 'Reducción potencial de emisiones en formulación de hormigón. Optimización de clinker, puzolanas locales y residuos industriales regionales.',
    'imp2m1k': 'Reducción factor clinker',
    'imp2m2k': 'Emisiones globales cemento',
    'imp2m3k': 'Carbono incorporado edificio',
    'imp3t': 'Impacto Social',
    'imp3d': 'Democratización del I+D: fabricantes medianos y regionales acceden a formulación avanzada sin grandes estructuras internas. Valorización de residuos locales y vivienda más eficiente.',
    'imp3m1k': 'Acceso equitativo I+D',
    'imp3m2k': 'Desarrollo regional',
    'imp3m3k': 'Vivienda eficiente',
    'imp-quote': '"La descarbonización de la construcción no ocurrirá solo en la operación de los edificios, sino en la formulación de sus materiales."',

    /* NETWORK */
    'net-label': '05 — Red de Validación',
    'net-title': 'Red de Validación Física en Chile.',
    'net-sub':   'No ofrecemos solo predicción computacional. Ofrecemos validación real en laboratorio chileno, con convenios activos con las principales instituciones de I+D del país.',

    /* CLIENTS */
    'cl-label': '06 — Segmentos de Clientes',
    'cl-title': 'Industrias que ya nos necesitan.',
    'clurg1': 'URGENCIA MUY ALTA',
    'clti1':  'Cementeras comprometidas Net Zero',
    'clpa1':  'Compromisos firmados de carbono neutralidad al 2050. Hoja de Ruta Net Zero Chile 2050. Presión regulatoria activa y acceso a capital verde condicionado a métricas ESG.',
    'clof1':  'Optimización de mezclas con materiales suplementarios locales. Reducción de factor clinker. Formulaciones que cumplen metas Net Zero.',
    'clurg2': 'URGENCIA ALTA',
    'clti2':  'Fabricantes de materiales intermedios',
    'clpa2':  'Mayor exigencia térmica regulatoria (OGUC creciente). Rezagados por soluciones integrales. Sin infraestructura digital para I+D de formulación.',
    'clof2':  'Formulación térmica optimizada para sus productos sin modificar la línea industrial existente. Compatible con proceso actual del cliente.',
    'clurg3': 'URGENCIA ALTA',
    'clti3':  'Plantas de hormigón premezclado',
    'clex3':  'Plantas regionales y nacionales',
    'clpa3':  'Variabilidad de áridos por zona geográfica. Fórmulas estáticas que fallan o generan sobreconsumo. Impacto directo en costo y margen por m³.',
    'clof3':  'Dosificación adaptativa en tiempo real por región. Reducción de costo por m³ y huella de carbono en ciclos cortos.',
    'clurg4': 'URGENCIA MEDIA-ALTA',
    'clti4':  'Fabricantes con enfoque I+D',
    'clex4':  'Medianos y especializados · Chile y LATAM',
    'clpa4':  'Nula estructura especializada en I+D en Chile. Sin acceso a formulación avanzada. Dependen de ensayo y error o consultorías externas sin garantías.',
    'clof4':  'Formulación de materiales y prototipado integral, adaptado a línea industrial y escalabilidad. Co-desarrollo o fee por formulación.',

    /* DIFFERENTIATORS */
    'di-label': '07 — Diferenciadores',
    'di-title': 'Lo que ninguna alternativa global puede replicar.',
    'di1t': 'Especialización en construcción chilena',
    'di1d': 'Conocimiento profundo de normativa nacional (NCh), tipologías constructivas locales y especificaciones del mercado chileno. Una ventaja irreplicable desde el exterior.',
    'di2t': 'Áridos y residuos locales',
    'di2d': 'Formulación que incorpora residuos industriales y áridos de cada región. Ninguna plataforma global puede replicar esta ventaja sin presencia territorial activa.',
    'di3t': 'Red de validación física activa',
    'di3d': 'Convenios activos con DICTUC, IDIEM, INN y Startup Lab 01. Predicción computacional + validación real en laboratorio chileno. El ciclo completo.',
    'di4t': 'Compatibilidad industrial total',
    'di4d': 'Compatible con el proceso industrial existente del cliente. No requiere inversión en CAPEX ni rediseño de planta. Integración sin fricción.',
    'di5t': 'Primer mover en PIML Chile',
    'di5d': 'No existe en Chile ningún actor especializado en Physics-Informed ML para materiales de construcción. Ventaja de primer entrante con datos y aprendizaje local acumulados.',
    'di6t': 'Dolor propio validado',
    'di6d': 'Hazel Labs nació de 2 años de I+D real en aditivo EPS para yeso-cartón. Conocemos el problema desde adentro. No vendemos teoría, vendemos experiencia transformada en tecnología.',

    /* TEAM */
    'te-label': '08 — Equipo',
    'te-title': 'El equipo detrás de Hazel Labs.',

    /* CTA */
    'cta-title': 'Deja de iterar. Empieza a diseñar.',
    'cta-sub':   'Hazel Labs acelera la transición climática de la industria de materiales mediante diseño inverso y física computacional. Estamos disponibles para proyectos piloto, co-desarrollo I+D y demostraciones técnicas.',
    'cta-btn1-text': 'Hablar con el equipo',
    'cta-btn2-text': 'Ver la tecnología PIML',

    /* CONTACT */
    'con-label':    '09 — Contacto',
    'con-title':    'Trabajemos juntos.',
    'fl-name':      'NOMBRE',
    'fl-company':   'EMPRESA',
    'fl-email':     'EMAIL',
    'fl-type':      'TIPO DE ORGANIZACIÓN',
    'fo-select':    'Seleccionar...',
    'fo-cement':    'Cementera / Materiales',
    'fo-concrete':  'Planta Hormigón',
    'fo-rd':        'Institución I+D',
    'fo-investor':  'Inversionista / Fondo',
    'fo-other':     'Otro',
    'fl-msg':       'MENSAJE',
    'fi-msg-ph':    'Cuéntanos tu desafío de formulación...',
    'con-btn-text': 'Enviar mensaje',
    'con-success':  '✓ Mensaje enviado. El equipo de Hazel Labs te contactará pronto.',
    'ci-partner-label': 'PARTNERS DE VALIDACIÓN',
    'cq-text':  '"Chile tiene diversidad geográfica y mineral única, pero no posee infraestructura digital para transformar esa diversidad en innovación material."',
    'cq-cite':  '— Hazel Labs · Propuesta Estratégica 2025',

    /* FOOTER */
    'fl1': 'El Problema',
    'fl2': 'Tecnología',
    'fl3': 'Impacto',
    'fl4': 'Contacto',
  },

  en: {
    /* NAV */
    'nav-problem':  'The Problem',
    'nav-piml':     'PIML',
    'nav-impact':   'Impact',
    'nav-network':  'Validation Network',
    'nav-clients':  'Clients',
    'nav-team':     'Team',
    'nav-cta-btn':  'Contact',

    /* HERO */
    'hero-badge-text': 'Physics-Informed Machine Learning · Construction Materials',
    'hero-line1':  'From trial and error',
    'hero-line2':  'to inverse design.',
    'hero-line3':  'Computationally.',
    'hero-sub':    'Hazel Labs compresses years of construction material R&D into weeks, using Physics-Informed Machine Learning. We start from the properties you need and find the optimal formulation.',
    'hero-cta1-text': 'Request a Demo',
    'hero-cta2-text': 'See the Technology',
    'ml1': 'R&D TIME REDUCTION',
    'ml2': 'LESS DEVELOPMENT COST',
    'ml3': 'LESS DATA THAN PURE ML',
    'ml4': 'SAVINGS PER m³ CONCRETE',
    'ml5': 'GLOBAL AI MARKET 2030',

    /* PROBLEM */
    'prob-label': '01 — The Problem',
    'prob-title': 'The industry develops materials like it did 30 years ago.',
    'prob-body':  'Trial. Error. Late validation. Week-long cycles that turn into years. The linear R&D process in construction materials has structural bottlenecks that no traditional consulting can resolve.',
    's1t': 'Initial empirical formulation',
    's1d': 'A mix is proposed artisanally',
    's2t': 'Specimen fabrication',
    's2d': 'Lab time, cost and material',
    's3t': 'Thermal, mechanical and chemical tests',
    's3d': 'NCh146, NCh853, ASTM C-518 and others',
    's4t': 'Manual formulation correction',
    's4d': 'Iterative cycle without guaranteed convergence',
    's5t': 'Repeat until industrialization',
    's5d': 'Months per validation → years per product',
    'stage-result': '⚠ Weeks × iteration → months × validation → 2+ years × product',
    'prob-quote':  '"Hazeladd spent approximately 2 years developing a recycled EPS additive for drywall. Hazel Labs was born precisely so no manufacturer ever has to go through this."',

    /* COMPARISON */
    'comp-label': '02 — Why the Current Model Fails',
    'comp-title': 'Three approaches. One correct answer.',
    'comp-body':  'A comparison that goes beyond time: physical guarantees, local adaptation and results from the first test.',
    'meth-trad-label': 'TRADITIONAL METHOD',
    'meth-trad-name':  'Empirical Trial & Error',
    'meth-ml-label':   'TRADITIONAL ML',
    'meth-ml-name':    'Pure data-driven Machine Learning',
    'meth-piml-label': 'PIML HAZEL LABS',
    'meth-piml-name':  'Physics-Informed ML',
    'conv-title': 'COMPARATIVE CONVERGENCE — iterations to valid solution',
    'conv-trad':  'Traditional Method',
    'conv-ml':    'Traditional ML',
    'conv-piml':  'PIML Hazel Labs',
    'phys-hero-label': 'ABSOLUTE DIFFERENTIATOR',
    'phys-hero-text':  'Only predicts <strong>physically possible</strong> results',
    'phys-hero-sub':   'Thermodynamic laws act as a filter. The model cannot propose a formulation that violates physics, eliminating 80% of useless iterations.',

    /* PIML */
    'piml-label': '03 — The Technology',
    'piml-title': 'Physics-Informed Machine Learning.',
    'piml-sub':   'This is not generic AI. PIML embeds physical laws directly into the neural network, guaranteeing that every prediction is thermodynamically possible.',
    'pf1-icon': 'EMBEDDED PHYSICS',
    'pf1t': 'Physical laws in the model',
    'pf1d': 'Integrates heat transfer, hydration and mechanics directly as constraints of the neural network. The model cannot propose something that violates thermodynamics.',
    'pf2-icon': 'INVERSE DESIGN',
    'pf2t': 'From property to formula',
    'pf2d': 'You don\'t iterate from an empirical formula. You start from the required properties —thermal, mechanical, acoustic— and the model searches backwards across millions of possible formulations.',
    'pf3-icon': 'LOCAL CONTEXT',
    'pf3t': 'Parameterizable by region',
    'pf3d': 'Each region of Chile has aggregates, pozzolans and waste with different properties. The model learns from the client\'s specific geographic context — an advantage no global platform can replicate.',

    /* IMPACT */
    'imp-label': '04 — Triple Measurable Impact',
    'imp-title': 'Measurable impact in three dimensions.',
    'imp1t': 'Economic Impact',
    'imp1d': 'Potential reduction in R&D time. Fewer iterations, less experimental waste, lower CAPEX per failed reformulation.',
    'imp1m2k': 'Savings per m³ concrete',
    'imp1m3k': 'R&D cost reduction',
    'imp2t': 'Environmental Impact',
    'imp2d': 'Potential emissions reduction in concrete formulation. Optimization of clinker, local pozzolans and regional industrial waste.',
    'imp2m1k': 'Clinker factor reduction',
    'imp2m2k': 'Global cement emissions',
    'imp2m3k': 'Embodied carbon in buildings',
    'imp3t': 'Social Impact',
    'imp3d': 'Democratization of R&D: mid-size and regional manufacturers access advanced formulation without large internal structures.',
    'imp3m1k': 'Equitable R&D access',
    'imp3m2k': 'Regional development',
    'imp3m3k': 'Efficient housing',
    'imp-quote': '"Decarbonization of construction will not happen only in building operations, but in the formulation of its materials."',

    /* NETWORK */
    'net-label': '05 — Validation Network',
    'net-title': 'Physical Validation Network in Chile.',
    'net-sub':   'We don\'t just offer computational prediction. We offer real validation in Chilean laboratories, with active agreements with the country\'s leading R&D institutions.',

    /* CLIENTS */
    'cl-label': '06 — Customer Segments',
    'cl-title': 'Industries that already need us.',
    'clurg1': 'VERY HIGH URGENCY',
    'clti1':  'Net Zero-committed cement companies',
    'clpa1':  'Signed commitments for carbon neutrality by 2050. Chile Net Zero Roadmap 2050. Active regulatory pressure and access to green capital conditioned on ESG metrics.',
    'clof1':  'Mix optimization with local supplementary materials. Clinker factor reduction. Formulations meeting Net Zero targets.',
    'clurg2': 'HIGH URGENCY',
    'clti2':  'Intermediate material manufacturers',
    'clpa2':  'Growing thermal regulatory requirements (OGUC). Lagging in integrated solutions. No digital infrastructure for formulation R&D.',
    'clof2':  'Optimized thermal formulation without modifying existing industrial line. Compatible with client\'s current process.',
    'clurg3': 'HIGH URGENCY',
    'clti3':  'Ready-mix concrete plants',
    'clex3':  'Regional and national plants',
    'clpa3':  'Aggregate variability by geographic zone. Static formulas that fail or cause overconsumption. Direct impact on cost and margin per m³.',
    'clof3':  'Adaptive dosing in real time by region. Cost per m³ and carbon footprint reduction in short cycles.',
    'clurg4': 'MEDIUM-HIGH URGENCY',
    'clti4':  'R&D-focused manufacturers',
    'clex4':  'Mid-size and specialized · Chile and LATAM',
    'clpa4':  'No specialized R&D structure in Chile. No access to advanced formulation. Dependent on trial and error or external consultancies without guarantees.',
    'clof4':  'Integral material formulation and prototyping, adapted to industrial line and scalability. Co-development or fee per formulation.',

    /* DIFFERENTIATORS */
    'di-label': '07 — Differentiators',
    'di-title': 'What no global alternative can replicate.',
    'di1t': 'Specialization in Chilean construction',
    'di1d': 'Deep knowledge of national standards (NCh), local construction typologies and Chilean market specifications. An advantage unreplicable from abroad.',
    'di2t': 'Local aggregates and waste',
    'di2d': 'Formulation incorporating industrial waste and aggregates from each region. No global platform can replicate this without active territorial presence.',
    'di3t': 'Active physical validation network',
    'di3d': 'Active agreements with DICTUC, IDIEM, INN and Startup Lab 01. Computational prediction + real validation in Chilean laboratory. The complete cycle.',
    'di4t': 'Total industrial compatibility',
    'di4d': 'Compatible with the client\'s existing industrial process. No CAPEX investment or plant redesign required. Frictionless integration.',
    'di5t': 'First mover in PIML Chile',
    'di5d': 'There is no specialized actor in Physics-Informed ML for construction materials in Chile. First-mover advantage with accumulated local data and learning.',
    'di6t': 'Own validated pain',
    'di6d': 'Hazel Labs was born from 2 years of real R&D on an EPS additive for drywall. We know the problem from the inside. We don\'t sell theory, we sell experience transformed into technology.',

    /* TEAM */
    'te-label': '08 — Team',
    'te-title': 'The team behind Hazel Labs.',

    /* CTA */
    'cta-title': 'Stop iterating. Start designing.',
    'cta-sub':   'Hazel Labs accelerates the climate transition of the materials industry through inverse design and computational physics. We are available for pilot projects, R&D co-development and technical demonstrations.',
    'cta-btn1-text': 'Talk to the team',
    'cta-btn2-text': 'See PIML technology',

    /* CONTACT */
    'con-label':    '09 — Contact',
    'con-title':    'Let\'s work together.',
    'fl-name':      'NAME',
    'fl-company':   'COMPANY',
    'fl-email':     'EMAIL',
    'fl-type':      'ORGANIZATION TYPE',
    'fo-select':    'Select...',
    'fo-cement':    'Cement / Materials',
    'fo-concrete':  'Concrete Plant',
    'fo-rd':        'R&D Institution',
    'fo-investor':  'Investor / Fund',
    'fo-other':     'Other',
    'fl-msg':       'MESSAGE',
    'fi-msg-ph':    'Tell us about your formulation challenge...',
    'con-btn-text': 'Send message',
    'con-success':  '✓ Message sent. The Hazel Labs team will contact you shortly.',
    'ci-partner-label': 'VALIDATION PARTNERS',
    'cq-text':  '"Chile has unique geographical and mineral diversity, but lacks the digital infrastructure to transform that diversity into material innovation."',
    'cq-cite':  '— Hazel Labs · Strategic Proposal 2025',

    /* FOOTER */
    'fl1': 'The Problem',
    'fl2': 'Technology',
    'fl3': 'Impact',
    'fl4': 'Contact',
  }
};

/* ─── Apply language ──────────────────────────────────────── */
let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  const data = CONTENT[lang];

  Object.entries(data).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (el.tagName === 'OPTION') {
      el.textContent = text;
    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (id === 'fi-msg-ph') el.placeholder = text;
    } else if (id === 'phys-hero-text') {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });

  // Toggle active state
  document.getElementById('lang-es').classList.toggle('active', lang === 'es');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang;
}

// Export
window.setLang  = setLang;
window.getLang  = () => currentLang;
window.CONTENT  = CONTENT;
