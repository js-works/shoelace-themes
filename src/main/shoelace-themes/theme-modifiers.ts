import { colorShades, paletteColors, semanticColors } from './themes';
import { updateLuminance } from './color-utils';
import type { Theme } from './themes';

// === exports =======================================================

export { modifyColors, modifyDark };

// === local types ===================================================

export type ColorSetup = {
  readonly primaryColor?: string;
  readonly successColor?: string;
  readonly warningColor?: string;
  readonly dangerColor?: string;
  readonly neutralColor?: string;
};

// === constants =====================================================

const colorLuminances = [
  0.95, // 50
  0.84, // 100
  0.73, // 200
  0.62, // 300
  0.49, // 400
  0.35, // 500
  0.23, // 600
  0.15, // 700
  0.1, // 800
  0.05, // 900
  0.02 // 950
];

// === theme modifiers ===============================================

function modifyColors(theme: Theme, colorSetup: ColorSetup): Partial<Theme> {
  const ret: Partial<Theme> = {};
  const isDark = theme.dark === 'initial';

  for (const semanticColor of semanticColors) {
    const colorHex = (colorSetup as any)[`${semanticColor}Color`];

    if (colorHex) {
      Object.assign(ret, {
        ...calcColorShades(semanticColor, colorHex, isDark)
      });
    }
  }

  (ret as any)['input-focus-ring-color'] = theme['color-primary-500']!.replace(
    ')',
    ' / 40%)'
  );

  return ret;
}

function modifyDark(tokens: Theme): Partial<Theme> {
  if (tokens.dark === 'initial') {
    throw new Error(
      'Colors cannot be inverted to dark mode as base theme is already dark'
    );
  }

  const darkTokens: Record<string, string> = Object.assign(
    {},
    tokens as unknown as Record<string, string>
  );

  [...semanticColors, ...paletteColors].forEach((color) => {
    if ((tokens as any)[`color-${color}-500`].includes('var(')) {
      return;
    }

    for (let i = 0; i < 5; ++i) {
      const key1 = `color-${color}-${i === 0 ? 50 : i * 100}`;
      const key2 = `color-${color}-${i === 0 ? 950 : 1000 - i * 100}`;

      darkTokens[key1] = (tokens as any)[key2];
      darkTokens[key2] = (tokens as any)[key1];
    }
  });

  Object.assign(darkTokens, {
    light: ' ',
    dark: 'initial'
  } satisfies Partial<Theme>);

  Object.assign(darkTokens, {
    'color-neutral-0': 'rgb(30 30 33)',
    'color-neutral-50': 'rgb(36 36 39)',
    'color-neutral-100': 'rgb(40 40 43)',
    'color-neutral-200': 'rgb(43 43 46)',
    'color-neutral-300': 'rgb(67 67 74)',
    'color-neutral-400': 'rgb(86 86 95)',
    'color-neutral-500': 'rgb(118 118 127)',
    'color-neutral-600': 'rgb(166 166 175)',
    'color-neutral-700': 'rgb(217 217 221)',
    'color-neutral-800': 'rgb(233 233 236)',
    'color-neutral-900': 'rgb(249 249 250)',
    'color-neutral-950': 'rgb(252 252 253)',
    'color-neutral-1000': 'rgb(255 255 255)'
  } satisfies Partial<Theme>);

  Object.assign(darkTokens, {
    'shadow-x-small': '0 1px 2px rgb(0 0 0 / 18%)',
    'shadow-small': '0 1px 2px rgb(0 0 0 / 24%)',
    'shadow-medium': '0 2px 4px rgb(0 0 0 / 24%)',
    'shadow-large': '0 2px 8px rgb(0 0 0 / 24%)',
    'shadow-x-large': '0 4px 16px rgb(0 0 0 / 24%)',
    'overlay-background-color': 'hsl(0 0% 0% / 43%)',
    'panel-background-color': 'var(--sl-color-neutral-50)'
  } satisfies Partial<Theme>);

  return darkTokens;
}

// === local helpers =================================================

function calcColorShades(
  colorName: string,
  colorHex: string,
  dark = false
): Record<`color-${string}-${string}`, string> {
  const ret: any = {};

  colorLuminances.forEach((luminance, idx) => {
    if (dark) {
      idx = 1000 - idx;
    }

    ret[`color-${colorName}-${colorShades[idx]}`] = updateLuminance(
      colorHex,
      luminance
    );
  });

  return ret;
}
