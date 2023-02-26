// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!! This file is auto-generated - do not modify it !!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// === exports =====================================================

export { colorShades, paletteColors, semanticColors, utilityStyles };

export type { Theme };

// === meta data ===================================================

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

// === types =======================================================

type Theme = Readonly<{
  'light': 'initial';
  'dark': ' ';
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
}>;
