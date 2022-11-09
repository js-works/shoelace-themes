import path from 'path';
import color from 'color';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(
  __dirname,
  '../node_modules/@shoelace-style/shoelace/dist/themes/light.styles.js'
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

const utilityStyles = input
  .split(/^\s*}\s*$/m)
  .slice(1)
  .join('}\n');

const themeTokens = input
  .match(/--sl-[a-z0-9-]+:[^;]+;/gm) //
  .map((it) => it.split(/:/))
  .map((it) => [it[0].substring(5).trim(), it[1].trim()]);

themeTokens.forEach(([key, value], idx) => {
  if (
    key.match(/^color-[a-z]+-\d+$/) &&
    value.match(/var\(--sl[a-z0-9-]*\);/)
  ) {
    const referredKey = value.substring(9, value.length - 2);

    themeTokens[idx][1] =
      themeTokens[themeTokens.findIndex((it) => it[0] === referredKey)][1];
  }
});

themeTokens.forEach(([key, value], idx) => {
  if (
    key.match(/^color-[a-z]+-\d+$/) && //
    value.match(/hsl\([^)]+\);/)
  ) {
    const oldColorString = themeTokens[idx][1];

    const newColorString = color(
      oldColorString.substring(0, oldColorString.length - 1)
    ).hex();

    themeTokens[idx][1] = `${newColorString};`;
  }
});

console.log(themeTokens.filter((it) => it[0].match(/primary/)));

const template = `
  // === exports =======================================================

  export {
    colorShades,
    defaultTheme,
    paletteColors,
    semanticColors,
    utilityStyles
  };
`;

let result = template;

//console.log(result);
