import type { Theme } from './themes';
import { modifyColors, modifyDark } from './theme-modifiers';
import type { ColorSetup } from './theme-modifiers';

// === exports =======================================================

export { ThemeBuilder };

// === types =========================================================

type NamedModifications = Record<string, Partial<Theme>>;

type Writable<T extends object> = {
  -readonly [K in keyof T]: T[K];
};

// === local helpers =================================================

const assign = <T, U>(obj: T, obj2: U): T & U =>
  Object.assign(obj as {}, obj2) as any;

const keys = (obj: object) => Object.keys(obj);
const hasOwn = (obj: object, key: string) => Object.hasOwn(obj, key);
const freeze = <T extends object>(obj: T) => Object.freeze(obj);

const colorKeyMap = {
  p: 'primary',
  s: 'success',
  w: 'warning',
  d: 'danger'
};

// === createBuilder =================================================

function createBuilder(baseTheme: Theme) {
  const theme: Theme = { ...baseTheme };

  const addBuildAndApplyToFn = <T extends object>(obj: T) =>
    assign(obj, {
      build: () => freeze(theme),
      applyTo: <R>(fn: (theme: Theme) => R) => fn(freeze(theme))
    });

  const addDarkFn = <T>(obj: T) =>
    assign(obj, {
      dark() {
        assign(theme, modifyDark(theme));

        return freeze(addBuildAndApplyToFn({}));
      }
    });

  const addCustomFn = <T>(obj: T) =>
    assign(obj, {
      custom: (...mappers: ((theme: Theme) => Partial<Theme>)[]) => {
        for (const mapper of mappers) {
          assign(theme, mapper(theme));
        }

        return freeze(addDarkFn(addBuildAndApplyToFn({})));
      }
    });

  const addVariantFn = <T>(obj: T) =>
    assign(obj, {
      variant: (variant: keyof typeof themeVariants) => {
        if (hasOwn(themeVariants, variant)) {
          assign(theme, themeVariants[variant]);
        }

        return freeze(addCustomFn(addDarkFn(addBuildAndApplyToFn({}))));
      }
    });

  const addSizeFn = <T>(obj: T) =>
    assign(obj, {
      size: (size: keyof typeof themeSizes) => {
        if (hasOwn(themeSizes, size)) {
          assign(theme, themeSizes[size]);
        }

        return freeze(
          addVariantFn(addCustomFn(addDarkFn(addBuildAndApplyToFn({}))))
        );
      }
    });

  const addColorsFn = <T>(obj: T) =>
    assign(obj, {
      colors: (colors: keyof typeof colorSetups | ColorSetup) => {
        if (typeof colors === 'string') {
          if (hasOwn(colorSetups, colors)) {
            assign(theme, modifyColors(theme, colorSetups[colors]));
          }
        } else {
          assign(theme, modifyColors(theme, colors));
        }

        return freeze(
          addSizeFn(
            addVariantFn(addCustomFn(addDarkFn(addBuildAndApplyToFn({}))))
          )
        );
      }
    });

  return freeze(
    addSizeFn(
      addColorsFn(
        addVariantFn(addCustomFn(addDarkFn(addBuildAndApplyToFn({}))))
      )
    )
  );
}

// === theme sizes ===================================================

const themeSizes = freeze({
  compact: freeze({
    'font-size-medium': '0.92rem',
    'font-size-x-large': '1.5rem',
    'input-height-small': '1.85rem',
    'input-height-medium': '1.95rem',
    'input-height-large': '2.5rem'
  })
}) satisfies NamedModifications;

// === theme variants ================================================

const themeVariants = freeze({
  modern: freeze({
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
  })
}) satisfies NamedModifications;

// === theme color setups ============================================

// Error colors
// #FFA6C9
// #F77703
// #FF6B53

const colorSetups = expandColorsRecord({
  default: 'p:#1c73e8,d:#f15f41',
  blue: 'p:#00b0ff,d:#f15f41',
  orange: 'p:#ff7606',
  teal: 'p:#008080',
  horizon: 'p:#71d9f2',
  bostonBlue: 'p:#45b1e8,d:#e34234',
  pacificBlue: 'p:#0e94bb,d:#ff5000',
  violet: 'p:#b882ed',
  cranberry: 'p:#dd5a8c',
  turquoiseBlue: 'p:#47e3eb',
  orchid: 'p:#bf68bd',
  bootstrap: 'p:#0d6efd,s:#198754,w:#ffc107,d:#dc3545',
  baseweb: 'p:#266ef1,d:#f25238',
  temp: 'p:#00586b',
  temp2: 'p:#ff746a',
  skyBlue: 'p:#0ea5e9,d:#e95420',
  aquamarine: 'p:#7FFFD4',
  coral: 'p:#ff7f50',
  pink: 'p:#d24899',
  turquoise: 'p:#40e0d0',
  tomato: 'p:#ff6347'

  /*
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
  */
});

function expandColorsRecord<K extends string>(
  colorsRecord: Record<K, string>
): Record<K, ColorSetup> {
  const ret = {} as Record<K, ColorSetup>;

  for (const key of Object.keys(colorsRecord)) {
    const setup: Writable<ColorSetup> = {};

    for (const token of colorsRecord[key as K].split(',')) {
      const [k, v] = token.split(':');
      const k2 = colorKeyMap[k as keyof typeof colorKeyMap];
      setup[k2 as keyof ColorSetup] = v;
    }

    ret[key as K] = freeze(setup);
  }

  return freeze(ret);
}

// === ThemeBuilder ==================================================

const ThemeBuilder = Object.freeze({
  from: (baseTheme: Theme) => createBuilder(baseTheme),
  availableSizes: freeze(themeSizes) as Record<string, Partial<Theme>>,
  availableVariants: freeze(themeVariants) as Record<string, Partial<Theme>>,
  availableColors: freeze(colorSetups) as Record<string, ColorSetup>
});
