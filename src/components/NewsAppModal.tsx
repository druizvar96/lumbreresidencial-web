import { useState } from 'react';
import { Newspaper, Plus, CheckCircle } from 'lucide-react';
import type { NewsItem } from '../data/siteData';

export const NewsAppModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onAddNews: (item: NewsItem) => void;
}> = ({ isOpen, onClose, onAddNews }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<NewsItem['category']>('Normativa');
  const [readTime, setReadTime] = useState('3 min de lectura');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !excerpt) return;

    const newItem: NewsItem = {
      id: `noticia-${Date.now()}`,
      title,
      category,
      date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
      readTime,
      excerpt,
      content: content || excerpt
    };

    onAddNews(newItem);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setTitle('');
      setExcerpt('');
      setContent('');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border-2 border-[#C8653A]/30">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full p-2"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8653A]/10 text-[#C8653A]">
            <Newspaper className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C8653A]">
              Panel Rápido de Publicación
            </span>
            <h3 className="text-xl font-bold text-[#2B2B2B]">
              Publicar Novedad o Aviso Regulatorio
            </h3>
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-6 bg-amber-50 p-3 rounded-xl border border-amber-200">
          <strong>Publicación inmediata a coste 0:</strong> Diseñado para que Rebeca o su equipo publiquen noticias de servicios sociales, leyes o avisos internos como un mensaje directo sin intermediarios.
        </p>

        {success ? (
          <div className="py-8 text-center">
            <CheckCircle className="h-14 w-14 text-emerald-600 mx-auto mb-3" />
            <h4 className="text-xl font-bold text-gray-800">¡Noticia publicada en la web!</h4>
            <p className="text-sm text-gray-500">Se ha incorporado al instante en la sección de Noticias.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Titular de la Noticia o Normativa *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ej. Publicada la nueva orden de servicios de teleasistencia en Aragón"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-[#C8653A] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Categoría
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:border-[#C8653A] focus:outline-none bg-white"
                >
                  <option value="Normativa">Normativa y BOE/BOA</option>
                  <option value="Dependencia y Ayudas">Dependencia y Ayudas</option>
                  <option value="Consejos Familia">Consejos Familia</option>
                  <option value="Novedades Lumbre">Novedades Lumbre</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Tiempo estimado
                </label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="3 min de lectura"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-[#C8653A] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Resumen destacado (Entradilla) *
              </label>
              <textarea
                required
                rows={2}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Breve resumen de 2 líneas para la portada y tarjetas de noticias..."
                className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-[#C8653A] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Desarrollo completo
              </label>
              <textarea
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Texto explicativo con pautas para las familias o centros..."
                className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-[#C8653A] focus:outline-none"
              />
            </div>

            <div className="pt-3 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-600 hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#C8653A] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#b0552e] shadow-md transition-all"
              >
                <Plus className="h-4 w-4" /> Publicar noticia al momento
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
