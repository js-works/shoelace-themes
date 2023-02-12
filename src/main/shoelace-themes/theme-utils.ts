import { utilityStyles } from './generated/default-theme';
import { defaultTheme } from './generated/default-theme';
import type { Theme } from './generated/default-theme';

// === exports =======================================================

export { convertThemeToCss, customizeDefaultTheme, customizeTheme, loadTheme };

// === local types ===================================================

type ThemeModifier = (theme: Theme) => Partial<Theme>;

// === exported functions ============================================

function customizeTheme(
  theme: Theme,
  ...modifiers: (ThemeModifier | ThemeModifier[])[] //
): Theme {
  const tokens = { ...theme };
  modifiers.flat(1).forEach((mod) => Object.assign(tokens, mod(tokens)));
  return Object.freeze(tokens);
}

function customizeDefaultTheme(
  ...modifiers: (ThemeModifier | ThemeModifier[])[] //
): Theme {
  return customizeTheme(defaultTheme, ...modifiers);
}

function convertThemeToCss(theme: Theme, selector: string) {
  const lines: string[] = [
    `${selector} {`,
    `  color-scheme: ${theme.light === 'initial' ? 'light' : 'dark'};`
  ];

  Object.entries(theme).forEach(([key, value]) => {
    lines.push(`  --sl-${key}: ${value};`);
  });

  lines.push(`}\n\n\n${utilityStyles}`);
  return lines.join('\n');
}

function loadTheme(theme: Theme, selector: string): () => void {
  const elem = document.createElement('style');
  elem.append(document.createTextNode(convertThemeToCss(theme, selector)));
  document.head.append(elem);
  return () => elem.remove();
}
