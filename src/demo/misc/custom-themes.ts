import {
  defaultTheme,
  miniTheme,
  Theme,
  ThemeBuilder
} from '../../main/shoelace-themes';

export const customThemes: Record<string, { name: string; theme: Theme }> = {
  'sky-blue-light': {
    name: 'Sky Blue (light)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('skyBlue')
      .size('compact')
      .variant('modern')
      .build()
  },

  'sky-blue-dark': {
    name: 'Sky Blue (dark)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('skyBlue')
      .size('compact')
      .variant('modern')
      .dark()
      .build()
  },

  'pacific-blue-light': {
    name: 'Pacific Blue (light)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('pacificBlue')
      .size('compact')
      .variant('modern')
      .build()
  },

  'teal-light': {
    name: 'Teal (light)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('teal')
      .size('compact')
      .variant('modern')
      .build()
  },

  'teal-dark': {
    name: 'Teal (dark)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('teal')
      .size('compact')
      .variant('modern')
      .dark()
      .build()
  },

  'pacific-blue-dark': {
    name: 'Pacific Blue (dark)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('pacificBlue')
      .size('compact')
      .variant('modern')
      .dark()
      .build()
  },

  'pink-light': {
    name: 'Pink (light)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('pink')
      .size('compact')
      .variant('modern')
      .build()
  },

  'pink-dark': {
    name: 'Pink (dark)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('pink')
      .size('compact')
      .variant('modern')
      .dark()
      .build()
  },

  'violet-light': {
    name: 'Violet (light)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('violet')
      .size('compact')
      .variant('modern')
      .build()
  },

  'violet-dark': {
    name: 'Violet (dark)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('violet')
      .size('compact')
      .variant('modern')
      .dark()
      .build()
  },

  'custom-light': {
    name: 'Custom (light)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('blue')
      .size('compact')
      .variant('modern')
      .build()
  },

  'custom-dark': {
    name: 'Custom (dark)',
    theme: ThemeBuilder.from(defaultTheme)
      .colors('blue')
      .size('compact')
      .variant('modern')
      .dark()
      .build()
  },
  'mini-theme-light': {
    name: 'Mini theme (light)',
    theme: miniTheme
  },
  'mini-theme-dark': {
    name: 'Mini theme (dark)',
    theme: ThemeBuilder.from(miniTheme).dark().build()
  },
  'mini-theme-modern-light': {
    name: 'Mini theme custom (light)',
    theme: ThemeBuilder.from(miniTheme)
      .size('compact')
      .variant('modern')
      .build()
  },
  'mini-theme-modern-dark': {
    name: 'Mini theme custom (dark)',
    theme: ThemeBuilder.from(miniTheme)
      .size('compact')
      .variant('modern')
      .dark()
      .build()
  }
};
