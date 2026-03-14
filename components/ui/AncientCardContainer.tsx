// components/AncientCardContainer.tsx
import React from 'react';

interface AncientCardContainerProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isDashed?: boolean;
  haveMargin?: boolean;
  variant?: 'default' | 'add' | 'flipped' | 'transparent';
}

const AncientCardContainer: React.FC<AncientCardContainerProps> = ({
  children,
  onClick,
  className = '',
  isDashed = false,
  haveMargin = false,
  variant = 'default',

}) => {
  const variantStyles = {
    default: { bg: 'bg-amber-50', border: 'border-amber-800' },
    add:     { bg: 'bg-amber-50/90', border: 'border-amber-800 border-dashed' },
    flipped: { bg: 'bg-amber-800', border: 'border-amber-900' },
    transparent: { bg: '', border: 'border-amber-800' },
  };

  const { bg, border } = variantStyles[variant];

  return (
    <div className={className} onClick={onClick}>
      <div className={`relative w-full h-full ${bg} rounded-xl overflow-hidden border-8 shadow-2xl ${border}`}>     
            <div className={`absolute inset-0 ${variant !== 'transparent' ? 'bg-gradient-to-br from-amber-100/50 to-amber-300/30' : ''} pointer-events-none`} />
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
              }}
            />
       

        {/* Bordo decorativo interno */}
        <div className={`absolute inset-2 border-2 rounded-lg ${
          isDashed ? 'border-amber-700/30 border-dashed' : 'border-amber-700/30'
        }`} />

        {/* Angoli invecchiamento */}
        <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-amber-900/20 to-transparent rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-amber-900/20 to-transparent rounded-tl-full" />

        {/* Macchie invecchiamento */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-amber-800/10 rounded-full blur-sm" />
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-amber-800/10 rounded-full blur-md" />

        {/* Semi decorativi agli angoli */}
        <div className="absolute top-4 left-4 text-3xl text-amber-800/20 pointer-events-none">♠</div>
        <div className="absolute top-4 right-4 text-3xl text-amber-800/20 pointer-events-none">♣</div>
        <div className="absolute bottom-4 left-4 text-3xl text-amber-800/20 pointer-events-none">♥</div>
        <div className="absolute bottom-4 right-4 text-3xl text-amber-800/20 pointer-events-none">♦</div>

        {/* Contenuto */}
        <div className={`relative h-full w-full ${haveMargin ? 'p-10' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AncientCardContainer;