
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
 * Agora com caminhos totalmente separados para evitar interpolação.
 */
export const LogoAV: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg 
    viewBox="0 0 160 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Λ - Montanha (Visão) - Lado Esquerdo */}
    <path 
      d="M10 70 L45 10 L80 70" 
      stroke={COLORS.accent} 
      strokeWidth="10" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* V - Vale (Execução) - Lado Direito */}
    <path 
      d="M80 30 L115 90 L150 30" 
      stroke={COLORS.mutedAccent} 
      strokeWidth="10" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

/**
 * Logo Minimal: Versão purista side-by-side.
 */
export const LogoAVMinimal: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <svg 
    viewBox="0 0 160 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M20 70 L50 20 L80 70" 
      stroke={COLORS.accent} 
      strokeWidth="12" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path 
      d="M80 30 L110 80 L140 30" 
      stroke={COLORS.mutedAccent} 
      strokeWidth="12" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
