export interface Course {
  id: string;
  title: string;
  area: 'sociosanitario' | 'primeros-auxilios' | 'alzheimer' | 'atencion-centrada' | 'prevencion';
  modality: 'Presencial' | 'Online' | 'Mixta';
  duration: string;
  hours: number;
  fundae: boolean;
  price: string;
  description: string;
  nextDate: string;
  syllabus: string[];
}

export interface JobOffer {
  id: string;
  title: string;
  zone: string;
  type: string;
  workingDay: 'Completa' | 'Media jornada' | 'Fines de semana' | 'Noches / Interna';
  requirements: string[];
  description: string;
  urgent?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Normativa' | 'Consejos Familia' | 'Dependencia y Ayudas' | 'Novedades Lumbre';
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
}

export interface ServiceBlock {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  services: {
    name: string;
    description: string;
    details: string;
  }[];
}

export const SERVICES_DATA: ServiceBlock[] = [
  {
    id: 'cuidados-hogar',
    title: '1. Cuidados y atención en casa',
    subtitle: 'El calor y la dignidad de su propio hogar con la asistencia más cariñosa y profesional.',
    iconName: 'Home',
    services: [
      {
        name: 'Ayuda a domicilio integral',
        description: 'Aseo e higiene personal, movilizaciones, vestido, apoyo para levantar y acostar.',
        details: 'Horarios flexibles adaptados a las rutinas de la persona usuaria.'
      },
      {
        name: 'Acompañamientos diurnos y nocturnos',
        description: 'Supervisión de medicación, paseos, compañía activa para evitar la soledad no deseada.',
        details: 'Modalidades por horas, mañanas, tardes, noches completas o internas 24/7.'
      },
      {
        name: 'Cuidados especializados en Alzheimer y demencias',
        description: 'Técnicas de manejo de conducta, rutinas orientativas y estimulación de la memoria con calma.',
        details: 'Personal con titulación sociosanitaria y formación continua específica.'
      },
      {
        name: 'Cuidados tras alta hospitalaria y convalecencia',
        description: 'Recuperación asistida tras ingresos médicos o cirugías, curas básicas pautadas y reposo.',
        details: 'Intervención inmediata en menos de 24 horas tras la solicitud.'
      },
      {
        name: 'Labores domésticas y catering diario',
        description: 'Limpieza y mantenimiento del hogar, planchado y preparación o entrega de menús adaptados.',
        details: 'Menús equilibrados supervisados para diabéticos, hipertensos y dietas de fácil masticación.'
      }
    ]
  },
  {
    id: 'acompanamiento-fuera',
    title: '2. Acompañamiento fuera de casa',
    subtitle: 'Seguridad en sus desplazamientos médicos y momentos de ingreso.',
    iconName: 'HeartHandshake',
    services: [
      {
        name: 'Estancias y guardias hospitalarias',
        description: 'Acompañamiento diurno o nocturno en el hospital para que ningún familiar se agote.',
        details: 'Información telefónica continua a los familiares durante la estancia.'
      },
      {
        name: 'Acompañamiento a citas médicas y gestiones',
        description: 'Traslado al centro de salud, especialista o bancos, tomando nota de indicaciones médicas.',
        details: 'Vehículo adaptado o transporte público según necesidad.'
      },
      {
        name: 'Atención de apoyo en residencias',
        description: 'Refuerzo de paseos, comidas y estimulación individual para residentes.',
        details: 'Coordinación cordial con el equipo del centro residencial.'
      }
    ]
  },
  {
    id: 'salud-bienestar',
    title: '3. Salud y bienestar',
    subtitle: 'Especialistas colegiados que acuden a domicilio para mantener la autonomía.',
    iconName: 'Activity',
    services: [
      {
        name: 'Fisioterapia y rehabilitación a domicilio',
        description: 'Movilidad articular, fortalecimiento tras caídas, fisioterapia respiratoria y motora.',
        details: 'Planes pautados con material portátil en la propia cama o salón.'
      },
      {
        name: 'Terapia ocupacional y estimulación cognitiva',
        description: 'Adaptación funcional del entorno doméstico y talleres lúdicos para ejercitar la mente.',
        details: 'Ejercicios prácticos que devuelven la autonomía en las tareas de la vida diaria.'
      },
      {
        name: 'Podología clínica y peluquería en casa',
        description: 'Cuidado del pie geriátrico, corte de uñas terapéutico, lavado y peinado personal.',
        details: 'Higiene, comodidad y autoestima sin salir de su habitación.'
      }
    ]
  },
  {
    id: 'apoyo-familia',
    title: '4. Apoyo a la familia',
    subtitle: 'Cuidar a quien cuida: respiro, asesoramiento y tranquilidad emocional.',
    iconName: 'Users',
    services: [
      {
        name: 'Respiro familiar programado o puntual',
        description: 'Relevo del cuidador principal para fines de semana, descansos o compromisos personales.',
        details: 'Descanso garantizado con la tranquilidad de que un profesional cualificado cubre el puesto.'
      },
      {
        name: 'Catering domiciliario adaptado a dietas',
        description: 'Comidas recién elaboradas según indicaciones de su médico de cabecera.',
        details: 'Bajas en sal, sin azúcares añadidos, trituradas o de fácil deglución.'
      },
      {
        name: 'Orientación y apoyo psicológico a cuidadores',
        description: 'Pautas de gestión del estrés, comprensión de las fases de la dependencia y duelo.',
        details: 'Atención personalizada por coordinadores de trabajo social.'
      }
    ]
  },
  {
    id: 'asesoria-tramites',
    title: '5. Asesoría y trámites de dependencia',
    subtitle: 'Nos encargamos de todo el laberinto burocrático para conseguir sus ayudas públicas.',
    iconName: 'FileText',
    services: [
      {
        name: 'Tramitación completa de la Ley de Dependencia',
        description: 'Gestión íntegra de la solicitud inicial de grado, Programa Individual de Atención (PIA) y revisiones.',
        details: 'Acompañamiento en la visita del valorador público para garantizar la calificación justa.'
      },
      {
        name: 'Búsqueda y gestión de subvenciones y prestaciones',
        description: 'Tramitación de la PECEF (prestación económica para cuidados), PEVS y deducciones autonómicas.',
        details: 'Optimizamos todas las ayudas disponibles para abaratar el coste del servicio.'
      },
      {
        name: 'Asesoría geriátrica y adaptación de la vivienda',
        description: 'Estudio de eliminación de barreras arquitectónicas, platos de ducha, grúas y camas articuladas.',
        details: 'Gestión de subvenciones públicas para reformas y ayudas técnicas.'
      }
    ]
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'curso-1',
    title: 'Atención sociosanitaria a personas dependientes en instituciones y domicilio',
    area: 'sociosanitario',
    modality: 'Mixta',
    duration: '120 horas',
    hours: 120,
    fundae: true,
    price: 'Bonificable 100% FUNDAE',
    nextDate: '24 de Octubre de 2026',
    description: 'Capacitación profesional homologada para auxiliares y cuidadores con enfoque en la dignidad y autonomía.',
    syllabus: [
      'Apoyo en la organización de intervenciones en el domicilio',
      'Higiene y administración de alimentos',
      'Mantenimiento y entrenamiento de hábitos de autonomía',
      'Primeros auxilios y movilizaciones ergonómicas'
    ]
  },
  {
    id: 'curso-2',
    title: 'Estrategias de estimulación cognitiva y manejo en Alzheimer',
    area: 'alzheimer',
    modality: 'Online',
    duration: '45 horas',
    hours: 45,
    fundae: true,
    price: '280 € / 100% bonificable',
    nextDate: '5 de Noviembre de 2026',
    description: 'Protocolos prácticos para abordar alteraciones conductuales, desorientación y comunicación positiva.',
    syllabus: [
      'Fases del deterioro cognitivo y neurobiología básica',
      'Técnicas de validación y reminiscencia',
      'Manejo no farmacológico de conductas disruptivas',
      'Apoyo emocional a la unidad familiar'
    ]
  },
  {
    id: 'curso-3',
    title: 'Movilización segura de pacientes y prevención de riesgos laborales',
    area: 'prevencion',
    modality: 'Presencial',
    duration: '20 horas',
    hours: 20,
    fundae: true,
    price: '190 € / 100% bonificable',
    nextDate: '12 de Noviembre de 2026',
    description: 'Técnicas ergonómicas para evitar lesiones de espalda en el cuidador y garantizar transferencias seguras.',
    syllabus: [
      'Biomecánica del cuerpo humano en el cuidado',
      'Uso correcto de grúas mecánicas y cinturones de transferencia',
      'Cambios posturales en cama y prevención de úlceras por presión',
      'Medidas de seguridad en transferencias silla-cama'
    ]
  },
  {
    id: 'curso-4',
    title: 'Primeros auxilios geriátricos y soporte vital básico',
    area: 'primeros-auxilios',
    modality: 'Presencial',
    duration: '16 horas',
    hours: 16,
    fundae: true,
    price: '150 € / 100% bonificable',
    nextDate: '19 de Noviembre de 2026',
    description: 'Actuación inmediata ante atragantamientos, caídas, hipoglucemias o pérdidas de conciencia en mayores.',
    syllabus: [
      'Maniobra de Heimlich en personas con movilidad reducida',
      'RCP y uso del desfibrilador semiautomático (DESA)',
      'Protocolos de actuación ante caídas con sospecha de fractura',
      'Detección precoz del ictus (código Ictus)'
    ]
  }
];

export const JOB_OFFERS_DATA: JobOffer[] = [
  {
    id: 'job-1',
    title: 'Auxiliar de Ayuda a Domicilio (SAD)',
    zone: 'Zaragoza Capital y Comarca Central',
    type: 'Indefinido',
    workingDay: 'Media jornada',
    requirements: [
      'Título de Auxiliar de Enfermería, TCAE o Certificado de Profesionalidad Sociosanitario.',
      'Experiencia mínima de 1 año en atención domiciliaria.',
      'Sensibilidad humana, puntualidad y vocación de servicio.'
    ],
    description: 'Atención a personas dependientes en sus domicilios: higiene personal, medicación, acompañamiento y labores ligeras de mantenimiento.',
    urgent: true
  },
  {
    id: 'job-2',
    title: 'Cuidadora Interna / Interno entre semana',
    zone: 'Teruel / Albarracín / Calamocha',
    type: 'Indefinido',
    workingDay: 'Noches / Interna',
    requirements: [
      'Permiso de trabajo en regla y titulación sociosanitaria o habilitación.',
      'Experiencia demostrable con referencias comprobables en cuidado de personas mayores.',
      'Capacidad resolutiva y trato cercano y respetuoso.'
    ],
    description: 'Cuidado continuo de matrimonio de edad avanzada en domicilio particular. Habitación propia, descansos reglamentarios según convenio.',
    urgent: true
  },
  {
    id: 'job-3',
    title: 'Fisioterapeuta Colegiado/a a Domicilio',
    zone: 'Zaragoza y poblaciones cercanas',
    type: 'Contrato laboral o mercantil según disponibilidad',
    workingDay: 'Media jornada',
    requirements: [
      'Grado en Fisioterapia y colegiación vigente en Aragón.',
      'Vehículo propio para desplazamientos a domicilios.',
      'Especialización o interés en geriatría y rehabilitación neurológica.'
    ],
    description: 'Sesiones domiciliarias de mantenimiento de marcha, fortalecimiento muscular y rehabilitación post-quirúrgica en personas de tercera edad.'
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'noticia-1',
    title: 'Novedades en el baremo de la Ley de Dependencia para 2027: plazos y cuantías',
    category: 'Dependencia y Ayudas',
    date: '06 Octubre 2026',
    readTime: '4 min de lectura',
    excerpt: 'Analizamos las modificaciones legislativas aprobadas para reducir el tiempo de valoración y las nuevas cuantías mínimas de la PECEF.',
    content: 'El Gobierno ha actualizado el procedimiento del Sistema para la Autonomía y Atención a la Dependencia (SAAD). En Lumbre Residencial tramitamos tu expediente sin coste inicial para asegurar que tu familiar no pierda ninguna mensualidad de retroactividad reconocida.'
  },
  {
    id: 'noticia-2',
    title: 'Cómo acondicionar el baño de una persona mayor para prevenir caídas graves',
    category: 'Consejos Familia',
    date: '02 Octubre 2026',
    readTime: '3 min de lectura',
    excerpt: 'El 70% de los accidentes domésticos en mayores ocurren en el baño. Guía práctica sobre asideros, platos de ducha enrasados y antideslizantes.',
    content: 'Eliminar la bañera tradicional es el primer paso, pero los detalles marcan la diferencia: iluminación sin sombras, puertas que abran hacia afuera y alfombrillas certificadas. Consulta con nuestro equipo técnico las subvenciones de mejora de la accesibilidad.'
  },
  {
    id: 'noticia-3',
    title: 'Lumbre Residencial inicia su actividad con compromiso de atención en 24 horas',
    category: 'Novedades Lumbre',
    date: '28 Septiembre 2026',
    readTime: '2 min de lectura',
    excerpt: 'Nacemos para dar una respuesta integral y humana a las familias, aunando ayuda a domicilio, fisioterapia y gestión burocrática sin intermediarios.',
    content: 'Con sede en Aragón y cobertura extensible, Lumbre Residencial SL arranca su andadura con un equipo de profesionales titulados, seguro de responsabilidad civil integral y un coordinador exclusivo asignado a cada familia.'
  }
];
