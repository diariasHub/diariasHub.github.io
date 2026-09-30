// Todo el contenido de la landing vive aquí.
// Para actualizar tu portafolio, edita este archivo: los componentes se ajustan solos.

export const profile = {
  name: 'Diego Arias Zavando',
  shortName: 'Diego Arias',
  role: 'Desarrollador Full Stack Junior',
  tagline: 'Construyo tecnología con visión clínica.',
  intro:
    'Estudiante de 3er año de Ingeniería en Informática en Duoc UC y Técnico en Enfermería con más de seis años en urgencias y atención de pacientes. Desarrollo aplicaciones web de punta a punta y las despliego en la nube.',
  location: 'Villa Alemana, Región de Valparaíso',
  email: 'diegoarias.zav@gmail.com',
  linkedin: 'https://www.linkedin.com/in/diego-arias-zavando',
  github: 'https://github.com/diariasHub',
  cv: '/CV_Diego_Arias_Zavando.pdf',
  photo: '/diego-y-su-perro.jpg',
  photoAlt: 'Diego sonriendo junto a su perro en un patio con árboles de otoño',
  highlights: [
    { value: '1er lugar', label: 'Hackatón Duoc UC Valparaíso 2026' },
    { value: 'Práctica', label: 'CITT Duoc UC × Clínica Miraflores' },
    { value: '6+ años', label: 'en salud: urgencias, unidades críticas y enfermería universitaria' },
  ],
};

export const projects = [
  {
    title: 'Sistema de Gestión de Pautas IAAS',
    context: 'Proyecto de práctica · CITT Duoc UC × Clínica Miraflores',
    period: 'ago – nov 2025',
    featured: true,
    description:
      'Plataforma web para que el comité de prevención de infecciones registre y analice el cumplimiento de pautas clínicas, como el lavado de manos, en cada servicio de la clínica.',
    bullets: [
      'Tres roles con autenticación JWT, dashboard en tiempo real con gráficos y filtros.',
      'Reportes descargables en PDF y Excel e historial para auditorías internas y externas.',
      'Levanté requerimientos con el equipo clínico y escribí la definición del proyecto, el manual de usuario y el de implementación.',
    ],
    tags: ['React', 'TypeScript', 'HeroUI', 'Node.js', 'Express', 'PostgreSQL', 'AWS RDS'],
    links: [],
    note: 'Código privado de la clínica. Documentación y demo disponibles en entrevista.',
  },
  {
    title: 'Felicy',
    context: '1er lugar · Hackatón Duoc UC Valparaíso',
    period: 'jun 2026',
    featured: true,
    description:
      'Propuesta de brazalete de monitoreo constante con asistente de voz para adultos mayores: controla signos vitales, recuerda medicamentos y avisa a la familia ante caídas o emergencias.',
    bullets: [
      'MVP con app móvil en React Native (Expo) con síntesis de voz y animaciones.',
      'Backend en Spring Boot con IA generativa (API de Gemini) para conversar con el paciente y mantener su perfil clínico.',
    ],
    tags: ['React Native', 'Expo', 'Spring Boot', 'Gemini API', 'IA'],
    links: [{ label: 'Ver presentación', href: 'https://www.youtube.com/watch?v=W1KxsMEosPg', type: 'video' }],
  },
  {
    title: 'RedNorte',
    context: 'Duoc UC · equipo de 4',
    period: '2026',
    description:
      'Plataforma de gestión de salud con 10 servicios: login, usuarios, agenda, reservas de citas, ficha clínica, urgencias y notificaciones, sobre el estándar FHIR.',
    bullets: [
      'A cargo de la automatización CI/CD con GitHub Actions y de revisar commits y ramas del equipo.',
      'Desarrollé los microservicios de urgencias y ficha clínica, conectados al servidor FHIR y a PostgreSQL.',
      'Diseñé la arquitectura en AWS, el diagrama de arquitectura de software y el modelo de datos con nomenclatura FHIR.',
    ],
    tags: ['Java', 'Spring Boot', 'Eureka', 'FHIR', 'AWS SQS', 'Lambda', 'Docker', 'GitHub Actions'],
    links: [{ label: 'Código', href: 'https://github.com/diariasHub/Rednorte-deploy-mono', type: 'github' }],
  },
  {
    title: 'EVT: Despachos y Ventas',
    context: 'Duoc UC · DevOps',
    period: '2026',
    description:
      'Solución contenerizada para gestionar órdenes de compra y despachos con microservicios independientes.',
    bullets: [
      'Microservicios de ventas y despachos en Java 17 con MySQL; frontend React servido por Nginx.',
      'Infraestructura como código con Terraform (VPC, ALB, ECS, RDS) y CI/CD con GitHub Actions hacia AWS.',
    ],
    tags: ['Spring Boot', 'MySQL', 'React', 'Terraform', 'AWS ECS', 'Nginx'],
    links: [{ label: 'Código', href: 'https://github.com/SolgreyDuocUC/EVT-Aplicacion-Despachos-DevOps', type: 'github' }],
  },
  {
    title: 'Ficha Paciente',
    context: 'Proyecto personal',
    period: '2025',
    description:
      'App web para gestionar fichas de pacientes, consultas e inventario de insumos, con autenticación y datos en tiempo real.',
    bullets: [],
    tags: ['Next.js', 'Firebase Auth', 'Firestore', 'Vercel'],
    links: [
      { label: 'Demo', href: 'https://front-fullstack2-ficha-paciente.vercel.app/login', type: 'demo' },
      { label: 'Código', href: 'https://github.com/diariasHub/Front_fullstack2_ficha_paciente_', type: 'github' },
    ],
  },
  {
    title: 'Electsol',
    context: 'Cliente de Digitalizap',
    period: '2024',
    description: 'Landing para una empresa de servicios eléctricos, desde la propuesta visual hasta la publicación.',
    bullets: [],
    tags: ['HTML5', 'CSS', 'JavaScript', 'Vercel'],
    links: [{ label: 'Ver sitio', href: 'https://electsol.vercel.app/', type: 'demo' }],
  },
];

export const experience = [
  {
    role: 'Técnico en Enfermería (TENS)',
    org: 'Universidad de Valparaíso',
    period: 'may 2022 – actualidad',
    points: [
      'A cargo de la sala de procedimientos de enfermería del campus Playa Ancha.',
      'Planificación anual y semestral de insumos; charlas de promoción y prevención.',
      'Por iniciativa propia, desarrollo un programa de escritorio para registrar atenciones y un manual de estandarización de procesos.',
    ],
  },
  {
    role: 'Fundador y desarrollador web',
    org: 'Digitalizap.cl',
    period: '2024 – actualidad',
    points: ['Sitios web para pequeños negocios, desde la propuesta visual hasta la publicación.'],
  },
  {
    role: 'Técnico en Enfermería',
    org: 'SEREMI de Salud Valparaíso',
    period: 'feb – ago 2021',
    points: ['Equipo de respuesta rápida para residencias de adultos mayores (ELEAM) durante la pandemia, con 3 cuidadores a cargo para 24 residentes.'],
  },
  {
    role: 'Técnico en Enfermería',
    org: 'Hospital Clínico Viña del Mar',
    period: 'oct 2020 – ene 2021',
    points: ['Servicio Médico-Quirúrgico y reemplazos en unidades críticas (UTI/UCI).'],
  },
  {
    role: 'Técnico en Enfermería',
    org: 'Clínica Ciudad del Mar',
    period: 'dic 2019 – jun 2020',
    points: ['Urgencia adulto y pediátrica: triage, tratamientos, curaciones y apoyo en reanimaciones.'],
  },
  {
    role: 'Electricista independiente',
    org: 'Trabajos por encargo',
    period: '2007 – actualidad',
    points: ['Instalaciones eléctricas domiciliarias y armado de tableros.'],
  },
];

export const education = [
  { title: 'Ingeniería en Informática (vespertino)', org: 'Duoc UC, sede Valparaíso', period: '2024 – actualidad', detail: 'Cursando 3er año' },
  { title: 'Técnico de Nivel Superior en Enfermería, mención Urgencia', org: 'Instituto Profesional AIEP', period: '2017 – 2019', detail: 'Titulado con distinción' },
  { title: 'Diplomado Diseñador UX/UI', org: 'CFT Teodoro Wickel', period: '2022 – 2023', detail: 'Bootcamp de 400 horas' },
  { title: 'Bootcamp Desarrollador Full Stack JavaScript', org: 'Academia Desafío Latam', period: '2022', detail: '9 meses' },
];

export const certifications = [
  'JavaScript · Cisco Networking Academy (en curso)',
  'Primeros Auxilios Psicológicos · IST',
  'Acceso y estabilización de víctimas en rescate (36 h) · Fénix Team',
  'Sistemas solares térmicos · UTFSM (SENCE)',
];

export const skills = [
  { group: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Java', 'Spring Boot', 'Python'] },
  { group: 'Datos', items: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'MongoDB', 'Firestore'] },
  { group: 'Cloud y DevOps', items: ['AWS', 'Docker', 'Terraform', 'GitHub Actions', 'Nginx', 'Linux'] },
  { group: 'Móvil y diseño', items: ['React Native', 'Kotlin', 'Android Studio', 'Figma', 'UX/UI'] },
];
