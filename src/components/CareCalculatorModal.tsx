import { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const CareCalculatorModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  const [step, setStep] = useState(1);
  const [needType, setNeedType] = useState<string>('diario');
  const [schedule, setSchedule] = useState<string>('mananas');
  const [hasDependence, setHasDependence] = useState<string>('no-tramitada');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="calc-title">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#FBF6EF] p-6 sm:p-8 shadow-2xl ring-1 ring-[#C8653A]/20 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-700 bg-white/70 hover:bg-white rounded-full p-2 transition-colors"
          aria-label="Cerrar asistente"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8653A]/10 text-[#C8653A]">
                <Calculator className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xs font-bold tracking-widest text-[#C8653A] uppercase">Asistente Guiado</span>
                <h3 id="calc-title" className="text-2xl font-bold text-[#2B2B2B]">
                  ¿Qué necesita tu familiar?
                </h3>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Responde 3 preguntas sencillas para orientarte sobre la cobertura recomendada y si puede beneficiarse de las ayudas de la Ley de Dependencia.
            </p>

            {step === 1 && (
              <div className="space-y-4">
                <p className="font-semibold text-gray-800">1. ¿Qué tipo de apoyo principal se requiere?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'diario', label: 'Aseo, comidas y movilización', desc: 'Atención sociosanitaria diaria' },
                    { id: 'compania', label: 'Compañía y supervisión', desc: 'Paseos, medicación, evitar soledad' },
                    { id: 'alzheimer', label: 'Alzheimer o deterioro cognitivo', desc: 'Cuidado especializado continuo' },
                    { id: 'hospital', label: 'Convalecencia o hospital', desc: 'Recuperación tras alta médica' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setNeedType(item.id)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all ${
                        needType === item.id
                          ? 'border-[#C8653A] bg-[#C8653A]/5 shadow-sm'
                          : 'border-amber-900/10 bg-white hover:border-[#C8653A]/50'
                      }`}
                    >
                      <div className="font-bold text-[#2B2B2B]">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                    </button>
                  ))}
                </div>
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 bg-[#C8653A] text-white px-6 py-3 rounded-full font-bold hover:bg-[#b0552e] transition-colors shadow-md"
                  >
                    Siguiente paso <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p className="font-semibold text-gray-800">2. ¿En qué franja horaria necesita apoyo?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'horas', label: 'Pocas horas sueltas', desc: 'Ej: 1 o 2 horas para aseo o comida' },
                    { id: 'mananas', label: 'Media jornada (mañana / tarde)', desc: 'Ej: 4 a 6 horas diarias' },
                    { id: 'noches', label: 'Vigilancia nocturna', desc: 'Noches completas para descanso familiar' },
                    { id: 'interna', label: 'Cuidador interno / 24 horas', desc: 'Atención continua con sustituciones' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSchedule(item.id)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all ${
                        schedule === item.id
                          ? 'border-[#C8653A] bg-[#C8653A]/5 shadow-sm'
                          : 'border-amber-900/10 bg-white hover:border-[#C8653A]/50'
                      }`}
                    >
                      <div className="font-bold text-[#2B2B2B]">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                    </button>
                  ))}
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <p className="font-semibold text-gray-800 text-sm mb-2">¿Tiene ya tramitado el Grado de Dependencia?</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'si', label: 'Sí, ya tiene grado reconocido' },
                      { id: 'en-tramite', label: 'En trámite actualmente' },
                      { id: 'no-tramitada', label: 'No tramitado / Desconozco ayudas' }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        type="button"
                        onClick={() => setHasDependence(btn.id)}
                        className={`text-xs px-3 py-2 rounded-xl font-medium transition-all ${
                          hasDependence === btn.id
                            ? 'bg-[#2F5D62] text-white shadow-sm'
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 bg-[#C8653A] text-white px-6 py-3 rounded-full font-bold hover:bg-[#b0552e] transition-colors shadow-md"
                  >
                    Ver plan orientativo <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#7A9E7E]/15 border border-[#7A9E7E]/40 text-sm text-gray-800">
                  <p className="font-bold text-[#2F5D62] mb-1">✓ Plan personalizado preconfigurado</p>
                  <p>
                    Hemos preparado la propuesta con coordinador sociosanitario asignado y asesoramiento para solicitar la <strong>prestación económica de dependencia (PECEF/PEVS)</strong> para subvencionar el cuidado.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Nombre del familiar o solicitante *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Ej. Rebeca García"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus:border-[#C8653A] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Teléfono de contacto prioritario *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="600 000 000"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus:border-[#C8653A] focus:outline-none"
                    />
                  </div>
                </div>

                <label className="flex items-start gap-2 pt-2">
                  <input type="checkbox" required className="mt-1 h-4 w-4 rounded text-[#C8653A]" />
                  <span className="text-xs text-gray-600">
                    Acepto la <a href="#legal" className="underline text-[#C8653A]">Política de Privacidad</a> y consiento que Lumbre Residencial SL me contacte para la valoración gratuita de cuidados.
                  </span>
                </label>

                <div className="pt-3 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2"
                  >
                    Atrás
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#E9A23B] text-[#2B2B2B] px-8 py-3.5 rounded-full font-bold hover:bg-[#d8932e] transition-colors shadow-lg"
                  >
                    Solicitar valoración gratuita sin compromiso
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#2B2B2B] mb-2">¡Solicitud recibida correctamente!</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6 text-sm">
              Gracias, <strong>{contactName}</strong>. Un coordinador sociosanitario de Lumbre Residencial te llamará al <strong>{contactPhone}</strong> en menos de 24 horas para concertar la visita gratuita de valoración.
            </p>
            <div className="inline-flex items-center gap-2 p-3 bg-white rounded-2xl border border-amber-900/10 text-xs text-gray-700 mb-6">
              <ShieldCheck className="h-5 w-5 text-[#7A9E7E]" />
              Compromiso Lumbre: Sin permanencia · Visita de valoración gratuita · Cambio de cuidador sin coste
            </div>
            <div>
              <button
                onClick={() => { setSubmitted(false); setStep(1); onClose(); }}
                className="bg-[#C8653A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#b0552e]"
              >
                Volver a la web
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
