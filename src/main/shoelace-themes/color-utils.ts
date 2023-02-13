// === exports =======================================================

export { getLuminance, updateLuminance };

// === exported functions ============================================

function getLuminance(hex: string) {
  return luminanceOfRgb(...hexToRgb(hex));
}

function updateLuminance(hex: string, lum: number, epsilon = 1e-7): string {
  let [r, g, b] = hexToRgb(hex);
  let iter = 0;
  let l = luminanceOfRgb(r, g, b);
  let rmin = 0;
  let gmin = 0;
  let bmin = 0;
  let rmax = 255;
  let gmax = 255;
  let bmax = 255;

  while (++iter <= 20 && Math.abs(l - lum) > epsilon) {
    if (l < lum) {
      rmin = r;
      gmin = g;
      bmin = b;
    } else {
      rmax = r;
      gmax = g;
      bmax = b;
    }

    r = (rmin + rmax) / 2;
    g = (gmin + gmax) / 2;
    b = (bmin + bmax) / 2;
    l = luminanceOfRgb(r, g, b);
  }

  return rgbToHex(Math.round(r), Math.round(g), Math.round(b));
}

// === local functions ===============================================

function rgbToHex(r: number, g: number, b: number) {
  const f = (it: number) => it.toString(16).padStart(2, '0');

  return `#${f(r)}${f(g)}${f(b)}`;
}

function hexToRgb(hex: string): [number, number, number] {
  const value = parseInt(hex.substring(1), 16);

  /*
  if (isNaN(value) || hex[0] !== '#' || hex.length !== 7) {
    throw new Error(`Illegal color '${hex}'. Required hex format: #rrggbb`);
  }
  */

  return [
    (value >> 16) % 256, // red
    (value >> 8) % 256, // green
    value % 256 // blue
  ];
}

function luminanceOfRgb(r: number, g: number, b: number): number {
  // relative luminance
  // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
  const lr = luminanceOfValue(r);
  const lg = luminanceOfValue(g);
  const lb = luminanceOfValue(b);

  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
}

function luminanceOfValue(x: number): number {
  const v = x / 255;

  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}
