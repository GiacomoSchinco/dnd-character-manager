// components/CombatStat.tsx
import React from 'react';

type CombatStatProps = {
    icon?: React.ReactNode;
    label: string;
    value: number | string;
    variant?: 'default' | 'small' | 'large';
    className?: string;
};

export function CombatStat({ 
    icon, 
    label, 
    value, 
    variant = 'default',
    className = '' 
}: CombatStatProps) {
    
    const isLong = label.length > 8;
    
    // Dimensioni basate sulla variante
    const sizes = {
        small: 'w-14 h-16',
        default: 'w-16 h-20',
        large: 'w-20 h-24',
    };

    const textSizes = {
        small: 'text-xl',
        default: 'text-2xl',
        large: 'text-3xl',
    };

    const iconSizes = {
        small: 'w-5 h-5 text-xs',
        default: 'w-6 h-6 text-sm',
        large: 'w-7 h-7 text-base',
    };

    return (
        <div
            className={`relative ${sizes[variant]} ${className}`}
            title={label}
        >
            {/* Contenitore principale */}
            <div className="relative w-full h-full bg-parchment-100 rounded-xl border-2 border-amber-700 shadow-md overflow-hidden">
                
                {/* Texture leggera */}
                <div className="absolute inset-0 bg-gradient-to-br from-parchment-100/50 to-parchment-300/30" />
                
                {/* Icona (se presente) - spostata in alto a sinistra ma dentro il bordo */}
                {icon && (
                    <div className="absolute top-1 left-1 z-10">
                        <div className={`${iconSizes[variant]} bg-amber-100 rounded-full border border-amber-700 shadow-sm flex items-center justify-center`}>
                            <span className="text-amber-900">
                                {icon}
                            </span>
                        </div>
                    </div>
                )}

                {/* Contenuto centrato */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Valore principale */}
                    <span className={`${textSizes[variant]} font-serif font-bold text-amber-900 leading-none`}>
                        {value}
                    </span>

                    {/* Label */}
                    <span className={`
                        font-serif text-amber-800
                        
                        ${variant === 'large' ? 'text-sm' : 'text-xs'}
                        mt-0.5
                    `}>
                        {label}
                    </span>
                </div>

                {/* Piccoli dettagli angoli - minimi */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-amber-900/5 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-amber-900/5 rounded-tr-full" />
            </div>
        </div>
    );
}