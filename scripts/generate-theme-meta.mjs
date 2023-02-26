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

  type Theme = Readonly<{
    'light': 'initial',
    'dark': ' ',
    ${themeTokens.map((it) => `'${it[0]}': string;`).join('\n')}
  }>;
`;

fs.writeFileSync(outputFile, prettify(output));

// === MiniTheme ======================================================

const outputFileMiniTheme = path.join(
  __dirname,
  '../src/main/shoelace-themes/generated/generated-mini-theme.ts'
);

const luminancesLight = colorShades.map(
  (shade) =>
    Math.round(
      color(
        themeTokens.find((it) => it[0] === `color-danger-${shade}`)[1]
      ).luminosity() * 100
    ) / 100
);

const outputMiniTheme =
  "import { updateLuminance } from '../color-utils';\n" +
  output
    .replaceAll('defaultTheme', 'miniTheme')
    .replace('const miniTheme =', 'const miniTheme: Theme = <Theme> ')
    .replaceAll(/'color-[a-z]+-\d+':/g, (line) => {
      return line.includes('500') || line.includes('color-neutral-')
        ? line
        : `// ${line}`;
    })
    .replace(/\/\/ === types ===[^/]+\/\/ === main ===/m, '// === main ===')
    .replace(
      'Object.freeze(miniTheme);',
      `
    // Calculate and overwrite or add color values

    const luminancesLight = [${luminancesLight.join(',')}]; 

    [...semanticColors, ...paletteColors].forEach((color) => {
      if (color !== 'neutral') {
        const hex = miniTheme[\`color-\${color}-500\` as keyof Theme];

        colorShades.forEach((shade, shadeIdx) => {
          const newHex = updateLuminance(hex, luminancesLight[shadeIdx], 1e-2);

          miniTheme[\`color-\${color}-\${shade}\` as keyof Theme] = newHex;
        });
      }
    });
    
    Object.freeze(miniTheme);

    // === types =========================================================

    type Theme = {
      'light': string,
      'dark': string,
      ${themeTokens.map((token) => `'${token[0]}': string;`).join('\n    ')}
    };
  `
    );

fs.writeFileSync(outputFileMiniTheme, prettify(outputMiniTheme));

/* LCH support doesn't work properly :-(

// === LCH ===========================================================

const outputFileLch = path.join(
  __dirname,
  '../src/main/shoelace-themes/generated/default-theme-lch.ts'
);

const outputLch = output
  .replaceAll(/'(#[0-9A-F]{6})',/g, (_, hex) => {
    const lch = chroma(hex).lch();

    const l = Math.round(lch[0]);
    const c = Math.round(lch[1]);
    const h = Math.round(lch[2]);

    return `'lch(${l} ${c} ${h})', // ${hex}`.replace('NaN', 0);
  })
  .replace('const defaultTheme =', 'const defaultTheme: Theme = <Theme> ')
  .replaceAll(/'color-[a-z]+-\d+':/g, (line) => {
    return line.includes('500') ||
      line.includes('color-neutral-0') ||
      line.includes('color-neutral-1000')
      ? line
      : `// ${line}`;
  })
  .replace(/\/\/ === types ===[^/]+\/\/ === main ===/m, '// === main ===')
  .replace(
    'Object.freeze(defaultTheme);',
    `
    // Calculate and overwrite or add color values

    const lightnessValuesLight = [
      97, // 50
      95, // 100
      89, // 200
      81, // 300
      72, // 400
      64, // 500
      53, // 600
      42, // 700
      36, // 800
      30, // 900
      19 // 950
    ];

    [...semanticColors, ...paletteColors].forEach((color) => {
      const lch = defaultTheme[\`color-\${color}-500\` as keyof Theme]
        .slice(4, -1).split(' ');

      colorShades.forEach((shade, shadeIdx) => {
        lch[0] = String(lightnessValuesLight[shadeIdx]);
        defaultTheme[\`color-\${color}-\${shade}\` as keyof Theme] =
          \`lch(\${lch.join(' ')})\`;
      });
    });
    
    Object.freeze(defaultTheme);

    // === types =========================================================

    type Theme = {
      'light': string,
      'dark': string,
      ${themeTokens.map((token) => `'${token[0]}': string;`).join('\n    ')}
    };
  `
  );

fs.writeFileSync(outputFileLch, prettify(outputLch));

*/

// helper functions

function prettify(sourceCode) {
  return prettier.format(sourceCode, {
    parser: 'typescript',
    singleQuote: true,
    quoteProps: 'consistent'
  });
}
