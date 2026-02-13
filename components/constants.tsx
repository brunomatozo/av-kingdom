
import React from 'react';

export const COLORS = {
  primary: '#0B1C2D', // Azul Marinho Profundo
  secondary: '#111111', // Preto Grafite
  accent: '#C6A74A', // Ouro Metálico
  mutedAccent: '#4B5340', // Oliva Profundo
  text: '#BFC3C9', // Prata Aço
  white: '#FFFFFF'
};

/**
 * Logo Principal: Λ e V LADO A LADO
 */
export const LogoAV: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg 
    viewBox="0 0 160 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M20 70 L45 20 L70 70" 
      stroke={COLORS.accent} 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M90 30 L115 80 L140 30" 
      stroke={COLORS.mutedAccent} 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

/**
 * Logo Minimal: Versão com rótulos REVELAÇÃO e EXECUÇÃO
 */
export const LogoAVMinimal: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <svg 
    viewBox="0 0 200 140" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Rótulo Superior */}
    <text 
      x="50" 
      y="20" 
      fill={COLORS.accent} 
      fontSize="10" 
      fontWeight="bold" 
      textAnchor="middle" 
      letterSpacing="0.3em"
      className="font-serif italic"
    >
      REVELAÇÃO
    </text>

    {/* Λ - Montanha (A) */}
    <path 
      d="M20 90 L50 40 L80 90" 
      stroke={COLORS.accent} 
      strokeWidth="10" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* V - Vale (V) */}
    <path 
      d="M120 40 L150 90 L180 40" 
      stroke={COLORS.mutedAccent} 
      strokeWidth="10" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Rótulo Inferior */}
    <text 
      x="150" 
      y="120" 
      fill={COLORS.mutedAccent} 
      fontSize="10" 
      fontWeight="bold" 
      textAnchor="middle" 
      letterSpacing="0.3em"
      className="font-serif italic"
    >
      EXECUÇÃO
    </text>
  </svg>
);
