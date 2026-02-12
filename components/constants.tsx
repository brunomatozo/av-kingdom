
import React from 'react';

export const COLORS = {
  primary: '#0B1C2D', // Deep Midnight Blue
  secondary: '#111111', // Graphite Black
  accent: '#C6A74A', // Metallic Gold
  mutedAccent: '#4B5340', // Deep Olive / Muted Green (as seen in the logo image)
  text: '#BFC3C9', // Steel Silver
  white: '#FFFFFF'
};

/**
 * Logo Principal: Intersecção Λ e V
 * Design baseado na imagem: A (Λ) e V se cruzando perfeitamente.
 */
export const LogoAV: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* V - Vale (Execução) - Cor Oliva Profundo */}
    <path 
      d="M20 25 L50 85 L80 25" 
      stroke={COLORS.mutedAccent} 
      strokeWidth="7" 
      strokeLinecap="butt" 
      strokeLinejoin="miter" 
    />
    {/* Λ - Montanha (Visão) - Cor Ouro */}
    <path 
      d="M20 75 L50 15 L80 75" 
      stroke={COLORS.accent} 
      strokeWidth="7" 
      strokeLinecap="butt" 
      strokeLinejoin="miter" 
    />
  </svg>
);

/**
 * Logo Minimal: Versão geométrica pura da intersecção.
 */
export const LogoAVMinimal: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M15 25 L50 85 L85 25" 
      stroke={COLORS.mutedAccent} 
      strokeWidth="6" 
      strokeLinejoin="miter"
    />
    <path 
      d="M15 75 L50 15 L85 75" 
      stroke={COLORS.accent} 
      strokeWidth="6" 
      strokeLinejoin="miter"
    />
  </svg>
);
