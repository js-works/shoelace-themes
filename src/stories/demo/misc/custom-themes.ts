import {
  customizeTheme,
  ColorSchemes,
  Theme,
  ThemeModifiers
} from '../../../main/shoelace-themes';

export const customThemes: Record<string, { name: string; theme: Theme }> = {
  'sky-blue-light': {
    name: 'Sky Blue (light)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.skyBlue)
        .modern()
        .compact()
        .build()
    )
  },

  'sky-blue-dark': {
    name: 'Sky Blue (dark)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.skyBlue)
        .modern()
        .compact()
        .dark()
        .build()
    )
  },

  'pacific-blue-light': {
    name: 'Pacific Blue (light)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.pacificBlue)
        .modern()
        .compact()
        .build()
    )
  },

  'teal-light': {
    name: 'Teal (light)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.teal)
        .modern()
        .compact()
        .build()
    )
  },

  'teal-dark': {
    name: 'Teal (dark)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.teal)
        .modern()
        .compact()
        .dark()
        .build()
    )
  },

  'pacific-blue-dark': {
    name: 'Pacific Blue (dark)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.pacificBlue)
        .modern()
        .compact()
        .dark()
        .build()
    )
  },

  'pink-light': {
    name: 'Pink (light)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.pink)
        .modern()
        .compact()
        .build()
    )
  },

  'pink-dark': {
    name: 'Pink (dark)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.pink)
        .modern()
        .compact()
        .dark()
        .build()
    )
  },

  'violet-light': {
    name: 'Violet (light)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.violet)
        .modern()
        .compact()
        .build()
    )
  },

  'violet-dark': {
    name: 'Violet (dark)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.pink)
        .modern()
        .compact()
        .dark()
        .build()
    )
  },

  'custom-light': {
    name: 'Custom (light)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.blue)
        .modern()
        .compact()
        .build()
    )
  },

  'custom-dark': {
    name: 'Custom (dark)',
    theme: customizeTheme(
      ThemeModifiers.builder()
        .colors(ColorSchemes.blue)
        .modern()
        .compact()
        .dark()
        .build()
    )
  }
};
