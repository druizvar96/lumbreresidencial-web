import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon-only' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const LumbreLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md'
}) => {
  const sizeMap = {
    sm: { img: 34, text: 'text-lg', sub: 'text-[10px]' },
    md: { img: 44, text: 'text-xl', sub: 'text-xs' },
    lg: { img: 60, text: 'text-2xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Símbolo / Isotipo de Lumbre */}
      <div className="relative flex items-center justify-center rounded-2xl bg-white/90 p-1.5 shadow-sm ring-1 ring-[#C8653A]/20 transition-transform hover:scale-105">
        <img
          src="/logo-lumbre.jpg"
          alt="Isotipo Lumbre Residencial"
          width={currentSize.img}
          height={currentSize.img}
          className="rounded-xl object-contain"
        />
      </div>

      {/* Tipografía Corporativa */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-tight leading-tight ${currentSize.text} ${variant === 'light' ? 'text-white' : 'text-[#2B2B2B]'}`}>
            LUMBRE <span className="text-[#C8653A] font-extrabold">RESIDENCIAL</span>
          </span>
          <span className={`font-medium tracking-wide ${currentSize.sub} ${variant === 'light' ? 'text-amber-200' : 'text-[#7A9E7E]'}`}>
            Cuidado Sociosanitario · Ayuda a Domicilio
          </span>
        </div>
      )}
    </div>
  );
};
