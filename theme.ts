// Centralized Theme Configuration
// Funnel Studio by forrestry.ai
// This file controls all branding and can be easily updated for future changes

export const theme = {
  // Brand Colors - Softened Green (Premium SaaS)
  colors: {
    primary: '#4ADE80',      // Softened green - elite SaaS aesthetic
    primaryLight: '#22C55E', // Darker for better contrast
    primaryDark: '#16A34A',  // Pressed states

    // Semantic colors
    success: '#4ADE80',      // Same as primary
    warning: '#F59E0B',      // Amber
    error: '#EF4444',        // Red
    info: '#3B82F6',         // Blue

    // Light mode colors - Premium warm cream
    light: {
      bg: '#FAFAF9',         // Warm off-white (premium)
      surface: '#F5F5F4',    // Warm light gray
      card: '#FFFFFF',       // Pure white cards (pop)
      border: '#E7E5E4',     // Warm border
      textPrimary: '#1C1917',   // Rich black
      textSecondary: '#78716C', // Warm gray
    },

    // Dark mode colors - Nature-Distilled deep forest
    dark: {
      bg: '#0B1C10',         // Deep forest green
      surface: '#0F2416',    // Elevated forest
      card: '#132E1A',       // Card surface
      border: '#1A3D22',     // Forest border
      textPrimary: '#F0EDE6', // Alabaster text
      textSecondary: '#8A9A8E', // Slate gray
    }
  },

  // Typography Scale
  typography: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    }
  },

  // Spacing Scale
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },

  // Border Radius
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.15)',
    glow: '0 0 25px rgba(0, 255, 48, 0.2)', // Neon green glow
  }
};

// Component Variants - Reusable style combinations
export const componentVariants = {
  button: {
    primary: 'bg-[#4ADE80] text-black hover:bg-[#22C55E] active:bg-[#16A34A] transition-colors font-semibold',
    secondary: 'bg-brand-surface border border-brand-border text-brand-text-primary hover:bg-brand-card transition-colors',
    ghost: 'bg-transparent text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface transition-colors',
    danger: 'bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-colors'
  },
  card: {
    default: 'bg-brand-surface border border-brand-border rounded-2xl',
    glass: 'bg-brand-surface/60 backdrop-blur-2xl border border-[#4ADE80]/10 rounded-2xl shadow-2xl',
    hover: 'hover:border-[#4ADE80]/30 transition-all',
    interactive: 'cursor-pointer hover:shadow-lg hover:border-[#4ADE80]/50 transition-all duration-200'
  },
  text: {
    heading: 'font-bold text-brand-text-primary tracking-tight',
    body: 'text-brand-text-primary',
    muted: 'text-brand-text-secondary',
    caption: 'text-brand-text-secondary/70 text-sm'
  }
};

export default theme;
