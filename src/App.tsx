import { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Shield,
  Heart,
  Sparkles,
  FileCheck,
  Award,
  ChevronRight,
  Check,
  MapPin,
  Mail,
  QrCode,
  Send,
  Upload,
  BookOpen,
  Briefcase,
  Menu,
  X,
  Newspaper,
  Plus
} from 'lucide-react';
import { LumbreLogo } from './components/LumbreLogo';
import { CareCalculatorModal } from './components/CareCalculatorModal';
import { NewsAppModal } from './components/NewsAppModal';
import {
  SERVICES_DATA,
  COURSES_DATA,
  JOB_OFFERS_DATA,
  NEWS_DATA,
  type NewsItem
} from './data/siteData';

export function App() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'servicios' | 'cursos' | 'noticias' | 'empleo' | 'quienes-somos' | 'contacto'>('inicio');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isNewsAppOpen, setIsNewsAppOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontSizeClass, setFontSizeClass] = useState<'normal' | 'font-large' | 'font-xlarge'>('normal');
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(() => {
    return localStorage.getItem('lumbre_cookies') === 'accepted' ? true : null;
  });

  const [newsList, setNewsList] = useState<NewsItem[]>(NEWS_DATA);
  const [selectedCourseArea, setSelectedCourseArea] = useState<string>('todos');

  const toggleFontSize = () => {
    if (fontSizeClass === 'normal') {
      setFontSizeClass('font-large');
      document.body.className = 'font-large';
    } else if (fontSizeClass === 'font-large') {
      setFontSizeClass('font-xlarge');
      document.body.className = 'font-xlarge';
    } else {
      setFontSizeClass('normal');
      document.body.className = '';
    }
  };

  const handleAddNews = (newItem: NewsItem) => {
    setNewsList([newItem, ...newsList]);
  };

  const handleAcceptCookies = (status: boolean) => {
    setCookieConsent(status);
    localStorage.setItem('lumbre_cookies', status ? 'accepted' : 'rejected');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF6EF] text-[#2B2B2B]">
      {/* Skip to Main Content (a11y) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C8653A] focus:text-white focus:rounded-lg focus:shadow-xl font-bold"
      >
        Saltar al contenido principal
      </a>

      {/* Top Banner de Accesibilidad y Canales Directos */}
      <div className="bg-[#2F5D62] text-white text-xs sm:text-sm py-2 px-4 border-b border-[#2F5D62]/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Shield className="h-3.5 w-3.5 text-amber-300" />
              Lumbre Residencial SL · Cuidado Sociosanitario Oficial
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-amber-200 font-medium">
              Zaragoza · Teruel · Atención en todo Aragón
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleFontSize}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-semibold"
              title="Aumentar o ajustar tamaño de letra"
              aria-label="Cambiar tamaño de texto accesible"
            >
              <span className="text-xs">A</span>
              <span className="text-sm font-bold">A+</span>
              <span className="text-[11px] hidden sm:inline ml-1">
                ({fontSizeClass === 'normal' ? 'Normal' : fontSizeClass === 'font-large' ? 'Grande' : 'Muy Grande'})
              </span>
            </button>

            <a
              href="tel:976000000"
              className="font-bold flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Llámanos gratis:</span> 976 00 00 00
            </a>
          </div>
        </div>
      </div>

      {/* Navegación Principal Fija */}
      <header className="sticky top-0 z-40 bg-[#FBF6EF]/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => setActiveTab('inicio')}>
            <LumbreLogo size="md" />
          </div>

          {/* Menú de Escritorio */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {[
              { id: 'inicio', label: 'Inicio' },
              { id: 'servicios', label: 'Servicios' },
              { id: 'cursos', label: 'Cursos Empresa' },
              { id: 'noticias', label: 'Noticias y Normativa' },
              { id: 'empleo', label: 'Bolsa de Empleo' },
              { id: 'quienes-somos', label: 'Quiénes Somos' },
              { id: 'contacto', label: 'Contacto' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'text-[#C8653A] bg-[#C8653A]/10 font-bold'
                    : 'text-gray-700 hover:text-[#C8653A] hover:bg-amber-900/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botón CTA Destacado */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="inline-flex items-center gap-2 bg-[#C8653A] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-[#b0552e] hover:shadow-lg transition-all active:scale-95"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              Pide tu valoración gratuita
            </button>
          </div>

          {/* Botón hamburguesa móvil */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="text-xs bg-[#C8653A] text-white px-3 py-1.5 rounded-full font-bold sm:hidden"
            >
              Valoración
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-black/5"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBF6EF] border-b border-amber-900/10 px-4 pt-2 pb-6 space-y-2">
            {[
              { id: 'inicio', label: 'Inicio' },
              { id: 'servicios', label: 'Servicios de Cuidado' },
              { id: 'cursos', label: 'Cursos y Formación' },
              { id: 'noticias', label: 'Noticias y Normativa' },
              { id: 'empleo', label: 'Bolsa de Empleo' },
              { id: 'quienes-somos', label: 'Quiénes Somos' },
              { id: 'contacto', label: 'Contacto y Horarios' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold ${
                  activeTab === item.id ? 'bg-[#C8653A] text-white font-bold' : 'text-gray-800 hover:bg-amber-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main id="main-content" className="flex-1">
        {/* ======================= PESTAÑA: INICIO ======================= */}
        {activeTab === 'inicio' && (
          <div>
            {/* HERO PRINCIPAL */}
            <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-amber-900/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A9E7E]/20 text-[#2F5D62] font-bold text-xs uppercase tracking-wider">
                      <Heart className="h-4 w-4 text-[#C8653A]" />
                      Atención sociosanitaria personalizada en el hogar
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B2B2B] tracking-tight leading-tight">
                      Cuidamos de los tuyos <br />
                      <span className="text-[#C8653A]">como en casa.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
                      Asistencia profesional, cálida y de confianza para personas mayores o dependientes. Ayuda a domicilio, acompañamiento hospitalario, fisioterapia y gestión íntegra de la Ley de Dependencia sin burocracia para la familia.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button
                        onClick={() => setIsCalculatorOpen(true)}
                        className="inline-flex items-center gap-2.5 bg-[#E9A23B] text-[#2B2B2B] px-7 py-4 rounded-full font-bold text-base shadow-lg hover:bg-[#d8932e] hover:shadow-xl transition-all"
                      >
                        <Sparkles className="h-5 w-5" />
                        Pide tu valoración gratuita
                      </button>

                      <a
                        href="tel:976000000"
                        className="inline-flex items-center gap-2 bg-white text-[#2B2B2B] px-6 py-4 rounded-full font-bold text-base border-2 border-amber-900/15 shadow-sm hover:border-[#C8653A] transition-all"
                      >
                        <Phone className="h-5 w-5 text-[#C8653A]" />
                        Llamar ahora
                      </a>

                      <a
                        href="https://wa.me/34600000000?text=Hola,%20quisiera%20información%20sobre%20los%20servicios%20de%20Lumbre%20Residencial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366]/10 text-emerald-800 px-5 py-4 rounded-full font-bold text-base border border-emerald-300 hover:bg-[#25D366]/20 transition-all"
                      >
                        <MessageCircle className="h-5 w-5 text-emerald-600" />
                        WhatsApp directo
                      </a>
                    </div>

                    {/* Compromisos de Confianza Clave */}
                    <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-amber-900/10">
                      {[
                        { title: 'Respuesta < 24 h', desc: 'Atención inmediata' },
                        { title: 'Personal Titulado', desc: 'Con seguro de R.C.' },
                        { title: 'Coordinador Propio', desc: 'Un solo interlocutor' },
                        { title: 'Cambio sin Coste', desc: 'Si no hay afinidad' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white/80 p-3 rounded-2xl border border-amber-900/10 shadow-xs">
                          <div className="font-bold text-xs text-[#C8653A] flex items-center gap-1">
                            <Check className="h-3.5 w-3.5" /> {item.title}
                          </div>
                          <div className="text-[11px] text-gray-500 mt-0.5">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Imagen Hero Cálida y Auténtica */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                      <img
                        src="/hero-lumbre.jpg"
                        alt="Cuidadora sociosanitaria de Lumbre Residencial atendiendo cariñosamente a una señora mayor en el salón de su hogar"
                        className="w-full h-auto object-cover aspect-4/3"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                        <p className="text-sm font-semibold text-amber-200">Compromiso Lumbre Residencial</p>
                        <p className="text-xs text-white/90">
                          «Queremos que sigan en su casa con la máxima dignidad, seguridad y la calidez del hogar.»
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ACCESOS RÁPIDOS A LAS 4 ÁREAS */}
            <section className="py-12 bg-white border-b border-amber-900/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-bold text-[#C8653A] uppercase tracking-widest">Atención en 1 Clic</span>
                  <h2 className="text-3xl font-bold text-[#2B2B2B] mt-1">¿Qué necesitas resolver hoy?</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: 'Servicios en el Hogar',
                      desc: 'Aseo, acompañamiento, noches, internas y rehabilitación médica.',
                      tab: 'servicios',
                      color: 'bg-[#C8653A]',
                      icon: Heart
                    },
                    {
                      title: 'Cursos para Empresas',
                      desc: 'Formación bonificada FUNDAE para residencias, clínicas y cuidadores.',
                      tab: 'cursos',
                      color: 'bg-[#2F5D62]',
                      icon: BookOpen
                    },
                    {
                      title: 'Bolsa de Empleo',
                      desc: 'Ofertas para auxiliares y cuidadores con condiciones dignas y estables.',
                      tab: 'empleo',
                      color: 'bg-[#7A9E7E]',
                      icon: Briefcase
                    },
                    {
                      title: 'Noticias y Normativa',
                      desc: 'Avisos de la Ley de Dependencia, ayudas autonómicas y consejos.',
                      tab: 'noticias',
                      color: 'bg-[#E9A23B]',
                      icon: Newspaper
                    }
                  ].map((card, idx) => {
                    const IconComponent = card.icon;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveTab(card.tab as any)}
                        className="group cursor-pointer rounded-3xl p-6 bg-[#FBF6EF] border border-amber-900/10 hover:border-[#C8653A] hover:shadow-xl transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className={`h-12 w-12 rounded-2xl ${card.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">{card.title}</h3>
                          <p className="text-sm text-gray-600">{card.desc}</p>
                        </div>
                        <div className="pt-6 flex items-center gap-1 text-sm font-bold text-[#C8653A] group-hover:translate-x-1 transition-transform">
                          Ver información <ChevronRight className="h-4 w-4" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* CÓMO TRABAJAMOS EN 4 PASOS */}
            <section className="py-16 bg-[#FBF6EF] border-b border-amber-900/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <span className="text-xs font-bold text-[#C8653A] uppercase tracking-widest">Sencillo, transparente y cercano</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2B2B] mt-1">
                    Cómo trabajamos junto a tu familia
                  </h2>
                  <p className="text-base text-gray-600 mt-2">
                    En cuatro pasos claros ponemos en marcha el cuidado adaptado a vuestro ser querido.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      step: '01',
                      title: 'Llamada o solicitud',
                      desc: 'Nos cuentas la situación familiar, horarios y qué necesidades de apoyo tenéis.'
                    },
                    {
                      step: '02',
                      title: 'Visita de valoración',
                      desc: 'Un coordinador acude al hogar sin ningún compromiso para conocer al usuario en persona.'
                    },
                    {
                      step: '03',
                      title: 'Plan y profesional afín',
                      desc: 'Seleccionamos el profesional cualificado idóneo por carácter, titulación y cercanía.'
                    },
                    {
                      step: '04',
                      title: 'Seguimiento continuo',
                      desc: 'Supervisión periódica de la calidad con la familia y sustituciones inmediatas garantizadas.'
                    }
                  ].map((s, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-6 border border-amber-900/10 shadow-sm relative">
                      <span className="text-3xl font-black text-[#C8653A]/20 block mb-2">{s.step}</span>
                      <h3 className="text-lg font-bold text-[#2B2B2B] mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-600">{s.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <button
                    onClick={() => setIsCalculatorOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#C8653A] text-white px-8 py-4 rounded-full font-bold shadow-md hover:bg-[#b0552e]"
                  >
                    Iniciar valoración gratuita de mi familiar
                  </button>
                </div>
              </div>
            </section>

            {/* SELLO DIFERENCIAL: NOS ENCARGAMOS DE TODOS LOS TRÁMITES */}
            <section className="py-16 bg-[#2F5D62] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-[#2B2B2B] text-xs font-bold uppercase tracking-wider">
                      Ventaja diferencial para familias
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                      Nos encargamos de todos los trámites de la Ley de Dependencia y Ayudas
                    </h2>
                    <p className="text-base text-gray-200 max-w-2xl">
                      Muchas familias renuncian a cobrar entre 300 € y 700 € mensuales de prestación pública por lo complejo y lento de la burocracia. Nuestro equipo tramita el expediente completo, desde la solicitud de grado hasta el Programa Individual de Atención (PIA).
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-sm text-amber-200">
                      <li className="flex items-center gap-2">✓ Sin coste de gestión si contratas cuidados</li>
                      <li className="flex items-center gap-2">✓ Revisión de grados ya concedidos</li>
                      <li className="flex items-center gap-2">✓ Acompañamiento ante el valorador oficial</li>
                      <li className="flex items-center gap-2">✓ Tramitación de subvenciones para reformas del hogar</li>
                    </ul>
                  </div>

                  <div className="lg:col-span-4 bg-white/10 p-6 rounded-3xl backdrop-blur-xs border border-white/20 text-center">
                    <h3 className="text-xl font-bold mb-2">¿Quieres saber qué ayuda te corresponde?</h3>
                    <p className="text-xs text-gray-200 mb-6">Te orientamos de forma inmediata y sin compromiso.</p>
                    <button
                      onClick={() => {
                        setActiveTab('servicios');
                      }}
                      className="w-full bg-[#E9A23B] text-[#2B2B2B] py-3.5 px-4 rounded-2xl font-bold text-sm hover:bg-[#d8932e] transition-colors"
                    >
                      Ver asesoría de dependencia
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ======================= PESTAÑA: SERVICIOS ======================= */}
        {activeTab === 'servicios' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-bold text-[#C8653A] uppercase tracking-widest">Catálogo Completo</span>
                <h1 className="text-4xl font-extrabold text-[#2B2B2B] mt-2">
                  Servicios de Cuidado y Atención Integral
                </h1>
                <p className="text-lg text-gray-600 mt-3">
                  Un solo interlocutor para todo lo que tu ser querido necesita: cuidados en casa, salud, trámites y acompañamiento con máxima profesionalidad.
                </p>
              </div>

              {/* Botón rápido del Asistente Guiado */}
              <div className="mb-12 p-6 rounded-3xl bg-linear-to-r from-amber-100 to-orange-100 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-amber-950">¿No tienes claro qué servicio encaja mejor?</h3>
                  <p className="text-sm text-amber-900">Usa nuestro recomendador interactivo en 3 preguntas rápidas.</p>
                </div>
                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="bg-[#C8653A] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#b0552e] shadow-md whitespace-nowrap"
                >
                  Abrir asistente «¿Qué necesita tu familiar?»
                </button>
              </div>

              {/* Los 5 Bloques Detallados */}
              <div className="space-y-12">
                {SERVICES_DATA.map((block) => (
                  <div key={block.id} className="bg-white rounded-3xl p-8 border border-amber-900/10 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                      <div>
                        <h2 className="text-2xl font-bold text-[#2B2B2B]">{block.title}</h2>
                        <p className="text-sm text-gray-600 mt-1">{block.subtitle}</p>
                      </div>
                      <button
                        onClick={() => setIsCalculatorOpen(true)}
                        className="inline-flex items-center gap-2 bg-[#7A9E7E]/15 text-[#2F5D62] hover:bg-[#7A9E7E]/25 px-4 py-2 rounded-xl text-xs font-bold transition-colors"
                      >
                        Pedir información de este bloque
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                      {block.services.map((srv, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-[#FBF6EF] border border-amber-900/5 flex flex-col justify-between">
                          <div>
                            <h3 className="font-bold text-base text-[#2B2B2B] mb-2">{srv.name}</h3>
                            <p className="text-xs text-gray-600 mb-3">{srv.description}</p>
                          </div>
                          <div className="pt-3 border-t border-amber-900/10 text-[11px] text-[#C8653A] font-medium">
                            ✓ {srv.details}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================= PESTAÑA: CURSOS Y FORMACIÓN ======================= */}
        {activeTab === 'cursos' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold text-[#2F5D62] uppercase tracking-widest">
                  Capacitación para Residencias, Centros y Profesionales
                </span>
                <h1 className="text-4xl font-extrabold text-[#2B2B2B] mt-2">
                  Cursos de Formación para Empresas
                </h1>
                <p className="text-lg text-gray-600 mt-3">
                  Planes de formación sociosanitaria a medida, homologados y 100% bonificables a través de la Fundación Estatal para la Formación en el Empleo (FUNDAE).
                </p>
              </div>

              {/* Filtros de área */}
              <div className="flex flex-wrap gap-2 justify-center mb-10">
                {[
                  { id: 'todos', label: 'Todos los cursos' },
                  { id: 'sociosanitario', label: 'Atención Sociosanitaria' },
                  { id: 'alzheimer', label: 'Alzheimer y Demencias' },
                  { id: 'prevencion', label: 'Movilización y PRL' },
                  { id: 'primeros-auxilios', label: 'Primeros Auxilios' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedCourseArea(filter.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      selectedCourseArea === filter.id
                        ? 'bg-[#2F5D62] text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Grid de Cursos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {COURSES_DATA.filter(
                  (c) => selectedCourseArea === 'todos' || c.area === selectedCourseArea
                ).map((course) => (
                  <div key={course.id} className="bg-white rounded-3xl p-8 border border-amber-900/10 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                          {course.price}
                        </span>
                        <span className="text-xs text-gray-500 font-medium">
                          Modalidad: <strong className="text-gray-800">{course.modality}</strong> ({course.duration})
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-[#2B2B2B] mb-2">{course.title}</h2>
                      <p className="text-sm text-gray-600 mb-4">{course.description}</p>

                      <div className="mb-4">
                        <h3 className="text-xs font-bold uppercase text-gray-500 mb-2">Temario Clave:</h3>
                        <ul className="space-y-1.5">
                          {course.syllabus.map((s, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-[#7A9E7E] mt-0.5" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs text-gray-500">
                        Próxima convocatoria: <br />
                        <strong className="text-gray-800 text-sm">{course.nextDate}</strong>
                      </div>
                      <button
                        onClick={() => {
                          alert(`Solicitud enviada para el curso: ${course.title}. Nuestro responsable de formación contactará para tramitar la bonificación FUNDAE.`);
                        }}
                        className="w-full sm:w-auto bg-[#2F5D62] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#234549] transition-colors"
                      >
                        Inscribirse / Solicitar Bonificación
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Formación a medida para centros */}
              <div className="bg-[#FBF6EF] border-2 border-dashed border-[#2F5D62]/40 rounded-3xl p-8 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-[#2F5D62] mb-2">
                  ¿Necesitas un plan de formación específico para tu plantilla?
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Diseñamos cursos a medida en las instalaciones de tu centro o residencia, adaptando los horarios a los turnos del personal y gestionando el 100% del crédito FUNDAE sin coste adicional.
                </p>
                <a
                  href="mailto:formacion@lumbreresidencial.com?subject=Solicitud de Formación a Medida para Empresa"
                  className="inline-flex items-center gap-2 bg-[#2F5D62] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#234549]"
                >
                  <Mail className="h-4 w-4" /> Solicitar propuesta para empresa
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ======================= PESTAÑA: NOTICIAS Y NORMATIVA ======================= */}
        {activeTab === 'noticias' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <span className="text-xs font-bold text-[#C8653A] uppercase tracking-widest">
                    Actualidad Sociosanitaria
                  </span>
                  <h1 className="text-4xl font-extrabold text-[#2B2B2B] mt-1">
                    Noticias, Normativa y Consejos
                  </h1>
                  <p className="text-base text-gray-600 mt-2">
                    Actualizaciones legales de dependencia, boletines oficiales y pautas para familias cuidadoras.
                  </p>
                </div>

                {/* Botón de la aplicación de publicación rápida directa */}
                <div>
                  <button
                    onClick={() => setIsNewsAppOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#C8653A] text-white px-5 py-3 rounded-2xl font-bold text-sm hover:bg-[#b0552e] shadow-md transition-all"
                  >
                    <Plus className="h-4 w-4" />
                    Publicar Novedad (Panel Rápido)
                  </button>
                </div>
              </div>

              {/* Grid de Noticias */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {newsList.map((item) => (
                  <article key={item.id} className="bg-white rounded-3xl p-6 border border-amber-900/10 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span className="px-3 py-1 rounded-full bg-amber-100 text-[#C8653A] font-bold">
                          {item.category}
                        </span>
                        <span>{item.date}</span>
                      </div>
                      <h2 className="text-xl font-bold text-[#2B2B2B] mb-3 leading-snug">{item.title}</h2>
                      <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-400">{item.readTime}</span>
                      <button
                        onClick={() => alert(`Lectura completa:\n\n${item.title}\n\n${item.content}`)}
                        className="text-xs font-bold text-[#C8653A] hover:underline"
                      >
                        Leer artículo completo →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================= PESTAÑA: BOLSA DE EMPLEO ======================= */}
        {activeTab === 'empleo' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold text-[#7A9E7E] uppercase tracking-widest">
                  Únete a Nuestro Equipo
                </span>
                <h1 className="text-4xl font-extrabold text-[#2B2B2B] mt-2">
                  Bolsa de Empleo Sociosanitario
                </h1>
                <p className="text-lg text-gray-600 mt-3">
                  Buscamos personas con vocación de cuidado, empatía y compromiso. Ofrecemos contratos legales, estabilidad laboral, apoyo continuo del coordinador y formación interna.
                </p>
              </div>

              {/* Ofertas Disponibles */}
              <div className="space-y-6 max-w-4xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-[#2B2B2B]">Ofertas Activas</h2>
                {JOB_OFFERS_DATA.map((job) => (
                  <div key={job.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-sm flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {job.urgent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                            Incorporación urgente
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full bg-[#7A9E7E]/20 text-[#2F5D62] text-xs font-bold">
                          {job.workingDay}
                        </span>
                        <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {job.zone}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#2B2B2B]">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.description}</p>
                      <ul className="pt-2 text-xs text-gray-500 space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-emerald-600" /> {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full md:w-auto">
                      <button
                        onClick={() => {
                          const name = prompt('Introduce tu nombre y teléfono para inscribirte:');
                          if (name) alert(`¡Gracias! Hemos registrado tu interés para la vacante de ${job.title}. Nos pondremos en contacto.`);
                        }}
                        className="w-full md:w-auto bg-[#7A9E7E] text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-[#688a6c] transition-colors whitespace-nowrap shadow-sm"
                      >
                        Inscribirme en esta oferta
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Formulario de Candidatura Espontánea */}
              <div className="bg-white rounded-3xl p-8 border border-amber-900/10 shadow-sm max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-[#2B2B2B] mb-2">Envía tu CV / Candidatura Espontánea</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Si eres auxiliar de enfermería, cuidador sociosanitario o fisioterapeuta y quieres trabajar con nosotros, déjanos tus datos.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('CV enviado con éxito. Tu perfil se ha clasificado en nuestra bolsa de empleo según tu zona y disponibilidad.');
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Nombre y Apellidos *</label>
                      <input type="text" required className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-[#C8653A]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Teléfono *</label>
                      <input type="tel" required className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-[#C8653A]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Población / Zona *</label>
                      <input type="text" required placeholder="Ej. Zaragoza o comarca" className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-[#C8653A]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Disponibilidad</label>
                      <select className="w-full rounded-xl border border-gray-300 p-3 text-sm bg-white focus:border-[#C8653A]">
                        <option>Jornada Completa</option>
                        <option>Media Jornada (Mañanas)</option>
                        <option>Media Jornada (Tardes)</option>
                        <option>Noches / Fines de Semana</option>
                        <option>Interna / 24h</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Adjuntar CV (PDF, Word)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-4 text-center text-xs text-gray-500 hover:border-[#C8653A] cursor-pointer">
                      <Upload className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                      Haz clic para seleccionar tu Currículum Vitae
                    </div>
                  </div>

                  <label className="flex items-start gap-2 pt-1">
                    <input type="checkbox" required className="mt-1 h-4 w-4 rounded text-[#C8653A]" />
                    <span className="text-xs text-gray-600">
                      Consiento el tratamiento de mis datos personales y currículum conforme a la <a href="#legal" className="underline text-[#C8653A]">Política de Privacidad</a> de Lumbre Residencial SL para procesos de selección.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-[#2F5D62] text-white py-3.5 rounded-full font-bold text-sm hover:bg-[#234549] transition-colors"
                  >
                    Enviar candidatura a la bolsa de empleo
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ======================= PESTAÑA: QUIÉNES SOMOS ======================= */}
        {activeTab === 'quienes-somos' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center">
                  <span className="text-xs font-bold text-[#C8653A] uppercase tracking-widest">
                    Identidad y Compromiso
                  </span>
                  <h1 className="text-4xl font-extrabold text-[#2B2B2B] mt-2">
                    Quiénes Somos en Lumbre Residencial
                  </h1>
                  <p className="text-lg text-gray-600 mt-3">
                    Nacemos en octubre de 2026 con un propósito claro: dignificar el cuidado en el hogar y ofrecer a las familias la serenidad de saber que sus mayores están en las mejores manos.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-amber-900/10 shadow-sm space-y-6">
                  <h2 className="text-2xl font-bold text-[#2B2B2B]">Nuestra Misión</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Facilitar que cada persona mayor o dependiente pueda permanecer en su propia casa el máximo tiempo posible, conservando sus rutinas, su intimidad y sus recuerdos, con la asistencia de profesionales titulados y empáticos.
                  </p>

                  <h2 className="text-2xl font-bold text-[#2B2B2B] pt-4">Nuestros Valores</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-[#FBF6EF] border border-amber-900/5">
                      <h3 className="font-bold text-[#C8653A] mb-1">Calidez de Hogar</h3>
                      <p className="text-xs text-gray-600">Trato humano y familiar, sin frialdad hospitalaria.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#FBF6EF] border border-amber-900/5">
                      <h3 className="font-bold text-[#2F5D62] mb-1">Rigor Profesional</h3>
                      <p className="text-xs text-gray-600">Personal titulado, con seguro civil y protocolos claros.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#FBF6EF] border border-amber-900/5">
                      <h3 className="font-bold text-[#7A9E7E] mb-1">Cero Burocracia</h3>
                      <p className="text-xs text-gray-600">Tramitamos las ayudas de dependencia para aliviar a la familia.</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-[#2B2B2B] pt-4">Garantías y Calidad</h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">✓ Seguro de Responsabilidad Civil Integral para todos nuestros servicios.</li>
                    <li className="flex items-center gap-2">✓ Selección rigurosa con verificación de antecedentes y referencias reales.</li>
                    <li className="flex items-center gap-2">✓ Coordinador de atención accesible 24 horas para urgencias familiares.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================= PESTAÑA: CONTACTO ======================= */}
        {activeTab === 'contacto' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-bold text-[#C8653A] uppercase tracking-widest">
                  Atención Inmediata
                </span>
                <h1 className="text-4xl font-extrabold text-[#2B2B2B] mt-2">
                  Estamos a tu lado para escucharte
                </h1>
                <p className="text-lg text-gray-600 mt-3">
                  Ponte en contacto con nuestro equipo por teléfono, WhatsApp o formulario. Te orientaremos en menos de 24 horas.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Datos de contacto y canales */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-white rounded-3xl p-8 border border-amber-900/10 shadow-sm space-y-6">
                    <h2 className="text-xl font-bold text-[#2B2B2B]">Canales Directos</h2>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-2xl bg-[#C8653A]/10 text-[#C8653A] flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase text-gray-500">Teléfono Gratuito</div>
                        <a href="tel:976000000" className="text-lg font-bold text-[#2B2B2B] hover:text-[#C8653A]">
                          976 00 00 00
                        </a>
                        <div className="text-xs text-gray-500">Atención telefónica de lunes a domingo</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase text-gray-500">WhatsApp Familiar</div>
                        <a href="https://wa.me/34600000000" className="text-lg font-bold text-[#2B2B2B] hover:text-emerald-700">
                          +34 600 000 000
                        </a>
                        <div className="text-xs text-gray-500">Respuesta rápida por mensaje</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-2xl bg-[#2F5D62]/10 text-[#2F5D62] flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase text-gray-500">Correos Corporativos</div>
                        <div className="text-sm font-semibold text-gray-800">info@lumbreresidencial.com</div>
                        <div className="text-xs text-gray-500">Cursos: formacion@lumbreresidencial.com</div>
                        <div className="text-xs text-gray-500">Empleo: rrhh@lumbreresidencial.com</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-2xl bg-amber-100 text-[#E9A23B] flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase text-gray-500">Ámbito de Cobertura</div>
                        <div className="text-sm font-semibold text-gray-800">Aragón (Zaragoza, Teruel, Huesca)</div>
                        <div className="text-xs text-gray-500">Servicios en toda la comunidad autónoma</div>
                      </div>
                    </div>
                  </div>

                  {/* QR de Contacto Dinámico */}
                  <div className="bg-[#2F5D62] text-white rounded-3xl p-6 text-center space-y-3">
                    <QrCode className="h-12 w-12 text-amber-300 mx-auto" />
                    <h3 className="font-bold text-base">QR de Contacto Directo</h3>
                    <p className="text-xs text-gray-200">
                      Escanea con la cámara de tu móvil para guardar nuestro contacto directo o enviar un WhatsApp inmediato.
                    </p>
                  </div>
                </div>

                {/* Formulario de Contacto General */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-amber-900/10 shadow-sm">
                  <h2 className="text-2xl font-bold text-[#2B2B2B] mb-2">Envíanos un mensaje</h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Déjanos tus datos y un profesional de Lumbre Residencial te responderá antes de 24 horas.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Mensaje enviado. Nuestro equipo se pondrá en contacto a la mayor brevedad.');
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Nombre y Apellidos *</label>
                        <input type="text" required className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-[#C8653A]" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Teléfono *</label>
                        <input type="tel" required className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-[#C8653A]" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Correo Electrónico</label>
                      <input type="email" className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-[#C8653A]" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Motivo de la consulta</label>
                      <select className="w-full rounded-xl border border-gray-300 p-3 text-sm bg-white focus:border-[#C8653A]">
                        <option>Cuidados de un familiar en el hogar</option>
                        <option>Acompañamiento en hospital o citas</option>
                        <option>Fisioterapia / Podología a domicilio</option>
                        <option>Trámites de la Ley de Dependencia</option>
                        <option>Cursos y formación bonificada</option>
                        <option>Otro asunto</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mensaje o detalle</label>
                      <textarea rows={4} className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-[#C8653A]" placeholder="Explícanos brevemente qué necesitas..."></textarea>
                    </div>

                    <label className="flex items-start gap-2 pt-1">
                      <input type="checkbox" required className="mt-1 h-4 w-4 rounded text-[#C8653A]" />
                      <span className="text-xs text-gray-600">
                        He leído y acepto la <a href="#legal" className="underline text-[#C8653A]">Política de Privacidad</a> de Lumbre Residencial SL y autorizo el tratamiento de mis datos para responder a la consulta.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#C8653A] text-white py-4 rounded-full font-bold text-base hover:bg-[#b0552e] transition-colors shadow-md"
                    >
                      <Send className="h-4 w-4" /> Enviar consulta a Lumbre Residencial
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER CORPORATIVO Y LEGAL COMPLETO (legal-gdpr-web) */}
      <footer id="legal" className="bg-[#2B2B2B] text-gray-300 pt-16 pb-12 border-t-4 border-[#C8653A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Columna 1: Marca */}
            <div className="space-y-4">
              <LumbreLogo variant="light" size="md" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Lumbre Residencial SL · Servicios sociosanitarios, ayuda a domicilio, acompañamiento y formación homologada en Aragón y ámbito nacional.
              </p>
              <div className="text-xs text-amber-300 font-bold">
                Dominios oficiales: lumbreresidencial.com · lumbreresidencial.es
              </div>
            </div>

            {/* Columna 2: Navegación Rápida */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Secciones</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => setActiveTab('servicios')} className="hover:text-amber-300">Servicios a Domicilio</button></li>
                <li><button onClick={() => setActiveTab('cursos')} className="hover:text-amber-300">Cursos de Formación para Empresas</button></li>
                <li><button onClick={() => setActiveTab('noticias')} className="hover:text-amber-300">Noticias y Normativa</button></li>
                <li><button onClick={() => setActiveTab('empleo')} className="hover:text-amber-300">Bolsa de Empleo</button></li>
                <li><button onClick={() => setActiveTab('quienes-somos')} className="hover:text-amber-300">Quiénes Somos y Calidad</button></li>
                <li><button onClick={() => setActiveTab('contacto')} className="hover:text-amber-300">Contacto y Horarios</button></li>
              </ul>
            </div>

            {/* Columna 3: Información Legal Obligatoria LSSI / RGPD */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Aviso Legal y Fiscal</h4>
              <p className="text-xs text-gray-400">
                <strong>Razón Social:</strong> Lumbre Residencial SL<br />
                <strong>Actividad:</strong> Servicios sociosanitarios y de atención a la dependencia.<br />
                <strong>Sede:</strong> Zaragoza / Teruel (Aragón)<br />
                <strong>Email:</strong> legal@lumbreresidencial.com
              </p>
              <div className="flex flex-col gap-1 text-xs text-gray-400 pt-2">
                <a href="#aviso-legal" onClick={() => alert('Aviso Legal conforme a la Ley 34/2002 (LSSI-CE): Lumbre Residencial SL con CIF en trámite de inscripción, domicilio en Aragón. Todos los derechos reservados.')} className="hover:underline">Aviso Legal (LSSI)</a>
                <a href="#privacidad" onClick={() => alert('Política de Privacidad conforme al RGPD y LOPD-GDD: Sus datos personales son tratados con el fin exclusivo de prestar los servicios solicitados y no se cederán a terceros.')} className="hover:underline">Política de Privacidad</a>
                <a href="#cookies" onClick={() => alert('Política de Cookies: Esta web utiliza cookies técnicas indispensables y cookies analíticas para mejorar la navegación.')} className="hover:underline">Política de Cookies</a>
              </div>
            </div>

            {/* Columna 4: Garantías y Sellos */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Garantías de Confianza</h4>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#7A9E7E]" />
                  <span>Seguro de Responsabilidad Civil</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-[#7A9E7E]" />
                  <span>Personal Titulado Homologado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#7A9E7E]" />
                  <span>Cumplimiento estricto RGPD</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="bg-[#C8653A] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#b0552e]"
                >
                  Solicitar Valoración Gratuita
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <div>
              © 2026 Lumbre Residencial SL. Todos los derechos reservados.
            </div>
            <div>
              Diseño accesible y adaptado para personas mayores y dependientes (WCAG 2.1 AA).
            </div>
          </div>
        </div>
      </footer>

      {/* BARRA INFERIOR MÓVIL FIJA */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-900/10 px-4 py-2.5 flex items-center justify-around shadow-2xl">
        <a
          href="tel:976000000"
          className="flex flex-col items-center gap-1 text-[#2B2B2B] text-xs font-bold"
        >
          <Phone className="h-5 w-5 text-[#C8653A]" />
          Llamar
        </a>

        <a
          href="https://wa.me/34600000000?text=Hola,%20quisiera%20información%20sobre%20los%20servicios%20de%20Lumbre%20Residencial"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-emerald-700 text-xs font-bold"
        >
          <MessageCircle className="h-5 w-5 text-emerald-600" />
          WhatsApp
        </a>

        <button
          onClick={() => setIsCalculatorOpen(true)}
          className="bg-[#C8653A] text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          Valoración
        </button>
      </div>

      {/* BANNER DE COOKIES (legal-gdpr-web) */}
      {cookieConsent === null && (
        <div className="fixed bottom-14 lg:bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-50 bg-white p-5 rounded-3xl shadow-2xl border-2 border-amber-900/15 animate-fade-in">
          <p className="text-xs text-gray-700 mb-3">
            <strong>Utilizamos cookies</strong> para ofrecerte una navegación accesible y analizar el tráfico de forma anónima. Conforme a la normativa RGPD y LSSI, puedes aceptar o rechazar las cookies analíticas.
          </p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => handleAcceptCookies(false)}
              className="text-xs font-semibold px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100"
            >
              Solo esenciales
            </button>
            <button
              onClick={() => handleAcceptCookies(true)}
              className="text-xs font-bold px-4 py-2 rounded-full bg-[#C8653A] text-white hover:bg-[#b0552e]"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      )}

      {/* MODALES */}
      <CareCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <NewsAppModal
        isOpen={isNewsAppOpen}
        onClose={() => setIsNewsAppOpen(false)}
        onAddNews={handleAddNews}
      />
    </div>
  );
}

export default App;
