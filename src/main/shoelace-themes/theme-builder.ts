import type { Theme } from './themes';
import { modifyColors, modifyDark } from './theme-modifiers';
import type { ColorSetup } from './theme-modifiers';

// === exports =======================================================

export { ThemeBuilder };

// === types =========================================================

type NamedModifications = Record<string, Partial<Theme>>;

// === local helpers =================================================

const assign = <T, U>(obj: T, obj2: U): T & U =>
  Object.assign(obj as {}, obj2) as any;

const hasOwn = (obj: object, key: string) => Object.hasOwn(obj, key);
const freeze = <T extends object>(obj: T) => Object.freeze(obj);

// === ThemeBuilder ==================================================

function createBuilder(baseTheme: Theme) {
  const theme = { ...baseTheme };

  const addBuildAndApplyToFn = <T extends object>(obj: T) =>
    assign(obj, {
      build: () => freeze(theme),
      applyTo: <R>(fn: (theme: Theme) => R) => fn(freeze(theme))
    });

  const addDarkFn = <T>(obj: T) =>
    assign(obj, {
      dark() {
        assign(theme, modifyDark(theme));

        return addBuildAndApplyToFn({});
      }
    });

  const addVariantFn = <T>(obj: T) =>
    assign(obj, {
      variant: (variant: keyof typeof themeVariants) => {
        if (hasOwn(themeVariants, variant)) {
          assign(theme, themeVariants[variant]);
        }

        return addDarkFn(addBuildAndApplyToFn({}));
      }
    });

  const addSizeFn = <T>(obj: T) =>
    assign(obj, {
      size: (size: keyof typeof themeSizes) => {
        if (hasOwn(themeSizes, size)) {
          assign(theme, themeSizes[size]);
        }

        return addVariantFn(addDarkFn(addBuildAndApplyToFn({})));
      }
    });

  const addColorsFn = <T>(obj: T) =>
    assign(obj, {
      colors: (colors: keyof typeof colorSetups) => {
        if (hasOwn(colorSetups, colors)) {
          assign(theme, modifyColors(theme, colorSetups[colors]));
        }

        return addSizeFn(addVariantFn(addDarkFn(addBuildAndApplyToFn({}))));
      }
    });

  return addSizeFn(
    addColorsFn(addVariantFn(addDarkFn(addBuildAndApplyToFn({}))))
  );
}

const ThemeBuilder = Object.freeze({
  from: (baseTheme: Theme) => createBuilder(baseTheme)
});

// === theme sizes ===================================================

const themeSizes = {
  compact: {
    'font-size-medium': '0.92rem',
    'font-size-x-large': '1.5rem',
    'input-height-small': '1.85rem',
    'input-height-medium': '1.95rem',
    'input-height-large': '2.5rem'
  }
} satisfies NamedModifications;

// === theme variants ================================================

const themeVariants = {
  modern: {
    'font-sans':
      "'Open Sans', -apple-system, BlinkMacSystemFont, 'Lato', 'Libre Sans', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",

    'font-weight-semibold': '600',
    'border-radius-small': '0px',
    'border-radius-medium': '1px',
    'border-radius-large': '2px',
    'border-radius-x-large': '3px',

    'focus-ring-width': '1.5px',
    'input-focus-ring-color': 'var(--sl-color-primary-400)',
    'input-required-content-color': 'var(--sl-color-danger-800)',

    'input-border-color': 'var(--sl-color-neutral-400)',
    'input-border-color-hover': 'var(--sl-color-neutral-600)',
    'input-border-color-focus': 'var(--sl-color-primary-700)',

    'overlay-background-color': 'hsl(0 0% 0% / 55%)'
  }
} satisfies NamedModifications;

// === theme color setups ============================================

const colorSetups = {
  default: {
    primaryColor: '#1C73E8',
    // primaryColor: '#2899e2',
    //primaryColor: '#0077cB',
    dangerColor: '#f15f41'
  },

  blue: {
    primaryColor: '#00B0FF',
    dangerColor: '#f15f41'
  },

  orange: {
    primaryColor: '#ff7606'
  },

  teal: {
    primaryColor: '#008080'
  },

  // Error colors
  // #FFA6C9
  // #F77703
  // #FF6B53

  horizon: {
    primaryColor: '#71d9f2'
  },

  bostonBlue: {
    primaryColor: '#45B1E8',
    dangerColor: '#E34234'
  },

  pacificBlue: {
    primaryColor: '#0E94BB',
    dangerColor: '#ff5000'
  },

  violet: {
    primaryColor: '#B882ED'
  },

  cranberry: {
    primaryColor: '#DD5A8C'
  },

  turquoiseBlue: {
    primaryColor: '#47E3EB'
  },

  orchid: {
    primaryColor: '#BF68BD'
  },

  bootstrap: {
    primaryColor: '#0d6efd',
    successColor: '#198754',
    dangerColor: '#dc3545',
    warningColor: '#ffc107'
  },

  baseweb: {
    primaryColor: '#266EF1',
    dangerColor: '#F25238'
  },

  temp: {
    primaryColor: '#00586B'
    //primaryColor: '#2889e2' // baseui based
    //primaryColor: '#3366e2' // baseui based
    //primaryColor: '#3366cc' // baseui
    //primaryColor: '#0078d4' // fluentui
    //primaryColor: '#6595c4' // industrial

    //primaryColor: '#76D7EA' // +
    // primaryColor: '#6595c4' // bluish
    // primaryColor: '#c71d7c' // pink++
    //primaryColor: '#f2704e' // coral?
    //primaryColor: '#40a6ff' //
    //primaryColor: '#c05c5c' // indian red 2
    //primaryColor: '#8b008b' // +
    //primaryColor: '#b22222' //
    //primaryColor: '#cd5c5c' // indian red
    //primaryColor: '#00bbff' // default?
    //primaryColor: '#cd5c5c' //
    //primaryColor: '#a9ddff' //
    //primaryColor: '#dd1493' //
    //primaryColor: '#7FFFD4' // aquamarine
    //primaryColor: '#00FFFF' // aqua?
    //primaryColor: '#008B8B' // cyan
    //primaryColor: '#00CED1' // dark turquoise
    //primaryColor: '#008000' // green
    //primaryColor: '#008080' // teal
    //primaryColor: '#800080' // purple
    //primaryColor: '#DA70D6' // orchid ++
    //primaryColor: '#C71585' // violet red
    //primaryColor: '#BA55D3' // orchid
    //primaryColor: '#66CDAA' // aquamarine
    //primaryColor: '#FF69B4' // +
    //primaryColor: '#00BFFF' // sky blue
    //primaryColor: '#FF7F50' // coral
    //primaryColor: '#7EC0EE' //
    //primaryColor: '#F660AB' //
    //primaryColor: '#00bbff' //
    //primaryColor: '#9c36b5' //
    //primaryColor: '#4F84C4' // +
    //primaryColor: '#EA7E5D' // -
    //primaryColor: '#008b8b' // +
    //primaryColor: '#00bfff' //
    //primaryColor: '#5f9ea0' //
    //primaryColor: '#ff8c00' //
  },

  temp2: {
    primaryColor: '#ff746a'
  },

  skyBlue: {
    primaryColor: '#0ea5e9',
    dangerColor: '#e95420'
  },

  aquamarine: {
    primaryColor: '#7FFFD4'
  },

  coral: {
    primaryColor: '#ff7f50'
  },

  pink: {
    primaryColor: '#d24899'
  },

  turquoise: {
    primaryColor: '#40e0d0'
  },

  tomato: {
    primaryColor: '#ff6347'
  }
} satisfies Record<string, ColorSetup>;
