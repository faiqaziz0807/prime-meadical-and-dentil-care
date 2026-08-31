import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 md:w-14 md:h-14',
    lg: 'w-16 h-16 md:w-20 md:h-20',
  };

  const titleSizes = {
    sm: 'text-base font-bold',
    md: 'text-lg md:text-xl font-bold tracking-tight',
    lg: 'text-xl md:text-2xl font-extrabold tracking-tight',
  };

  const isLight = variant === 'light' || variant === 'footer';

  return (
    <div className={`flex items-center gap-3 group ${className}`} id="clinic-brand-logo">
      <div className={`relative ${sizeClasses[size]} shrink-0 rounded-full overflow-hidden shadow-md ring-2 ${
        isLight ? 'ring-[#00A896]/60 bg-white' : 'ring-[#0F2B5B]/20 bg-white'
      } transition-transform duration-300 group-hover:scale-105`}>
        <img
          src={CLINIC_INFO.logo}
          alt="Prime Medical and Dental Care Official Logo"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`leading-tight font-display transition-colors ${
            isLight ? 'text-white' : 'text-[#0F2B5B]'
          } ${titleSizes[size]}`}
        >
          Prime Medical <span className="text-[#00A896]">&</span> Dental Care
        </span>
        {showSubtitle && (
          <span
            className={`text-xs font-medium tracking-wide flex items-center gap-1.5 ${
              isLight ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00A896]"></span>
            Dr. Tariq Mehmood • Rawalpindi
          </span>
        )}
      </div>
    </div>
  );
};
