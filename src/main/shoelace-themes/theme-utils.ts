import { utilityStyles } from './themes';
import type { Theme } from './themes';

// === exports =======================================================

export { convertThemeToCss, customizeTheme, loadTheme };

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

function loadTheme(theme: Theme, selector: string): () => void;
function loadTheme(theme: Theme): (selector: string) => () => void;
function loadTheme(selector: string): (theme: Theme) => () => void;

function loadTheme(
  arg1: unknown,
  arg2?: unknown
): (() => void) | ((arg: any) => () => void) {
  if (arg2 === undefined) {
    return (arg: Theme | string) =>
      typeof arg1 === 'string'
        ? loadTheme(arg as Theme, arg1)
        : loadTheme(arg1 as Theme, arg as string);
  }

  const theme = arg1 as Theme;
  const selector = arg2 as string;
  const elem = document.createElement('style');
  elem.append(document.createTextNode(convertThemeToCss(theme, selector)));
  document.head.append(elem);
  return () => elem.remove();
}
