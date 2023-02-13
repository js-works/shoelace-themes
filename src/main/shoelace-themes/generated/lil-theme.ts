import { updateLuminance } from '../color-utils';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!! This file is auto-generated - do not modify it !!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// === exports =====================================================

export { colorShades, lilTheme, paletteColors, semanticColors, utilityStyles };

export type { Theme };

// === main ========================================================

const semanticColors = Object.freeze([
  'neutral',
  'primary',
  'success',
  'warning',
  'danger',
]);

const paletteColors = Object.freeze([
  'amber',
  'blue',
  'cyan',
  'emerald',
  'fuchsia',
  'gray',
  'green',
  'indigo',
  'lime',
  'orange',
  'pink',
  'purple',
  'red',
  'rose',
  'sky',
  'teal',
  'violet',
  'yellow',
]);

const colorShades = Object.freeze([
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
]);

const utilityStyles = `
  .sl-scroll-lock {
    padding-right: var(--sl-scroll-lock-size) !important;
    overflow: hidden !important;
  }
  
  .sl-toast-stack {
    position: fixed;
    top: 0;
    inset-inline-end: 0;
    z-index: var(--sl-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }
  
  .sl-toast-stack sl-alert {
    margin: var(--sl-spacing-medium);
  }
  
  .sl-toast-stack sl-alert::part(base) {
    box-shadow: var(--sl-shadow-large);
  }
`;

const lilTheme: Theme = <Theme>{
  'light': 'initial',
  'dark': ' ',
  // 'color-gray-50': '#F9F9F9',
  // 'color-gray-100': '#F4F4F5',
  // 'color-gray-200': '#E4E4E7',
  // 'color-gray-300': '#D4D4D8',
  // 'color-gray-400': '#A1A1AA',
  'color-gray-500': '#71717A',
  // 'color-gray-600': '#52525B',
  // 'color-gray-700': '#3F3F46',
  // 'color-gray-800': '#27272A',
  // 'color-gray-900': '#18181B',
  // 'color-gray-950': '#131316',
  // 'color-red-50': '#FEF2F2',
  // 'color-red-100': '#FEE2E2',
  // 'color-red-200': '#FECACA',
  // 'color-red-300': '#FCA5A5',
  // 'color-red-400': '#F87171',
  'color-red-500': '#EF4444',
  // 'color-red-600': '#DC2626',
  // 'color-red-700': '#B91C1C',
  // 'color-red-800': '#991B1B',
  // 'color-red-900': '#7F1D1D',
  // 'color-red-950': '#501414',
  // 'color-orange-50': '#FFF7ED',
  // 'color-orange-100': '#FFEDD5',
  // 'color-orange-200': '#FED7AA',
  // 'color-orange-300': '#FDBA74',
  // 'color-orange-400': '#FB923C',
  'color-orange-500': '#F97316',
  // 'color-orange-600': '#EA580C',
  // 'color-orange-700': '#C2410C',
  // 'color-orange-800': '#9A3412',
  // 'color-orange-900': '#7C2D12',
  // 'color-orange-950': '#52200F',
  // 'color-amber-50': '#FFFBEB',
  // 'color-amber-100': '#FEF3C7',
  // 'color-amber-200': '#FDE68A',
  // 'color-amber-300': '#FCD34D',
  // 'color-amber-400': '#FBBF24',
  'color-amber-500': '#F59E0B',
  // 'color-amber-600': '#D97706',
  // 'color-amber-700': '#B45309',
  // 'color-amber-800': '#92400E',
  // 'color-amber-900': '#78350F',
  // 'color-amber-950': '#4A230B',
  // 'color-yellow-50': '#FEFCE8',
  // 'color-yellow-100': '#FEF9C3',
  // 'color-yellow-200': '#FEF08A',
  // 'color-yellow-300': '#FDE047',
  // 'color-yellow-400': '#FACC15',
  'color-yellow-500': '#EAB308',
  // 'color-yellow-600': '#CA8A04',
  // 'color-yellow-700': '#A16207',
  // 'color-yellow-800': '#854D0E',
  // 'color-yellow-900': '#713F12',
  // 'color-yellow-950': '#3C260B',
  // 'color-lime-50': '#F7FEE7',
  // 'color-lime-100': '#ECFCCB',
  // 'color-lime-200': '#D9F99D',
  // 'color-lime-300': '#BEF264',
  // 'color-lime-400': '#A3E635',
  'color-lime-500': '#84CC16',
  // 'color-lime-600': '#65A30D',
  // 'color-lime-700': '#4D7C0F',
  // 'color-lime-800': '#3F6212',
  // 'color-lime-900': '#365314',
  // 'color-lime-950': '#26390E',
  // 'color-green-50': '#F0FDF4',
  // 'color-green-100': '#DCFCE7',
  // 'color-green-200': '#BBF7D0',
  // 'color-green-300': '#86EFAC',
  // 'color-green-400': '#4ADE80',
  'color-green-500': '#22C55E',
  // 'color-green-600': '#16A34A',
  // 'color-green-700': '#15803D',
  // 'color-green-800': '#166534',
  // 'color-green-900': '#14532D',
  // 'color-green-950': '#0C311B',
  // 'color-emerald-50': '#ECFDF5',
  // 'color-emerald-100': '#D1FAE5',
  // 'color-emerald-200': '#A7F3D0',
  // 'color-emerald-300': '#6EE7B7',
  // 'color-emerald-400': '#34D399',
  'color-emerald-500': '#10B981',
  // 'color-emerald-600': '#059669',
  // 'color-emerald-700': '#047857',
  // 'color-emerald-800': '#065F46',
  // 'color-emerald-900': '#064E3B',
  // 'color-emerald-950': '#032D22',
  // 'color-teal-50': '#F0FDFA',
  // 'color-teal-100': '#CCFBF1',
  // 'color-teal-200': '#99F6E4',
  // 'color-teal-300': '#5EEAD4',
  // 'color-teal-400': '#2DD4BF',
  'color-teal-500': '#14B8A6',
  // 'color-teal-600': '#0D9488',
  // 'color-teal-700': '#0F766E',
  // 'color-teal-800': '#115E59',
  // 'color-teal-900': '#134E4A',
  // 'color-teal-950': '#0C2E2C',
  // 'color-cyan-50': '#ECFEFF',
  // 'color-cyan-100': '#CFFAFE',
  // 'color-cyan-200': '#A5F3FC',
  // 'color-cyan-300': '#67E8F9',
  // 'color-cyan-400': '#22D3EE',
  'color-cyan-500': '#06B6D4',
  // 'color-cyan-600': '#0891B2',
  // 'color-cyan-700': '#0E7490',
  // 'color-cyan-800': '#155E75',
  // 'color-cyan-900': '#164E63',
  // 'color-cyan-950': '#103442',
  // 'color-sky-50': '#F0F9FF',
  // 'color-sky-100': '#E0F2FE',
  // 'color-sky-200': '#BAE6FD',
  // 'color-sky-300': '#7DD3FC',
  // 'color-sky-400': '#38BDF8',
  'color-sky-500': '#0EA5E9',
  // 'color-sky-600': '#0284C7',
  // 'color-sky-700': '#0369A1',
  // 'color-sky-800': '#075985',
  // 'color-sky-900': '#0C4A6E',
  // 'color-sky-950': '#0B3249',
  // 'color-blue-50': '#EFF6FF',
  // 'color-blue-100': '#DBEAFE',
  // 'color-blue-200': '#BFDBFE',
  // 'color-blue-300': '#93C5FD',
  // 'color-blue-400': '#60A5FA',
  'color-blue-500': '#3B82F6',
  // 'color-blue-600': '#2563EB',
  // 'color-blue-700': '#1D4ED8',
  // 'color-blue-800': '#1E40AF',
  // 'color-blue-900': '#1E3A8A',
  // 'color-blue-950': '#152149',
  // 'color-indigo-50': '#EEF2FF',
  // 'color-indigo-100': '#E0E7FF',
  // 'color-indigo-200': '#C7D2FE',
  // 'color-indigo-300': '#A5B4FC',
  // 'color-indigo-400': '#818CF8',
  'color-indigo-500': '#6366F1',
  // 'color-indigo-600': '#4F46E5',
  // 'color-indigo-700': '#4338CA',
  // 'color-indigo-800': '#3730A3',
  // 'color-indigo-900': '#312E81',
  // 'color-indigo-950': '#242154',
  // 'color-violet-50': '#F5F3FF',
  // 'color-violet-100': '#EDE9FE',
  // 'color-violet-200': '#DDD6FE',
  // 'color-violet-300': '#C4B5FD',
  // 'color-violet-400': '#A78BFA',
  'color-violet-500': '#8B5CF6',
  // 'color-violet-600': '#7C3AED',
  // 'color-violet-700': '#6D28D9',
  // 'color-violet-800': '#5B21B6',
  // 'color-violet-900': '#4C1D95',
  // 'color-violet-950': '#311558',
  // 'color-purple-50': '#FAF5FF',
  // 'color-purple-100': '#F3E8FF',
  // 'color-purple-200': '#E9D5FF',
  // 'color-purple-300': '#D8B4FE',
  // 'color-purple-400': '#C084FC',
  'color-purple-500': '#A855F7',
  // 'color-purple-600': '#9333EA',
  // 'color-purple-700': '#7E22CE',
  // 'color-purple-800': '#6B21A8',
  // 'color-purple-900': '#581C87',
  // 'color-purple-950': '#2F1143',
  // 'color-fuchsia-50': '#FDF4FF',
  // 'color-fuchsia-100': '#FAE8FF',
  // 'color-fuchsia-200': '#F5D0FE',
  // 'color-fuchsia-300': '#F0ABFC',
  // 'color-fuchsia-400': '#E879F9',
  'color-fuchsia-500': '#D946EF',
  // 'color-fuchsia-600': '#C026D3',
  // 'color-fuchsia-700': '#A21CAF',
  // 'color-fuchsia-800': '#86198F',
  // 'color-fuchsia-900': '#701A75',
  // 'color-fuchsia-950': '#38103A',
  // 'color-pink-50': '#FDF2F8',
  // 'color-pink-100': '#FCE7F3',
  // 'color-pink-200': '#FBCFE8',
  // 'color-pink-300': '#F9A8D4',
  // 'color-pink-400': '#F472B6',
  'color-pink-500': '#EC4899',
  // 'color-pink-600': '#DB2777',
  // 'color-pink-700': '#BE185D',
  // 'color-pink-800': '#9D174D',
  // 'color-pink-900': '#831843',
  // 'color-pink-950': '#430E23',
  // 'color-rose-50': '#FFF1F2',
  // 'color-rose-100': '#FFE4E6',
  // 'color-rose-200': '#FECDD3',
  // 'color-rose-300': '#FDA4AF',
  // 'color-rose-400': '#FB7185',
  'color-rose-500': '#F43F5E',
  // 'color-rose-600': '#E11D48',
  // 'color-rose-700': '#BE123C',
  // 'color-rose-800': '#9F1239',
  // 'color-rose-900': '#881337',
  // 'color-rose-950': '#4A0D20',
  // 'color-primary-50': '#F0F9FF',
  // 'color-primary-100': '#E0F2FE',
  // 'color-primary-200': '#BAE6FD',
  // 'color-primary-300': '#7DD3FC',
  // 'color-primary-400': '#38BDF8',
  'color-primary-500': '#0EA5E9',
  // 'color-primary-600': '#0284C7',
  // 'color-primary-700': '#0369A1',
  // 'color-primary-800': '#075985',
  // 'color-primary-900': '#0C4A6E',
  // 'color-primary-950': '#0B3249',
  // 'color-success-50': '#F0FDF4',
  // 'color-success-100': '#DCFCE7',
  // 'color-success-200': '#BBF7D0',
  // 'color-success-300': '#86EFAC',
  // 'color-success-400': '#4ADE80',
  'color-success-500': '#22C55E',
  // 'color-success-600': '#16A34A',
  // 'color-success-700': '#15803D',
  // 'color-success-800': '#166534',
  // 'color-success-900': '#14532D',
  // 'color-success-950': '#0C311B',
  // 'color-warning-50': '#FFFBEB',
  // 'color-warning-100': '#FEF3C7',
  // 'color-warning-200': '#FDE68A',
  // 'color-warning-300': '#FCD34D',
  // 'color-warning-400': '#FBBF24',
  'color-warning-500': '#F59E0B',
  // 'color-warning-600': '#D97706',
  // 'color-warning-700': '#B45309',
  // 'color-warning-800': '#92400E',
  // 'color-warning-900': '#78350F',
  // 'color-warning-950': '#4A230B',
  // 'color-danger-50': '#FEF2F2',
  // 'color-danger-100': '#FEE2E2',
  // 'color-danger-200': '#FECACA',
  // 'color-danger-300': '#FCA5A5',
  // 'color-danger-400': '#F87171',
  'color-danger-500': '#EF4444',
  // 'color-danger-600': '#DC2626',
  // 'color-danger-700': '#B91C1C',
  // 'color-danger-800': '#991B1B',
  // 'color-danger-900': '#7F1D1D',
  // 'color-danger-950': '#501414',
  'color-neutral-50': '#F9F9F9',
  'color-neutral-100': '#F4F4F5',
  'color-neutral-200': '#E4E4E7',
  'color-neutral-300': '#D4D4D8',
  'color-neutral-400': '#A1A1AA',
  'color-neutral-500': '#71717A',
  'color-neutral-600': '#52525B',
  'color-neutral-700': '#3F3F46',
  'color-neutral-800': '#27272A',
  'color-neutral-900': '#18181B',
  'color-neutral-950': '#131316',
  'color-neutral-0': '#FFFFFF',
  'color-neutral-1000': '#000000',
  'border-radius-small': '0.1875rem',
  'border-radius-medium': '0.25rem',
  'border-radius-large': '0.5rem',
  'border-radius-x-large': '1rem',
  'border-radius-circle': '50%',
  'border-radius-pill': '9999px',
  'shadow-x-small': '0 1px 2px hsl(240 3.8% 46.1% / 6%)',
  'shadow-small': '0 1px 2px hsl(240 3.8% 46.1% / 12%)',
  'shadow-medium': '0 2px 4px hsl(240 3.8% 46.1% / 12%)',
  'shadow-large': '0 2px 8px hsl(240 3.8% 46.1% / 12%)',
  'shadow-x-large': '0 4px 16px hsl(240 3.8% 46.1% / 12%)',
  'spacing-3x-small': '0.125rem',
  'spacing-2x-small': '0.25rem',
  'spacing-x-small': '0.5rem',
  'spacing-small': '0.75rem',
  'spacing-medium': '1rem',
  'spacing-large': '1.25rem',
  'spacing-x-large': '1.75rem',
  'spacing-2x-large': '2.25rem',
  'spacing-3x-large': '3rem',
  'spacing-4x-large': '4.5rem',
  'transition-x-slow': '1000ms',
  'transition-slow': '500ms',
  'transition-medium': '250ms',
  'transition-fast': '150ms',
  'transition-x-fast': '50ms',
  'font-mono': 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
  'font-sans':
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  'font-serif': 'Georgia, "Times New Roman", serif',
  'font-size-2x-small': '0.625rem',
  'font-size-x-small': '0.75rem',
  'font-size-small': '0.875rem',
  'font-size-medium': '1rem',
  'font-size-large': '1.25rem',
  'font-size-x-large': '1.5rem',
  'font-size-2x-large': '2.25rem',
  'font-size-3x-large': '3rem',
  'font-size-4x-large': '4.5rem',
  'font-weight-light': '300',
  'font-weight-normal': '400',
  'font-weight-semibold': '500',
  'font-weight-bold': '700',
  'letter-spacing-denser': '-0.03em',
  'letter-spacing-dense': '-0.015em',
  'letter-spacing-normal': 'normal',
  'letter-spacing-loose': '0.075em',
  'letter-spacing-looser': '0.15em',
  'line-height-denser': '1',
  'line-height-dense': '1.4',
  'line-height-normal': '1.8',
  'line-height-loose': '2.2',
  'line-height-looser': '2.6',
  'focus-ring-color': 'var(--sl-color-primary-600)',
  'focus-ring-style': 'solid',
  'focus-ring-width': '3px',
  'focus-ring':
    'var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-focus-ring-color)',
  'focus-ring-offset': '1px',
  'button-font-size-small': 'var(--sl-font-size-x-small)',
  'button-font-size-medium': 'var(--sl-font-size-small)',
  'button-font-size-large': 'var(--sl-font-size-medium)',
  'input-height-small': '1.875rem',
  'input-height-medium': '2.5rem',
  'input-height-large': '3.125rem',
  'input-background-color': 'var(--sl-color-neutral-0)',
  'input-background-color-hover': 'var(--sl-input-background-color)',
  'input-background-color-focus': 'var(--sl-input-background-color)',
  'input-background-color-disabled': 'var(--sl-color-neutral-100)',
  'input-border-color': 'var(--sl-color-neutral-300)',
  'input-border-color-hover': 'var(--sl-color-neutral-400)',
  'input-border-color-focus': 'var(--sl-color-primary-500)',
  'input-border-color-disabled': 'var(--sl-color-neutral-300)',
  'input-border-width': '1px',
  'input-required-content': '"*"',
  'input-required-content-offset': '-2px',
  'input-required-content-color': 'var(--sl-input-label-color)',
  'input-border-radius-small': 'var(--sl-border-radius-medium)',
  'input-border-radius-medium': 'var(--sl-border-radius-medium)',
  'input-border-radius-large': 'var(--sl-border-radius-medium)',
  'input-font-family': 'var(--sl-font-sans)',
  'input-font-weight': 'var(--sl-font-weight-normal)',
  'input-font-size-small': 'var(--sl-font-size-small)',
  'input-font-size-medium': 'var(--sl-font-size-medium)',
  'input-font-size-large': 'var(--sl-font-size-large)',
  'input-letter-spacing': 'var(--sl-letter-spacing-normal)',
  'input-color': 'var(--sl-color-neutral-700)',
  'input-color-hover': 'var(--sl-color-neutral-700)',
  'input-color-focus': 'var(--sl-color-neutral-700)',
  'input-color-disabled': 'var(--sl-color-neutral-900)',
  'input-icon-color': 'var(--sl-color-neutral-500)',
  'input-icon-color-hover': 'var(--sl-color-neutral-600)',
  'input-icon-color-focus': 'var(--sl-color-neutral-600)',
  'input-placeholder-color': 'var(--sl-color-neutral-500)',
  'input-placeholder-color-disabled': 'var(--sl-color-neutral-600)',
  'input-spacing-small': 'var(--sl-spacing-small)',
  'input-spacing-medium': 'var(--sl-spacing-medium)',
  'input-spacing-large': 'var(--sl-spacing-large)',
  'input-focus-ring-color': 'hsl(198.6 88.7% 48.4% / 40%)',
  'input-focus-ring-offset': '0',
  'input-filled-background-color': 'var(--sl-color-neutral-100)',
  'input-filled-background-color-hover': 'var(--sl-color-neutral-100)',
  'input-filled-background-color-focus': 'var(--sl-color-neutral-100)',
  'input-filled-background-color-disabled': 'var(--sl-color-neutral-100)',
  'input-filled-color': 'var(--sl-color-neutral-800)',
  'input-filled-color-hover': 'var(--sl-color-neutral-800)',
  'input-filled-color-focus': 'var(--sl-color-neutral-700)',
  'input-filled-color-disabled': 'var(--sl-color-neutral-800)',
  'input-label-font-size-small': 'var(--sl-font-size-small)',
  'input-label-font-size-medium': 'var(--sl-font-size-medium)',
  'input-label-font-size-large': 'var(--sl-font-size-large)',
  'input-label-color': 'inherit',
  'input-help-text-font-size-small': 'var(--sl-font-size-x-small)',
  'input-help-text-font-size-medium': 'var(--sl-font-size-small)',
  'input-help-text-font-size-large': 'var(--sl-font-size-medium)',
  'input-help-text-color': 'var(--sl-color-neutral-500)',
  'toggle-size-small': '0.875rem',
  'toggle-size-medium': '1.125rem',
  'toggle-size-large': '1.375rem',
  'overlay-background-color': 'hsl(240 3.8% 46.1% / 33%)',
  'panel-background-color': 'var(--sl-color-neutral-0)',
  'panel-border-color': 'var(--sl-color-neutral-200)',
  'panel-border-width': '1px',
  'tooltip-border-radius': 'var(--sl-border-radius-medium)',
  'tooltip-background-color': 'var(--sl-color-neutral-800)',
  'tooltip-color': 'var(--sl-color-neutral-0)',
  'tooltip-font-family': 'var(--sl-font-sans)',
  'tooltip-font-weight': 'var(--sl-font-weight-normal)',
  'tooltip-font-size': 'var(--sl-font-size-small)',
  'tooltip-line-height': 'var(--sl-line-height-dense)',
  'tooltip-padding': 'var(--sl-spacing-2x-small) var(--sl-spacing-x-small)',
  'tooltip-arrow-size': '6px',
  'z-index-drawer': '700',
  'z-index-dialog': '800',
  'z-index-dropdown': '900',
  'z-index-toast': '950',
  'z-index-tooltip': '1000',
};

// Calculate and overwrite or add color values

const luminancesLight = [
  0.91, 0.81, 0.68, 0.5, 0.33, 0.23, 0.17, 0.11, 0.08, 0.05, 0.02,
];

[...semanticColors, ...paletteColors].forEach((color) => {
  if (color !== 'neutral') {
    const hex = lilTheme[`color-${color}-500` as keyof Theme];

    colorShades.forEach((shade, shadeIdx) => {
      const newHex = updateLuminance(hex, luminancesLight[shadeIdx], 1e-2);

      lilTheme[`color-${color}-${shade}` as keyof Theme] = newHex;
    });
  }
});

Object.freeze(lilTheme);

// === types =========================================================

type Theme = {
  'light': string;
  'dark': string;
  'color-gray-50': string;
  'color-gray-100': string;
  'color-gray-200': string;
  'color-gray-300': string;
  'color-gray-400': string;
  'color-gray-500': string;
  'color-gray-600': string;
  'color-gray-700': string;
  'color-gray-800': string;
  'color-gray-900': string;
  'color-gray-950': string;
  'color-red-50': string;
  'color-red-100': string;
  'color-red-200': string;
  'color-red-300': string;
  'color-red-400': string;
  'color-red-500': string;
  'color-red-600': string;
  'color-red-700': string;
  'color-red-800': string;
  'color-red-900': string;
  'color-red-950': string;
  'color-orange-50': string;
  'color-orange-100': string;
  'color-orange-200': string;
  'color-orange-300': string;
  'color-orange-400': string;
  'color-orange-500': string;
  'color-orange-600': string;
  'color-orange-700': string;
  'color-orange-800': string;
  'color-orange-900': string;
  'color-orange-950': string;
  'color-amber-50': string;
  'color-amber-100': string;
  'color-amber-200': string;
  'color-amber-300': string;
  'color-amber-400': string;
  'color-amber-500': string;
  'color-amber-600': string;
  'color-amber-700': string;
  'color-amber-800': string;
  'color-amber-900': string;
  'color-amber-950': string;
  'color-yellow-50': string;
  'color-yellow-100': string;
  'color-yellow-200': string;
  'color-yellow-300': string;
  'color-yellow-400': string;
  'color-yellow-500': string;
  'color-yellow-600': string;
  'color-yellow-700': string;
  'color-yellow-800': string;
  'color-yellow-900': string;
  'color-yellow-950': string;
  'color-lime-50': string;
  'color-lime-100': string;
  'color-lime-200': string;
  'color-lime-300': string;
  'color-lime-400': string;
  'color-lime-500': string;
  'color-lime-600': string;
  'color-lime-700': string;
  'color-lime-800': string;
  'color-lime-900': string;
  'color-lime-950': string;
  'color-green-50': string;
  'color-green-100': string;
  'color-green-200': string;
  'color-green-300': string;
  'color-green-400': string;
  'color-green-500': string;
  'color-green-600': string;
  'color-green-700': string;
  'color-green-800': string;
  'color-green-900': string;
  'color-green-950': string;
  'color-emerald-50': string;
  'color-emerald-100': string;
  'color-emerald-200': string;
  'color-emerald-300': string;
  'color-emerald-400': string;
  'color-emerald-500': string;
  'color-emerald-600': string;
  'color-emerald-700': string;
  'color-emerald-800': string;
  'color-emerald-900': string;
  'color-emerald-950': string;
  'color-teal-50': string;
  'color-teal-100': string;
  'color-teal-200': string;
  'color-teal-300': string;
  'color-teal-400': string;
  'color-teal-500': string;
  'color-teal-600': string;
  'color-teal-700': string;
  'color-teal-800': string;
  'color-teal-900': string;
  'color-teal-950': string;
  'color-cyan-50': string;
  'color-cyan-100': string;
  'color-cyan-200': string;
  'color-cyan-300': string;
  'color-cyan-400': string;
  'color-cyan-500': string;
  'color-cyan-600': string;
  'color-cyan-700': string;
  'color-cyan-800': string;
  'color-cyan-900': string;
  'color-cyan-950': string;
  'color-sky-50': string;
  'color-sky-100': string;
  'color-sky-200': string;
  'color-sky-300': string;
  'color-sky-400': string;
  'color-sky-500': string;
  'color-sky-600': string;
  'color-sky-700': string;
  'color-sky-800': string;
  'color-sky-900': string;
  'color-sky-950': string;
  'color-blue-50': string;
  'color-blue-100': string;
  'color-blue-200': string;
  'color-blue-300': string;
  'color-blue-400': string;
  'color-blue-500': string;
  'color-blue-600': string;
  'color-blue-700': string;
  'color-blue-800': string;
  'color-blue-900': string;
  'color-blue-950': string;
  'color-indigo-50': string;
  'color-indigo-100': string;
  'color-indigo-200': string;
  'color-indigo-300': string;
  'color-indigo-400': string;
  'color-indigo-500': string;
  'color-indigo-600': string;
  'color-indigo-700': string;
  'color-indigo-800': string;
  'color-indigo-900': string;
  'color-indigo-950': string;
  'color-violet-50': string;
  'color-violet-100': string;
  'color-violet-200': string;
  'color-violet-300': string;
  'color-violet-400': string;
  'color-violet-500': string;
  'color-violet-600': string;
  'color-violet-700': string;
  'color-violet-800': string;
  'color-violet-900': string;
  'color-violet-950': string;
  'color-purple-50': string;
  'color-purple-100': string;
  'color-purple-200': string;
  'color-purple-300': string;
  'color-purple-400': string;
  'color-purple-500': string;
  'color-purple-600': string;
  'color-purple-700': string;
  'color-purple-800': string;
  'color-purple-900': string;
  'color-purple-950': string;
  'color-fuchsia-50': string;
  'color-fuchsia-100': string;
  'color-fuchsia-200': string;
  'color-fuchsia-300': string;
  'color-fuchsia-400': string;
  'color-fuchsia-500': string;
  'color-fuchsia-600': string;
  'color-fuchsia-700': string;
  'color-fuchsia-800': string;
  'color-fuchsia-900': string;
  'color-fuchsia-950': string;
  'color-pink-50': string;
  'color-pink-100': string;
  'color-pink-200': string;
  'color-pink-300': string;
  'color-pink-400': string;
  'color-pink-500': string;
  'color-pink-600': string;
  'color-pink-700': string;
  'color-pink-800': string;
  'color-pink-900': string;
  'color-pink-950': string;
  'color-rose-50': string;
  'color-rose-100': string;
  'color-rose-200': string;
  'color-rose-300': string;
  'color-rose-400': string;
  'color-rose-500': string;
  'color-rose-600': string;
  'color-rose-700': string;
  'color-rose-800': string;
  'color-rose-900': string;
  'color-rose-950': string;
  'color-primary-50': string;
  'color-primary-100': string;
  'color-primary-200': string;
  'color-primary-300': string;
  'color-primary-400': string;
  'color-primary-500': string;
  'color-primary-600': string;
  'color-primary-700': string;
  'color-primary-800': string;
  'color-primary-900': string;
  'color-primary-950': string;
  'color-success-50': string;
  'color-success-100': string;
  'color-success-200': string;
  'color-success-300': string;
  'color-success-400': string;
  'color-success-500': string;
  'color-success-600': string;
  'color-success-700': string;
  'color-success-800': string;
  'color-success-900': string;
  'color-success-950': string;
  'color-warning-50': string;
  'color-warning-100': string;
  'color-warning-200': string;
  'color-warning-300': string;
  'color-warning-400': string;
  'color-warning-500': string;
  'color-warning-600': string;
  'color-warning-700': string;
  'color-warning-800': string;
  'color-warning-900': string;
  'color-warning-950': string;
  'color-danger-50': string;
  'color-danger-100': string;
  'color-danger-200': string;
  'color-danger-300': string;
  'color-danger-400': string;
  'color-danger-500': string;
  'color-danger-600': string;
  'color-danger-700': string;
  'color-danger-800': string;
  'color-danger-900': string;
  'color-danger-950': string;
  'color-neutral-50': string;
  'color-neutral-100': string;
  'color-neutral-200': string;
  'color-neutral-300': string;
  'color-neutral-400': string;
  'color-neutral-500': string;
  'color-neutral-600': string;
  'color-neutral-700': string;
  'color-neutral-800': string;
  'color-neutral-900': string;
  'color-neutral-950': string;
  'color-neutral-0': string;
  'color-neutral-1000': string;
  'border-radius-small': string;
  'border-radius-medium': string;
  'border-radius-large': string;
  'border-radius-x-large': string;
  'border-radius-circle': string;
  'border-radius-pill': string;
  'shadow-x-small': string;
  'shadow-small': string;
  'shadow-medium': string;
  'shadow-large': string;
  'shadow-x-large': string;
  'spacing-3x-small': string;
  'spacing-2x-small': string;
  'spacing-x-small': string;
  'spacing-small': string;
  'spacing-medium': string;
  'spacing-large': string;
  'spacing-x-large': string;
  'spacing-2x-large': string;
  'spacing-3x-large': string;
  'spacing-4x-large': string;
  'transition-x-slow': string;
  'transition-slow': string;
  'transition-medium': string;
  'transition-fast': string;
  'transition-x-fast': string;
  'font-mono': string;
  'font-sans': string;
  'font-serif': string;
  'font-size-2x-small': string;
  'font-size-x-small': string;
  'font-size-small': string;
  'font-size-medium': string;
  'font-size-large': string;
  'font-size-x-large': string;
  'font-size-2x-large': string;
  'font-size-3x-large': string;
  'font-size-4x-large': string;
  'font-weight-light': string;
  'font-weight-normal': string;
  'font-weight-semibold': string;
  'font-weight-bold': string;
  'letter-spacing-denser': string;
  'letter-spacing-dense': string;
  'letter-spacing-normal': string;
  'letter-spacing-loose': string;
  'letter-spacing-looser': string;
  'line-height-denser': string;
  'line-height-dense': string;
  'line-height-normal': string;
  'line-height-loose': string;
  'line-height-looser': string;
  'focus-ring-color': string;
  'focus-ring-style': string;
  'focus-ring-width': string;
  'focus-ring': string;
  'focus-ring-offset': string;
  'button-font-size-small': string;
  'button-font-size-medium': string;
  'button-font-size-large': string;
  'input-height-small': string;
  'input-height-medium': string;
  'input-height-large': string;
  'input-background-color': string;
  'input-background-color-hover': string;
  'input-background-color-focus': string;
  'input-background-color-disabled': string;
  'input-border-color': string;
  'input-border-color-hover': string;
  'input-border-color-focus': string;
  'input-border-color-disabled': string;
  'input-border-width': string;
  'input-required-content': string;
  'input-required-content-offset': string;
  'input-required-content-color': string;
  'input-border-radius-small': string;
  'input-border-radius-medium': string;
  'input-border-radius-large': string;
  'input-font-family': string;
  'input-font-weight': string;
  'input-font-size-small': string;
  'input-font-size-medium': string;
  'input-font-size-large': string;
  'input-letter-spacing': string;
  'input-color': string;
  'input-color-hover': string;
  'input-color-focus': string;
  'input-color-disabled': string;
  'input-icon-color': string;
  'input-icon-color-hover': string;
  'input-icon-color-focus': string;
  'input-placeholder-color': string;
  'input-placeholder-color-disabled': string;
  'input-spacing-small': string;
  'input-spacing-medium': string;
  'input-spacing-large': string;
  'input-focus-ring-color': string;
  'input-focus-ring-offset': string;
  'input-filled-background-color': string;
  'input-filled-background-color-hover': string;
  'input-filled-background-color-focus': string;
  'input-filled-background-color-disabled': string;
  'input-filled-color': string;
  'input-filled-color-hover': string;
  'input-filled-color-focus': string;
  'input-filled-color-disabled': string;
  'input-label-font-size-small': string;
  'input-label-font-size-medium': string;
  'input-label-font-size-large': string;
  'input-label-color': string;
  'input-help-text-font-size-small': string;
  'input-help-text-font-size-medium': string;
  'input-help-text-font-size-large': string;
  'input-help-text-color': string;
  'toggle-size-small': string;
  'toggle-size-medium': string;
  'toggle-size-large': string;
  'overlay-background-color': string;
  'panel-background-color': string;
  'panel-border-color': string;
  'panel-border-width': string;
  'tooltip-border-radius': string;
  'tooltip-background-color': string;
  'tooltip-color': string;
  'tooltip-font-family': string;
  'tooltip-font-weight': string;
  'tooltip-font-size': string;
  'tooltip-line-height': string;
  'tooltip-padding': string;
  'tooltip-arrow-size': string;
  'z-index-drawer': string;
  'z-index-dialog': string;
  'z-index-dropdown': string;
  'z-index-toast': string;
  'z-index-tooltip': string;
};
