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

const outputFile = path.join(
  __dirname,
  '../src/main/shoelace-themes/generated/generated-theme-meta.ts'
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

const output = `
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!! This file is auto-generated - do not modify it !!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // === exports =====================================================

  export {
    colorShades,
    paletteColors,
    semanticColors,
    utilityStyles
  };

  export type { Theme };

  // === meta data ===================================================

  const semanticColors = Object.freeze(['${semanticColors.join("', '")}']);
  
  const paletteColors = Object.freeze(['${paletteColors.join("', '")}']);

  const colorShades = Object.freeze([${colorShades.join(',')}]);

  const utilityStyles = \`\n${utilityStyles}\`;

  // === types =======================================================

  interface Theme {
    readonly 'light': 'initial' | ' ',
    readonly 'dark': ' ' | 'initial',
    ${themeTokens.map((it) => `readonly '${it[0]}': string;`).join('\n')}
  };
`;

fs.writeFileSync(outputFile, prettify(output));

// helper functions

function prettify(sourceCode) {
  return prettier.format(sourceCode, {
    parser: 'typescript',
    singleQuote: true,
    quoteProps: 'consistent'
  });
}
