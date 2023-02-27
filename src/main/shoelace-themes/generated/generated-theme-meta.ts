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

interface Theme {
  readonly 'light': 'initial' | ' ';
  readonly 'dark': ' ' | 'initial';
  readonly 'color-gray-50': string;
  readonly 'color-gray-100': string;
  readonly 'color-gray-200': string;
  readonly 'color-gray-300': string;
  readonly 'color-gray-400': string;
  readonly 'color-gray-500': string;
  readonly 'color-gray-600': string;
  readonly 'color-gray-700': string;
  readonly 'color-gray-800': string;
  readonly 'color-gray-900': string;
  readonly 'color-gray-950': string;
  readonly 'color-red-50': string;
  readonly 'color-red-100': string;
  readonly 'color-red-200': string;
  readonly 'color-red-300': string;
  readonly 'color-red-400': string;
  readonly 'color-red-500': string;
  readonly 'color-red-600': string;
  readonly 'color-red-700': string;
  readonly 'color-red-800': string;
  readonly 'color-red-900': string;
  readonly 'color-red-950': string;
  readonly 'color-orange-50': string;
  readonly 'color-orange-100': string;
  readonly 'color-orange-200': string;
  readonly 'color-orange-300': string;
  readonly 'color-orange-400': string;
  readonly 'color-orange-500': string;
  readonly 'color-orange-600': string;
  readonly 'color-orange-700': string;
  readonly 'color-orange-800': string;
  readonly 'color-orange-900': string;
  readonly 'color-orange-950': string;
  readonly 'color-amber-50': string;
  readonly 'color-amber-100': string;
  readonly 'color-amber-200': string;
  readonly 'color-amber-300': string;
  readonly 'color-amber-400': string;
  readonly 'color-amber-500': string;
  readonly 'color-amber-600': string;
  readonly 'color-amber-700': string;
  readonly 'color-amber-800': string;
  readonly 'color-amber-900': string;
  readonly 'color-amber-950': string;
  readonly 'color-yellow-50': string;
  readonly 'color-yellow-100': string;
  readonly 'color-yellow-200': string;
  readonly 'color-yellow-300': string;
  readonly 'color-yellow-400': string;
  readonly 'color-yellow-500': string;
  readonly 'color-yellow-600': string;
  readonly 'color-yellow-700': string;
  readonly 'color-yellow-800': string;
  readonly 'color-yellow-900': string;
  readonly 'color-yellow-950': string;
  readonly 'color-lime-50': string;
  readonly 'color-lime-100': string;
  readonly 'color-lime-200': string;
  readonly 'color-lime-300': string;
  readonly 'color-lime-400': string;
  readonly 'color-lime-500': string;
  readonly 'color-lime-600': string;
  readonly 'color-lime-700': string;
  readonly 'color-lime-800': string;
  readonly 'color-lime-900': string;
  readonly 'color-lime-950': string;
  readonly 'color-green-50': string;
  readonly 'color-green-100': string;
  readonly 'color-green-200': string;
  readonly 'color-green-300': string;
  readonly 'color-green-400': string;
  readonly 'color-green-500': string;
  readonly 'color-green-600': string;
  readonly 'color-green-700': string;
  readonly 'color-green-800': string;
  readonly 'color-green-900': string;
  readonly 'color-green-950': string;
  readonly 'color-emerald-50': string;
  readonly 'color-emerald-100': string;
  readonly 'color-emerald-200': string;
  readonly 'color-emerald-300': string;
  readonly 'color-emerald-400': string;
  readonly 'color-emerald-500': string;
  readonly 'color-emerald-600': string;
  readonly 'color-emerald-700': string;
  readonly 'color-emerald-800': string;
  readonly 'color-emerald-900': string;
  readonly 'color-emerald-950': string;
  readonly 'color-teal-50': string;
  readonly 'color-teal-100': string;
  readonly 'color-teal-200': string;
  readonly 'color-teal-300': string;
  readonly 'color-teal-400': string;
  readonly 'color-teal-500': string;
  readonly 'color-teal-600': string;
  readonly 'color-teal-700': string;
  readonly 'color-teal-800': string;
  readonly 'color-teal-900': string;
  readonly 'color-teal-950': string;
  readonly 'color-cyan-50': string;
  readonly 'color-cyan-100': string;
  readonly 'color-cyan-200': string;
  readonly 'color-cyan-300': string;
  readonly 'color-cyan-400': string;
  readonly 'color-cyan-500': string;
  readonly 'color-cyan-600': string;
  readonly 'color-cyan-700': string;
  readonly 'color-cyan-800': string;
  readonly 'color-cyan-900': string;
  readonly 'color-cyan-950': string;
  readonly 'color-sky-50': string;
  readonly 'color-sky-100': string;
  readonly 'color-sky-200': string;
  readonly 'color-sky-300': string;
  readonly 'color-sky-400': string;
  readonly 'color-sky-500': string;
  readonly 'color-sky-600': string;
  readonly 'color-sky-700': string;
  readonly 'color-sky-800': string;
  readonly 'color-sky-900': string;
  readonly 'color-sky-950': string;
  readonly 'color-blue-50': string;
  readonly 'color-blue-100': string;
  readonly 'color-blue-200': string;
  readonly 'color-blue-300': string;
  readonly 'color-blue-400': string;
  readonly 'color-blue-500': string;
  readonly 'color-blue-600': string;
  readonly 'color-blue-700': string;
  readonly 'color-blue-800': string;
  readonly 'color-blue-900': string;
  readonly 'color-blue-950': string;
  readonly 'color-indigo-50': string;
  readonly 'color-indigo-100': string;
  readonly 'color-indigo-200': string;
  readonly 'color-indigo-300': string;
  readonly 'color-indigo-400': string;
  readonly 'color-indigo-500': string;
  readonly 'color-indigo-600': string;
  readonly 'color-indigo-700': string;
  readonly 'color-indigo-800': string;
  readonly 'color-indigo-900': string;
  readonly 'color-indigo-950': string;
  readonly 'color-violet-50': string;
  readonly 'color-violet-100': string;
  readonly 'color-violet-200': string;
  readonly 'color-violet-300': string;
  readonly 'color-violet-400': string;
  readonly 'color-violet-500': string;
  readonly 'color-violet-600': string;
  readonly 'color-violet-700': string;
  readonly 'color-violet-800': string;
  readonly 'color-violet-900': string;
  readonly 'color-violet-950': string;
  readonly 'color-purple-50': string;
  readonly 'color-purple-100': string;
  readonly 'color-purple-200': string;
  readonly 'color-purple-300': string;
  readonly 'color-purple-400': string;
  readonly 'color-purple-500': string;
  readonly 'color-purple-600': string;
  readonly 'color-purple-700': string;
  readonly 'color-purple-800': string;
  readonly 'color-purple-900': string;
  readonly 'color-purple-950': string;
  readonly 'color-fuchsia-50': string;
  readonly 'color-fuchsia-100': string;
  readonly 'color-fuchsia-200': string;
  readonly 'color-fuchsia-300': string;
  readonly 'color-fuchsia-400': string;
  readonly 'color-fuchsia-500': string;
  readonly 'color-fuchsia-600': string;
  readonly 'color-fuchsia-700': string;
  readonly 'color-fuchsia-800': string;
  readonly 'color-fuchsia-900': string;
  readonly 'color-fuchsia-950': string;
  readonly 'color-pink-50': string;
  readonly 'color-pink-100': string;
  readonly 'color-pink-200': string;
  readonly 'color-pink-300': string;
  readonly 'color-pink-400': string;
  readonly 'color-pink-500': string;
  readonly 'color-pink-600': string;
  readonly 'color-pink-700': string;
  readonly 'color-pink-800': string;
  readonly 'color-pink-900': string;
  readonly 'color-pink-950': string;
  readonly 'color-rose-50': string;
  readonly 'color-rose-100': string;
  readonly 'color-rose-200': string;
  readonly 'color-rose-300': string;
  readonly 'color-rose-400': string;
  readonly 'color-rose-500': string;
  readonly 'color-rose-600': string;
  readonly 'color-rose-700': string;
  readonly 'color-rose-800': string;
  readonly 'color-rose-900': string;
  readonly 'color-rose-950': string;
  readonly 'color-primary-50': string;
  readonly 'color-primary-100': string;
  readonly 'color-primary-200': string;
  readonly 'color-primary-300': string;
  readonly 'color-primary-400': string;
  readonly 'color-primary-500': string;
  readonly 'color-primary-600': string;
  readonly 'color-primary-700': string;
  readonly 'color-primary-800': string;
  readonly 'color-primary-900': string;
  readonly 'color-primary-950': string;
  readonly 'color-success-50': string;
  readonly 'color-success-100': string;
  readonly 'color-success-200': string;
  readonly 'color-success-300': string;
  readonly 'color-success-400': string;
  readonly 'color-success-500': string;
  readonly 'color-success-600': string;
  readonly 'color-success-700': string;
  readonly 'color-success-800': string;
  readonly 'color-success-900': string;
  readonly 'color-success-950': string;
  readonly 'color-warning-50': string;
  readonly 'color-warning-100': string;
  readonly 'color-warning-200': string;
  readonly 'color-warning-300': string;
  readonly 'color-warning-400': string;
  readonly 'color-warning-500': string;
  readonly 'color-warning-600': string;
  readonly 'color-warning-700': string;
  readonly 'color-warning-800': string;
  readonly 'color-warning-900': string;
  readonly 'color-warning-950': string;
  readonly 'color-danger-50': string;
  readonly 'color-danger-100': string;
  readonly 'color-danger-200': string;
  readonly 'color-danger-300': string;
  readonly 'color-danger-400': string;
  readonly 'color-danger-500': string;
  readonly 'color-danger-600': string;
  readonly 'color-danger-700': string;
  readonly 'color-danger-800': string;
  readonly 'color-danger-900': string;
  readonly 'color-danger-950': string;
  readonly 'color-neutral-50': string;
  readonly 'color-neutral-100': string;
  readonly 'color-neutral-200': string;
  readonly 'color-neutral-300': string;
  readonly 'color-neutral-400': string;
  readonly 'color-neutral-500': string;
  readonly 'color-neutral-600': string;
  readonly 'color-neutral-700': string;
  readonly 'color-neutral-800': string;
  readonly 'color-neutral-900': string;
  readonly 'color-neutral-950': string;
  readonly 'color-neutral-0': string;
  readonly 'color-neutral-1000': string;
  readonly 'border-radius-small': string;
  readonly 'border-radius-medium': string;
  readonly 'border-radius-large': string;
  readonly 'border-radius-x-large': string;
  readonly 'border-radius-circle': string;
  readonly 'border-radius-pill': string;
  readonly 'shadow-x-small': string;
  readonly 'shadow-small': string;
  readonly 'shadow-medium': string;
  readonly 'shadow-large': string;
  readonly 'shadow-x-large': string;
  readonly 'spacing-3x-small': string;
  readonly 'spacing-2x-small': string;
  readonly 'spacing-x-small': string;
  readonly 'spacing-small': string;
  readonly 'spacing-medium': string;
  readonly 'spacing-large': string;
  readonly 'spacing-x-large': string;
  readonly 'spacing-2x-large': string;
  readonly 'spacing-3x-large': string;
  readonly 'spacing-4x-large': string;
  readonly 'transition-x-slow': string;
  readonly 'transition-slow': string;
  readonly 'transition-medium': string;
  readonly 'transition-fast': string;
  readonly 'transition-x-fast': string;
  readonly 'font-mono': string;
  readonly 'font-sans': string;
  readonly 'font-serif': string;
  readonly 'font-size-2x-small': string;
  readonly 'font-size-x-small': string;
  readonly 'font-size-small': string;
  readonly 'font-size-medium': string;
  readonly 'font-size-large': string;
  readonly 'font-size-x-large': string;
  readonly 'font-size-2x-large': string;
  readonly 'font-size-3x-large': string;
  readonly 'font-size-4x-large': string;
  readonly 'font-weight-light': string;
  readonly 'font-weight-normal': string;
  readonly 'font-weight-semibold': string;
  readonly 'font-weight-bold': string;
  readonly 'letter-spacing-denser': string;
  readonly 'letter-spacing-dense': string;
  readonly 'letter-spacing-normal': string;
  readonly 'letter-spacing-loose': string;
  readonly 'letter-spacing-looser': string;
  readonly 'line-height-denser': string;
  readonly 'line-height-dense': string;
  readonly 'line-height-normal': string;
  readonly 'line-height-loose': string;
  readonly 'line-height-looser': string;
  readonly 'focus-ring-color': string;
  readonly 'focus-ring-style': string;
  readonly 'focus-ring-width': string;
  readonly 'focus-ring': string;
  readonly 'focus-ring-offset': string;
  readonly 'button-font-size-small': string;
  readonly 'button-font-size-medium': string;
  readonly 'button-font-size-large': string;
  readonly 'input-height-small': string;
  readonly 'input-height-medium': string;
  readonly 'input-height-large': string;
  readonly 'input-background-color': string;
  readonly 'input-background-color-hover': string;
  readonly 'input-background-color-focus': string;
  readonly 'input-background-color-disabled': string;
  readonly 'input-border-color': string;
  readonly 'input-border-color-hover': string;
  readonly 'input-border-color-focus': string;
  readonly 'input-border-color-disabled': string;
  readonly 'input-border-width': string;
  readonly 'input-required-content': string;
  readonly 'input-required-content-offset': string;
  readonly 'input-required-content-color': string;
  readonly 'input-border-radius-small': string;
  readonly 'input-border-radius-medium': string;
  readonly 'input-border-radius-large': string;
  readonly 'input-font-family': string;
  readonly 'input-font-weight': string;
  readonly 'input-font-size-small': string;
  readonly 'input-font-size-medium': string;
  readonly 'input-font-size-large': string;
  readonly 'input-letter-spacing': string;
  readonly 'input-color': string;
  readonly 'input-color-hover': string;
  readonly 'input-color-focus': string;
  readonly 'input-color-disabled': string;
  readonly 'input-icon-color': string;
  readonly 'input-icon-color-hover': string;
  readonly 'input-icon-color-focus': string;
  readonly 'input-placeholder-color': string;
  readonly 'input-placeholder-color-disabled': string;
  readonly 'input-spacing-small': string;
  readonly 'input-spacing-medium': string;
  readonly 'input-spacing-large': string;
  readonly 'input-focus-ring-color': string;
  readonly 'input-focus-ring-offset': string;
  readonly 'input-filled-background-color': string;
  readonly 'input-filled-background-color-hover': string;
  readonly 'input-filled-background-color-focus': string;
  readonly 'input-filled-background-color-disabled': string;
  readonly 'input-filled-color': string;
  readonly 'input-filled-color-hover': string;
  readonly 'input-filled-color-focus': string;
  readonly 'input-filled-color-disabled': string;
  readonly 'input-label-font-size-small': string;
  readonly 'input-label-font-size-medium': string;
  readonly 'input-label-font-size-large': string;
  readonly 'input-label-color': string;
  readonly 'input-help-text-font-size-small': string;
  readonly 'input-help-text-font-size-medium': string;
  readonly 'input-help-text-font-size-large': string;
  readonly 'input-help-text-color': string;
  readonly 'toggle-size-small': string;
  readonly 'toggle-size-medium': string;
  readonly 'toggle-size-large': string;
  readonly 'overlay-background-color': string;
  readonly 'panel-background-color': string;
  readonly 'panel-border-color': string;
  readonly 'panel-border-width': string;
  readonly 'tooltip-border-radius': string;
  readonly 'tooltip-background-color': string;
  readonly 'tooltip-color': string;
  readonly 'tooltip-font-family': string;
  readonly 'tooltip-font-weight': string;
  readonly 'tooltip-font-size': string;
  readonly 'tooltip-line-height': string;
  readonly 'tooltip-padding': string;
  readonly 'tooltip-arrow-size': string;
  readonly 'z-index-drawer': string;
  readonly 'z-index-dialog': string;
  readonly 'z-index-dropdown': string;
  readonly 'z-index-toast': string;
  readonly 'z-index-tooltip': string;
}
