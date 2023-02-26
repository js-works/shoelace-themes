// TODO - this is a total mess with a lot of legacy code - clean up asap

import path from 'path';
import color from 'color';
import { fileURLToPath } from 'url';
import fs from 'fs';
import prettier from 'prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(
  __dirname,
  '../node_modules/@shoelace-style/shoelace/dist/themes/light.css'
);

const outputFileMiniTheme = path.join(
  __dirname,
  '../src/main/shoelace-themes/generated/generated-mini-theme.ts'
);

const input = fs.readFileSync(inputFile, 'utf8');

const semanticColors = ['neutral', 'primary', 'success', 'warning', 'danger'];

const paletteColors = [
  ...new Set(
    input
      .match(/--sl-color-[a-z]+-\d+/g)
      .map((it) => it.substring(11).split('-')[0])
  )
]
  .filter((it) => !semanticColors.includes(it))
  .sort();

const colorShades = [
  ...new Set(
    input //
      .match(/--sl-color-primary-\d+/g)
      .map((it) => parseInt(it.substring(19), 10))
  )
].sort((a, b) => (a > b ? 1 : -1));

const utilityStyles =
  prettier
    .format(
      input
        .split(/^\s*}\s*$/m)
        .slice(1)
        .join('}\n')
        .trim(),
      {
        parser: 'css'
      }
    )
    .trim()
    .replaceAll(/^/gm, '  ') + '\n';

const themeTokens = input
  .match(/--sl-[a-z0-9-]+:[^;]+;/gm) //
  .map((it) => it.split(/:/))
  .map((it) => [
    it[0].substring(5).trim(),
    it[1]
      .substring(0, it[1].length - 1)
      .replaceAll(/\s+/gm, ' ')
      .trim()
  ]);

themeTokens.forEach(([key, value], idx) => {
  if (
    key.match(/^color-[a-z]+-\d+$/) &&
    value.match(/^var\(--sl[a-z0-9-]*\)$/)
  ) {
    const referredKey = value.substring(9, value.length - 1);

    themeTokens[idx][1] =
      themeTokens[themeTokens.findIndex((it) => it[0] === referredKey)][1];
  }
});

themeTokens.forEach(([key, value], idx) => {
  if (
    key.match(/^color-[a-z]+-\d+$/) && //
    value.match(/hsl\([^)]+\)/)
  ) {
    const newColorString = color(themeTokens[idx][1]).hex();

    themeTokens[idx][1] = `${newColorString}`;
  }
});

const output = `
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!! This file is auto-generated - do not modify it !!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  import {
    colorShades,
    paletteColors,
    semanticColors,
  } from './generated-theme-meta';

  import { updateLuminance } from '../color-utils';
  import type { Theme } from './generated-theme-meta';
    
  export const miniTheme: Theme = {
    'light': 'initial',
    'dark': ' ',
    ${themeTokens.map((it) => `'${it[0]}': '${it[1]}',`).join('\n')}
  } as Theme;
`;

const luminancesLight = colorShades.map(
  (shade) =>
    Math.round(
      color(
        themeTokens.find((it) => it[0] === `color-danger-${shade}`)[1]
      ).luminosity() * 100
    ) / 100
);

const outputMiniTheme =
  output.replaceAll(/'color-[a-z]+-\d+':/g, (line) => {
    return line.includes('500') || line.includes('color-neutral-')
      ? line
      : `// ${line}`;
  }) +
  `
    // Calculate and overwrite or add color values

    const luminancesLight = [${luminancesLight.join(',')}]; 

    [...semanticColors, ...paletteColors].forEach((color) => {
      if (color !== 'neutral') {
        const hex = miniTheme[\`color-\${color}-500\` as keyof Theme];

        colorShades.forEach((shade, shadeIdx) => {
          const newHex = updateLuminance(hex, luminancesLight[shadeIdx], 1e-2);

          (miniTheme as any)[\`color-\${color}-\${shade}\` as keyof Theme] = newHex;
        });
      }
    });
    
    Object.freeze(miniTheme);
  `;

fs.writeFileSync(outputFileMiniTheme, prettify(outputMiniTheme));

// helper functions

function prettify(sourceCode) {
  return prettier.format(sourceCode, {
    parser: 'typescript',
    singleQuote: true,
    quoteProps: 'consistent'
  });
}
