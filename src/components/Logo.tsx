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
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13',
    lg: 'w-13 h-13 sm:w-16 sm:h-16 md:w-20 md:h-20',
  };

  const titleSizes = {
    sm: 'text-xs sm:text-sm font-bold',
    md: 'text-[13px] sm:text-base md:text-lg lg:text-xl font-bold tracking-tight',
    lg: 'text-base sm:text-xl md:text-2xl font-extrabold tracking-tight',
  };

  const isLight = variant === 'light' || variant === 'footer';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 group ${className}`} id="clinic-brand-logo">
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

      <div className="flex flex-col min-w-0">
        <span
          className={`leading-tight font-display transition-colors whitespace-nowrap overflow-hidden text-ellipsis ${
            isLight ? 'text-white' : 'text-[#0F2B5B]'
          } ${titleSizes[size]}`}
        >
          Prime Medical <span className="text-[#00A896]">&</span> Dental Care
        </span>
        {showSubtitle && (
          <span
            className={`text-[10px] sm:text-xs font-medium tracking-wide flex items-center gap-1.5 whitespace-nowrap truncate ${
              isLight ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00A896] shrink-0"></span>
            <span>Dr. Tariq Mehmood • Rawalpindi</span>
          </span>
        )}
      </div>
    </div>
  );
};
